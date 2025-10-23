"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<
        null | "idle" | "sending" | "sent" | "error"
    >(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Start everything invisible (prevents flicker)
            gsap.set([headerRef.current, formRef.current], {
                opacity: 0,
                y: 40,
            });

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.to(headerRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
            })
                .to(
                    formRef.current,
                    { opacity: 1, y: 0, duration: 0.9 },
                    "-=0.4"
                )
                .from(
                    formRef.current?.querySelectorAll(
                        "input, textarea, button"
                    ) || [],
                    {
                        opacity: 0,
                        y: 20,
                        stagger: 0.1,
                        duration: 0.6,
                    },
                    "-=0.3"
                );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            if (!res.ok) throw new Error("Network error");

            setStatus("sent");
            setName("");
            setEmail("");
            setMessage("");
        } catch (err) {
            console.error("Contact submit error:", err);
            setStatus("error");
        } finally {
            setTimeout(() => setStatus("idle"), 2500);
        }
    };

    return (
        <section
            ref={containerRef}
            className='min-h-screen px-6 py-20 bg-[#fffaf5] text-[#3a2c27]'
        >
            <div className='max-w-3xl mx-auto'>
                <header ref={headerRef} className='text-center mb-10'>
                    <h1 className='text-3xl sm:text-4xl font-serif text-[#bfa883] font-bold'>
                        Get in touch
                    </h1>
                    <p className='mt-3 text-[#5b4b43]'>
                        Questions about a piece? Custom orders? Drop us a line —
                        we reply quickly.
                    </p>
                </header>

                <div className='bg-white/95 backdrop-blur-md p-8 rounded-2xl border border-[#e8dcd1] shadow-lg'>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='space-y-5'
                    >
                        <div>
                            <label className='block text-sm font-medium text-[#5b4b43]'>
                                Name
                            </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className='mt-1 w-full px-4 py-2 rounded-md border border-[#dcd7d2] focus:ring-2 focus:ring-[#d6b365] focus:border-[#d6b365]'
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-[#5b4b43]'>
                                Email
                            </label>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className='mt-1 w-full px-4 py-2 rounded-md border border-[#dcd7d2] focus:ring-2 focus:ring-[#d6b365] focus:border-[#d6b365]'
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-[#5b4b43]'>
                                Message
                            </label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows={6}
                                className='mt-1 w-full px-4 py-2 rounded-md border border-[#dcd7d2] focus:ring-2 focus:ring-[#d6b365] focus:border-[#d6b365] resize-none'
                            />
                        </div>

                        <div className='flex items-center gap-4'>
                            <button
                                type='submit'
                                disabled={status === "sending"}
                                className={`px-5 py-2 rounded-md font-semibold transition ${
                                    status === "sending"
                                        ? "bg-[#bfa883]/60 text-[#2a1f1b] cursor-not-allowed"
                                        : "bg-[#bfa883] text-[#2a1f1b] hover:bg-[#d6b365]"
                                }`}
                            >
                                {status === "sending"
                                    ? "Sending..."
                                    : "Send Message"}
                            </button>

                            <div className='text-sm text-[#5b4b43]'>
                                {status === "sent" && (
                                    <span className='text-[#2a7a33]'>
                                        Thanks — we’ll reply soon.
                                    </span>
                                )}
                                {status === "error" && (
                                    <span className='text-[#b02a2a]'>
                                        Failed to send. Try again.
                                    </span>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
