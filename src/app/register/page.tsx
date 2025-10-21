"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        setLoading(true);
        try {
            // Example: call your register endpoint (uncomment if you have an API)
            const res = await axios.post(`/api/register`, {
                name,
                email,
                password,
            });

            console.log(res.data);
            navigate.push("/login");
            // handle res...
            // await new Promise((r) => setTimeout(r, 800)); // fake delay for demo
            // alert(`Registered: ${name} (${email})`);
        } catch (err) {
            console.error("Register error:", err);
            alert("Registration failed — try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fffaf5] to-[#f3e3d3] text-[#3a2c27]'>
            <div className='relative w-full max-w-md p-10 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#e8dcd1] overflow-hidden'>
                {/* decorative glow (same as login) */}
                <div className='absolute -top-16 -right-16 w-40 h-40 bg-[#d6b365]/30 rounded-full blur-3xl pointer-events-none'></div>

                <h2 className='relative z-10 text-3xl font-serif font-bold text-center mb-6'>
                    Create Account
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className='relative z-10 space-y-5'
                >
                    {/* Name */}
                    <div>
                        <label
                            htmlFor='name'
                            className='block text-sm font-medium text-[#5b4b43]'
                        >
                            Full name
                        </label>
                        <input
                            id='name'
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className='mt-1 w-full px-4 py-2 rounded-md border border-[#dcd7d2] bg-white text-[#3a2c27] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d6b365] focus:border-[#d6b365] transition'
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor='email'
                            className='block text-sm font-medium text-[#5b4b43]'
                        >
                            Email
                        </label>
                        <input
                            id='email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='mt-1 w-full px-4 py-2 rounded-md border border-[#dcd7d2] bg-white text-[#3a2c27] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d6b365] focus:border-[#d6b365] transition'
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
                            id='password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className='mt-1 w-full px-4 py-2 rounded-md border border-[#dcd7d2] bg-white text-[#3a2c27] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d6b365] focus:border-[#d6b365] transition'
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label
                            htmlFor='confirmPassword'
                            className='block text-sm font-medium text-[#5b4b43]'
                        >
                            Confirm Password
                        </label>
                        <input
                            id='confirmPassword'
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className='mt-1 w-full px-4 py-2 rounded-md border border-[#dcd7d2] bg-white text-[#3a2c27] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d6b365] focus:border-[#d6b365] transition'
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type='submit'
                        disabled={loading}
                        className={`w-full py-3 rounded-md font-semibold tracking-wide transition-all duration-300 shadow-md ${
                            loading
                                ? "bg-[#bfa883]/60 text-[#2a1f1b] cursor-not-allowed"
                                : "bg-[#bfa883] hover:bg-[#d6b365] text-[#2a1f1b]"
                        }`}
                    >
                        {loading ? "Creating account..." : "Register"}
                    </button>
                </form>

                <p className='relative z-10 mt-6 text-center text-sm text-[#5b4b43]'>
                    Already have an account?
                    <a
                        href='/login'
                        className='ms-2 text-[#d86d38] font-medium hover:underline'
                    >
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
