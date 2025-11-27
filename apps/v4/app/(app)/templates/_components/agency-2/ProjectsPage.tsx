// @ts-nocheck
"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

// --- Type Definitions ---
interface Project {
  category: string;
  title: string;
  imageUrl: string;
  link: string;
}

// --- Data ---
const projects: Project[] = [
  {
    category: "Dairy Farm",
    title: "Green Pastures Dairy Biogas Plant",
    imageUrl: "https://framerusercontent.com/images/AFkdLzJhwZSOBtXcWOPnZUHSHxY.png?width=640&height=374",
    link: "/projects/green-pastures-dairy-biogas-plant",
  },
  {
    category: "Co-digestion",
    title: "Nyeri Co-digestion Pilot",
    imageUrl: "https://framerusercontent.com/images/Q0PuBQNfWFVjyE09cRYDZBWoSb0.png?width=640&height=374",
    link: "/projects/nyeri-co-digestion-pilot",
  },
  {
    category: "Agro-Processing",
    title: "Savannah Agro-Processing Biogas Retrofit",
    imageUrl: "https://framerusercontent.com/images/RFCpzxhpPZyZ0arCxpdMJnuHzg.png?width=640&height=374",
    link: "/projects/savannah-agro-processing-biogas-retrofit",
  },
];

const archiveProjects = [
    {
      title: "Savannah Agro-Processing Biogas Retrofit",
      category: "Agro-Processing",
      location: "Kenya",
      imageUrl: "https://framerusercontent.com/images/RFCpzxhpPZyZ0arCxpdMJnuHzg.png?width=640&height=374",
    },
    {
      title: "Nyeri Co-digestion Pilot",
      category: "Co-digestion",
      location: "Kenya",
      imageUrl: "https://framerusercontent.com/images/Q0PuBQNfWFVjyE09cRYDZBWoSb0.png?width=640&height=374",
    },
    {
      title: "Green Pastures Dairy Biogas Plant",
      category: "Dairy Farm",
      location: "Kenya",
      imageUrl: "https://framerusercontent.com/images/AFkdLzJhwZSOBtXcWOPnZUHSHxY.png?width=640&height=374",
    },
  ];


// --- Animation Variants ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


// --- Sub-components ---

const Header = () => (
    <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#002D25] bg-opacity-80 backdrop-blur-md"
    >
        <div className="mx-auto max-w-[1440px] px-8 md:px-10 flex items-center justify-between h-[72px]">
            <Link href="/" className="flex-shrink-0">
                <Image
                    src="/block-assets/agency-2/agency-2-AFwXQUK9MMdnMdYyZE79TctHdlE-ed7b08fb.svg"
                    alt="Biogax Logo"
                    width={81}
                    height={24}
                    priority
                />
            </Link>
            <nav className="hidden md:flex items-center gap-x-8 text-white">
                <Link href="/" className="text-base font-medium hover:text-[#E4FFA1] transition-colors">Home</Link>
                <Link href="/about" className="text-base font-medium hover:text-[#E4FFA1] transition-colors">About</Link>
                <Link href="/services" className="text-base font-medium hover:text-[#E4FFA1] transition-colors">Services</Link>
                <Link href="/projects" className="text-base font-medium text-[#E4FFA1]">Projects</Link>
                <Link href="/blog" className="text-base font-medium hover:text-[#E4FFA1] transition-colors">Blogs</Link>
            </nav>
            <div className="hidden md:block">
                 <Link href="/contact" className="px-6 py-3 bg-[#E4FFA1] text-black font-bold rounded-full text-base hover:bg-white transition-colors">
                    Book a demo
                </Link>
            </div>
            <div className="md:hidden">
                <button className="text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </motion.header>
);

const ProjectHero = () => (
    <section className="relative bg-[#002D25] pt-[72px] text-white overflow-hidden">
        <div className="absolute inset-0">
            <Image
                src="/block-assets/agency-2/agency-2-0QowlYqvKT3f7LBXvuigvIcoZWA-f989eda0.png"
                alt="Background illustration"
                layout="fill"
                objectFit="cover"
                className="opacity-20"
            />
        </div>
        <div className="relative max-w-[1440px] mx-auto px-8 md:px-10 py-24 md:py-40 flex flex-col items-center text-center">
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter font-['Inter_Display']">Projects</h1>
                <p className="mt-6 max-w-2xl text-lg md:text-xl text-[#E8E8E8]">
                    From small holder farms to large-scale dairies, our biogas systems are powering agricultural operations around the globe.
                </p>
            </motion.div>
        </div>
    </section>
);


const ProjectsSection = () => (
  <section className="bg-white py-24 md:py-32">
    <div className="max-w-[1440px] mx-auto px-8 md:px-10">
      <motion.div 
        className="text-center md:text-left"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="font-['Fragment_Mono'] text-sm uppercase text-[#767676] tracking-[0.2em]">SEE OUR PROJECTS</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter text-black max-w-2xl mx-auto md:mx-0">
          See How We’re Powering Change Around the World
        </h2>
      </motion.div>

      <motion.div 
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Link href={project.link} className="group block">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={640}
                  height={374}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-6">
                <p className="font-['Fragment_Mono'] text-sm uppercase text-[#767676]">{project.category}</p>
                <h3 className="mt-2 text-2xl font-bold text-black group-hover:text-[#002D25] transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);


const MoreProjectsSection = () => (
    <section className="bg-[#F8F8F8] py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-8 md:px-10">
        <motion.div 
          className="text-left"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="font-['Fragment_Mono'] text-sm uppercase text-[#767676] tracking-[0.2em]">Archieves</p>
        </motion.div>
        
        <motion.div 
          className="mt-12 space-y-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {archiveProjects.map((project, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Link href="#" className="group">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-[#EBEBEB] pb-10">
                   <div className="md:col-span-4 lg:col-span-3">
                     <div className="overflow-hidden rounded-lg">
                       <Image
                         src={project.imageUrl}
                         alt={project.title}
                         width={640}
                         height={374}
                         className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                       />
                     </div>
                   </div>
                   <div className="md:col-span-4 lg:col-span-5">
                     <p className="font-['Fragment_Mono'] text-sm uppercase text-[#767676]">{project.category}</p>
                     <h3 className="mt-2 text-3xl font-bold text-black">{project.title}</h3>
                   </div>
                   <div className="md:col-span-2 lg:col-span-2">
                     <p className="text-lg text-[#767676]">{project.location}</p>
                   </div>
                   <div className="md:col-span-2 lg:col-span-2 flex justify-start md:justify-end">
                     <div className="h-14 w-14 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-[#E4FFA1] transition-colors">
                       <ArrowRight className="w-6 h-6 text-black" />
                     </div>
                   </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

const CTASection = () => (
    <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8 md:px-10 text-center">
             <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
             >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
                    Ready to Transform Your Farm With Biogax?
                </h2>
                <div className="mt-10 flex justify-center">
                    <Link href="/contact" className="inline-flex items-center gap-x-2 px-8 py-4 bg-[#E4FFA1] text-black font-bold rounded-full text-lg hover:bg-black hover:text-white transition-all duration-300 group">
                        <span>Free Energy Assessment</span>
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
             </motion.div>
        </div>
    </section>
);


const Footer = () => (
    <footer className="bg-[#002D25] text-white pt-24 pb-8">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10">
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div variants={fadeIn} className="lg:col-span-1">
                    <Image
                        src="/block-assets/agency-2/agency-2-EikuxwDlcxDhExsrn77csIFZtB0-893d1bc0.svg"
                        alt="Biogax Logo"
                        width={150}
                        height={42}
                    />
                </motion.div>
                <motion.div variants={fadeIn}>
                    <h4 className="font-['Fragment_Mono'] text-sm uppercase tracking-[0.2em] text-[#EBEBEB]">Links</h4>
                    <ul className="mt-6 space-y-4">
                        <li><Link href="/about" className="hover:text-[#E4FFA1]">About</Link></li>
                        <li><Link href="/services" className="hover:text-[#E4FFA1]">Services</Link></li>
                        <li><Link href="/projects" className="hover:text-[#E4FFA1]">Projects</Link></li>
                        <li><Link href="/blog" className="hover:text-[#E4FFA1]">Blog</Link></li>
                    </ul>
                </motion.div>
                <motion.div variants={fadeIn}>
                    <h4 className="font-['Fragment_Mono'] text-sm uppercase tracking-[0.2em] text-[#EBEBEB]">Socials</h4>
                    <ul className="mt-6 space-y-4">
                        <li><a href="#" className="hover:text-[#E4FFA1]">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-[#E4FFA1]">Twitter</a></li>
                        <li><a href="#" className="hover:text-[#E4FFA1]">Instagram</a></li>
                    </ul>
                </motion.div>
                <motion.div variants={fadeIn} className="space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10">
                            <Phone className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <p className="text-sm text-[#EBEBEB]">Phone No:</p>
                            <a href="tel:+542456789963" className="hover:text-[#E4FFA1]">+542 456 789 963</a>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10">
                            <Mail className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <p className="text-sm text-[#EBEBEB]">Email:</p>
                            <a href="mailto:info@biogax.com" className="hover:text-[#E4FFA1]">info@biogax.com</a>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10">
                            <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <p className="text-sm text-[#EBEBEB]">Address:</p>
                            <p>35 Oak St, Greendale, Country</p>
                        </div>
                     </div>
                </motion.div>
            </motion.div>

            <motion.div 
                className="mt-24 pt-8 border-t border-white/10 text-center md:text-left md:flex md:justify-between text-[#767676]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <p>©Biogax</p>
                <div className="flex gap-x-6 justify-center mt-4 md:mt-0">
                    <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                    <Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
                </div>
            </motion.div>
        </div>
    </footer>
);


// --- Main Page Component ---
export default function Agency2ProjectsPage() {
  return (
    <div className="bg-white antialiased font-['Inter']">
      <Header />
      <main>
        <ProjectHero />
        <ProjectsSection />
        <MoreProjectsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}