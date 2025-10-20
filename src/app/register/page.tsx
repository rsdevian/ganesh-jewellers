"use client";

import { useState } from "react";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        alert(`Register attempt: ${name}, ${email}, ${password}`);
        // Later: call your API route to create user
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-900'>
            <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-6 text-center text-black'>
                    Register
                </h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    {/* Name */}
                    <div>
                        <label
                            htmlFor='name'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black'
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor='email'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black'
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor='password'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black'
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label
                            htmlFor='confirmPassword'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            id='confirmPassword'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black'
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        className=' bg-indigo-600 w-full text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition'
                    >
                        Register
                    </button>
                </form>

                <p className='mt-4 text-center text-sm text-gray-500'>
                    Already have an account?
                    <a
                        href='/login'
                        className='text-indigo-600 hover:underline ms-2'
                    >
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
