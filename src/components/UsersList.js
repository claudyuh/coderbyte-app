/* eslint-disable array-callback-return */
import React from "react";
import UserItem from "./UserItem";

const UsersList = props => {
  const userList = props.userDataList;
  const onGetId = (gistId, gistIndex) => {
    props.getGistId(gistId, gistIndex)
  }
    return (
      <React.Fragment>
        <h5 style={{ textAlign: "center" }}> </h5>
        {Object.keys(userList).map(key => {
          if (userList[key].public){
            return (
              <UserItem 
                getId = {onGetId}
                key={key}
                index = {key}
                description={userList[key].description ? userList[key].description : "No description for this ..."}
                userGistId={userList[key].id}
                files = {userList[key].files}
                fileCount = {Object.keys(userList[key].files).length}
              />
            );
          }
        })}
      </React.Fragment>
    );
};

export default UsersList;
