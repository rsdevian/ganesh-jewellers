"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutClient() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-header", {
                opacity: 0,
                y: -40,
                duration: 1.2,
                ease: "power3.out",
            });

            gsap.utils.toArray(".fade-up").forEach((el: any, i) => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                    opacity: 0,
                    y: 40,
                    duration: 1,
                    delay: i * 0.1,
                    ease: "power2.out",
                });
            });

            gsap.from(".about-img", {
                scrollTrigger: {
                    trigger: ".about-img",
                    start: "top 80%",
                },
                scale: 0.9,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out",
            });

            gsap.from(".team-card", {
                scrollTrigger: {
                    trigger: ".team-card",
                    start: "top 90%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className='min-h-screen px-6 py-20 bg-gradient-to-b from-[#fffaf5] to-[#f3e3d3] text-[#3a2c27]'
        >
            <div className='max-w-7xl mx-auto'>
                <header className='about-header text-center mb-12'>
                    <h1 className='text-4xl sm:text-5xl font-serif font-bold text-[#bfa883]'>
                        Our Story
                    </h1>
                    <p className='mt-4 text-lg max-w-2xl mx-auto text-[#5b4b43]'>
                        Rooted in tradition, driven by craft — Ganesh Jeweller
                        blends time-honoured techniques with contemporary design
                        to create heirlooms you’ll cherish.
                    </p>
                </header>

                <div className='grid md:grid-cols-2 gap-10 items-center fade-up'>
                    <div className='space-y-6'>
                        <h2 className='text-2xl font-semibold font-serif text-[#3a2c27]'>
                            Craftsmanship & Heritage
                        </h2>
                        <p className='text-[#5b4b43]'>
                            Each piece passes through the hands of master
                            craftsmen — careful carving, precise setting and
                            patient polishing. We respect the past and shape the
                            future.
                        </p>

                        <h3 className='text-xl font-medium text-[#3a2c27]'>
                            Our Values
                        </h3>
                        <ul className='list-disc list-inside text-[#5b4b43] space-y-2'>
                            <li>Authenticity & transparency</li>
                            <li>Sustainable sourcing</li>
                            <li>Handmade precision</li>
                        </ul>
                    </div>

                    <div className='about-img rounded-2xl overflow-hidden shadow-lg'>
                        <Image
                            src='/demo/about-hero.jpg'
                            alt='Master craftsman polishing jewellery'
                            width={800}
                            height={600}
                            className='w-full h-auto object-cover'
                            priority
                        />
                    </div>
                </div>

                <section className='mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#e8dcd1] fade-up'>
                    <h3 className='text-2xl font-serif text-[#bfa883] mb-4'>
                        Meet the Makers
                    </h3>
                    <div className='grid sm:grid-cols-3 gap-6'>
                        {[
                            { name: "R. K. Patel", title: "Head Goldsmith" },
                            { name: "Meera N.", title: "Design Lead" },
                            { name: "Arun S.", title: "Quality & Finishing" },
                        ].map((p) => (
                            <div
                                key={p.name}
                                className='team-card text-center p-4'
                            >
                                <div className='w-36 h-36 mx-auto rounded-full overflow-hidden shadow-md'>
                                    <Image
                                        src='/demo/person-placeholder.jpg'
                                        alt={p.name}
                                        width={144}
                                        height={144}
                                        className='object-cover'
                                    />
                                </div>
                                <h4 className='mt-4 font-semibold text-[#3a2c27]'>
                                    {p.name}
                                </h4>
                                <p className='text-sm text-[#5b4b43]'>
                                    {p.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#e8dcd1] fade-up'>
                    <h3 className='text-2xl font-serif text-[#bfa883] mb-4'>
                        Meet the Owners
                    </h3>
                    <div className='grid sm:grid-cols-3 gap-6'>
                        {[
                            { name: "R. K. Patel", title: "Head Goldsmith" },
                            { name: "Meera N.", title: "Design Lead" },
                            { name: "Arun S.", title: "Quality & Finishing" },
                        ].map((p) => (
                            <div
                                key={p.name}
                                className='team-card text-center p-4'
                            >
                                <div className='w-36 h-36 mx-auto rounded-full overflow-hidden shadow-md'>
                                    <Image
                                        src='/demo/person-placeholder.jpg'
                                        alt={p.name}
                                        width={144}
                                        height={144}
                                        className='object-cover'
                                    />
                                </div>
                                <h4 className='mt-4 font-semibold text-[#3a2c27]'>
                                    {p.name}
                                </h4>
                                <p className='text-sm text-[#5b4b43]'>
                                    {p.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className='mt-12 text-center fade-up'>
                    <a
                        href='/'
                        className='inline-block mt-4 px-6 py-3 rounded-md border border-[#bfa883] text-[#3a2c27] font-semibold hover:bg-[#fef5e9] hover:text-[#d86d38] transition'
                    >
                        Back to home
                    </a>
                </div>
            </div>
        </section>
    );
}
