import { useEffect, useState } from "react";

export const Timer = () => {
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    const id = setInterval(() => {
      setCounter((p) => (p > 0 ? p - 1 : p));
    }, 1000);
    return () => {
      // console.log("unmounting")
      clearInterval(id);
    };
  }, []);
  return <div>Counter is :{counter}</div>;
};
