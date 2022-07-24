import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import UsersList from './components/UsersList'
import "./styles/UsersList.css";
import GistContenList from "./components/GistContentList";

function App() {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(false)
  const [fileContent, setFileContent] = useState({})
  const [description, setDescription] = useState('')

  const onGetGistId = async (gistId, gistIndex) => {
    console.log(gistId)
    let response = await fetch(`https://api.github.com/gists/${gistId}`);
    let respData = await response.json();
    setFileContent(respData.files)
    setDescription(respData.description)
  }

  const onGetData = async (userInput) => {
    try {
      let response = await fetch(
        `https://api.github.com/users/${userInput}/gists`
      );
      let respData = await response.json();
      if (respData.message !== "Not Found") {
        setError(false)
        setUserData(respData);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  }

  return (
    <Container fluid className="m-5">
      <Row className="mt-5">
        <Col xs="5">
          <SearchBar getData={onGetData}/>
          {userData[0] ? 
            <div className="usernameBox">
              <img src={userData[0].owner.avatar_url} alt="avatar" />
              <h4>{userData[0].owner.login}</h4>
            </div>
          : null}
          {!error ? 
            <UsersList userDataList={userData} getGistId = {onGetGistId}/>
           : 
            <h5 style={{ textAlign: "center" }}>Coudn't find the user or user has no public gists</h5>
          }
        </Col>
        <Col xs="7" >
          <>
            {description && <h5 className="mb-5">Description: {description}</h5>}
            <GistContenList contentData={fileContent}  />
          </>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
