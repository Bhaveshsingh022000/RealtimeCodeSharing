import React from 'react';

import classes from './sideDrawer.module.css';

const sideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            <button onClick={props.click}>s</button>
        </div>
    );
}

export default sideDrawer;