const express = require('express');
const app = express();
const port = 8000;


app.get('/', (req, res) => {
    return res.send('Homepage');
})

app.get('/about', (req, res) => {
    return res.send(`Hello ${req.query.name}`);
})

app.listen(port, (err, res) => {
    console.log(`server connnected on port ${port}`);
});
