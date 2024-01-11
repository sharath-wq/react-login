import React, { useState } from 'react';
import Input from './Input';

const Body = () => {
    const [inputValue, setInputValue] = useState({
        password: '',
        username: '',
    });

    const [inputErrors, setInputErrors] = useState({
        password: '',
        username: '',
    });

    const validateUsername = () => {
        const { username } = inputValue;
        if (!username) {
            setInputErrors((prevErrors) => ({
                ...prevErrors,
                username: 'Username is required',
            }));
            return false;
        } else if (username.length < 4) {
            setInputErrors((prevErrors) => ({
                ...prevErrors,
                username: 'Username must be at least 4 characters long',
            }));
            return false;
        } else {
            setInputErrors((prevErrors) => ({
                ...prevErrors,
                username: '',
            }));
            return true;
        }
    };

    const validatePassword = () => {
        const { password } = inputValue;
        if (!password) {
            setInputErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password is required',
            }));
            return false;
        } else if (password.length < 6) {
            setInputErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password must be at least 6 characters long',
            }));
            return false;
        } else {
            setInputErrors((prevErrors) => ({
                ...prevErrors,
                password: '',
            }));
            return true;
        }
    };

    const { password, username } = inputValue;
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
        setInputErrors({
            ...inputErrors,
            [name]: '', // Clear error when typing
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isUsernameValid = validateUsername();
        const isPasswordValid = validatePassword();

        if (isUsernameValid && isPasswordValid) {
            alert('Form submited successfully');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='w-full h-[85%] flex flex-col justify-center items-start gap-6 p-10'>
            <Input
                type={'text'}
                name={'username'}
                value={username}
                placeholder={'Enter Your Username'}
                onChange={handleOnChange}
            />
            <p className='mt-0.5 visible text-sm text-red-600 dark:text-red-500'>{inputErrors.username}</p>
            <Input
                type={'password'}
                name={'password'}
                value={password}
                placeholder={'Enter Your Password'}
                onChange={handleOnChange}
            />
            <p className='mt-0.5 visible text-sm text-red-600 dark:text-red-500'>{inputErrors.password}</p>
            <div className='flex w-full px-8 gap-3'>
                <input className='accent-black' type='checkbox' />
                <p className='font-medium'>Remember Password</p>
            </div>
            <button type='submit' className='gradient-orange-pink w-full text-white p-2 font-medium'>
                Login
            </button>
        </form>
    );
};

export default Body;
