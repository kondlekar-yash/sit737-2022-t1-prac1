var express = require('express')
var app = express()
// respond with "hello world" when a GET request is made to the homepage

console.log("Server started!");

app.get('/Hello', function (req, res) {
    console.log("Hello route requested!");
    res.send('hello world')
})

app.get('/Welcome', function (req, res) {
    console.log("Welcome route requested!");
    res.send('Welcome to SIT737!')
})

// list to a particular port
app.listen(3000)