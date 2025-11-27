// @ts-nocheck
"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Makoa Tanaka',
    role: 'CEO',
    imageUrl: 'https://framerusercontent.com/images/KaEzD9TUAHW5TceCtpIZuW3Sd0.jpg?width=640&height=960',
  },
  {
    name: 'Luna Perez',
    role: 'Rescue Lead',
    imageUrl: 'https://framerusercontent.com/images/IwgnWjAKqzwFAX0glQpmBbD2E.jpg?width=1280&height=853',
  },
  {
    name: 'Kai Thompson',
    role: 'Head Surf Coach',
    imageUrl: 'https://framerusercontent.com/images/iy3qCNKOAZ37Ty395WhvtR7uhA.jpg?width=1280&height=1920',
  },
  {
    name: 'Reef Johnson',
    role: 'Board Specialist',
    imageUrl: 'https://framerusercontent.com/images/eOy6HcB9bqY4YQ06jVSmcHWy43E.jpg?width=1279&height=854',
  },
  {
    name: 'Sierra Collins',
    role: 'Programs Coordinator',
    imageUrl: 'https://framerusercontent.com/images/OnJyQBTnTOJeeDcZtj0YbYgJt5o.png?width=1996&height=2494',
  },
  {
    name: 'Nalu Fernandez',
    role: 'Camp Manager',
    imageUrl: 'https://framerusercontent.com/images/aSbCGEwWv467P0wNgLd5nGqB1iA.jpg?width=1280&height=853',
  },
];

const faqItems: FAQItem[] = [
    {
        question: 'What skill levels do you cater to?',
        answer: 'We welcome everyone, from absolute beginners who have never touched a surfboard to advanced surfers looking to refine their techniques. Our instructors tailor lessons to your specific skill level and goals.'
    },
    {
        question: 'What should I bring to my surf lesson?',
        answer: 'We recommend bringing swimwear, a towel, sunscreen, and a reusable water bottle. We provide the surfboard and a wetsuit. Most importantly, bring a positive attitude and readiness to have fun!'
    },
    {
        question: 'Are your instructors certified?',
        answer: 'Yes, all our instructors are certified by the International Surfing Association (ISA) and have extensive experience in both surfing and teaching. They are also trained in first aid and ocean rescue.'
    },
    {
        question: 'What is your cancellation policy?',
        answer: 'We understand that plans can change. You can cancel or reschedule your lesson up to 24 hours in advance for a full refund. Cancellations made within 24 hours of the lesson are non-refundable.'
    },
    {
        question: 'Do you offer group discounts?',
        answer: 'Absolutely! We offer special rates for groups of 4 or more. It’s a great way to share the surfing experience with friends and family. Please contact us for more details on group bookings.'
    }
];

const Stat = ({ number, text }: { number: string; text: string }) => (
  <motion.div 
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-6xl md:text-8xl font-bold text-[#ff4f01] font-display">{number}</p>
    <p className="text-sm md:text-base text-white/70 font-body">{text}</p>
  </motion.div>
);

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <motion.div 
    className="relative group overflow-hidden rounded-lg"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
  >
    <Image
      src={member.imageUrl}
      alt={member.name}
      width={640}
      height={960}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    <div className="absolute bottom-0 left-0 p-6 md:p-8">
      <h3 className="text-white text-xl md:text-2xl font-bold font-display">{member.name}</h3>
      <p className="text-[#ff4f01] text-sm md:text-base font-medium">{member.role}</p>
    </div>
  </motion.div>
);

const FaqItem = ({ item }: { item: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="border-b border-white/10"
    >
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center py-6 text-left">
        <span className="text-white text-lg md:text-xl font-medium font-body">{item.question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="text-white h-6 w-6" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-[#757575] pb-6 pr-8 font-body">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navLinks = ["About", "Courses", "Locations", "Why Us", "Testimonials"];

    return (
        <header className="absolute top-0 left-0 right-0 z-50 p-6 md:px-12 md:py-8 font-body">
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/block-assets/simple-3/simple-3-BmS69e2QB7ycncVFjIkGd0jsuMg-1d5f9e64.png" alt="Logo" width={32} height={32} />
                    <span className="text-white text-lg font-bold tracking-tight">Surfing</span>
                </Link>
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map(link => (
                        <Link key={link} href="#" className="text-white/80 hover:text-white transition-colors text-sm">{link}</Link>
                    ))}
                </nav>
                <div className="hidden lg:flex">
                     <button className="bg-[#ff4f01] text-white font-medium text-sm px-5 py-2.5 rounded-full hover:bg-opacity-90 transition-all">Book a lesson</button>
                </div>
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(true)} className="text-white">
                        <Menu size={28} />
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                     <motion.div 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 bg-[#090909] p-6 z-50 lg:hidden"
                     >
                        <div className="flex justify-end">
                            <button onClick={() => setIsMenuOpen(false)} className="text-white">
                                <X size={28} />
                            </button>
                        </div>
                        <nav className="flex flex-col items-center justify-center h-full gap-8 text-center">
                            {navLinks.map(link => (
                                <Link key={link} href="#" className="text-white text-2xl font-medium hover:text-[#ff4f01] transition-colors">{link}</Link>
                            ))}
                            <button className="bg-[#ff4f01] text-white font-medium text-xl px-8 py-4 rounded-full mt-4 hover:bg-opacity-90 transition-all">Book a lesson</button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default function AboutPage() {
  return (
    <div className="bg-[#090909] text-white antialiased font-body">
      <Header />

      <main>
        {/* Section 1: Hero */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center">
          <div className="absolute inset-0">
            <Image
              src="/block-assets/simple-3/simple-3-yuLp2Ht67rTokFGIudDWop95NxE-904f8523.jpg"
              alt="Surfer riding a wave"
              layout="fill"
              objectFit="cover"
              className="opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] to-transparent"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 px-4"
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#ff4f01]">About Us</h2>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold font-display mt-4 max-w-4xl mx-auto leading-tight">Riding Waves, Shaping Surfers®</h1>
          </motion.div>
        </section>

        {/* Section 2: Stats */}
        <section className="bg-[#090909] py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              <Stat number="500+" text="Professional" />
              <Stat number="10+" text="Locations" />
              <Stat number="All" text="All Levels" />
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto text-center text-lg md:text-xl text-white/80 mt-16 md:mt-24"
            >
              Learn from ISA-certified instructors with years of real surf experience. Train at some of the world’s most breathtaking and consistent surf spots. All skill levels are welcome.
            </motion.p>
          </div>
        </section>
        
        {/* Section 3: Team */}
        <section className="bg-[#111] py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 md:mb-20"
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#ff4f01]">Dream Team</h2>
              <h3 className="text-4xl md:text-6xl font-extrabold font-display mt-4">Our Instructors</h3>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Section 4: Image Breaker */}
        <section className="h-[50vh] md:h-[80vh] relative overflow-hidden">
            <Image
                src="/block-assets/simple-3/simple-3-XePbHX5a0NtMRBmUhmkNJyEusk0-5c9cd8a1.jpg"
                alt="Surfer silhouetted against a sunset"
                layout="fill"
                objectFit="cover"
            />
        </section>
        
        {/* Section 5: FAQs */}
        <section className="bg-[#090909] py-20 md:py-32">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 md:mb-20"
                >
                    <h2 className="text-sm font-bold uppercase tracking-widest text-[#ff4f01]">FAQs</h2>
                    <h3 className="text-4xl md:text-6xl font-extrabold font-display mt-4">Got Questions?</h3>
                </motion.div>
                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <FaqItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>

        {/* Section 6: CTA Image Breaker */}
        <section className="relative h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-cover bg-center" style={{backgroundImage: 'url(/block-assets/simple-3/simple-3-N4NWX9xdcns9XprsPyCx5LKBsM0-8655a01d.jpg)'}}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-white font-display leading-tight"
                >
                    Start Your Surf Journey
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <button className="mt-8 bg-[#ff4f01] text-white font-bold text-base md:text-lg px-8 py-4 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105">
                        Book Now
                    </button>
                </motion.div>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#090909] py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                         <Link href="/" className="flex items-center gap-3 mb-6">
                            <Image src="/block-assets/simple-3/simple-3-BmS69e2QB7ycncVFjIkGd0jsuMg-1d5f9e64.png" alt="Logo" width={32} height={32} />
                            <span className="text-white text-lg font-bold tracking-tight">Surfing</span>
                        </Link>
                        <p className="text-[#757575] text-sm">Riding Waves, Shaping Surfers®</p>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-white font-bold mb-4">Company</h4>
                            <ul className="space-y-3">
                                {["About", "Courses", "Locations", "Why Us"].map(link => (
                                    <li key={link}><Link href="#" className="text-[#757575] hover:text-white transition-colors text-sm">{link}</Link></li>
                                ))}
                            </ul>
                        </div>
                         <div>
                            <h4 className="text-white font-bold mb-4">Community</h4>
                            <ul className="space-y-3">
                                {["Testimonials", "Instructors", "Gallery"].map(link => (
                                    <li key={link}><Link href="#" className="text-[#757575] hover:text-white transition-colors text-sm">{link}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Support</h4>
                            <ul className="space-y-3">
                                {["Contact", "FAQs", "Privacy Policy"].map(link => (
                                    <li key={link}><Link href="#" className="text-[#757575] hover:text-white transition-colors text-sm">{link}</Link></li>
                                ))}
                            </ul>
                        </div>
                         <div>
                            <h4 className="text-white font-bold mb-4">Follow Us</h4>
                            <ul className="space-y-3">
                                {["Instagram", "Facebook", "Twitter"].map(link => (
                                    <li key={link}><Link href="#" className="text-[#757575] hover:text-white transition-colors text-sm">{link}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 mt-12 pt-8 text-center text-[#757575] text-xs">
                    <p>© 2024 Surfing Institute. All rights reserved. A demonstration of transforming a Framer template to a React component.</p>
                </div>
            </div>
        </footer>

      </main>
    </div>
  );
}