import "./styles.css";
import { Router } from "./Pages/Router";
import { Navbars } from "./Pages/Navbar";

export default function App() {
  return (
    <div className="App">
      {" "}
      <Navbars />
      <Router />
    </div>
  );
}
