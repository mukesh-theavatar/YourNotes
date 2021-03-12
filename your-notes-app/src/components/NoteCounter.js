import React, {Component} from 'react';
import {connect} from 'react-redux';
class NoteCounter extends Component {
    render() {
        return (
            <p className="note_message">Number of notes: {this.props.numberOfNotes}</p>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        numberOfNotes: state.length
    }
};
//To give NoteCounter access the state from the store object
export default connect(mapStateToProps)(NoteCounter);