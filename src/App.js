// import logo from './logo.svg';
import React , {useState} from 'react';
import Navbar from './components/Navbar.js'; 
import TextManipulation from './components/Textutil.js'; 
import './App.css';
import Alert from './components/alert.js';

function App() { 

  const [mode, setMode] = useState('Light');
  const toggleMode = () => {
      if (mode === 'Light') {
          setMode('Dark');
          setNVMode('dark');
          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'black';
          showAlert("");
      }
      else {
          setMode('Light');
          setNVMode('light');
          document.body.style.backgroundColor = '#0C4271';
          document.body.style.color = 'white';
      }
  }
  const [nvmode, setNVMode] = useState('light');
  const [changeStyle, setCS] = useState({
      color: '#E8AA42',
      backgroungColor: 'white'
  });

  const [alert, setAlert] = useState("");

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert();
      }, 1500);
  }


  return (
    <>
    <Navbar title='TextUtils' toggleMode={toggleMode} mode={mode} changeStyle={changeStyle} />
    <Alert alert={alert} />
 
    <TextManipulation showAlert={showAlert} changeStyle={changeStyle} mode={mode} /> 
    {/* <div className="App">
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
      </header>
    </div> */}
    {/* <div className="text-info bg-dark text-center fs-3 border border-danger border-3">Hii</div>
    <div className="text-center">


    <img src={img1} className=" rounded-circle border-4 border-success border w-50" alt="logo" />
    </div> */}

    </>
  );
}

export default App;
