// @ts-nocheck
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useTransform, useScroll } from 'motion/react';
import { ArrowRight, ChevronDown, Linkedin, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

// Extracted theme colors as CSS variables for Tailwind JIT compiler to recognize.
// In a real project, these would be in tailwind.config.js
const theme = {
  colors: {
    white: '#fff',
    'custom-gray-300': '#767676',
    black: '#000',
    'custom-gray-100': '#f5f5f5',
    'custom-lime': '#e4ffa1',
    'custom-dark-green': 'rgb(0, 45, 37)',
    'custom-dark-gray': 'rgb(72, 72, 72)',
  },
  fontFamily: {
    display: ['"Inter Display"', 'sans-serif'],
    body: ['Inter', 'sans-serif'],
    mono: ['"Fragment Mono"', 'monospace'],
  }
};


const Header = () => (
  <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 bg-[rgb(0,45,37)]/80 backdrop-blur-md"
  >
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <Link href="/">
        <Image
          src="/block-assets/agency-2/agency-2-AFwXQUK9MMdnMdYyZE79TctHdlE-ed7b08fb.svg"
          alt="Biogax Logo"
          width={81}
          height={24}
          priority
        />
      </Link>
      <nav className="hidden items-center space-x-8 lg:flex">
        {['Home', 'About', 'Services', 'Projects', 'Blogs'].map((item) => (
          <Link
            key={item}
            href="#"
            className="font-body text-white transition-colors hover:text-[#e4ffa1]"
          >
            {item}
          </Link>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <Link href="#">
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="hidden rounded-full bg-white px-6 py-3 font-body font-medium text-black sm:block"
          >
            Contact Us
          </motion.button>
        </Link>
        <button className="p-2 lg:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </motion.header>
);

const HeroSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 500], [0.4, 0.1]);

    return (
        <section className="relative h-screen overflow-hidden bg-black text-white">
            <motion.div 
              className="absolute inset-0"
              style={{ y, opacity }}
            >
                <Image
                    src="/block-assets/agency-2/agency-2-ijA7M2bIu198Azngt0JhntAoqCw-f66bf1c1.png"
                    alt="Biogas facility background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
            </motion.div>
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="px-4"
                >
                    <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
                        Providing renewable energy <br /> the natural way
                    </h1>
                    <p className="font-body mx-auto mt-6 max-w-2xl text-lg text-gray-300">
                        We are committed to pioneering sustainable energy solutions by converting organic waste into clean, reliable biogas.
                    </p>
                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-full bg-white px-8 py-4 font-body font-semibold text-black"
                        >
                            Our Services
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 rounded-full border border-white px-8 py-4 font-body font-semibold text-white"
                        >
                            Book a demo <ArrowRight size={20} />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const AboutSection = () => (
    <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="font-body font-semibold uppercase text-[#767676]">ABOUT US</p>
                    <h2 className="mt-4 font-display text-4xl font-bold text-black lg:text-5xl">
                        Founded in 2025, Nurturing Nature
                    </h2>
                    <p className="font-body mt-6 text-lg text-[rgb(72,72,72)]">
                        Our mission is simple: to make clean energy accessible to farmers by transforming everyday agricultural waste into reliable biogas. We design and install complete systems that help reduce emissions, cut energy costs, and produce organic fertilizer as a valuable byproduct.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center rounded-2xl bg-[#f5f5f5] p-8"
                >
                    <div className="flex -space-x-4">
                        <Image src="/block-assets/agency-2/agency-2-2H2USOQPUgKG50vfbHqvLAh4VF0-799d8baa.png" alt="Happy user 1" width={64} height={64} className="h-16 w-16 rounded-full border-4 border-[#f5f5f5] object-cover" />
                        <Image src="/block-assets/agency-2/agency-2-m1ypHM0Mf38lCVNuS2M7goL8-292f933e.png" alt="Happy user 2" width={64} height={64} className="h-16 w-16 rounded-full border-4 border-[#f5f5f5] object-cover" />
                        <Image src="/block-assets/agency-2/agency-2-ytO3YdcJQSYpAFZzU7Pz9qbvM-992828f4.png" alt="Happy user 3" width={64} height={64} className="h-16 w-16 rounded-full border-4 border-[#f5f5f5] object-cover" />
                    </div>
                    <p className="mt-4 font-body text-2xl font-bold text-black">20K+ Happy Users</p>
                    <p className="font-body mt-2 text-center text-sm text-[rgb(72,72,72)]">
                        Our solar generator provides clean energy, cuts carbon emissions, and supports a greener future.
                    </p>
                </motion.div>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                className="mt-20 grid grid-cols-2 gap-8 text-center md:grid-cols-4 lg:mt-32"
            >
                {[
                    { value: "3.4 M", label: "Tonnes of Organic Waste Processed" },
                    { value: "1.2 M", label: "MWh of Clean energy generated" },
                    { value: "4.5 K", label: "Farms Employed Our System" },
                    { value: "98%", label: "Client Satisfaction Rate" },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition:{duration: 0.5}} }}
                    >
                        <p className="font-display text-4xl font-bold text-black lg:text-5xl">{stat.value}</p>
                        <p className="font-body mt-2 text-sm text-[#767676] lg:text-base">{stat.label}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

const ValuesSection = () => (
    <section className="bg-[#f5f5f5] py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <p className="font-body font-semibold uppercase text-[#767676]">OUR VALUES</p>
                <h2 className="mt-4 font-display text-4xl font-bold text-black lg:text-5xl">
                    A Cleaner Tomorrow Starts with Biogas
                </h2>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"
            >
                {[
                    { img: "https://framerusercontent.com/images/qjufTCDUQRDIzHZmNK8PLTYKA.jpg?scale-down-to=512&width=980&height=653", icon: "https://framerusercontent.com/images/ceuAWeIcTqQ4PcOmBLlD12nW0.png?width=260&height=200", title: "Sustainable Practices", description: "Our biogas solutions are designed to be both reliable and efficient, reducing waste and lowering emissions." },
                    { img: "https://framerusercontent.com/images/TFMyE3dZVJVbiwyGZ148tTPdtQ.png?scale-down-to=512&width=1200&height=992", icon: "https://framerusercontent.com/images/nydK4lWj3jODJBEup95XjujCE.png?width=260&height=200", title: "Global Expertise", description: "We bring world-class solutions tailored to local needs. From design to deployment, our experience ensures success." },
                    { img: "https://framerusercontent.com/images/hHDsgetwuw5JkcNbeYbanTaOgB4.png?width=620&height=560", icon: "https://framerusercontent.com/images/ceuAWeIcTqQ4PcOmBLlD12nW0.png?width=260&height=200", title: "Reliable and Efficient", description: "Our biogas solutions are designed to be both reliable and efficient, reducing waste and lowering emissions." },
                ].map((value, i) => (
                    <motion.div
                        key={i}
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"} } }}
                        className="group overflow-hidden rounded-2xl bg-white shadow-sm"
                        whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                    >
                        <div className="relative h-60">
                            <Image src={value.img} alt={value.title} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="p-8">
                            <Image src={value.icon} alt="" width={60} height={50} />
                            <h3 className="mt-4 font-display text-2xl font-bold text-black">{value.title}</h3>
                            <p className="font-body mt-2 text-[#767676]">{value.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

const TeamSection = () => {
    const teamMembers = [
        { name: 'Maria Stevens', role: 'Chief Executive Officer (CEO)', img: 'https://framerusercontent.com/images/TFMyE3dZVJVbiwyGZ148tTPdtQ.png?scale-down-to=512&width=1200&height=992' },
        { name: 'John Doe', role: 'Biogas Plant Operator', img: 'https://framerusercontent.com/images/hHDsgetwuw5JkcNbeYbanTaOgB4.png?width=620&height=560' },
        { name: 'Jane Smith', role: 'Sales Lead', img: 'https://framerusercontent.com/images/nYYQuHGIT8ppWi6397u8VkFfAOE.png?width=620&height=560' },
        { name: 'Peter Jones', role: 'Project Manager', img: 'https://framerusercontent.com/images/O3b751TdSronNT5FIhUBQ93rZ4U.png?width=620&height=560' },
        { name: 'Emily Brown', role: 'Maintenance Technician', img: 'https://framerusercontent.com/images/VSAFbSnyAnUhdngBT9qTQnlnHM.png?width=620&height=560' },
        { name: 'Michael Clark', role: 'Environmental Compliance Officer', img: 'https://framerusercontent.com/images/euSrbxkRbFt4OBi7cAc7Dk0NV4.png?width=620&height=560' },
        { name: 'Sarah Wilson', role: 'Process Engineer', img: 'https://framerusercontent.com/images/cmu6R7CrxPZwMXg6xILWIXIs.png?width=620&height=560' },
        { name: 'David Garcia', role: 'Feedstock Manager', img: 'https://framerusercontent.com/images/KkvKDDaKEAFzTtPX93ne6yGI.png?width=620&height=560' },
    ];

    return (
        <section className="bg-white py-20 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <p className="font-body font-semibold uppercase text-[#767676]">OUR LEADERSHIP</p>
                    <h2 className="mt-4 font-display text-4xl font-bold text-black lg:text-5xl">
                        Our Visionary Team
                    </h2>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                >
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={i}
                            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: {duration: 0.5, ease: 'easeOut'} } }}
                            className="group relative overflow-hidden rounded-2xl"
                        >
                            <Image src={member.img} alt={member.name} width={620} height={560} className="h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="font-display text-xl font-bold">{member.name}</h3>
                                <p className="font-body text-sm">{member.role}</p>
                                <motion.div 
                                  className="mt-4 flex space-x-3"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 }}
                                >
                                    <Link href="#" className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"><Linkedin size={20} /></Link>
                                    <Link href="#" className="opacity-0 transition-opacity duration-300 delay-75 group-hover:opacity-100"><Twitter size={20} /></Link>
                                    <Link href="#" className="opacity-0 transition-opacity duration-300 delay-150 group-hover:opacity-100"><Instagram size={20} /></Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            layout
            className="border-b border-gray-200 py-6"
        >
            <motion.div layout className="flex cursor-pointer items-center justify-between" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="font-body text-lg font-semibold text-black">{question}</h3>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <Image src="/block-assets/agency-2/agency-2-pD8AQnlWCfahDWxSrK7Y3O5VPY8-9831d4d3.svg" width={16} height={16} alt="chevron" />
                </motion.div>
            </motion.div>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <p className="font-body pt-4 text-gray-600">{answer}</p>
                </motion.div>
            )}
        </motion.div>
    );
};

const FaqSection = () => {
    const faqs = [
        { question: 'What is biogas and how is it produced?', answer: 'Biogas is a renewable energy source produced from the breakdown of organic matter, such as agricultural waste, manure, and food scraps, in an oxygen-free environment. This process, called anaerobic digestion, creates a mixture of methane and carbon dioxide that can be used for electricity, heat, and fuel.' },
        { question: 'What are the main benefits of using biogas?', answer: 'The main benefits include waste reduction, clean energy production, reduced greenhouse gas emissions, and the creation of a nutrient-rich fertilizer as a byproduct. It helps farms become more sustainable and energy-independent.' },
        { question: 'Is biogas safe for my farm?', answer: 'Yes, our biogas systems are designed with the highest safety standards. They are fully enclosed and equipped with monitoring systems to ensure safe and efficient operation. We also provide comprehensive training and ongoing support.' },
        { question: 'How much space does a biogas digester require?', answer: 'The space required depends on the size of your farm and the amount of waste you produce. We offer a range of solutions, from compact systems for small farms to large-scale installations for commercial operations. Our team will assess your site to determine the best fit.' },
        { question: 'Can I get a customized biogas solution for my needs?', answer: 'Absolutely. We specialize in tailoring biogas systems to meet the unique needs of each farm. Our experts will work with you to design a solution that maximizes energy production and integrates seamlessly with your existing infrastructure.' },
    ];

    return (
        <section className="bg-[#f5f5f5] py-20 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="lg:sticky lg:top-24 lg:self-start"
                    >
                        <p className="font-body font-semibold uppercase text-[#767676]">FAQs</p>
                        <h2 className="mt-4 font-display text-4xl font-bold text-black lg:text-5xl">Got questions?</h2>
                        <p className="font-body mt-6 text-lg text-gray-600">
                            Find answers to common questions about biogas, our systems, and how we can help you transform your farm's waste into a valuable resource.
                        </p>
                        <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
                            <p className="font-body font-semibold text-black">Still got questions?</p>
                            <a href="mailto:hey@biogax.com" className="font-body font-bold text-[#e4ffa1] hover:underline">hey@biogax.com</a>
                        </div>
                    </motion.div>
                    <div className="lg:col-span-2">
                        {faqs.map((faq, i) => (
                             <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                            >
                                <FaqItem question={faq.question} answer={faq.answer} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const CtaSection = () => (
    <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="font-display text-4xl font-bold text-black lg:text-6xl">Ready to Transform Your Farm With Biogax?</h2>
                <p className="font-body mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                    Get a free energy assessment to discover how much you can save and earn by converting your farm's waste into clean, renewable energy.
                </p>
                <div className="mt-10">
                    <motion.button
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="rounded-full bg-[#e4ffa1] px-10 py-5 font-body font-bold text-black"
                    >
                        Free Energy Assessment
                    </motion.button>
                </div>
            </motion.div>
        </div>
    </section>
);


const Footer = () => (
    <footer className="bg-[rgb(0,45,37)] font-body text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                <div className="lg:col-span-4">
                    <Image src="/block-assets/agency-2/agency-2-EikuxwDlcxDhExsrn77csIFZtB0-893d1bc0.svg" alt="Biogax Logo" width={150} height={42} />
                    <p className="mt-4 max-w-xs text-gray-300">
                        Pioneering sustainable energy solutions for a greener future.
                    </p>
                </div>

                <div className="lg:col-span-2">
                    <h3 className="font-bold">Links</h3>
                    <ul className="mt-4 space-y-3">
                        {['About', 'Services', 'Projects', 'Blog'].map(link => (
                            <li key={link}><Link href="#" className="text-gray-300 transition-colors hover:text-[#e4ffa1]">{link}</Link></li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <h3 className="font-bold">Socials</h3>
                    <ul className="mt-4 space-y-3">
                        {['LinkedIn', 'Twitter', 'Instagram'].map(link => (
                            <li key={link}><Link href="#" className="text-gray-300 transition-colors hover:text-[#e4ffa1]">{link}</Link></li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-4">
                    <h3 className="font-bold">Contact</h3>
                    <ul className="mt-4 space-y-4">
                        <li className="flex items-start gap-3">
                            <Image src="/block-assets/agency-2/agency-2-oWpOF5rrrVciB3QGIlSxE0vpyVg-98a77c6c.svg" alt="phone icon" width={24} height={24} className="mt-1" />
                            <div>
                                <p className="font-semibold">Phone No:</p>
                                <a href="tel:+542456789963" className="text-gray-300 hover:text-white">+542 456 789 963</a>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Image src="/block-assets/agency-2/agency-2-yEyor5A8szdb85fodiHSoHa9k-aac704cd.svg" alt="mail icon" width={24} height={24} className="mt-1" />
                            <div>
                                <p className="font-semibold">Email:</p>
                                <a href="mailto:hey@biogax.com" className="text-gray-300 hover:text-white">hey@biogax.com</a>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Image src="/block-assets/agency-2/agency-2-u2p91z4SkXnb8A14PRexqogPynE-6fc72b07.svg" alt="map pin icon" width={24} height={24} className="mt-1" />
                            <div>
                                <p className="font-semibold">Address:</p>
                                <p className="text-gray-300">123 Green Energy Lane, Sustainable City, 45678</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400 sm:flex sm:justify-between">
                <p>&copy; {new Date().getFullYear()} Biogax. All Rights Reserved.</p>
                <div className="mt-4 space-x-6 sm:mt-0">
                    <Link href="#" className="hover:text-white">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white">Terms & Conditions</Link>
                </div>
            </div>
        </div>
    </footer>
);

export default function Agency2AboutPage() {
  return (
    <div className="bg-white" style={{ fontFamily: theme.fontFamily.body.join(', ') }}>
      <style jsx global>{`
        .font-display { font-family: ${theme.fontFamily.display.join(', ')}; }
        .font-body { font-family: ${theme.fontFamily.body.join(', ')}; }
        .font-mono { font-family: ${theme.fontFamily.mono.join(', ')}; }
      `}</style>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ValuesSection />
        <TeamSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}