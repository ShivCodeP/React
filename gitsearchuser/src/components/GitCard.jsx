import { Card, Button } from "react-bootstrap";

export const GitCard = ({ avatar_url, login, html_url }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={avatar_url} />
      <Card.Body>
        <Card.Title>{login}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => window.open(html_url)}>
          Profile
        </Button>
      </Card.Body>
    </Card>
  );
};
