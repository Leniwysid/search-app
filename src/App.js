import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container, Form, InputGroup, Table } from "react-bootstrap";
import { data } from "./data";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Container>
        <h1 className="text-center my-4">Search for Your contact</h1>
        <Form>
          <InputGroup>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              className="mb-2"
              placeholder="Type here"
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>E-mail</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.first_name.toLowerCase().includes(search) ||
                      item.last_name.toLowerCase().includes(search) ||
                      item.email.toLowerCase().includes(search) ||
                      item.phone.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
