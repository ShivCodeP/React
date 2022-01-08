import { useState, useEffect, useRef } from "react";
import { axios } from "axios";

export const Form = () => {
  const dummyUrl = "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif";
  const ref = useRef(null);

  const [dep, setDep] = useState("");

  const [show, setShow] = useState(false);

  const [image, setImage] = useState();

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const imagehosting = () => {
    const data = new FormData();
    data.append("image", ref.current.files[0]);

    fetch("https://api.imgur.com/3/image/", {
      method: "POST",
      body: data,
      headers: {
        Authorization: `Client-ID ${process.env.CLIENT_ID}}`
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setForm({
          ...form,
          profile: res.data.link
        });
        setImage(res.data.link);
        setShow(true);
      })
      .catch((err) => {
        setShow(false);
        console.log("err", err);
      });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json"
      }
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Age: </label>
            <input
              name="age"
              onChange={handleChange}
              type="number"
              placeholder="Enter Your Age"
            />
          </div>
          <div>
            <label>Address: </label>
            <input
              name="address"
              onChange={handleChange}
              type="text"
              placeholder="Enter Address"
            />
          </div>
          <div>
            <label>Department: </label>
            <select name="department" onChange={handleChange}>
              <option value="null">Select Department</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Product Manager">Product Manager</option>
              <option value="Operation Manager">Operation Manager</option>
              <option value="Instructor">Instructor</option>
              <option value="Instructional Associate">
                Instructional Associates
              </option>
              <option value="Mechanical Engineer">Mechanical Engineer</option>
              <option value="Mechanic">Mechanic</option>
              <option value="Designer">Designer</option>
            </select>
          </div>
          <div>
            <label>Salary: </label>
            <input
              onChange={handleChange}
              name="salary"
              type="number"
              placeholder="Your Salary"
            />
          </div>
          <div>
            <label>Marital Status: </label>
            <span>
              <input
                onChange={handleChange}
                name="marital_status"
                type="checkbox"
                value="single"
              />
              Single
              <input
                onChange={handleChange}
                name="marital_status"
                type="checkbox"
                value="married"
              />
              Married
              <input
                onChange={handleChange}
                name="marital_status"
                type="checkbox"
                value="divorced"
              />
              Divorced
            </span>
          </div>
          <div>
            <label>Profile Pic : </label>
            <input
              type="file"
              ref={ref}
              name="profile"
              onChange={imagehosting}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
      {show ? (
        <div
          style={{
            backgroundImage: `url(${show ? image : dummyUrl})`,
            height: "100px",
            width: "100px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
      ) : null}
    </>
  );
};
