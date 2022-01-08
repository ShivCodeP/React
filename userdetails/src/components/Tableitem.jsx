import { useState } from "react";

export const Tableitem = ({
  salary,
  marital_status,
  department,
  name,
  profile,
  id,
  age,
  address
}) => {
  const [fake, setFake] = useState(true);

  const handleDelete = () => {
    // Delete Request
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        setFake(!fake);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return fake ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px"
      }}
    >
      <p>
        Name: <hr />
        {name}
      </p>
      <p>
        Department:
        <hr /> {department}
      </p>
      <p>
        Salary: <hr />
        {salary}
      </p>
      <p>
        Marital-status
        <hr /> {marital_status}
      </p>
      <p>
        Age
        <hr /> {age}
      </p>
      <p>
        Address
        <hr /> {address}
      </p>
      <img src={profile} alt="user.jpg" width="100" height="100" />
      <button style={{ width: "80px", height: "40px" }} onClick={handleDelete}>
        Delete
      </button>
    </div>
  ) : null;
};
