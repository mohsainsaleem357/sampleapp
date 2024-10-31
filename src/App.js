import logo from './logo.svg';
import './App.css';
import Sample from './Sample';
import Addingimage from './Addingimage';
import Addingdate from './Addingdate';

function App() {
  let a =5;
  return (
    <>
    <p>Hello this is app.js </p>
    <p> the value of a is {a} app.js</p>
    <Sample name = "Mohsin Salim" details = " hey its mohsin"/>
    <Addingimage/>
    <Addingdate/>
    </>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
