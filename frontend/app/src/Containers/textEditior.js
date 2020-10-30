import React, { Component } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import {connect} from 'react-redux';

import classes from './textEditor.module.css';
import Editor from '../Components/Editor/Editor';
import SideDrawer from '../Components/UI/sideDrawer/sideDrawer';

const socket = io('http://localhost:3005/');
class TextEditor extends Component {
    state = {
        code: "//write you code here..",
        language: "plaintext",
        editorWidth: "96%",
        room:"testRoom"
    }

    componentDidMount() {
        console.log("editor component");
        socket.emit('join', this.props.roomName);
        socket.on('chat', msg => {
          this.setState({ code: msg });
        })
    }

    componentDidUpdate() {
        // socket.on("updateEd",data=>{
        //     // console.log(data);
        //     this.setState({code: data});
        // })
    }
    editorDidMount = (editor, monaco) => {
        console.log('editorDidMount', this.props.roomName);
        // editor.focus();
    }
    
    onChange = (newValue, e) => {
        // console.log('onChange', e);
        this.setState({ code: e }); 
        socket.emit('chat', { message: this.state.code, room: this.props.roomName });
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

const mapStateToProps = state => {
    return {
        roomName: state.editor.roomName
    }
}

export default connect(mapStateToProps,null)(TextEditor);