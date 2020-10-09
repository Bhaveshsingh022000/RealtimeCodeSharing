import React, { Component } from 'react';

import classes from './textEditor.module.css';
import TextLines from '../Components/textLines';

class TextEditor extends Component {
    state = {

    }
    render() {
        return (
            <div className={classes.Main}>
                <TextLines />
            </div>
        );
    }
}

export default TextEditor;