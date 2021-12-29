export const GroceryList = ({title,status,id,handleToggle,handleDelete}) => {
  return (
    <div>
      <div>{title} - {status? "Added": "Not Added"}</div>
      <button onClick={() => handleToggle(id)}>{status? "Mark as UnAdded": "Mark as Added"}</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  )
}