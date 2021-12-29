import {useState} from "react";
import {nanoid} from "nanoid";
import {TodoInput} from "./TodoInput";
import {TodoItem} from "./TodoItem";

export const Todo = () => {
  const [list,setList] = useState([])
  const handleData = (data) => {
     const payload = {
       title: data,
       status: false,
       id: nanoid(7),
     };
      setList([...list,payload]);
  }

  const handleToggle = (id) => {
    // toggle the status 
    // hint: list.filter()
  }

  const handleDelete = (id) => {
    // Delete this ID from main list 
  }

  return <>
     <TodoInput func = {handleData}/>
     {list.map(e => <TodoItem key={e.id} {...e} handleToggle = {handleToggle} handleDelete = {handleDelete}/>)}
  </> //fragment
}