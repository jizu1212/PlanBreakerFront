import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainCalendar from '../components/Calender/MainCalendar';
import UserInfo from '../pages/biography/UserInfo';
import SignUpForm from '../pages/autehntication/SignUp';
import { signUp,signIn } from '../service/authService';
import SignIn from '../pages/autehntication/SignIn';
const MainContent: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>Welcome to Home Page</h1>} />
            <Route path="/signUp" element={<SignUpForm onSubmit={signUp}></SignUpForm>} />
            <Route path="/calendar" element={<MainCalendar />} />
            <Route path="/biography" element={<UserInfo/>} />
            <Route path="/signIn" element={<SignIn onSubmit={signIn}></SignIn>} />
        </Routes>
    );
}

export default MainContent;