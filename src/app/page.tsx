"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const heroRef = useRef(null);
    const showcaseRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Hero fade-in + slight zoom
        gsap.fromTo(
            heroRef.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
        );

        // Jewel cards slide up on scroll
        if (showcaseRef.current) {
            gsap.fromTo(
                showcaseRef.current.querySelectorAll(".jewel-card"),
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: showcaseRef.current,
                        start: "top 80%",
                    },
                    duration: 1,
                    ease: "power3.out",
                }
            );
        }
    }, []);

    return (
        <div className='font-sans bg-gradient-to-b from-[#fffaf5] to-[#f3e3d3] text-[#3a2c27] min-h-screen'>
            {/* Hero Section */}
            <section
                ref={heroRef}
                className='flex flex-col items-center justify-center text-center py-28 px-6'
            >
                <h1 className='text-5xl sm:text-6xl font-serif font-bold mb-4 tracking-tight'>
                    Ganesh Jewellers
                </h1>
                <p className='max-w-xl text-lg sm:text-xl text-[#4a3b34] leading-relaxed'>
                    Crafting timeless elegance — each piece a whisper of
                    artistry and devotion.
                </p>
                <Image
                    src='/demo/hero-real-jewel1.jpg'
                    alt='Luxury jewellery display'
                    width={300}
                    height={300}
                    className='mt-10 rounded-2xl shadow-lg'
                    priority
                />
            </section>

            {/* Showcase Section */}
            <section
                ref={showcaseRef}
                className='grid sm:grid-cols-3 gap-8 px-8 sm:px-16 py-24 bg-white/70 backdrop-blur-sm'
            >
                {[
                    {
                        src: "/demo/necklace-real.jpg",
                        title: "The Eternal Glow",
                        desc: "Handcrafted gold necklace with intricate leaf motifs.",
                    },
                    {
                        src: "/demo/ring-real.jpg",
                        title: "Celestial Ring",
                        desc: "Diamond-studded ring inspired by the night sky.",
                    },
                    {
                        src: "/demo/earrings-real.jpg",
                        title: "Whispering Drops",
                        desc: "Elegant earrings that dance with every light.",
                    },
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className='jewel-card bg-[#fef9f5] border border-[#e8dcd1] rounded-2xl p-6 shadow-md text-center hover:shadow-xl transition-shadow'
                    >
                        <Image
                            src={item.src}
                            alt={item.title}
                            width={250}
                            height={250}
                            className='mx-auto mb-4 rounded-lg'
                        />
                        <h2 className='text-xl font-semibold font-serif mb-2'>
                            {item.title}
                        </h2>
                        <p className='text-sm text-[#5b4b43]'>{item.desc}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
