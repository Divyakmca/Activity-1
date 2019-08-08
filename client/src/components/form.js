import React from 'react'
import axios from 'axios'



class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            subject:'',
            description: '',
            status:''
        }

    }
    
    //event handler
    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))

    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            subject: this.state.subject,
            description: this.state.description,
            status: this.state.status
        }
        console.log(formData)
        this.setState(() => ({
            formData: formData
        }))
        axios.post('http://localhost:3002/notes', formData)
         .then(response => {
             if(response.data.hasOwnProperty('errors')){
                 console.log(response.data.errors)
             }else{
                
                this.props.handleNotesSubmission(response.data)
                this.resetData()
             }
         })
         
    }

    resetData = () => {
        this.setState(() => ({
           subject:'',
           description :'',
           status :''
        }))
    }

    handleStatusChange =  (e) => {
        const status = e.target.value
        this.setState(() => ({status}))

    }

 

    render(){
        return(
            <div>
                <form className="card" onSubmit={this.handleSubmit}>
                    <label>
                        subject:
                        <input type="text" value={this.state.subject} name="subject" onChange={this.handleChange}/>
                    </label><br/>

                    <label>
                        description:
                        <input type="text" value={this.state.description} name="description" onChange={this.handleChange}/>
                    </label><br/>

                    <label>
                            status
                            <select value={this.state.status} onChange={this.handleStatusChange}>
                            <option value="">select</option>
                            <option value="To-Do">To-Do</option>
                            <option value="Progress">Progress</option>
                            <option value="Completed">Completed</option>
                            </select>
                           

                        </label><br/>

                    <input type="submit"  />

                </form><br/>
            

            </div>
        )
    }
}

export default Form