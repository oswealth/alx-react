import React from 'react';
import './Login.css';

function Login() {
  return (
    <main role='main' className='login'>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email:</label>
      <input type="email" id="email" name="email" autoComplete='email' />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" autoComplete='off' />
      <button>OK</button>
    </main>
  );
}

export default Login;
