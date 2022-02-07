const dotenv = require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./src/router')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/api', router)

app.listen(process.env.PORT, () => {
    console.log(`server run in http://localhost:${process.env.PORT}`)
})