import React, {Component} from 'react';
class NewNote extends Component{
    render(){
        return(
            <div className = "note-container">
            <h1 className ="note_heading">Create Your Notes</h1>
            <form className ="form">
            <input required type = "text"
                            placeholder = "Type Note Title"/>
            <br/><br/>
            <textarea required rows ="5" cols="28"
                            placeholder = "Type Your Note Description"/>
            <br/><br/>
            <button>Submit</button>              
            </form>
            </div>
        );
    }
}
export default NewNote;