import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../pages/autehntication/SignIn';
const MainContent: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>Welcome to Home Page</h1>} />
        </Routes>
    );
}

export default MainContent;