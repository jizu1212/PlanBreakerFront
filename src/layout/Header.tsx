import React from 'react';
import { Link } from 'react-router-dom';
interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="bg-blue-100 py-4 top-0 left-0 w-full">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold"><Link to = '/'>{title}</Link></h1>
                <nav>
                    <ul className="flex space-x-4">
                    <li><Link to="/biography" className="text-blue-500 hover:text-blue-700">biography</Link></li>
                        <li><Link to="/calendar" className="text-blue-500 hover:text-blue-700">Calendar</Link></li>
                        <li><Link to="/signIn" className="text-blue-500 hover:text-blue-700">signIn</Link></li>
                        <li><Link to="/signUp" className="text-blue-500 hover:text-blue-700">signUp</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};


export default Header;