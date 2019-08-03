import React, { useState } from 'react';

import './Login.css';

function Login() {
    const [login, setLogin] = useState(false)

    function changeLogin(e) {
        e.preventDefault()
        setLogin(true)
    }

    return (
        <div className="login-container">
            <div className="form-container">
                {login ? alert("Please provide correct username and password") : console.log() }
                <form className="form">
                    <input placeholder="username" type="text"/>
                    <input placeholder="password" type="password"/>
                    <input type="submit" className="login-button" onClick={e => changeLogin(e)}/>
                </form>
                <p>Don't have an Account?</p>
                <p>Please APPLY for creating an account.</p>
            </div>
        </div>
    )
}

export default Login;