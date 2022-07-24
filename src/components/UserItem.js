import React, { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import FileList from "./FileList";
import ForkList from "./ForkList";

const UserItem = props => {
  const [forkData, setForkData] = useState();
  const [check, setCheck] = useState(false)
  const [active, setActive] = useState(false)
  const gistId = props.userGistId;
  const index = props.index
  const handleForksRequest = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/gists/${gistId}/forks`
      );
      const respData = await response.json();
      if (Object.keys(respData).length) {
        setForkData(respData);
        console.log(respData)
      }else{
        setCheck(true)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card style={{ width: "auto", marginBottom:'15px' }} >
      <Card.Body>
        <Card.Text>Description: {props.description}</Card.Text>
        <Card.Text>File number:{props.fileCount}</Card.Text>
        <Card.Header>Files -{">"}</Card.Header>
        <ListGroup variant="flush">
          <FileList fileList={props.files} />
        </ListGroup>
        {forkData &&
          <>
            <div>Users who have forked it: </div>
            <ForkList forkDataList = {forkData}/>
          </>
        }
        {check && 
          <div style={{marginLeft:'17px'}}> <b>No forks</b> </div>
        }
        <Button onClick={handleForksRequest} className="m-2 btn-sm">
          Check Forks
        </Button>
        <Button className="m-2 btn-sm" onClick={() => {props.getId(gistId, index); }}>
          View Files
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UserItem;
