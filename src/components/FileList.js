import React from "react";
import { ListGroup } from "react-bootstrap";
import FileBadges from "./FileBadges";
const FileList = (props) => {
    const fileList = props.fileList;
    return (
        <React.Fragment>
            {Object.keys(fileList).map((key, ind) => {
                return(
                    <ListGroup.Item key={key} className="d-flex">
                        {fileList[key].filename} 
                        <span> <FileBadges filename = {fileList[key].filename} language={fileList[key].language}/> </span>
                    </ListGroup.Item>
                )
            })}
        </React.Fragment>
    )   
}

export default FileList;