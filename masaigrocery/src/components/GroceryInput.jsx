import {useState} from "react";

export const GroceryInput = ({handleData}) => {
  const [text,setText] = useState("")
  const handleChange = (e) => {
     setText(e.target.value)
  }

  const handleClick = () => {
     handleData(text);
  }

  return (
    <>
      <input onChange={handleChange} placeholder = "Enter the Grocery" />
      <button onClick = {handleClick}>Add To List</button>
    </>
  )
}