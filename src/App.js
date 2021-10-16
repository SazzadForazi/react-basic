import { useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(20)
  const btnClick = () => {
    // console.log(count, setCount);
    const newCount = count + 1;
    setCount(newCount)

  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={btnClick}>Increase</button>
    </div>
  )
}

export default App;
