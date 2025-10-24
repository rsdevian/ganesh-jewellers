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
    const mobileNavRef = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const navs = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "My Account", href: "/login" },
    ];

    // 🔹 Sidebar open/close animation
    useEffect(() => {
        const menu = mobileNavRef.current;
        if (!menu) return;

        const openMenu = () => {
            gsap.to(menu, { x: 0, duration: 0.6, ease: "power3.out" });
        };
        const closeMenu = () => {
            gsap.to(menu, { x: "100%", duration: 0.6, ease: "power3.in" });
        };

        const toggleMenu = () => {
            if (document.body.classList.contains("menu-open")) openMenu();
            else closeMenu();
        };

        const observer = new MutationObserver(toggleMenu);
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    // 🔹 Initial page load animation (only once)
    useEffect(() => {
        if (hasAnimated) return;
        setHasAnimated(true);

        const ctx = gsap.context(() => {
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
    }, [hasAnimated]);

    // 🔹 Toggle sidebar visibility
    const toggleSidebar = () => {
        document.body.classList.toggle("menu-open");
    };

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

                        {/* Desktop Navigation */}
                        <nav
                            ref={navRef}
                            className='hidden sm:flex space-x-3 md:space-x-5'
                        >
                            {navs.map((nav) => (
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

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleSidebar}
                            className='sm:hidden text-[#e6c78a] hover:text-[#d86d38] transition text-2xl'
                        >
                            ☰
                        </button>
                    </div>
                </header>

                {/* Mobile Sidebar Navigation */}
                <div
                    ref={mobileNavRef}
                    className='mobile-nav fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#2c1f1b]/95 backdrop-blur-lg 
                    flex flex-col items-center justify-center space-y-8 text-[#e6c78a] text-lg 
                    translate-x-full shadow-2xl z-40'
                >
                    <button
                        onClick={toggleSidebar}
                        className='absolute top-6 right-6 text-3xl hover:text-[#d86d38]'
                    >
                        ✕
                    </button>

                    {navs.map((nav) => (
                        <a
                            key={nav.href}
                            href={nav.href}
                            onClick={toggleSidebar}
                            className='hover:text-[#d86d38] transition text-xl'
                        >
                            {nav.label}
                        </a>
                    ))}
                </div>

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
