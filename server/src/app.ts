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


app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/getColors', function (req, res) {
    res.send(colors);
});


const validUsername = "admin"
const validPassword = "1234"
const secret = "secret key"

app.post('/signIn',  urlencodedParser,  function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const user = {
        username,
        password,
        'role': 'admin'
    };
    const token = jwt.sign(user, secret, {expiresIn: 300});
    res.send({jwt: token, refreshToken: refreshToken})
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
