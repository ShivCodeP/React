import React from "react";
import { Card, Button } from "react-bootstrap";

export const JobCard = ({ title, company, description, salary, location }) => {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <strong>Company Name: {company}</strong>
        <Card.Text>{description}</Card.Text>
        <strong>Salary:</strong>
        <Card.Text>{salary}</Card.Text>
        <Button variant="primary">Apply</Button>
      </Card.Body>
    </Card>
  );
};
