import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="Holberton-logo" />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email:</label>
        <input type="email" id="email" name="email" autoComplete='email' />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" autoComplete='off' />
        <button>OK</button>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
