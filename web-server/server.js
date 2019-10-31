const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.status(200).send('Hello Express');
});

app.post('/hello', (req, res) => {
    let  body  = req.body;
    body.message = 'Hello ' + body.name;

    res.status(200).json(body);
});


app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});