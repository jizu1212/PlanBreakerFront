import React, { useState } from 'react';
import UserDto from '../../types/UserDto';
import User from '../../types/User';
import UserContext from '../../UserContext';

interface SignUpFormProps {
    onSubmit: (formData: UserDto) => Promise<string>;
}


const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
    const context = React.useContext(UserContext);
    if (!context) {
            throw new Error('useContext(UserContext) must be used within a UserContext.Provider');
    }
    const { user, setUser } = context;

    const [userDto, setUserDto] = useState<UserDto>({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserDto({
            ...userDto,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const user = await onSubmit(userDto);
            console.log('Signed up user:', user);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={userDto.username}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={userDto.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={userDto.password}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;