import React from "react";
import { JobCard } from "./JobCard";
import { Row } from "react-bootstrap";

export const Apply = () => {
  const [jobs, setJobs] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setJobs(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Apply for Great Job</h1>
      <Row style={{ justifyContent: "center" }}>
        {jobs.map((e) => (
          <JobCard {...e} />
        ))}
      </Row>
    </div>
  );
};
