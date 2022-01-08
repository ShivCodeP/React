import { Tableitem } from "./Tableitem";
import { useState, useEffect, useRef } from "react";

export const Table = () => {
  const [show, setShow] = useState(false);
  const [table, setTable] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = function () {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((res) => {
        setTable(res);
        setShow(true);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return show ? (
    <div>
      {table.map((e) => (
        <Tableitem {...e} />
      ))}
    </div>
  ) : (
    <div>...loading</div>
  );
};
