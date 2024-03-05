import React from "react";
import { Route, Routes } from "react-router-dom";
import UserInfo from "../pages/biography/UserInfo";
const MainContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcome to Home Page</h1>} />
      <Route path="/profile" element={<UserInfo></UserInfo>} />
      <Route path="/calendar" element={<h1>Welcome to Home Page</h1>} />
      <Route path="/projects" element={<h1>Welcome to Home Page</h1>} />
    </Routes>
  );
};

export default MainContent;
