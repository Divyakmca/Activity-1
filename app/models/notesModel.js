const mongoose=require('mongoose')


const Schema=mongoose.Schema

const NotesSchema=new Schema({
    
    subject:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    status:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})


const Note=mongoose.model('Note',NotesSchema)

module.exports=Note 