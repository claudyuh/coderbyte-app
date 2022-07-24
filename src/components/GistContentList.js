import React from "react";
import { Card } from "react-bootstrap";
const GistContenList = props => {
  const gistContentList = props.contentData;
  return (
    <React.Fragment>
      {Object.keys(gistContentList).map((key) => {
        return (
          <div style={{ width:"auto", maxHeight:'500px', overflowY:'scroll'}} key={key}>
            <Card border="light">
              <Card.Header>
                <b>Filename :</b> {gistContentList[key].filename}
              </Card.Header>
              <Card.Body>
                  <pre className="preTag">{gistContentList[key].content}</pre>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default GistContenList;
