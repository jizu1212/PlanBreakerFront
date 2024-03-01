import React from 'react';
import User from './types/User';

interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = React.createContext<UserContextType | undefined>(undefined);

export default UserContext;