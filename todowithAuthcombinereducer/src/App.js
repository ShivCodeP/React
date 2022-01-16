import "./styles.css";
import { Router } from "./Pages/Router";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}
