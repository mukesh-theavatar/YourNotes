import React, {Component} from 'react';
import {connect} from 'react-redux';

class NewNote extends Component{
    handleSubmit = (e) =>{
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessgae.value;

        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        };
        this.props.dispatch({
            type: 'ADD_NOTE',
            data
        });
        this.getTitle.value = '';
        this.getMessgae.value ='';
    };
    
    render(){
        return(
            <div className = "note-container">
            <h1 className ="note_heading">Create Your Notes</h1>
            <form className ="form" onSubmit ={this.handleSubmit}>
            <input required type = "text" ref={(input) =>this.getTitle = input}
                            placeholder = "Type Note Title"/>
            <br/><br/>
            <textarea required rows ="5" ref={(input) => this.getMessgae = input} cols="28"
                            placeholder = "Type Your Note Description"/>
            <br/><br/>
            <button>Submit</button>              
            </form>
            </div>
        );
    }
}
export default connect()(NewNote);