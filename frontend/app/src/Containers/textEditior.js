import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';

import classes from './textEditor.module.css';
import Editor from '../Components/Editor/Editor';
import SideDrawer from '../Components/UI/sideDrawer/sideDrawer';

class TextEditor extends Component {
    state = {
        code: "//write you code here..",
        language: "plaintext",
        editorWidth: "96%"
    }

    // getEditorContent = () => {
    //     axios.get('http://localhost:3005/')
    //         .then(res => {
    //             this.setState({code: res.data.editorContent.content});
    //         })
    // }

    getSocket = ()=>{
        const socket = socketIOClient.connect('http://localhost:3005');
        return socket;
    }

    componentDidMount() {
        // this.getEditorContent();
        
        // const socket = openSocket('http://localhost:3005');
        const socket = socketIOClient.connect('http://localhost:3005');
        socket.on('broadcast',data=>{
            this.setState({code:data.result.content});
        });
        
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
        // this.updateEditorContent();
       
        
    }

    updateEditorContent = () => {
        const contentObj = {
            content: this.state.code
        }
        axios.post('http://localhost:3005/updateCode', contentObj)
            .then(res => {
                // this.setState({ code: e });
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