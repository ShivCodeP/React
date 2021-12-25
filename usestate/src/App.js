import {useState} from "react";
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const changecount = (value) => {
    // setCount(count + value);
    setCount(() => {
      if(count >10) {
        return 0;
      }
      return count + value;
    })
  }
  const multiply = () => {
    setCount(count*2)
  }

  return (

    <div className="App" >
      <h3>counter: {count}</h3>
      {(<div>
        <button onClick={() => changecount(1)}>Add 1</button>
      <button onClick={() => changecount(-1)}>Sub 1</button>
      <button onClick={() => multiply()}>Double</button>
      </div>)}

      {/* <button onClick={() => changecount(1)}>Add 1</button>
      <button onClick={() => changecount(-1)}>Sub 1</button> */}
      <div>Counter is {count%2 ===0 ? "Even": "Odd"}</div>

    </div>
  );
}

export default App;
