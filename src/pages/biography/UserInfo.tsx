import React, { useEffect, useState } from "react";
import { API_URL } from "../../configs/config";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reduxStore";
function UserInfo() {
  // State to store the user data
  const userInfo = useSelector((state: RootState) => state.user.userInfo);
  // Display a loading message until the data is fetched
  if (!userInfo) {
    return <div>Loading user info...</div>;
  } else {
    console.log("user", userInfo);
    // Render the user information
    return (
      <div>
        <h1>User Information</h1>
        <p>Name: {userInfo.userName}</p>
      </div>
    );
  }
}

export default UserInfo;
