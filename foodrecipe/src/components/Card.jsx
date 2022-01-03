import { useState, useEffect } from "react";

import { Carditem } from "./Carditem";

export const Card = ({ handleClicked }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    toget();
  }, []);

  const toget = () => {
    fetch("http://localhost:3001/recipe")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        overflowY: "scroll",
        height: "300px",
        width: "600px"
      }}
    >
      {data.map((e) => (
        <Carditem key={e.id} {...e} data={e} handleClicked={handleClicked} />
      ))}
    </div>
  );
};
