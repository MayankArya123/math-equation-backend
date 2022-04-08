
const express = require('express')
const cors = require('cors')
const mongoose  = require('mongoose')


const {PORT,MONGO_URI} = require('./Config/keys')

console.log('kkk',MONGO_URI)

const app = express()


mongoose.connect(MONGO_URI).then((succs)=>console.log('mongodb connection connected')).catch((err)=>console.log('error',err))




app.use(cors())
app.use(express.json())





app.use('',require('./Routes/home'))






app.listen(PORT,()=>console.log(`server listening at port  ${PORT}`))