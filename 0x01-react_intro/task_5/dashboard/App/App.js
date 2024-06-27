import './App.css';
import logo from '../src/assets/holberton-logo.jpg';
import { getFullYear, getFooterCopy } from '../src/utils/utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <hr />
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label>Email:
          <input type="text" name="email"/>
        </label>
        <label>Password:
          <input type="password" name="password"/>
        </label>
        <button>OK</button>
      </body>
      <hr id="footer-margin"/>
      <footer className="App-footer">
        <p>
          <em>Copyright {getFullYear()} - {getFooterCopy(false)}</em>
        </p>
      </footer>
    </div>
  );
}

export default App;
