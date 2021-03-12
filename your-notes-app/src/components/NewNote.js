import React, {Component} from 'react';
import {connect} from 'react-redux';
class NewNote extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
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
        this.getMessage.value = '';
    };
    render() {
        return (
            <div className="note-container">
                <h1 className="note_heading">YOUR NOTES</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                           placeholder="TITLE"/>
                    <br/><br/>
                    <textarea required rows="5" ref={(input) => this.getMessage = input} cols="28"
                              placeholder="DESCRIPTION"/>
                    <br/><br/>
                    <button>SUBMIT</button>
                </form>
            </div>
        );
    }
}
export default connect()(NewNote);