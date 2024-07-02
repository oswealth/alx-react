import React from "react";
import "./Login.css";

function Login() {
    return (
        <React.Fragment>
            <div className='App-body'>
                <p>Login to access the full dashboard</p>
                <label htmlFor='email'>Email:</label>
                <input type="email" id="email" name="email" autoComplete='email' />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" autoComplete='off' />
                <button>OK</button>
            </div>
        </React.Fragment>
    );
}

export default Login;
