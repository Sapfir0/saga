import express from "express"
import bodyParser from 'body-parser';
import cors from 'cors';

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
