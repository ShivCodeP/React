export const Carditem = ({ title, time, data, handleClicked }) => {
  return (
    <div onClick={() => handleClicked(data)}>
      <h1>{title}</h1>
      <p>Cooking time: {time}</p>
    </div>
  );
};
