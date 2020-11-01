import React from 'react';

const inputForm = (props) => {
    return (
        <div>
            <input {...props.elementConfig} name={props.name} />
        </div>
    );
}

export default inputForm;