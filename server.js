require('dotenv').config()
const express = require('express')
const app = express()
const Main = require('./src/main')

const PORT = process.env.PORT || 4000

app.get('/', (req,res)=>{
    res.redirect('https://github.com/piyushsuthar')
})

app.get(`/${process.env.SECRET_PATH}`, async (req,res) => {
    await Main()
    res.send('Image Posted')
})

app.listen(PORT, ()=> console.log("Server Started"))