const express = require('express');
const app = express();
const users = require("./MOCK_DATA.json");
const port = 3000;

app.get('/', (req, res) => {
    return res.end("Homepage");
})

//Sending HTML document
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map((user)=> `<li>${user.first_name}</li>`.join(""))}
    </ul>
    `
    res.send(html);
})

//Sending Json document
app.get('/api/users', (req, res) => {
    return res.json(users);
})


app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    users.map((user)=> user.id === id ? res.json(user) : res.send("User does not exists"))
})





app.listen(port, (req, res) => {
    console.log(`server listening on port ${port}`);    
});