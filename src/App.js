import React from "react";
import "./index.scss";

function App() {
  const [count, setCount] = React.useState(0);
  const setCountMinus = () => {
    setCount(count - 1);
  };
  const setCountPlus = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={setCountMinus} className="minus">
          - Минус
        </button>
        <button onClick={setCountPlus} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
