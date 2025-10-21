"use client";

import { useEffect } from "react";

const LogoutPage = () => {
    useEffect(() => {
        // Clear user details from localStorage
        localStorage.removeItem("uxsxexrxDxextxaxixlxsx");
        // Optionally, redirect to home or login page
        window.location.href = "/login";
    }, []);

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fffaf5] to-[#f3e3d3] text-[#3a2c27]'>
            <p className='text-xl'>Logging out...</p>
        </div>
    );
};

export default LogoutPage;
