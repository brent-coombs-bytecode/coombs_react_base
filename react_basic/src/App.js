import logo from './logo.svg';
import './App.css';
// import * as Constants from './constants.js' ;
// import { user } from './constants';

// Import all constants
import * as Constants from './constants';

// Usage in code
const url = Constants.POSTURL;
const loadingIcon = Constants.LoadingWheel;



const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

const listItems = products.map(product =>
  <li
    key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
  >
    {product.title}
  </li>
);

<img className="avatar" />



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

        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>

        <MyButton />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>    

    <h1>{user.name}</h1>
    <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />            

      <ul>{listItems}</ul>

      </header>


      
    </div>
  );

  
}

export default App;
