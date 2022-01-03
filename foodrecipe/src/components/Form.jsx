require( "dotenv" ).config();

import { useRef, useState } from "react";

export const Form = () => {
  const ref = useRef(null);
  const [form, setForm] = useState({});
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    // console.log(form);
    fetch("http://localhost:3001/recipe", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(form)
    });
  };

  const handleChange = (e) => {
    let { value, name } = e.target;
    // console.log(value, name);

    if (name === "imageUrl") {
      setImage(URL.createObjectURL(ref.current.files[0]));
      // imagehosting();
      value = image;
    }

    setForm({
      ...form,
      [name]: value
    });
    // console.log(form);
  };

  const imagehosting = () => {
    console.log("enter");
    const data = new FormData();
    data.append("image", ref.current.files[0]);

    fetch("https://api.imgur.com/3/image/", {
      method: "POST",
      headers: {
        Authorization: `Client-ID ${process.env.CLIENT_ID}`
      },
      body: data
    })
      .then((res) => res.json())
      .then((res) => {
        setImage(res.data.link);
        console.log(res);
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <span>Recipe Name: </span>
        <input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Enter Recipe Name"
        />
      </div>
      <div>
        <span>Ingredients: </span>
        <input
          onChange={handleChange}
          name="ingredients"
          type="text"
          placeholder="Ingredients Required"
        />
      </div>
      <div>
        <span>Time: </span>
        <input
          onChange={handleChange}
          name="time"
          type="text"
          placeholder="Time To Cook"
        />
      </div>
      <div>
        <span>Instructions: </span>
        <input
          onChange={handleChange}
          name="instructions"
          placeholder="Instructions"
        />
      </div>
      <div>
        <span>Image: </span>
        <input onChange={handleChange} ref={ref} name="imageUrl" type="file" />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};
