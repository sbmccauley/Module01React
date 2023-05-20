import express from 'express'

// const path = require('path')

// const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')) //get the route and have it load 'index.html' from the public folder
})
// app.get('/', (req, res) => {
//     res.send("hello world")
// })

app.listen(5000,() => {
    console.log('listening to port 5000')
})