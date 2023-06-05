import raccoon from "../bonus/raccoon.jpg";
import CountDown from "../Components/Counter";

function App() {
  return (
    <CountDown startValue={1} step={3} />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={raccoon} className="App-logo" alt="logo" />
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
