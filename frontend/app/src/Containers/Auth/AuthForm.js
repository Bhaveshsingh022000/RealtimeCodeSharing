import React, { Component } from 'react';

import Login from '../../Components/Landing/AuthForm/Login';
import Signup from '../../Components/Landing/AuthForm/Signup';
import classes from './AuthForm.module.css';

class Auth extends Component {
    state={
        showLogin: true
    }

    formShowHandler = ()=>{
        this.setState((state,props)=>({
            showLogin: !state.showLogin
        }))
    }

    render() {
        let form = <Login />
        if(!this.state.showLogin){
            form = <Signup />
        }
        return (
            <div className={classes.FormContainer}>
                {form}
                <p>or</p>
                {this.state.showLogin ? <button onClick={this.formShowHandler}>Signup</button> : <button onClick={this.formShowHandler}>Login</button>}
            </div>
        );
    }
}

export default Auth;