import React from 'react';

const login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="email" name="email" />
                <input type="password" name="password" />
                <br />
                <button>Login</button>
            </form>
        </div>
    );
}

export default login;