import React from "react";
import { Row, Col, Form, Pagination, Button } from "react-bootstrap";
import { GitCard } from "./GitCard";

export const Home = () => {
  const [username, setUsername] = React.useState("shivam");
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const handlePage = (p) => {
    setPage(p);
  };

  React.useEffect(() => {
    handleSearch();
  }, [page]);
  const handleSearch = () => {
    fetch(
      `https://api.github.com/search/users?q=${username}&page=${page}&per_page=10`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setData(res.items);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Row style={{ justifyContent: "center" }}>
        <Form.Control
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          type="text"
          placeholder="Enter Username"
          style={{ width: "40%" }}
        />
        <Button
          onClick={handleSearch}
          style={{ width: "100px" }}
          variant="secondary"
        >
          Search
        </Button>
      </Row>
      <Row style={{ justifyContent: "center", marginTop: "2.5rem" }}>
        {loading ? <div>Loading...</div> : data.map((e) => <GitCard {...e} />)}
      </Row>
      <PaginationBasic handlePage={handlePage} />
    </div>
  );
};

const PaginationBasic = ({ handlePage }) => {
  let [active, setActive] = React.useState(2);
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        onClick={() => setActive(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }
  handlePage(active);
  return (
    <div>
      <Pagination style={{ justifyContent: "center", marginTop: "2.5rem" }}>
        {items}
      </Pagination>
    </div>
  );
};
