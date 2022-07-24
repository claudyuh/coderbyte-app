import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

const SearchBar = props => {
  const [userInput, setUserInput] = useState("");

  const handleSendData = (event) => {
    event.preventDefault()
    props.getData(userInput)
  }

  return (
    <Form onSubmit={handleSendData}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" type="submit">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
