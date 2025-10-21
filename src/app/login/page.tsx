"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const setUserDetails = (details: any) => {
        const userDetails = { ...details, loggedIn: true };
        delete userDetails.message;

        localStorage.setItem(
            "uxsxexrxDxextxaxixlxsx",
            JSON.stringify(userDetails)
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`/api/login`, {
                email,
                password,
            });
            console.log(response);
            if (response.status >= 400) {
                alert("Login failed");
            }

            const userDetails = response.data;

            userDetails && setUserDetails(userDetails);
            router.push("/account");
        } catch (error) {
            console.log("Login error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fffaf5] to-[#f3e3d3] text-[#3a2c27]'>
            <div className='bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-md border border-[#e8dcd1] relative overflow-hidden'>
                {/* Decorative glow */}
                <div className='absolute -top-16 -right-16 w-40 h-40 bg-[#d6b365]/30 rounded-full blur-3xl'></div>

                <h2 className='text-3xl font-serif font-bold mb-8 text-center text-[#3a2c27]'>
                    Welcome Back
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className='space-y-6 relative z-10'
                >
                    {/* Email */}
                    <div>
                        <label
                            htmlFor='email'
                            className='block text-sm font-medium text-[#5b4b43]'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='mt-1 block w-full px-4 py-2 border border-[#d1c1b1] rounded-md shadow-sm focus:ring-[#d6b365] focus:border-[#d6b365] text-[#3a2c27] bg-white/70 transition-all duration-300'
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor='password'
                            className='block text-sm font-medium text-[#5b4b43]'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='mt-1 block w-full px-4 py-2 border border-[#d1c1b1] rounded-md shadow-sm focus:ring-[#d6b365] focus:border-[#d6b365] text-[#3a2c27] bg-white/70 transition-all duration-300'
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        disabled={loading}
                        className={`w-full py-3 px-4 rounded-md font-semibold tracking-wide transition-all duration-300 shadow-md
              ${
                  loading
                      ? "bg-[#bfa883]/60 cursor-not-allowed text-white"
                      : "bg-[#bfa883] hover:bg-[#d6b365] text-[#3a2c27]"
              }`}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className='mt-6 text-center text-sm text-[#5b4b43]'>
                    Don't have an account?{" "}
                    <a
                        href='/register'
                        className='text-[#d86d38] font-medium hover:underline transition-colors duration-200'
                    >
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
