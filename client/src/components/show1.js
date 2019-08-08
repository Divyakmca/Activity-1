import React from 'react'
import Moment from 'react-moment'


class Show1 extends React.Component{
   

    
 
    
        
    render(){
        return(
                <div>
                    {this.props.notes.map(note => {
                        if(note.status == "To-Do"){
                           return <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">{note.subject}</h6>
                              <h6 className="card-title">{note.description}</h6>
                              <h6 className="card-title">{note.status}</h6>
                              <h6 className="card-title">Date: <Moment>{note.createdAt}</Moment></h6>
                              <button className="btn btn-primary float-right btn-sm col-xs-2 mr-1 " onClick={()=>{this.props.handleEdit(note)}}>Edit</button>
                              <button className="btn btn-primary float-right btn-sm col-xs-2 mr-1 " onClick={()=>{this.props.handleDelete(note)}}>Delete</button>
                            </div>
                        </div>
                    }}
                 )} 
                </div>
            )
    }
}

export default Show1