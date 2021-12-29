import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDidabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <div>
          <button type="button" data-testid="minus-button" disabled={disabled} onClick={() => setCounter((count) => count - 1)}>-</button>
          <button type="button" data-testid="plus-button" disabled={disabled} onClick={() => setCounter((count) => count + 1)}>+</button>
        </div>
        <div>
          <button type='button' data-testid="on/off-button" style={{backgroundColor: 'blue'}} onClick={() => {
            setDidabled((prev) => !prev)
          }}>on/off</button>
        </div>
      </header>
    </div>
  );
}

export default App;
