"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const colors = {
  white: '#fff',
  gray: '#767676',
  black: '#000',
  lightGray: '#e8e8e8',
  lighterGray: '#ebebeb',
  accent: '#e4ffa1',
  darkBg: 'rgb(0, 0, 0)',
  lightBg: 'rgb(245, 245, 245)',
  lightGrayTransparent: 'rgba(236, 236, 236, 0.08)',
  divider: 'rgb(209, 209, 209)',
};

const Header = () => (
  <header className="bg-black text-white py-4 px-6 md:px-10 flex justify-between items-center sticky top-0 z-50">
    <div className="flex items-center">
      <Link href="/">
        <Image
          src="/block-assets/agency-2/agency-2-jXsgAANC7gjfWRLPCRJLQYOmHg-64d1e323.svg"
          alt="Biogax Logo"
          width={81}
          height={24}
        />
      </Link>
    </div>
    <nav className="hidden md:flex items-center space-x-8">
      <Link href="/" className="text-sm hover:text-accent transition-colors">Home</Link>
      <Link href="/about" className="text-sm hover:text-accent transition-colors">About</Link>
      <Link href="/services" className="text-sm hover:text-accent transition-colors">Services</Link>
      <Link href="/projects" className="text-sm font-semibold text-accent">Projects</Link>
      <Link href="/blog" className="text-sm hover:text-accent transition-colors">Blogs</Link>
    </nav>
    <div className="flex items-center">
      <Link href="/contact" passHref>
        <button className="bg-accent text-black text-sm font-semibold py-2 px-6 rounded-full hover:bg-white transition-colors">
          Contact Us
        </button>
      </Link>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="bg-black text-white pt-16 pb-24 text-center">
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center space-x-4 mb-4">
        <span className="text-sm font-mono uppercase">Eldoret, Kenya</span>
        <span className="w-1.5 h-1.5 bg-gray rounded-full"></span>
        <span className="text-sm font-mono uppercase">Completed</span>
      </div>
      <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tight leading-tight">Nyeri Co-Digestion Pilot</h1>
    </div>
    <div className="mt-16">
      <Image
        src="/block-assets/agency-2/agency-2-hbN1ROLIQZbhINtGakqXtNiupN0-53cbe62c.png"
        alt="Nyeri Co-Digestion Pilot aerial view"
        width={1440}
        height={960}
        className="w-full h-auto"
        priority
      />
    </div>
  </section>
);

const ProjectFacts = () => (
    <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
                <h2 className="text-lg font-mono text-gray uppercase">Quick Project Facts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <p className="text-5xl font-bold text-accent">4-5</p>
                    <p className="text-gray mt-2">Tons of daily cow dung</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-5xl font-bold text-accent">70%</p>
                    <p className="text-gray mt-2">Reduction in diesel costs</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-5xl font-bold text-accent">100%</p>
                    <p className="text-gray mt-2">Organic fertilizer produced</p>
                </div>
            </div>
        </div>
    </section>
);


const ImplementationProcess = () => {
    const steps = [
        {
            icon: "https://framerusercontent.com/images/q0Xj51IOrhqEzEdkS3HaJoeLhTI.svg?width=40&height=40",
            title: "Site Audit",
            description: "Performed waste and energy assessment; estimated 4–5 tons of daily cow dung.",
        },
        {
            icon: "https://framerusercontent.com/images/gMcomFVyAU77OO6ZBAHtJGppnfU.svg?width=40&height=40",
            title: "System Design",
            description: "Custom fixed-dome digester with gas storage, slurry outlet, and underground piping.",
        },
        {
            icon: "https://framerusercontent.com/images/Vleih3FEDQMTWvcJRq2ClrXTX8k.svg?width=40&height=40",
            title: "Construction",
            description: "Took 6 weeks with local masonry labor and prefabricated dome components.",
        },
        {
            icon: "https://framerusercontent.com/images/JtZFJCIOy8UoVPc85AkFxL3ieKU.svg?width=40&height=40",
            title: "Installation & Integration",
            description: "Biogas piped directly to kitchen, milking parlor, and backup generator.",
        },
        {
            icon: "https://framerusercontent.com/images/WFjrP86bbIjm7UOR34CmMTaHZBI.svg?width=40&height=40",
            title: "Training & Handover",
            description: "Staff trained on maintenance, gas flow control, and slurry reuse.",
        },
    ];

    return (
        <section className="bg-lightBg" style={{backgroundColor: colors.lightBg}}>
            <div className="container mx-auto px-4 py-24">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-lg font-mono text-gray uppercase mb-4">Implementation Process</h2>
                    <p className="text-3xl md:text-4xl font-display">
                        Before installation, Green Pastures relied on diesel generators to run milk
                        chillers and milking machines, and used firewood for water heating.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg">
                            <Image src={step.icon} alt={`${step.title} icon`} width={40} height={40} className="mb-6"/>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-gray">{step.description}</p>
                        </div>
                    ))}
                     <div className="bg-white p-8 rounded-lg md:col-span-2 lg:col-span-1 flex items-center justify-center">
                        <p className="text-gray text-center">Additional details or empty state can be placed here.</p>
                     </div>
                </div>
            </div>
        </section>
    );
};


const PhotoGallery = () => {
    const images = [
        "https://framerusercontent.com/images/jUKcZrKDJQRp7uU9647k4yJq8.png?width=770&height=580",
        "https://framerusercontent.com/images/cr55pXMIYGX0HACF1UAUFo1HbmA.png?width=770&height=580",
        "https://framerusercontent.com/images/XCCJ3X5IEzDscSEGawiZkdI0R2g.png?width=770&height=580",
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-lg font-mono text-gray uppercase">Photo Gallery</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-lg">
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                width={770}
                                height={580}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const RelatedProjects = () => {
    const projects = [
        {
            title: "Savannah Agro-Processing Biogas Retrofit",
            location: "Eldoret, Kenya",
            image: "https://framerusercontent.com/images/AFkdLzJhwZSOBtXcWOPnZUHSHxY.png?width=640&height=374",
            link: "/projects/savannah-agro-processing-biogas-retrofit",
        },
        {
            title: "Green Pastures Dairy Biogas Plant",
            location: "Eldoret, Kenya",
            image: "https://framerusercontent.com/images/RFCpzxhpPZyZ0arCxpdMJnuHzg.png?width=640&height=374",
            link: "/projects/green-pastures-dairy-biogas-plant",
        }
    ];

    return (
        <section className="py-24" style={{backgroundColor: colors.lightBg}}>
            <div className="container mx-auto px-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Link href={project.link} key={index} passHref>
                            <div className="group block bg-white rounded-lg overflow-hidden">
                                <div className="relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={640}
                                        height={374}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                                    <div className="flex items-center text-gray">
                                        <MapPin size={16} className="mr-2" />
                                        <span>{project.location}</span>
                                        <ArrowRight size={20} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

const CTA = () => (
    <section style={{backgroundColor: colors.accent}} className="py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 max-w-4xl mx-auto">Ready to Transform Your Farm With Biogax?</h2>
            <Link href="/contact" passHref>
                <button className="bg-black text-white text-sm font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors">
                    Free Energy Assessment
                </button>
            </Link>
        </div>
    </section>
);

const Footer = () => (
  <footer className="bg-black text-white">
    <div className="container mx-auto px-6 md:px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 mb-8 md:mb-0">
          <Image
            src="/block-assets/agency-2/agency-2-EikuxwDlcxDhExsrn77csIFZtB0-893d1bc0.svg"
            alt="Biogax Logo Large"
            width={208}
            height={58}
            className="mb-8"
          />
          <p className="max-w-sm" style={{color: colors.gray}}>
            Turn farm waste into clean energy with Biogax. Lower energy costs, reduce emissions, and boost productivity with sustainable biogas solutions.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Links</h3>
          <nav className="space-y-3">
            <Link href="/about" className="block text-gray hover:text-white" style={{color: colors.gray}}>About</Link>
            <Link href="/services" className="block text-gray hover:text-white" style={{color: colors.gray}}>Services</Link>
            <Link href="/projects" className="block text-gray hover:text-white" style={{color: colors.gray}}>Projects</Link>
            <Link href="/blog" className="block text-gray hover:text-white" style={{color: colors.gray}}>Blog</Link>
          </nav>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Socials</h3>
          <nav className="space-y-3">
            <a href="#" className="block text-gray hover:text-white" style={{color: colors.gray}}>LinkedIn</a>
            <a href="#" className="block text-gray hover:text-white" style={{color: colors.gray}}>Facebook</a>
            <a href="#" className="block text-gray hover:text-white" style={{color: colors.gray}}>Instagram</a>
          </nav>
        </div>

        <div className="space-y-4">
          <div className="flex items-start">
            <Phone size={24} style={{color: colors.accent}} className="mt-1 mr-4 flex-shrink-0" />
            <div>
              <p className="font-semibold">Phone No:</p>
              <p style={{color: colors.gray}}>+542 456 789 963</p>
            </div>
          </div>
          <div className="flex items-start">
            <Mail size={24} style={{color: colors.accent}} className="mt-1 mr-4 flex-shrink-0" />
            <div>
              <p className="font-semibold">Email:</p>
              <p style={{color: colors.gray}}>info@biogax.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm" style={{color: colors.gray}}>
        <p>©Biogax</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
);


export default function NyeriCoDigestionPilotPage() {
    return (
        <div className="bg-white font-sans">
            <style jsx global>{`
              @import url('https://fonts.googleapis.com/css2?family=Fragment+Mono&family=Inter:wght@400;500;600;700&family=Inter+Tight&display=swap');
              .font-display {
                font-family: 'Inter', sans-serif;
              }
              .font-mono {
                font-family: 'Fragment Mono', monospace;
              }
              .font-sans {
                font-family: 'Inter', sans-serif;
              }
            `}</style>
            <Header />
            <main>
                <HeroSection />
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