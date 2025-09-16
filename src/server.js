const express = require('express')
// import express from 'express'
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;
const path = require('path')
const hostname = process.env.HOST_NAME

// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


console.log(process.env)
// khai bao route
app.get('/abc', (req, res) => {
  res.send('Hello World!')
})

app.get('/xinchao', (req, res) =>{
  res.send('Xin chao cac ban')
})

app.get('/text', (req, res) =>{
  res.render('sample.ejs')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
