import React from 'react';

import classes from './textLines.module.css';
import TextLine from './textLine/textLine';

const textLines = (props) => {
    let x = null;
    let pointerDisplay = null;
    let w = 0;
    if (props.content) {
        const arr = props.content.split("\n");
        x = arr.map((el, indexEl) => {
            w = Number(document.getElementsByClassName("twidth")[0].offsetWidth);
            return <TextLine line={el} lineNumber={indexEl + 1} />
        })
        pointerDisplay = "block";
        w = w + 20;
        console.log(w);
    }
    else {
        pointerDisplay = "none";
        x = <TextLine line="Enter Content" lineNumber="1" />
    }

    return (
        <div className={classes.TextLines}>
            <div className={classes.FakePointer} style={{ left: w, display: pointerDisplay }}>|</div>
            {x}
        </div>
    );
}

export default textLines;