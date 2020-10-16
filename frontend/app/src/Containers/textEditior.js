import React, { Component } from 'react';

import classes from './textEditor.module.css';
import Editor from '../Components/Editor/Editor';

class TextEditor extends Component {
    state = {
        code: "// Write your code here ..."
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }
    editorDidMount = (editor, monaco) => {
        console.log('editorDidMount', this.state.code);
        // editor.focus();
    }
    onChange = (newValue, e) => {
        // console.log('onChange', e);
        this.setState({ code: e });
        // console.log(this.state.code);
    }

    render() {
        return (
            <div className={classes.Main}>
                <Editor code={this.state.code} change={this.onChange} editorMount={this.editorDidMount} />
            </div>
        );
    }
}

export default TextEditor;