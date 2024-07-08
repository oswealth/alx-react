import React from "react";
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" className={css(styles.input)}></input>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" className={css(styles.input)}></input>
        <button className={css(styles.button)}>OK</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  body: {
    fontSize: '1rem',
    padding: '2em',
    height: '45%',
  },
  input: {
    margin: '10px',
  },
  button: {
    margin: '10px',
  }
});

export default Login;
