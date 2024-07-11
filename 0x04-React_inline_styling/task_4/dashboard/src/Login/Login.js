import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" className={css(styles.input)}></input>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" className={css(styles.input)}></input>
          <button className={css(styles.btn)} type="button">OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

const screenSize = {
  small: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
    [screenSize.small]: {
      width: '90%',
      padding: 0,
    },
  },

  input: {
    margin: "10px",
    [screenSize.small]: {
      display: 'block',
      border: 'none',
      margin: 0,
    },
  },

  btn: {
    margin: '4px',
    cursor: 'pointer',
    [screenSize.small]: {
      width: '32px',
      display: 'block',
      margin: 0,
    },
  },
});

export default Login;
