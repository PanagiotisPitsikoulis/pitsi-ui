// @ts-nocheck
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, Linkedin, Instagram, Twitter } from 'lucide-react';

const Header = () => (
  <header className="bg-black text-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
    <Link href="/" passHref>
      <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
        <Image
          src="/block-assets/agency-2/agency-2-jXsgAANC7gjfWRLPCRJLQYOmHg-64d1e323.svg"
          alt="Biogax Logo"
          width={81}
          height={24}
          className="w-auto h-6"
        />
      </motion.div>
    </Link>
    <nav className="hidden md:flex items-center gap-8">
      {['Home', 'About', 'Services', 'Projects', 'Blogs'].map((item) => (
        <Link href={`#${item.toLowerCase()}`} key={item} passHref>
          <motion.a
            whileHover={{ y: -2 }}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            {item}
          </motion.a>
        </Link>
      ))}
    </nav>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-[#e4ffa1] text-black px-6 py-3 rounded-full text-sm font-bold"
    >
      Contact
    </motion.button>
  </header>
);

const BlogHero = () => (
    <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-black text-white pt-24 pb-12 md:pt-32 md:pb-24 px-6 md:px-12 text-center"
    >
        <div className="max-w-4xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center justify-center gap-4 text-sm mb-4"
            >
                <span className="bg-[#e4ffa1] text-black rounded-full px-3 py-1 text-xs font-bold">CLEAN ENERGY</span>
                <span className="text-gray-400">JAN 28, 2025</span>
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8"
            >
                How Biofertilizer Can Restore Soil Health Naturally
            </motion.h1>
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="relative aspect-video w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl"
            >
                <Image
                    src="/block-assets/agency-2/agency-2-hbN1ROLIQZbhINtGakqXtNiupN0-53cbe62c.png"
                    alt="Biofertilizer restoring soil health"
                    layout="fill"
                    objectFit="cover"
                />
            </motion.div>
        </div>
    </motion.section>
);


const BlogContent = () => (
  <article className="bg-white py-16 md:py-24 px-6 md:px-12">
    <div className="max-w-2xl mx-auto prose prose-lg prose-gray">
        <p>In the quest for sustainable agriculture, the health of our soil is paramount. For decades, conventional farming has relied heavily on chemical fertilizers, which, while boosting crop yields, have often led to soil degradation, water pollution, and a decline in biodiversity. However, a natural and powerful alternative is gaining momentum: biofertilizers.</p>

        <h2>What Are Biofertilizers?</h2>
        <p>Biofertilizers are substances that contain living microorganisms which, when applied to seeds, plant surfaces, or soil, colonize the rhizosphere or the interior of the plant and promote growth by increasing the supply or availability of primary nutrients to the host plant. They are an essential component of organic farming and a promising tool for sustainable agriculture.</p>

        <figure>
            <Image
                src="/block-assets/agency-2/agency-2-B9j2uEg4qDxPe4vRMj8TIWBzXU-32be425a.png"
                alt="Close-up of healthy soil"
                width={1440}
                height={960}
                className="rounded-lg"
            />
            <figcaption>Biofertilizers enrich the soil with essential microorganisms.</figcaption>
        </figure>

        <h2>How Do They Restore Soil Health?</h2>
        <p>Biofertilizers work through several mechanisms to improve soil health:</p>
        
        <h3>1. Nitrogen Fixation</h3>
        <p>Some bacteria, like Rhizobium and Azotobacter, can convert atmospheric nitrogen into ammonia, a form that plants can absorb. This natural process reduces the need for synthetic nitrogen fertilizers, which are energy-intensive to produce and can harm the environment.</p>

        <h3>2. Phosphorus Solubilization</h3>
        <p>Phosphorus is a vital nutrient for plant growth, but much of it in the soil is in an insoluble form. Certain bacteria and fungi in biofertilizers can solubilize this phosphorus, making it available for plant uptake.</p>

        <h3>3. Enhancing Plant Growth</h3>
        <p>Biofertilizers produce plant growth-promoting substances like hormones (e.g., auxins, gibberellins) and vitamins. These substances help in better seed germination, root development, and overall plant vigor.</p>

        <h3>4. Improving Soil Structure</h3>
        <p>The microorganisms in biofertilizers help bind soil particles into aggregates, which improves soil structure. This leads to better aeration, water retention, and reduced soil erosion.</p>

        <h2>The Biogax Connection</h2>
        <p>At Biogax, we understand that sustainable energy and sustainable agriculture go hand-in-hand. The digestate produced from our anaerobic digestion process is a nutrient-rich biofertilizer. By returning this organic matter to the land, we complete the nutrient cycle, enriching the soil and supporting healthier crop growth. It's a perfect example of a circular economy in action, where waste is transformed into valuable resources.</p>
        
        <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="!mt-0">Conclusion</h3>
            <p>The shift towards biofertilizers is not just a trend; it's a necessary step towards a more sustainable and resilient agricultural system. By harnessing the power of nature's own microorganisms, we can restore soil health, reduce our environmental footprint, and grow healthier food for future generations.</p>
        </div>
    </div>
  </article>
);


const RelatedBlogs = () => {
    const blogs = [
        {
            title: "The Science Behind Biogas: From Waste to Energy",
            date: "Jan 15, 2025",
            category: "Clean Energy",
            image: "https://framerusercontent.com/images/Q0PuBQNfWFVjyE09cRYDZBWoSb0.png?width=640&height=374"
        },
        {
            title: "Are solar panels worth it in the UK?",
            date: "Jan 2, 2025",
            category: "Renewable Energy",
            image: "https://framerusercontent.com/images/PlcVB6AikEmLjkqqMvquZfhTc.png?width=482&height=485"
        },
        {
            title: "Powering Farms with Clean, Circular Energy",
            date: "Dec 20, 2024",
            category: "Sustainability",
            image: "https://framerusercontent.com/images/GQ74PRdN0Sa0URJekhMRrIxHI.png?width=501&height=500"
        }
    ];

    return (
        <section className="bg-gray-50 py-16 md:py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">Related Blogs</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <Link href="#" passHref>
                                <a className="block">
                                    <div className="relative aspect-video">
                                        <Image src={blog.image} alt={blog.title} layout="fill" objectFit="cover" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 text-xs mb-2">
                                            <span className="bg-gray-100 text-gray-800 rounded-full px-2 py-0.5 font-semibold">{blog.category}</span>
                                            <span className="text-gray-500">{blog.date}</span>
                                        </div>
                                        <h3 className="font-bold font-display text-lg mb-2 group-hover:text-green-600 transition-colors">{blog.title}</h3>
                                        <div className="flex items-center text-sm font-semibold text-green-600 mt-4">
                                            Read More <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
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


const CTA = () => (
    <section className="bg-black text-white py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8"
            >
                Ready to Transform Your Farm With Biogax?
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }} 
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#e4ffa1] text-black rounded-full px-10 py-5 text-lg font-bold"
                >
                    Free Energy Assessment
                </motion.button>
            </motion.div>
        </div>
    </section>
);


const Footer = () => (
    <footer className="bg-[#121212] text-gray-400">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <Image
                      src="/block-assets/agency-2/agency-2-EikuxwDlcxDhExsrn77csIFZtB0-893d1bc0.svg"
                      alt="Biogax logo"
                      width={120}
                      height={40}
                      className="mb-4"
                    />
                    <p className="text-sm max-w-xs">Turn farm waste into clean energy. Lower costs, reduce emissions, and boost productivity.</p>
                </div>
                <div className="md:col-span-2">
                    <h3 className="font-semibold text-white mb-4">Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="#"><a className="hover:text-white transition">About</a></Link></li>
                        <li><Link href="#"><a className="hover:text-white transition">Services</a></Link></li>
                        <li><Link href="#"><a className="hover:text-white transition">Projects</a></Link></li>
                        <li><Link href="#"><a className="hover:text-white transition">Blog</a></Link></li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <h3 className="font-semibold text-white mb-4">Socials</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="#"><a className="hover:text-white transition">LinkedIn</a></Link></li>
                        <li><Link href="#"><a className="hover:text-white transition">Instagram</a></Link></li>
                        <li><Link href="#"><a className="hover:text-white transition">Twitter</a></Link></li>
                    </ul>
                </div>
                <div className="md:col-span-4">
                    <h3 className="font-semibold text-white mb-4">Contact</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-3">
                            <Image src="/block-assets/agency-2/agency-2-oWpOF5rrrVciB3QGIlSxE0vpyVg-98a77c6c.svg" width={20} height={20} alt="phone"/> 
                            <span>+542 456 789 963</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Image src="/block-assets/agency-2/agency-2-yEyor5A8szdb85fodiHSoHa9k-aac704cd.svg" width={20} height={20} alt="email"/> 
                            <span>info@biogax.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                             <Image src="/block-assets/agency-2/agency-2-u2p91z4SkXnb8A14PRexqogPynE-6fc72b07.svg" width={20} height={20} alt="address"/> 
                            <span>123 Green Way, Eco City</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
                <p>&copy; {new Date().getFullYear()} Biogax. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="#"><a className="hover:text-white transition">Privacy Policy</a></Link>
                    <Link href="#"><a className="hover:text-white transition">Terms & Conditions</a></Link>
                </div>
            </div>
        </div>
    </footer>
);

export default function Agency2BlogPage() {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <BlogHero />
        <BlogContent />
        <RelatedBlogs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}