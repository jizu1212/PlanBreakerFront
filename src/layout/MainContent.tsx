import React from "react";
import { Route, Routes } from "react-router-dom";
const MainContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcome to Home Page</h1>} />
      <Route path="/profile" element={<h1>Welcome to Home Page</h1>} />
      <Route path="/calendar" element={<h1>Welcome to Home Page</h1>} />
      <Route path="/projects" element={<h1>Welcome to Home Page</h1>} />
    </Routes>
  );
};

export default MainContent;
