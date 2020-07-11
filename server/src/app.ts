import express from "express"
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from "jsonwebtoken"
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(cors());


const colors = ["red", "green", "blue", "cyan", "magento", "yellow"]
const secret = "secret key"
const validUser = {
    username: "admin",
    password: "1234",
    role: "admin"
}


function verify(token: string) {
    return jwt.verify(token, secret, (err: any, decoded: any) => {
        if (err) {
            return err.message;
        } else {
            return decoded;
        }
    });
}

function checkHeaders(req, res, next) {
    let token = req.headers['x-access-token'];
    const user = verify(token)

    console.log(user)
    if (typeof user === 'string') {
        // это ошибка, значится
        return res.status(403).send({
            error: user,
        });
    } else {
        req.user = user;
        next();
    }
}

app.get('/', function (req, res) {
    res.send('Hello World!');
});

const jwtLife = 60 //*30 // полчаса
const rtLife = 60*60*24 // сутки


const getAbsoluteDates = () => {
    const jwtExpiresAt = new Date()
    const rtExpiresAt = new Date()

    jwtExpiresAt.setSeconds(jwtExpiresAt.getSeconds() + jwtLife)
    rtExpiresAt.setSeconds(rtExpiresAt.getSeconds() + rtLife)
    console.log(rtExpiresAt)
    console.log(jwtExpiresAt)
    return [jwtExpiresAt, rtExpiresAt]
}

app.post('/signIn',  urlencodedParser,  function (req, res) {
    const [jwtExpiresAt, rtExpiresAt] = getAbsoluteDates()

    const username = req.body.username;
    const password = req.body.password;

    if (username === validUser.username && password === validUser.password) {
        const jwtToken = jwt.sign({ data: validUser }, secret, {
            expiresIn: jwtLife,
        });

        const rtToken = jwt.sign({}, secret, {expiresIn: rtLife})
        res.send({accessToken: jwtToken, refreshToken: rtToken, expiresIn: jwtExpiresAt, role: validUser.role})
    }
    else {
        res.send({error: "Нет токена"})
    }
});


app.post('/longToken', urlencodedParser,/* checkHeaders,*/ (req, res, next) => {
    const [jwtExpiresAt, rtExpiresAt] = getAbsoluteDates()

    const jwtToken = jwt.sign({ data: validUser }, secret, {
        expiresIn: jwtLife,
    });

    const rtToken = jwt.sign({}, secret, {expiresIn: rtLife})

    res.send({accessToken: jwtToken, refreshToken: rtToken, expiresIn: jwtExpiresAt, role: validUser.role})
})

app.post('/logout',  urlencodedParser,  checkHeaders,  function (req, res) {
    res.send("Success logout") // тут по-хорошему надо удалить токен, но нет
});

app.post('/getColor',  urlencodedParser,  checkHeaders,  function (req, res) {
    console.log(req.body)
    const id = req.body.id
    if (id >= colors.length) {
        res.status(404).send("Error")
    }
    else {
        res.send(colors[id]);
    }
});

app.get('/getColors', checkHeaders,  function (req, res) {
    res.send(colors);
});

const port = 7080

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
