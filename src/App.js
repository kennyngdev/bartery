import {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import {getStudents} from './utils'
function App() {

  const [students,setStudents] = useState([]);
  useEffect(()=>getStudents().then(data=>setStudents(data)),[])

  function renderList (arrOfObj) {
    return arrOfObj.map(x=>(
      <h1>{x.name}</h1>))
  }

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
      </header>
      {renderList(students)}
    </div>
  );
}

export default App;
