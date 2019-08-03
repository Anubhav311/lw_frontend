import React from 'react';

import './Login.css'
function Login() {
    return (
        <div className="login-container">
            <div className="form-container">
                <form className="form">
                    <input placeholder="username" type="text"/>
                    <input placeholder="password" type="password"/>
                    <input type="submit" className="login-button"/>
                </form>
                <p>Don't have an Account?</p>
                <p>Please APPLY for creating an account.</p>
            </div>
        </div>
    )
}

export default Login;