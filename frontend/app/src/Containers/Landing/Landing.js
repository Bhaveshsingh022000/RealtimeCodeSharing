import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import CoverImage from '../../Components/Landing/CoverImage';
import AuthForm from '../Auth/AuthForm';
import classes from './Landing.module.css';

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
        this.props.history.push('/editor');
    }
    clickHandel = () => {
        if (this.props.roomName === null) {
            const roomName = Math.round((Math.pow(36, 6 + 1) - Math.random() * Math.pow(36, 6))).toString(36).slice(1);
            this.props.onJoinRoom(roomName);
        }
        this.props.history.push('/editor');
    }

    render() {
        let form = <AuthForm />
        if (this.props.isAuth) {
            form = (
                <React.Fragment>
                    <form onSubmit={this.formHandler}>
                        <input type="text" onChange={(event) => this.changeHandler(event)} name="roomName" />
                        <button type="submit">Join</button>
                    </form>
                    <button onClick={this.clickHandel}>Share</button>
                </React.Fragment>
            );
        }
        return (
            <div className={classes.MainContainer}>
                <h1>CODE EDITOR</h1>
                <CoverImage />
                
                <div className={classes.LandingContainer}>
                {form}
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        roomName: state.editor.roomName,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onJoinRoom: (name) => dispatch(actions.getRoomName(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);