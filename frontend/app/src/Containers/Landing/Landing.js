import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/SyncEditor';

class Landing extends Component {
    state = {
        formData: null
    }
    componentDidMount() {
        console.log(this.props.history);
    }
    changeHandler = (event) => {
        this.setState({ formData: event.target.value });
    }
    formHandler = (event) => {
        event.preventDefault();
        this.props.onJoinRoom(this.state.formData);
    }
    clickHandel = (event) => {
        this.props.history.push('/editor');
    }
    render() {
        return (
            <div>
                <h1>Landing Page {this.props.roomName}</h1>
                <form onSubmit={this.formHandler}>
                    <input type="text" onChange={(event) => this.changeHandler(event)} name="roomName" />
                    <button type="submit">Join</button>
                </form>
                <button onClick={this.clickHandel}>Share</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        roomName: state.editor.roomName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onJoinRoom: (name) => dispatch(actions.getRoomName(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);