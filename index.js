const express = require('express')
const cors=require('cors')
const {mongoose} = require('./config/database')
const notesRouter = require('./app/controllers/notesController')


const app=express()
const port=3002

app.use(express.json()) 
app.use(cors())

app.use('/notes', notesRouter)


app.listen(port, function(){
    console.log('listening to port', port)
})