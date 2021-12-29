import {useState} from "react";
import {GroceryInput} from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { nanoid } from "nanoid";


export const Grocery = () => {
  const [item,setItem] = useState([]);

  const handleToggle = (id) => {
     const updated = item.map((e) => {
       if(id === e.id) {
         if(e.status === true) {
           e.status = false;
         }
         else {
           e.status = true;
         }
       }
       return e;
     }) 
     setItem(updated);
  }

  const handleDelete = (id) => {
      const updated = item.filter((e) => e.id !== id)
      setItem(updated)
  }

  const handleData = (data) => {
    const preLoad = {
      title: data,
      status: false,
      id: nanoid(9),
    }
    setItem([...item,preLoad])
  }
  return (
    <>
      <GroceryInput handleData = {handleData}/>
      {item.map(e => <GroceryList key ={e.id} {...e} handleToggle= {handleToggle} handleDelete={handleDelete}/>)}
    </>
  )
}