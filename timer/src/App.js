import "./styles.css";
import {Timer} from "./components/Timer";
import {useState} from "react"

export default function App() {
  const [show,setShow] = useState(true);
  return (
    <div className="App">
      {show?<Timer />:null}
      <button onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
    </div>
  );
}
