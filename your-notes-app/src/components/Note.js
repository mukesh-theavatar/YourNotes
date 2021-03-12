import React, {Component} from 'react';
class Note extends Component {
    render() {
        return (
            <div className="note">
                <h2 className="note_title">{this.props.note.title}</h2>
                <p className="note_message">{this.props.note.message}</p>

                <div className="control-buttons">
                    <button className="edit" onCLick={() => this.props.dispatch({
                        type:'EDIT_NOTE', 
                        id:this.props.note.id})}>Edit
                    </button>
                    <button className="delete" 
                        onClick={() => this.props.dispatch({
                                type: 'DELETE_NOTE', 
                                id: this.props.note.id})
                                }
                    >Delete</button>
                </div>
            </div>
        )
    }
}
export default Note;
