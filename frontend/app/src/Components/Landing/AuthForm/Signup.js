import React from 'react';

const signup = (props) => {
    return (
        <div>
            <input {...props.elementConfig} name={props.name} />
        </div>
    );
}

export default signup;