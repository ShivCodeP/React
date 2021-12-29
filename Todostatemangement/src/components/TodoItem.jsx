export const TodoItem = ({title,status,id,handleToggle,handleDelete}) => {
  return <>
    <div>{title} - {status ? "Done": "Not Done"}</div>
    <button onClick={() => handleToggle(id)}> Mark as Done</button>
    <button onClick={() => handleDelete(id)}>Delete</button>
  </>
}