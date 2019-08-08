import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'

import Form from './components/form'
import Show from './components/show'
import Show1 from './components/show1'
import Show2 from './components/show2'
import Show3 from './components/show3'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            notes:[]
            
        }
    }


    componentDidMount(){
        axios.get('http://localhost:3002/notes')
           .then(response => {
               this.setState(() => ({
                   notes:response.data
            
               }))
           })

    }

    handleNotesSubmission = (note) => {
        this.setState((prevState) => ({
            notes: prevState.notes.concat(note)
        
        }))

    }

    handleDelete = (note) => {
        
        const confirmRemove=window.confirm('are you sure?')
        if(confirmRemove){
            axios.delete(`http://localhost:3002/notes/${note._id}`)
            .then(()=>{
                this.setState((prevState)=>({
                    notes:prevState.notes.filter(noteItem=>{
                        return noteItem._id!==note._id
                    })
                })) 
            })

           
                
           
        }
    }

    handleEdit = (note) => {
        axios.put(`http://localhost:3002/notes/${note._id}`,note)
        .then((response)=>{ 
        if(response.data.hasOwnProperty('error')){
            console.log(response.data.errors)
        }else{
            this.setState(() => ({
                notes: this.state.notes.map((noteItem, noteIndex)=>{
                  if(noteItem === noteIndex){
                      return{
                          ...noteItem
                      }
                      
                  }
                  return noteItem
                })
            }))
        }})

    }


    render(){
        return(
           
            <div className="container">
                <h1>welcome</h1>
               
                <div className="row">

                <div className="col-md-3"> <h4>ALL</h4>
                <Form handleNotesSubmission={this.handleNotesSubmission}/>
                <Show  handleDelete={this.handleDelete} notes={this.state.notes}/>
                </div>


                
                <div id="draggable-x" className="col-md-3" > <h4>To-do</h4>
                <Show1 handleEdit={this.handleEdit} handleDelete={this.handleDelete} notes={this.state.notes}/>
                </div>

                <div className="col-md-3" > <h4>Progress</h4>
                <Show2 handleDelete={this.handleDelete} notes={this.state.notes}/>
                </div>

                <div className="col-md-3" > <h4>Completed</h4>
                <Show3 handleDelete={this.handleDelete} notes={this.state.notes}/>
                </div>
            
           
            </div>
            </div>
           
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'));


