import React from "react";

export const PostJob = () => {
  const [job, setJob] = React.useState({});
  const handleChange = ({ target: { name, value } }) => {
    setJob({
      ...job,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(job);
    fetch("http://localhost:3000/jobs", {
      method: "POST",
      body: JSON.stringify(job),
      headers: {
        "content-type": "application/json"
      }
    });
  };

  return (
    <div>
      <h1>Post Jobs</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <input
          onChange={handleChange}
          name="company"
          type="text"
          placeholder="company name"
        />
        <input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder=" job title"
        />
        <input
          onChange={handleChange}
          name="salary"
          type="text"
          placeholder=" salary range"
        />
        <input
          onChange={handleChange}
          name="description"
          type="text"
          placeholder=" job description"
          row="3"
        />
        <input
          onChange={handleChange}
          name="location"
          type="text"
          placeholder="location"
        />
        <input onChange={handleChange} type="submit" value="Post" />
      </form>
    </div>
  );
};
