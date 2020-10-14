import React, { Component } from 'react';

import classes from './textEditor.module.css';
import TextLines from '../Components/textLines';

class TextEditor extends Component {
    state = {
        editorContent: [],
        tempcon: null,
        fakePointerLeft : 0,
    }
    componentDidMount() {
        // console.log("component did mount");
    }

    componentDidUpdate() {
        // console.log("componentDidUpdate");
    }

    textAreaFocus = () => {
        document.getElementById("tex").focus();
    }

    updateContent = (event) => {
        let left = Number(document.getElementsByClassName("textoff").offsetWidth) + 20;
        console.log(left);
        this.setState({ tempcon: event.target.value, fakePointerLeft: left });
    }


    render() {
        let arra = [];
        arra.push(classes.FakePointer);
        let dy = {
            "background-color":'blue'
        }
        arra.push(dy);
        return (
            <div onClick={this.textAreaFocus} className={classes.Main}>
                <textarea style={{ position: "absolute", backgroundColor: "rgba(0,0,0,0)" }} id="tex"
                    onChange={(event) => this.updateContent(event)}>
                </textarea>
                <div className={arra.join(' ')}  style={{"left": this.state.fakePointerLeft + "px"}}></div>

                <span id="off"><TextLines textContent={this.state.tempcon} /></span>

            </div>
        );
    }
}

export default TextEditor;