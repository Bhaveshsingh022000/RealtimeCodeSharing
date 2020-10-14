import React from 'react';

import classes from './textLine.module.css';

const textLines = (props) => {
    const temp = props.line.split(" ");
    const x = temp.map(el => {
        if (el === "function") {
            return <span style={{ color: "red" }}>{el + " "}</span>
        }
        return <span>{el + " "}</span>
    })

    return (
        <React.Fragment>
            <div className="twidth">
                <span>{props.lineNumber}</span> <span>{x}</span>
            </div>
        </React.Fragment>
    );
}

export default textLines;