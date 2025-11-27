// @ts-nocheck
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Menu, Phone, Mail, MapPin } from "lucide-react";

const blogPosts = [
  {
    category: "General",
    date: "Jan 28, 2025",
    title: "The Rise of Sustainable Farming",
    imageUrl: "https://framerusercontent.com/images/AFkdLzJhwZSOBtXcWOPnZUHSHxY.png?width=640&height=374",
    link: "#"
  },
  {
    category: "Clean Energy",
    date: "Jan 28, 2025",
    title: "The Science Behind Biogas",
    imageUrl: "https://framerusercontent.com/images/Q0PuBQNfWFVjyE09cRYDZBWoSb0.png?width=640&height=374",
    link: "#"
  },
  {
    category: "Farming Tips",
    date: "Dec 24, 2024",
    title: "Maximizing Crop Yields with Organic Methods",
    imageUrl: "https://framerusercontent.com/images/RFCpzxhpPZyZ0arCxpdMJnuHzg.png?width=640&height=374",
    link: "#"
  },
  {
    category: "Case Studies",
    date: "Dec 14, 2024",
    title: "From Waste to Energy: A Farm's Success Story",
    imageUrl: "https://framerusercontent.com/images/Il7rqLLDzMYBSG4eHKnfbDI2mk.png?width=640&height=374",
    link: "#"
  },
  {
    category: "Soil Health",
    date: "Jul 10, 2025",
    title: "How Biofertilizer Can Restore Soil Health Naturally",
    imageUrl: "https://framerusercontent.com/images/clOKzzCwjM4ImWL0UNh1uJBxps.png?width=640&height=374",
    link: "#"
  },
  {
    category: "General",
    date: "Jan 2, 2025",
    title: "Innovations in Agricultural Technology",
    imageUrl: "https://framerusercontent.com/images/C90WFDQnqe3GYwgJADaDtp8pao.png?width=640&height=374",
    link: "#"
  }
];

const Header = () => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="bg-black text-white p-4 flex justify-center items-center fixed top-0 left-0 right-0 z-50 h-[72px]"
  >
    <div className="w-full max-w-7xl px-4 md:px-8 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <Link href="#">
          <Image
            src="/block-assets/agency-2/agency-2-jXsgAANC7gjfWRLPCRJLQYOmHg-64d1e323.svg"
            alt="Biogax Logo"
            width={81}
            height={24}
            priority
          />
        </Link>
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#" className="hover:text-[#e4ffa1] transition-colors">Home</Link>
          <Link href="#" className="hover:text-[#e4ffa1] transition-colors">About</Link>
          <Link href="#" className="hover:text-[#e4ffa1] transition-colors">Services</Link>
          <Link href="#" className="hover:text-[#e4ffa1] transition-colors">Projects</Link>
          <Link href="#" className="text-[#e4ffa1]">Blog</Link>
        </div>
      </div>
      <div className="hidden md:flex items-center">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="#" className="bg-[#e4ffa1] text-black font-bold py-3 px-6 rounded-full text-sm">
            Contact
            </Link>
        </motion.div>
      </div>
      <div className="md:hidden">
        <Menu className="w-6 h-6" />
      </div>
    </div>
  </motion.nav>
);

const BlogCard = ({ post, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        className="group"
    >
        <Link href={post.link}>
            <div className="overflow-hidden mb-6">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={640}
                    height={374}
                    className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
            </div>
            <div className="text-black">
                <div className="flex items-center text-sm mb-3 text-[#767676]">
                    <span className="font-medium text-black">{post.category}</span>
                    <span className="mx-2 font-light">|</span>
                    <span>{post.date}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold leading-snug flex justify-between items-start group-hover:text-gray-800 transition-colors">
                    <span className="flex-1">{post.title}</span>
                    <motion.div
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center ml-4 flex-shrink-0 transition-all duration-300 group-hover:bg-[#e4ffa1] group-hover:border-[#e4ffa1]"
                    >
                        <Image src="/block-assets/agency-2/agency-2-UiJU9i4Jlh4N9ihhIBlKvqycvYw-cdcde8b5.svg" alt="arrow" width={12} height={6}/>
                    </motion.div>
                </h3>
            </div>
        </Link>
    </motion.div>
);

const Footer = () => (
    <footer className="bg-black text-white pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-5xl md:text-[80px] font-bold leading-none tracking-tighter">Ready to Transform Your Farm With Biogax?</h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex justify-start lg:justify-end"
                >
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Link href="#" className="bg-[#e4ffa1] text-black font-bold py-6 px-10 rounded-full text-lg inline-flex items-center space-x-3">
                            <span>Free Energy Assessment</span>
                            <ArrowRight className="w-5 h-5"/>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
            
            <div className="border-t border-[#1a1a1a] pt-16 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="lg:col-span-1">
                        <Image src="/block-assets/agency-2/agency-2-EikuxwDlcxDhExsrn77csIFZtB0-893d1bc0.svg" alt="Biogax Logo" width={140} height={40} className="mb-6"/>
                    </div>
                    <div>
                        <h4 className="font-bold mb-5 text-base">Links</h4>
                        <ul className="space-y-3 text-[#767676] text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Projects</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-5 text-base">Socials</h4>
                        <ul className="space-y-3 text-[#767676] text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Facebook</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
                        </ul>
                    </div>
                    <div>
                         <h4 className="font-bold mb-5 text-base">Contact</h4>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start space-x-3">
                                <Image src="/block-assets/agency-2/agency-2-oWpOF5rrrVciB3QGIlSxE0vpyVg-98a77c6c.svg" alt="Phone" width={20} height={20} />
                                <div>
                                    <p className="text-[#767676]">Phone No:</p>
                                    <p className="text-white">+542 456 789 963</p>
                                </div>
                            </div>
                             <div className="flex items-start space-x-3">
                                <Image src="/block-assets/agency-2/agency-2-yEyor5A8szdb85fodiHSoHa9k-aac704cd.svg" alt="Email" width={20} height={20} />
                                <div>
                                    <p className="text-[#767676]">Email:</p>
                                    <p className="text-white">info@biogax.com</p>
                                </div>
                            </div>
                             <div className="flex items-start space-x-3">
                                <Image src="/block-assets/agency-2/agency-2-u2p91z4SkXnb8A14PRexqogPynE-6fc72b07.svg" alt="Address" width={20} height={20} />
                                <div>
                                    <p className="text-[#767676]">Address:</p>
                                    <p className="text-white">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#767676]">
                <p>&copy;Biogax</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
                </div>
            </div>
        </div>
    </footer>
);


export default function Agency2BlogPage() {
  const [filter, setFilter] = React.useState("All Blog");

  const filters = ["All Blog", "Clean Energy", "Farming Tips", "Case Studies", "Soil Health", "General"];
  const fontBody = "Inter, sans-serif";
  const fontDisplay = "'Inter Display', sans-serif";

  return (
    <div className="bg-white" style={{ fontFamily: fontBody }}>
      <Header />
      <main className="pt-[72px]">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="text-center py-24 md:py-40 bg-white"
        >
          <div className="max-w-4xl mx-auto px-8">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="text-6xl md:text-8xl font-bold text-black tracking-tighter"
              style={{ fontFamily: fontDisplay }}
            >
              News & Insight
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="mt-6 text-lg md:text-xl text-[#767676] max-w-2xl mx-auto"
            >
              Read the latest from Biogax on biogas, renewable energy, and sustainable farming practices. Tips, guides, and industry updates.
            </motion.p>
          </div>
        </motion.header>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16"
            >
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`py-2 px-5 rounded-full text-sm md:text-base font-medium transition-colors duration-300 ${
                    filter === f
                      ? "bg-black text-white"
                      : "bg-[#fafafa] text-black hover:bg-gray-200"
                  }`}
                >
                  {f}
                </button>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {blogPosts
                .filter(p => filter === 'All Blog' || p.category === filter)
                .map((post, index) => (
                  <BlogCard key={post.title} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}