import express from "express"
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from "jwt"
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

app.get('/getColors', function (req, res) {
    res.send(colors);
});


const jwtExpiresIn = 60*30 // полчаса
const rtExpiresIn = 60*60*24 // сутки


app.post('/signIn',  urlencodedParser,  function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (username === validUser.username && password === validUser.password) {
        const jwtToken = jwt.sign({ data: validUser }, secret, {
            expiresIn: jwtExpiresIn,
        });

        const rtToken = jwt.sign({})

        res.send({accessToken: jwtToken, refreshToken: rtToken})
    }


});

app.post('/token', function (req, res, next) {
    const username = req.body.username
    const refreshToken = req.body.refreshToken
    if((refreshToken in refreshTokens) && (refreshTokens[refreshToken] == username)) {
        var user = {
            'username': username,
            'role': 'admin'
        }
        var token = jwt.sign(user, SECRET, { expiresIn: 300 })
        res.json({token: 'JWT ' + token})
    }
    else {
        res.send(401)
    }
})

app.post('/register',  urlencodedParser,  function (req, res) {

});

app.post('/getColor',  urlencodedParser,  function (req, res) {
    console.log(req.body)
    const id = req.body.id
    if (id >= colors.length) {
        res.status(404).send("Error")
    }
    else {
        res.send(colors[id]);
    }
});

const port = 7080

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
