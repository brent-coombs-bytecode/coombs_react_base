import logo from './logo.svg';
import './App.css';
import Click_Count_Button from './Click_Count_Button';
import * as Constants from './constants';
import getListItems from './getListItems';

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Edit <code>src/App.js</code> and save to reload.</p>

        <MyButton />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Add Click_Count_Button below the Learn React link */}
        <Click_Count_Button />

        <h1>{Constants.user.name}</h1>
        <img
          className="avatar"
          src={Constants.user.imageUrl}
          alt={'Photo of ' + Constants.user.name}
          style={{
            width: Constants.user.imageSize,
            height: Constants.user.imageSize
          }}
        />            

        <ul>{getListItems()}</ul>
      </header>
    </div>
  );
}

export default App;
