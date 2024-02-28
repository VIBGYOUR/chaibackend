require('dotenv').config()


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')
})

app.get('/login',(req,res)=>{
    res.send('idhar aa teri btech karata hu')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>chai aur code</h2>")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})