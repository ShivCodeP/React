import "./styles.css";
import { Card } from "./components/Card";
import { Form } from "./components/Form";
import { useState } from "react";
import { Description } from "./components/Description";

export default function App() {
  const [appear, setAppear] = useState(false);
  const [click, setClick] = useState({});

  const handleClicked = (item) => {
    console.log("enter");
    setAppear(true);
    setClick(item);
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          gap: "40px"
        }}
      >
        <Form />
        <Card handleClicked={handleClicked} />
      </div>
      <div
        style={{
          width: "80%",
          margin: "auto"
        }}
      >
        {appear ? <Description {...click} /> : null}
      </div>
    </div>
  );
}
