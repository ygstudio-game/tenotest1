
const express = require('express')
const app = express()
const port = process.env.PORT || 80
const path = require('path')

 
 app.get('/', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/index.html') )
  })
console.log(45)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  