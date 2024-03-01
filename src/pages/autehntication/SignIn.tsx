import React, { useState } from 'react';
import User from '../../types/User';
import UserDto from '../../types/UserDto';
import { hello } from '../../service/authService';
interface SignInFormProps {
    onSubmit: (userDto: UserDto) => Promise<User>;
}

const SignIn: React.FC<SignInFormProps> = ({ onSubmit }) =>{
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
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value={userDto.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={userDto.password} onChange={handleChange} />
                </div>
                <button type="submit">Sign In</button>
            </form>
            <button onClick={hello}>heelo</button>
        </div>
    );
};

export default SignIn;