export const Description = ({
  title,
  description,
  time,
  instructions,
  ingredients,
  imageUrl
}) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          width: "200px",
          height: "200px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      <h1>{title}</h1>
      <p>time to cook :{time}</p>
      <p>Ingredients Required : {ingredients}</p>
      <p>{instructions}</p>
    </div>
  );
};
