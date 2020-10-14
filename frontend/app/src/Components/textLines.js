import React from 'react';

import classes from './textLines.module.css';
import TextLine from './textLine/textLine';

const textLines = (props) => {
    let content = null;
    if (props.textContent) {
        content = props.textContent.split('\n').map((el, index) => {
            return <TextLine key={index + 1} textContents={el} lineNumber={index + 1} />
        })
    }
    else {
        content = <TextLine key={Math.random()} textContents="add content" />
    }
    return (
        <React.Fragment>
            
            {content}
        </React.Fragment>
    );
}

export default textLines;