import React, { Component } from 'react';

import Login from '../../Components/Landing/AuthForm/Login';
import InputElement from '../../Components/UI/Input/Input';
import classes from './AuthForm.module.css';

class Auth extends Component {
    state = {
        showLogin: false,
        signupForm: {
            name: {
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            email: {
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            confpassword: {
                elementConfig: {
                    type: 'password',
                    placeholder: 'Confirm Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
        },
        loginForm: {
            email: {
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
        }

    }

    formShowHandler = () => {
        this.setState((state, props) => ({
            showLogin: !state.showLogin
        }))
    }

    render() {

        let form;
        if (!this.state.showLogin) {
            const formElementArray = [];
            for (let key in this.state.signupForm) {
                formElementArray.push({
                    id: key,
                    config: this.state.signupForm[key]
                });
            }
            form = formElementArray.map(el => (
                <InputElement
                    key={el.id}
                    elementConfig={el.config.elementConfig}
                    name={el.id}
                />
            ))
        }
        else {
            const formElementArray = [];
            for (let key in this.state.loginForm) {
                formElementArray.push({
                    id: key,
                    config: this.state.loginForm[key]
                });
            }
            form = formElementArray.map(el => (
                <InputElement
                    key={el.id}
                    elementConfig={el.config.elementConfig}
                    name={el.id}
                />
            ))
        }
        return (
            <div className={classes.FormContainer}>
                <form>
                    <h1>{this.state.showLogin ? 'Login' : 'Signup'}</h1>
                    {form}
                    <button type="submit">{this.state.showLogin ? 'Login' : 'Signup'}</button>
                </form>
                <p>or</p>
                {this.state.showLogin ? <button className={classes.switchBtn} onClick={this.formShowHandler}>Signup</button> : <button onClick={this.formShowHandler}>Login</button>}
            </div>
        );
    }
}

export default Auth;