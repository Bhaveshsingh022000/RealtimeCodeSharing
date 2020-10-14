import React from 'react';

import classes from './textLines.module.css';
import TextLine from './textLine/textLine';

const textLines = (props) => {
    let x = null;
    if (props.content) {
        const arr = props.content.split("\n");
        x = arr.map((el,indexEl) => {
            return <TextLine line={el} lineNumber={indexEl+1} />
        })
    }
    else {
        x = <span>no conetent</span>
    }

    return (
        <div className={classes.TextLines}>
            <div className={classes.FakePointer}>|</div>
            {x}
        </div>
    );
}

export default textLines;