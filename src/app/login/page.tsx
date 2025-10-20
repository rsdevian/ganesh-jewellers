"use client";

import { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Login attempt:  ${email}, ${password} `);
        // Later: call your API route here
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-900'>
            <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-6 text-center text-black'>
                    Login
                </h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
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

                    {/* Submit Button */}
                    <button
                        type='submit'
                        className='w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition'
                    >
                        Login
                    </button>
                </form>

                <p className='mt-4 text-center text-sm text-gray-500'>
                    Don't have an account?
                    <a
                        href='/register'
                        className='text-indigo-600 hover:underline'
                    >
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
