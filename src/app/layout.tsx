"use client";

import "./globals.css";
import React, { useRef, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import gsap from "gsap";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const addressRef = useRef(null);
    const navRef = useRef<HTMLElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false); // <-- key flag

    const navs = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "My Account", href: "/login" },
    ];

    useEffect(() => {
        // 👇 Only animate once globally
        if (hasAnimated) return;
        setHasAnimated(true);

        const ctx = gsap.context(() => {
            // Animate navbar items (only once)
            if (navRef.current) {
                gsap.fromTo(
                    navRef.current.querySelectorAll("a"),
                    { opacity: 0, y: -20 },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.1,
                        duration: 0.6,
                        ease: "power2.out",
                    }
                );
            }

            // Animate address block (when scrolled into view)
            if (addressRef.current) {
                gsap.fromTo(
                    addressRef.current,
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: addressRef.current,
                            start: "top 85%",
                        },
                        duration: 1,
                        ease: "power2.out",
                    }
                );
            }
        });

        return () => ctx.revert();
    }, [hasAnimated]); // ✅ only triggers the first time

    return (
        <html lang='en'>
            <body
                className={`${inter.className} bg-[#fffaf5] text-[#3a2c27] antialiased`}
            >
                {/* Header */}
                <header className='w-full sticky top-0 bg-[#2c1f1b]/95 backdrop-blur-md z-50 border-b border-[#4d3a32] shadow-lg'>
                    <div className='max-w-7xl mx-auto flex justify-between items-center py-4 px-6'>
                        {/* Brand */}
                        <h1 className='font-serif text-2xl sm:text-3xl text-[#e6c78a] font-bold tracking-wide hover:text-[#d6b365] transition-colors duration-300'>
                            <a href='/'>Ganesh Jewellers</a>
                        </h1>

                        {/* Navigation */}
                        <nav className='hidden sm:flex space-x-3 md:space-x-5'>
                            {[
                                { label: "Home", href: "/" },
                                { label: "About", href: "/about" },
                                { label: "Contact", href: "/contact" },
                                { label: "My Account", href: "/login" },
                            ].map((nav) => (
                                <a
                                    key={nav.href}
                                    href={nav.href}
                                    className='text-[#e6c78a] font-medium tracking-wide px-4 py-2 rounded-lg 
          border border-transparent hover:border-[#d6b365] hover:bg-[#fef9f3]/10 
          hover:text-[#d86d38] transition-all duration-300 ease-in-out'
                                >
                                    {nav.label}
                                </a>
                            ))}
                        </nav>

                        {/* Mobile Menu Placeholder */}
                        <button className='sm:hidden text-[#e6c78a] hover:text-[#d86d38] transition'>
                            ☰
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <main>{children}</main>

                {/* Footer */}
                <section
                    ref={addressRef}
                    className='text-center py-16 px-8 bg-[#3a2c27] text-[#f7efe7]'
                >
                    <h3 className='text-2xl font-serif mb-2'>
                        Visit Our Boutique
                    </h3>
                    <p className='text-sm sm:text-base max-w-md mx-auto leading-relaxed'>
                        Satararoad, Tal-Koregaon, Satara - 415010
                        <br />
                    </p>
                    <p className='mt-4 text-xs text-[#d6c1ae]'>
                        Open daily • 10:00 AM – 8:00 PM
                    </p>
                </section>
            </body>
        </html>
    );
}
