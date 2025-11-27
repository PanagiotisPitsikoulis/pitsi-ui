"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

// Main Page Component
export default function Page() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div className="bg-white font-sans">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main>
                <Hero />
                <ProjectFacts />
                <ImplementationProcess />
                <PhotoGallery />
                <RelatedProjects />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}

// Header Component
const Header = ({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => (
    <header className="bg-black text-white sticky top-0 z-50">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" aria-label="Biogax Homepage">
                <Image
                    src="/block-assets/agency-2/agency-2-jXsgAANC7gjfWRLPCRJLQYOmHg-8e00a2f2.svg"
                    alt="Biogax Logo"
                    width={81}
                    height={24}
                    priority
                />
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
                <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</Link>
                <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</Link>
                <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</Link>
                <Link href="#" className="text-sm font-medium text-white">Projects</Link>
                <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Blogs</Link>
            </nav>
            <div className="flex items-center gap-4">
                <Link href="#" className="hidden sm:block bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#e4ffa1] transition-colors">
                    Contact us
                </Link>
                <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>
        {isMenuOpen && (
            <div className="lg:hidden bg-black py-4 px-4">
                <nav className="flex flex-col items-center gap-4">
                    <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white">Home</Link>
                    <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white">About</Link>
                    <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white">Services</Link>
                    <Link href="#" className="text-sm font-medium text-white">Projects</Link>
                    <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white">Blogs</Link>
                    <Link href="#" className="sm:hidden w-full text-center mt-2 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#e4ffa1] transition-colors">
                        Contact us
                    </Link>
                </nav>
            </div>
        )}
    </header>
);

// Hero Component
const Hero = () => (
    <section className="relative h-[60vh] md:h-[calc(100vh-80px)] bg-cover bg-center text-white flex items-center justify-center" style={{backgroundImage: "url('/block-assets/agency-2/agency-2-hbN1ROLIQZbhINtGakqXtNiupN0-53cbe62c.png')"}}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            <div className="flex items-center gap-4 mb-4 font-mono text-sm uppercase tracking-wider text-gray-300">
                <span>Eldoret, Kenya</span>
                <span className="h-4 w-px bg-white/30"></span>
                <span>Completed</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight max-w-4xl" style={{fontFamily: 'Inter Display, sans-serif'}}>
                Green Pastures Dairy Biogas Plant
            </h1>
        </div>
    </section>
);

// ProjectFacts Component
const ProjectFacts = () => (
    <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-black" style={{fontFamily: 'Inter Display, sans-serif'}}>Quick Project Facts</h2>
                    <p className="text-[#767676] mt-4">The biogas system at Green Pastures Dairy Farm converts cow manure into clean, renewable energy.</p>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e8e8e8] border border-[#e8e8e8]">
                    <FactCard title="Sector" value="Dairy Farming" />
                    <FactCard title="Capacity" value="75 m³/day" />
                    <FactCard title="Technology" value="Fixed-Dome Digester" />
                    <FactCard title="Key Benefit" value="70% Reduction in Energy Costs" />
                </div>
            </div>
        </div>
    </section>
);

const FactCard = ({ title, value }: { title: string, value: string }) => (
    <div className="bg-white p-6 md:p-8">
        <p className="text-sm text-[#767676] mb-2">{title}</p>
        <p className="text-lg font-semibold text-black">{value}</p>
    </div>
);

// ImplementationProcess Component
const ImplementationProcess = () => {
    const steps = [
        { icon: "https://framerusercontent.com/images/q0Xj51IOrhqEzEdkS3HaJoeLhTI.svg", title: "Site Audit", description: "Performed waste and energy assessment; estimated 4–5 tons of daily cow dung." },
        { icon: "https://framerusercontent.com/images/gMcomFVyAU77OO6ZBAHtJGppnfU.svg", title: "System Design", description: "Custom fixed-dome digester with gas storage, slurry outlet, and underground piping." },
        { icon: "https://framerusercontent.com/images/Vleih3FEDQMTWvcJRq2ClrXTX8k.svg", title: "Construction", description: "Took 6 weeks with local masonry labor and prefabricated dome components." },
        { icon: "https://framerusercontent.com/images/JtZFJCIOy8UoVPc85AkFxL3ieKU.svg", title: "Installation & Integration", description: "Biogas piped directly to kitchen, milking parlor, and backup generator." },
        { icon: "https://framerusercontent.com/images/WFjrP86bbIjm7UOR34CmMTaHZBI.svg", title: "Training & Handover", description: "Staff trained on maintenance, gas flow control, and slurry reuse." },
    ];

    return (
        <section className="bg-[#f5f5f5] py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-black" style={{fontFamily: 'Inter Display, sans-serif'}}>Implementation Process</h2>
                    <p className="text-[#767676] mt-4">Before installation, Green Pastures relied on diesel generators to run milk chillers and milking machines, and used firewood for water heating.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-6 items-start">
                            <Image src={step.icon} alt="" width={40} height={40} className="flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                <p className="text-[#767676] text-base">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// PhotoGallery Component
const PhotoGallery = () => {
    const images = [
        "https://framerusercontent.com/images/jUKcZrKDJQRp7uU9647k4yJq8.png?width=770&height=580",
        "https://framerusercontent.com/images/cr55pXMIYGX0HACF1UAUFo1HbmA.png?width=770&height=580",
        "https://framerusercontent.com/images/XCCJ3X5IEzDscSEGawiZkdI0R2g.png?width=770&height=580"
    ];

    return (
        <section className="bg-white py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-12" style={{fontFamily: 'Inter Display, sans-serif'}}>Photo Gallery</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {images.map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-lg aspect-[4/3]">
                            <Image src={src} alt={`Gallery image ${index + 1}`} width={770} height={580} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// RelatedProjects Component
const RelatedProjects = () => {
    const projects = [
        { title: "Savannah Agro-Processing Biogas Retrofit", location: "Eldoret, Kenya", image: "https://framerusercontent.com/images/AFkdLzJhwZSOBtXcWOPnZUHSHxY.png?width=640&height=374", link: "#" },
        { title: "Nyeri Co-Digestion Pilot", location: "Eldoret, Kenya", image: "https://framerusercontent.com/images/Q0PuBQNfWFVjyE09cRYDZBWoSb0.png?width=640&height=374", link: "#" },
    ];

    return (
        <section className="bg-[#f5f5f5] py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-12" style={{fontFamily: 'Inter Display, sans-serif'}}>Related Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Link href={project.link} key={index} className="group block">
                            <div className="overflow-hidden rounded-lg mb-6 aspect-video">
                                <Image src={project.image} alt={project.title} width={640} height={374} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-[#767676]">{project.title}</h3>
                            <div className="flex justify-between items-center text-sm text-[#767676]">
                                <span>{project.location}</span>
                                <div className="flex items-center gap-2 text-black font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Project
                                    <Image src="/block-assets/agency-2/agency-2-UiJU9i4Jlh4N9ihhIBlKvqycvYw-cdcde8b5.svg" alt="arrow right" width={16} height={8} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

// CTA Component
const CTA = () => (
    <section className="bg-black text-white py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-8" style={{fontFamily: 'Inter Display, sans-serif'}}>Ready to Transform Your Farm With Biogax?</h2>
            <Link href="#" className="inline-block bg-[#e4ffa1] text-black px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors">
                Free Energy Assessment
            </Link>
        </div>
    </section>
);

// Footer Component
const Footer = () => (
    <footer className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                    <Link href="/" className="inline-block mb-6">
                       <Image src="/block-assets/agency-2/agency-2-jXsgAANC7gjfWRLPCRJLQYOmHg-8e00a2f2.svg" alt="Biogax logo" width={81} height={24} />
                    </Link>
                    <p className="text-[#767676] text-sm max-w-xs">Turn farm waste into clean energy with Biogax.</p>
                </div>
                <div className="lg:col-span-2">
                    <h3 className="font-semibold mb-4">Links</h3>
                    <ul className="space-y-3">
                        <li><Link href="#" className="text-[#767676] hover:text-white text-sm">About</Link></li>
                        <li><Link href="#" className="text-[#767676] hover:text-white text-sm">Services</Link></li>
                        <li><Link href="#" className="text-[#767676] hover:text-white text-sm">Projects</Link></li>
                        <li><Link href="#" className="text-[#767676] hover:text-white text-sm">Blog</Link></li>
                    </ul>
                </div>
                <div className="lg:col-span-2">
                    <h3 className="font-semibold mb-4">Socials</h3>
                     <ul className="space-y-3">
                        <li><Link href="#" className="text-[#767676] hover:text-white text-sm">LinkedIn</Link></li>
                        <li><Link href="#" className="text-[#767676] hover:text-white text-sm">Facebook</Link></li>
                        <li><Link href="#" className="text-[#767676] hover:text-white text-sm">Instagram</Link></li>
                    </ul>
                </div>
                <div className="lg:col-span-4">
                     <h3 className="font-semibold mb-4">Contact</h3>
                     <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Image src="/block-assets/agency-2/agency-2-oWpOF5rrrVciB3QGIlSxE0vpyVg-5faa6440.svg" alt="Phone icon" width={24} height={24} />
                            <div>
                                <p className="text-[#767676] text-xs">Phone No:</p>
                                <p className="text-sm">+542 456 789 963</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-3">
                            <Image src="/block-assets/agency-2/agency-2-yEyor5A8szdb85fodiHSoHa9k-d97d822b.svg" alt="Email icon" width={24} height={24} />
                            <div>
                                <p className="text-[#767676] text-xs">Email:</p>
                                <p className="text-sm">info@biogax.com</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-3">
                            <Image src="/block-assets/agency-2/agency-2-u2p91z4SkXnb8A14PRexqogPynE-e6a10363.svg" alt="Address icon" width={24} height={24} />
                            <div>
                                <p className="text-[#767676] text-xs">Address:</p>
                                <p className="text-sm">Eldoret, Kenya</p>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-[#767676]">
                <p className="order-2 md:order-1 mt-4 md:mt-0">© Biogax</p>
                <div className="order-1 md:order-2 flex gap-6">
                    <Link href="#" className="hover:text-white">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white">Terms & Conditions</Link>
                </div>
            </div>
        </div>
    </footer>
);