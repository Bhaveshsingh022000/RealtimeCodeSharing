import React from 'react';

const signup = (props) => {
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <input type="password" name="password" />
                <input type="password" name="confPassword" />
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default signup;