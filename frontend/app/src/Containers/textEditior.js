import React, { Component } from 'react';

import classes from './textEditor.module.css';
import TextLines from '../Components/textLines';

class TextEditor extends Component {
    state = {
        editorContent: null
    }

    componentDidMount() {
        // console.log("component did mount");
        window.onload = () => {
            this.focusHandler();
        }
    }

    componentDidUpdate() {
        // console.log("componentDidUpdate");
    }

    contentUpdateHandler = (event) => {
        const x = event.target.value;
        this.setState({ editorContent: x });
    }

    focusHandler = () => {
        document.getElementById("tarea").focus();
    }

    render() {
        return (
            <div className={classes.Main} onClick={this.focusHandler}>
                <textarea onChange={(event) => this.contentUpdateHandler(event)} id="tarea"></textarea>
                <TextLines content={this.state.editorContent} />
            </div>
        );
    }
}

export default TextEditor;