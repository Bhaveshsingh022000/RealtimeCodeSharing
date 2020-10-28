import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import axios from 'axios';

import classes from './textEditor.module.css';
import Editor from '../Components/Editor/Editor';
import SideDrawer from '../Components/UI/sideDrawer/sideDrawer';

class TextEditor extends Component {
    state = {
        code: null,
        language: "plaintext",
        editorWidth: "96%"
    }

    getEditorContent = () => {
        axios.get('http://localhost:3005/')
            .then(res => {
                this.setState({code: res.data.editorContent.content});
            })
    }

    componentDidMount() {
        this.getEditorContent();
        openSocket('http://localhost:3005');
    }

    componentDidUpdate() {

    }
    editorDidMount = (editor, monaco) => {
        // console.log('editorDidMount', this.state.code);
        // editor.focus();
    }
    onChange = (newValue, e) => {
        // console.log('onChange', e);
        this.setState({ code: e });
        // console.log(this.state.code);
        // const socket = openSocket("")

    }

    

    updateEditorContent = () => {
        const contentObj = {
            content: this.state.code
        }
        axios.post('http://localhost:3005/updateCode', contentObj)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }



    drawerToggler = () => {
        this.setState({ editorWidth: "90%" });
    }

    render() {
        return (
            <div className={classes.Main}>
                <SideDrawer click={this.drawerToggler} />
                <Editor
                    code={this.state.code}
                    change={this.onChange}
                    editorMount={this.editorDidMount}
                    editorWidth={this.state.editorWidth}
                />
            </div>
        );
    }
}

export default TextEditor;