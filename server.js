const express = require('express')
// import express from 'express'
const app = express();
const port = 8080;


// khai bao route
app.get('/abc', (req, res) => {
  res.send('Hello World!')
})

app.get('/xinchao', (req, res) =>{
  res.send('Xin chao cac ban')
})

app.get('/text', (req, res) =>{
  res.send("<h1>Day la the h1</h1><h2>Day la the h2</h2>")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
