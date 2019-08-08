const express=require('express')
const router=express.Router()
const Note= require('../models/notesModel')

router.get('/',(req,res)=>{
    Note.find()
    .then((notes)=>{
        res.json(notes)
    })
    .catch((err)=>{
        res.json(err)
    })
})

router.post('/',(req,res)=>{
    const body=req.body
    const note=new Note(body)
    note.save()
    .then((note)=>{
        res.json(note)
    })
    .catch((err)=>{
        res.json(err)
    })
})

router.get('/:id',(req,res) =>{
    const id = req.params.id
    Note.findOne({
        _id:id
        
    })
    .then(note => {
        res.json(note)
    })
    .catch(err => {
        res.json(err)
    })
})

    
router.put('/:id',(req,res)=>{
    const id=req.params.id
    const body=req.body
    Note.findByIdAndUpdate(id, body,{new:true})
    .then((note)=>{
        res.json(note)
    })
    .catch((err)=>{
        res.json(err)
    })
})

router.delete('/:id',(req,res)=>{
    const id=req.params.id
    Note.findByIdAndDelete(id)
    .then((note)=>{
        res.json(note)
    })
    .catch((err)=>{
        res.json(err)
    })
})
module.exports= router

