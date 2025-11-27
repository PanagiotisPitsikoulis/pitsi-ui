// @ts-nocheck
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown, MapPin, Twitter, Instagram, Linkedin } from "lucide-react";

interface Props {}

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between h-20">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/block-assets/agency-2/agency-2-jXsgAANC7gjfWRLPCRJLQYOmHg-64d1e323.svg"
              alt="Biogax Logo"
              width={81}
              height={24}
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-black hover:text-gray-700 transition-colors">Home</Link>
          <Link href="/about" className="text-black hover:text-gray-700 transition-colors">About</Link>
          <Link href="/services" className="text-black hover:text-gray-700 transition-colors">Services</Link>
          <Link href="/projects" className="text-black hover:text-gray-700 transition-colors">Projects</Link>
          <Link href="/blog" className="text-black hover:text-gray-700 transition-colors">Blogs</Link>
        </div>
        <div className="flex items-center">
          <Link href="/contact" className="hidden lg:inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
            Get a Quote
          </Link>
          <button className="lg:hidden p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  </header>
);

const HeroSection = () => (
  <motion.section 
    className="relative bg-white pt-40 pb-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="absolute inset-0 z-0">
      <Image
        src="/block-assets/agency-2/agency-2-hbN1ROLIQZbhINtGakqXtNiupN0-53cbe62c.png"
        alt="Savannah Agro-Processing Biogas Retrofit background"
        layout="fill"
        objectFit="cover"
        className="opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          className="flex justify-center items-center space-x-4 text-sm font-mono mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="text-gray-600"/>
            <span>Eldoret, Kenya</span>
          </div>
          <span className="text-gray-400">|</span>
          <span className="bg-[#E4FFA1] px-3 py-1 rounded-full text-black text-xs font-semibold">Completed</span>
        </motion.div>
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-black mb-6 font-display"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Savannah Agro-Processing Biogas Retrofit
        </motion.h1>
      </div>
    </div>
  </motion.section>
);

const ProjectFactsSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-mono text-sm uppercase tracking-widest text-gray-500 mb-4">Quick Project Facts</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Before installation, Green Pastures relied on diesel generators to run milk coolers and other equipment, resulting in high fuel costs and carbon emissions. They also faced challenges with manure disposal.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="font-display text-2xl font-bold text-[#E4FFA1]">4-5</span>
              <p className="text-gray-600"><span className="font-semibold text-black">Tons of daily cow dung</span> converted into clean energy.</p>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="flex items-start space-x-4">
              <span className="font-display text-2xl font-bold text-[#E4FFA1]">60%</span>
              <p className="text-gray-600"><span className="font-semibold text-black">Reduction in energy costs</span> after switching from diesel.</p>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="flex items-start space-x-4">
              <span className="font-display text-2xl font-bold text-[#E4FFA1]">80%</span>
              <p className="text-gray-600"><span className="font-semibold text-black">Cut in carbon emissions,</span> improving local air quality.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ImplementationProcessSection = () => {
  const processes = [
    { 
      icon: "https://framerusercontent.com/images/q0Xj51IOrhqEzEdkS3HaJoeLhTI.svg?width=40&height=40",
      title: "Site Audit",
      description: "Performed waste and energy assessment; estimated 4–5 tons of daily cow dung."
    },
    { 
      icon: "https://framerusercontent.com/images/gMcomFVyAU77OO6ZBAHtJGppnfU.svg?width=40&height=40",
      title: "System Design",
      description: "Custom fixed-dome digester with gas storage, slurry outlet, and underground piping."
    },
    { 
      icon: "https://framerusercontent.com/images/Vleih3FEDQMTWvcJRq2ClrXTX8k.svg?width=40&height=40",
      title: "Construction",
      description: "Took 6 weeks with local masonry labor and prefabricated dome components."
    },
    {
      icon: "https://framerusercontent.com/images/JtZFJCIOy8UoVPc85AkFxL3ieKU.svg?width=40&height=40",
      title: "Installation & Integration",
      description: "Biogas piped directly to kitchen, milking parlor, and backup generator."
    },
    { 
      icon: "https://framerusercontent.com/images/WFjrP86bbIjm7UOR34CmMTaHZBI.svg?width=40&height=40",
      title: "Training & Handover",
      description: "Staff trained on maintenance, gas flow control, and slurry reuse."
    }
  ];

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Implementation Process
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {processes.map((process, index) => (
            <motion.div 
              key={index}
              className="flex items-start space-x-6 md:space-x-8 pb-8 mb-8 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image src={process.icon} alt={`${process.title} icon`} width={40} height={40} />
              <div>
                <h4 className="text-xl font-semibold mb-2">{process.title}</h4>
                <p className="text-gray-600">{process.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PhotoGallerySection = () => {
  const images = [
    "https://framerusercontent.com/images/jUKcZrKDJQRp7uU9647k4yJq8.png?width=770&height=580",
    "https://framerusercontent.com/images/cr55pXMIYGX0HACF1UAUFo1HbmA.png?width=770&height=580",
    "https://framerusercontent.com/images/XCCJ3X5IEzDscSEGawiZkdI0R2g.png?width=770&height=580",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Photo Gallery
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {images.map((src, index) => (
            <motion.div 
              key={index}
              className="overflow-hidden rounded-lg aspect-w-4 aspect-h-3"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image src={src} alt={`Gallery image ${index + 1}`} layout="fill" objectFit="cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const RelatedProjectsSection = () => {
  const projects = [
    {
      title: "Nyeri Co-Digestion Pilot",
      location: "Eldoret, Kenya",
      image: "https://framerusercontent.com/images/Q0PuBQNfWFVjyE09cRYDZBWoSb0.png?width=640&height=374",
      link: "#"
    },
    {
      title: "Green Pastures Dairy Biogas Plant",
      location: "Eldoret, Kenya",
      image: "https://framerusercontent.com/images/RFCpzxhpPZyZ0arCxpdMJnuHzg.png?width=640&height=374",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Related Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link href={project.link}>
                <a className="block group">
                  <div className="overflow-hidden rounded-lg mb-6">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      width={640}
                      height={374}
                      objectFit="cover"
                      className="transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{project.title}</h4>
                      <p className="text-sm text-gray-500">{project.location}</p>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 group-hover:bg-black group-hover:text-white transition-colors">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="bg-white py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-black mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Ready to Transform Your Farm With Biogax?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Link href="/contact">
          <a className="inline-block bg-[#E4FFA1] text-black px-10 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow">
            Free Energy Assessment
          </a>
        </Link>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <Image
            src="/block-assets/agency-2/agency-2-EikuxwDlcxDhExsrn77csIFZtB0-893d1bc0.svg"
            alt="Biogax Logo"
            width={120}
            height={34}
          />
        </div>
        <div className="md:col-span-1">
          <h5 className="font-semibold mb-4 font-mono uppercase tracking-wider text-sm text-gray-400">Links</h5>
          <ul className="space-y-3">
            <li><Link href="/about"><a className="hover:text-[#E4FFA1]">About</a></Link></li>
            <li><Link href="/services"><a className="hover:text-[#E4FFA1]">Services</a></Link></li>
            <li><Link href="/projects"><a className="hover:text-[#E4FFA1]">Projects</a></Link></li>
            <li><Link href="/blog"><a className="hover:text-[#E4FFA1]">Blog</a></Link></li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h5 className="font-semibold mb-4 font-mono uppercase tracking-wider text-sm text-gray-400">Socials</h5>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-[#E4FFA1]">LinkedIn</a></li>
            <li><a href="#" className="hover:text-[#E4FFA1]">Twitter</a></li>
            <li><a href="#" className="hover:text-[#E4FFA1]">Instagram</a></li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h5 className="font-semibold mb-4 font-mono uppercase tracking-wider text-sm text-gray-400">Contact</h5>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <Image src="/block-assets/agency-2/agency-2-oWpOF5rrrVciB3QGIlSxE0vpyVg-98a77c6c.svg" alt="Phone" width={20} height={20} />
              <span>+542 456 789 963</span>
            </li>
            <li className="flex items-center space-x-3">
              <Image src="/block-assets/agency-2/agency-2-yEyor5A8szdb85fodiHSoHa9k-aac704cd.svg" alt="Email" width={20} height={20} />
              <span>info@biogax.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <Image src="/block-assets/agency-2/agency-2-u2p91z4SkXnb8A14PRexqogPynE-6fc72b07.svg" alt="Address" width={20} height={20} />
              <span>123 Green Way, Eldoret, Kenya</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        <p>© Biogax</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <Link href="/privacy-policy"><a className="hover:text-white">Privacy Policy</a></Link>
          <Link href="/terms-and-conditions"><a className="hover:text-white">Terms & Conditions</a></Link>
        </div>
      </div>
    </div>
  </footer>
);


export default function SavannahAgroProcessingPage() {
  return (
    <div className="bg-white font-body">
      <Header />
      <main>
        <HeroSection />
        <ProjectFactsSection />
        <ImplementationProcessSection />
        <PhotoGallerySection />
        <RelatedProjectsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}