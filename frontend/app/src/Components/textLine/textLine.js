import React from 'react';

import classes from './textLine.module.css';

const textLines = (props) => {
    return (
        <React.Fragment>
            <div className={classes.TextLinesContent}>
                <div style={{ color: "white"}}>
                    <span>{props.lineNumber}</span> <span >{props.textContents}</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default textLines;