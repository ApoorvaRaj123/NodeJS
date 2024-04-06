const express = require('express');
const mongoose = require('mongoose');
const users = require("./MOCK_DATA.json");
const { type } = require('express/lib/response');




const app = express();
const port = 3000;

//connection
mongoose.connect("mongodb.//127.0.0.1:27017/app-1")
.then(() => console.log("connected"))
.catch(err => console.log("Mongo error: " + err))
//Schema
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    jobTitle:{
        type:String,
    },
    gender:{
        type:String,
    }
});



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