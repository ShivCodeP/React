import "./styles.css";
import { Router } from "./pages/Router";
import { Navb } from "./pages/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navb />
      <Router />
    </div>
  );
}
