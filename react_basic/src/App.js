import logo from './logo.svg';
import './App.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};


<img className="avatar" />


function MyButton() {
  return (
    <button>
      I'm a button
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
      </header>



      
    </div>
  );

  
}

export default App;
