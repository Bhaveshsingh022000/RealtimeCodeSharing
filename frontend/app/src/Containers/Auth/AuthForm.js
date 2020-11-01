import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import InputElement from '../../Components/UI/Input/Input';
import classes from './AuthForm.module.css';
import Spinner from '../../Components/UI/Spinner/Spinner';

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
                    minLength: 3
                },
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
                }
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
                },
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
            },
        },
        error: null

    }

    signinInputChangedHandler = (event, inputName) => {
        const updatedForm = {
            ...this.state.signupForm,
            [inputName]: {
                ...this.state.signupForm[inputName],
                value: event.target.value,
                touched: true,
            }
        }
        this.setState({ signupForm: updatedForm });
    }

    loginInputChangeHandler = (event, inputName) => {
        const updatedForm = {
            ...this.state.loginForm,
            [inputName]: {
                ...this.state.loginForm[inputName],
                value: event.target.value,
                touched: true,
            }
        }
        this.setState({ loginForm: updatedForm });
    }


    formShowHandler = () => {
        this.setState((state, props) => ({
            showLogin: !state.showLogin
        }))
    }


    formSubmitHandler = (event) => {
        event.preventDefault();
        if (this.state.showLogin) {
            this.props.onLogin(this.state.loginForm.email.value, this.state.loginForm.password.value);
        }
        else {
            const name = this.state.signupForm.name.value;
            const email = this.state.signupForm.email.value;
            const password = this.state.signupForm.password.value;
            const confpass = this.state.signupForm.confpassword.value;
            if (password === confpass) {
                this.setState({ error: null });
                this.props.onSignIn(name, email, password);
            }
            else {
                this.setState({ error: "Password and Confirm Password Should be Same" });
            }

        }
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
                    changed={(event) => this.signinInputChangedHandler(event, el.id)}
                    minLength={el.config.validation.minLength}
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
                    changed={(event) => this.loginInputChangeHandler(event, el.id)}
                    minLength={el.config.validation.minLength}
                />
            ))
        }
        if (this.props.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.FormContainer}>
                <form onSubmit={(event) => this.formSubmitHandler(event)}>
                    <h1>{this.state.showLogin ? 'Login' : 'Signup'}</h1>
                    {form}
                    <button type="submit">{this.state.showLogin ? 'Login' : 'Signup'}</button>
                    <p>{this.state.error}</p>
                </form>
                <p>or</p>
                {this.state.showLogin ? <button className={classes.switchBtn} onClick={this.formShowHandler}>Signup</button> : <button onClick={this.formShowHandler}>Login</button>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        loading: state.auth.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, password) => dispatch(actions.startLogin(email, password)),
        onSignIn: (name,email,password) => dispatch(actions.postSignIn(name,email,password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);