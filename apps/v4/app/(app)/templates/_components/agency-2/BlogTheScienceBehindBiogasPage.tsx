// @ts-nocheck
"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import { motion, useTransform, useScroll as useViewportScroll } from 'motion/react'

// --- Main Page Component ---
export default function Agency2BlogPage() {
  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <main>
        <BlogHeader />
        <BlogBody />
        <RelatedBlogs />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

// --- Sub-components ---

const Header = () => (
  <motion.header 
    className="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-md"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <Link href="#">
        <Image
          src="/block-assets/agency-2/agency-2-jXsgAANC7gjfWRLPCRJLQYOmHg-64d1e323.svg"
          alt="Biogax Logo"
          width={81}
          height={24}
          priority
        />
      </Link>
      <nav className="hidden lg:flex items-center gap-x-8">
        {['Home', 'About', 'Services', 'Projects', 'Blogs'].map((item) => (
          <Link key={item} href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            {item}
          </Link>
        ))}
      </nav>
      <Link href="#" className="hidden lg:block bg-[#e4ffa1] text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-white transition-colors">
        Contact Us
      </Link>
      <button className="lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>
  </motion.header>
)

const BlogHeader = () => (
  <motion.section 
    className="pt-16 pb-12"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="mx-auto max-w-4xl px-6 text-center">
      <motion.div 
        className="flex items-center justify-center gap-x-4 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <span className="text-sm text-gray-400">General</span>
        <span className="text-gray-600">•</span>
        <span className="text-sm text-gray-400">Jan 28, 2025</span>
      </motion.div>
      <motion.h1 
        className="text-4xl md:text-6xl font-bold font-display tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        The Science Behind Biogas
      </motion.h1>
    </div>
    <motion.div 
      className="mt-16"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <Image
        src="/block-assets/agency-2/agency-2-hbN1ROLIQZbhINtGakqXtNiupN0-53cbe62c.png"
        alt="Biogas facility"
        width={1440}
        height={960}
        className="w-full h-auto"
      />
    </motion.div>
  </motion.section>
)

const BlogBody = () => (
  <div className="prose prose-invert prose-lg mx-auto max-w-3xl px-6 py-16">
    <p>
      Biogas technology is a cornerstone of sustainable agriculture, offering a dual solution for waste management and energy production. By understanding the science that drives this process, farmers can unlock significant benefits, turning organic waste into a valuable resource.
    </p>
    
    <h2>The Anaerobic Digestion Process</h2>
    <p>
      At the heart of biogas production is anaerobic digestion, a biological process where microorganisms break down biodegradable material in the absence of oxygen. This process occurs in four key stages:
    </p>
    <ol>
      <li><strong>Hydrolysis:</strong> Complex organic polymers like carbohydrates, proteins, and fats are broken down into simpler soluble organic molecules.</li>
      <li><strong>Acidogenesis:</strong> Bacteria convert the soluble organic molecules into volatile fatty acids (VFAs), along with ammonia, carbon dioxide, and hydrogen sulfide.</li>
      <li><strong>Acetogenesis:</strong> Acetogenic bacteria then convert these VFAs into acetic acid, carbon dioxide, and hydrogen.</li>
      <li><strong>Methanogenesis:</strong> Finally, methanogenic archaea consume the acetic acid, carbon dioxide, and hydrogen to produce methane and carbon dioxide, the primary components of biogas.</li>
    </ol>

    <figure>
      <Image
        src="/block-assets/agency-2/agency-2-B9j2uEg4qDxPe4vRMj8TIWBzXU-32be425a.png"
        alt="Diagram of anaerobic digestion"
        width={1440}
        height={960}
        className="rounded-lg"
      />
      <figcaption>The four stages of anaerobic digestion convert organic waste into biogas.</figcaption>
    </figure>
    
    <h2>Benefits for Modern Farming</h2>
    <p>
      The adoption of biogas systems provides a multitude of advantages. It's an effective waste management tool that reduces odors and pathogens. The energy produced can be used to power farm operations, decreasing reliance on fossil fuels and lowering utility costs. Furthermore, the nutrient-rich byproduct, known as digestate, is an excellent organic fertilizer that improves soil health and crop yields.
    </p>
    <blockquote>
      <p>"By harnessing the power of anaerobic digestion, we are not just managing waste; we are creating a circular economy on the farm that enhances both profitability and environmental stewardship."</p>
    </blockquote>

    <h2>Factors Influencing Biogas Production</h2>
    <p>
      Several factors can affect the efficiency of biogas production, including temperature, pH levels, substrate composition (feedstock), and the carbon-to-nitrogen ratio. Maintaining optimal conditions within the digester is crucial for maximizing methane yield and ensuring a stable and continuous energy supply.
    </p>
  </div>
)

const RelatedBlogs = () => {
  const relatedPosts = [
    {
      title: "The Science Behind Biogas",
      date: "Jan 28, 2025",
      imageUrl: "https://framerusercontent.com/images/AFkdLzJhwZSOBtXcWOPnZUHSHxY.png?width=640&height=374"
    },
    {
      title: "Composting vs Biogas: Which is Right for Your Farm?",
      date: "Jan 2, 2025",
      imageUrl: "https://framerusercontent.com/images/C90WFDQnqe3GYwgJADaDtp8pao.png?width=640&height=374"
    },
    {
      title: "Breaking down the costs of solar installation",
      date: "Jan 2, 2025",
      imageUrl: "https://framerusercontent.com/images/UahDG39NOhVzp3i9S4sB9IPC0.png?width=500&height=500"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Related Blogs</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {relatedPosts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href="#" className="group block">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={640}
                    height={374}
                    className="w-full h-auto aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold group-hover:text-[#e4ffa1] transition-colors">{post.title}</h3>
                  <p className="text-sm text-gray-400 mt-2">{post.date}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const CTA = () => (
    <section className="py-24">
        <motion.div 
            className="mx-auto max-w-4xl text-center px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to Transform Your Farm With Biogax?</h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="#" className="bg-[#e4ffa1] text-black px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors text-lg">
                    Free Energy Assessment
                </Link>
            </div>
        </motion.div>
    </section>
)

const Footer = () => (
    <footer className="bg-[#0d0d0d] text-[#767676]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4">
                    <Image
                        src="/block-assets/agency-2/agency-2-jXsgAANC7gjfWRLPCRJLQYOmHg-64d1e323.svg"
                        alt="Biogax Logo"
                        width={81}
                        height={24}
                        className="mb-6"
                    />
                     <p className="max-w-xs text-sm">Turn farm waste into clean energy with Biogax.</p>
                </div>

                <div className="lg:col-span-2">
                    <h3 className="font-semibold text-white mb-4">Links</h3>
                    <ul className="space-y-3">
                        {['About', 'Services', 'Projects', 'Blog'].map(link => (
                            <li key={link}><Link href="#" className="hover:text-white transition-colors text-sm">{link}</Link></li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <h3 className="font-semibold text-white mb-4">Socials</h3>
                    <ul className="space-y-3">
                        {['LinkedIn', 'Facebook', 'Instagram'].map(link => (
                             <li key={link}><Link href="#" className="hover:text-white transition-colors text-sm">{link}</Link></li>
                        ))}
                    </ul>
                </div>
                
                <div className="lg:col-span-4">
                     <h3 className="font-semibold text-white mb-4">Contact</h3>
                     <ul className="space-y-4">
                        <li className="flex items-start gap-x-3">
                            <Phone size={18} className="mt-1 text-[#e4ffa1]"/>
                            <div>
                                <p className="text-white font-medium text-sm">Phone No:</p>
                                <p className="text-sm">+542 456 789 963</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-x-3">
                            <Mail size={18} className="mt-1 text-[#e4ffa1]"/>
                            <div>
                                <p className="text-white font-medium text-sm">Email:</p>
                                <p className="text-sm">info@biogax.com</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-x-3">
                            <MapPin size={18} className="mt-1 text-[#e4ffa1]"/>
                            <div>
                                <p className="text-white font-medium text-sm">Address:</p>
                                <p className="text-sm">123 Green Energy Lane, Sustainable City</p>
                            </div>
                        </li>
                     </ul>
                </div>
            </div>
            <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm">
                 <p>© Biogax</p>
                 <div className="flex gap-x-6 mt-4 sm:mt-0">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
                 </div>
            </div>
        </div>
    </footer>
)