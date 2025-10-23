// src/app/about/page.tsx
import Image from "next/image";

export const metadata = {
    title: "About · Ganesh Jeweller",
    description: "Our story, craftsmanship and values — Ganesh Jeweller.",
};

export default function AboutPage() {
    return (
        <section className='min-h-screen px-6 py-20 bg-gradient-to-b from-[#fffaf5] to-[#f3e3d3] text-[#3a2c27]'>
            <div className='max-w-7xl mx-auto'>
                <header className='text-center mb-12'>
                    <h1 className='text-4xl sm:text-5xl font-serif font-bold text-[#bfa883]'>
                        Our Story
                    </h1>
                    <p className='mt-4 text-lg max-w-2xl mx-auto text-[#5b4b43]'>
                        Rooted in tradition, driven by craft — Ganesh Jeweller
                        blends time-honoured techniques with contemporary design
                        to create heirlooms you’ll cherish.
                    </p>
                </header>

                <div className='grid md:grid-cols-2 gap-10 items-center'>
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

                    <div className='rounded-2xl overflow-hidden shadow-lg'>
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

                <section className='mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#e8dcd1]'>
                    <h3 className='text-2xl font-serif text-[#bfa883] mb-4'>
                        Meet the Makers
                    </h3>
                    <div className='grid sm:grid-cols-3 gap-6'>
                        {[
                            {
                                name: "R. K. Patel",
                                title: "Head Goldsmith",
                                img: "/demo/person-placeholder.jpg",
                            },
                            {
                                name: "Meera N.",
                                title: "Design Lead",
                                img: "/demo/person-placeholder.jpg",
                            },
                            {
                                name: "Arun S.",
                                title: "Quality & Finishing",
                                img: "/demo/person-placeholder.jpg",
                            },
                        ].map((p) => (
                            <div key={p.name} className='text-center p-4'>
                                <div className='w-36 h-36 mx-auto rounded-full overflow-hidden shadow-md'>
                                    <Image
                                        src={p.img}
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
                <section className='mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#e8dcd1]'>
                    <h3 className='text-2xl font-serif text-[#bfa883] mb-4'>
                        Meet the Owners
                    </h3>
                    <div className='grid sm:grid-cols-3 gap-6'>
                        {[
                            {
                                name: "R. K. Patel",
                                title: "Head Goldsmith",
                                img: "/demo/person-placeholder.jpg",
                            },
                            {
                                name: "Meera N.",
                                title: "Design Lead",
                                img: "/demo/person-placeholder.jpg",
                            },
                            {
                                name: "Arun S.",
                                title: "Quality & Finishing",
                                img: "/demo/person-placeholder.jpg",
                            },
                        ].map((p) => (
                            <div key={p.name} className='text-center p-4'>
                                <div className='w-36 h-36 mx-auto rounded-full overflow-hidden shadow-md'>
                                    <Image
                                        src={p.img}
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

                <div className='mt-12 text-center'>
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
