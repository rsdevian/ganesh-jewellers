"use client";

// src/app/layout.tsx
import "./globals.css";
import React, { useRef, useEffect } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import gsap from "gsap";
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const addressRef = useRef(null);

    const navs = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About",
            href: "/about",
        },
        {
            label: "Contact",
            href: "/contact",
        },
        { label: "My Account", href: "/login" },
    ];

    useEffect(() => {
        // Address shimmer reveal
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
    });

    return (
        <html lang='en'>
            <body
                className={`${inter.className} bg-[#fffaf5] text-[#3a2c27] antialiased`}
            >
                {/* 1️⃣ Common Header */}
                <header className='w-full sticky top-0 bg-[#3a2c27]/80 backdrop-blur-sm z-50 border-b border-[#e8dcd1] py-4 px-8 flex justify-between items-center'>
                    <h1 className='font-serif text-2xl text-[#d6b365] font-bold'>
                        <a href='/'>Ganesh Jewellers</a>
                    </h1>
                    <nav className='space-x-4 text-black'>
                        {navs.map((nav) => (
                            <a
                                key={nav.href}
                                href={nav.href}
                                className='
  text-[#d6b365] font-bold p-3 border border-[#d6b365] rounded-md
  bg-transparent
  hover:bg-[#fffcfc] hover:text-[#d86d38] 
  transition-colors duration-300 ease-in-out
  shadow-sm hover:shadow-md
'
                            >
                                {nav.label}
                            </a>
                        ))}
                    </nav>
                </header>

                {/* 2️⃣ Page Content */}
                <main>{children}</main>

                {/* Optional Footer */}
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
