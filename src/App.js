import logo from './logo.svg';
import './App.css';
import Btn from './Btn';
import Text from './Text';
import CountupBtn from './CountupBtn';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CountupBtn />
        <Btn />
        <Text color="blue" message="お元気ですか？" />
        <Text color="blue">お元気ですか？</Text>
      </header>
    </div>
  );
}

export default App;
