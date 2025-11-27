// @ts-nocheck
"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useTransform, useScroll } from "motion/react"
import { ChevronDown, Phone, Mail, MapPin } from 'lucide-react'

// --- Type Definitions ---
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

interface Testimonial {
  quote: string;
  author: string;
  companyLogo: string;
  bgColor: string;
  textColor: string;
  authorColor: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

// --- Sub-components ---

const Header: React.FC = () => {
  const navLinks: NavLinkProps[] = [
    { href: "#", children: "Home" },
    { href: "#", children: "About" },
    { href: "#", children: "Services", isActive: true },
    { href: "#", children: "Projects" },
    { href: "#", children: "Blogs" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#002D25] bg-opacity-80 backdrop-blur-md"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <div className="flex items-center justify-between h-20 text-white">
          <Link href="/">
            <Image
              src="/block-assets/agency-2/agency-2-AFwXQUK9MMdnMdYyZE79TctHdlE-ed7b08fb.svg"
              alt="Biogax Logo"
              width={81}
              height={24}
              priority
            />
          </Link>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`text-sm font-medium ${link.isActive ? 'text-[#E4FFA1]' : 'text-white hover:text-[#E4FFA1]'} transition-colors`}>
                {link.children}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hidden sm:inline-block text-sm font-medium hover:text-[#E4FFA1] transition-colors">
              Book a demo
            </Link>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 text-sm font-semibold text-black bg-[#E4FFA1] rounded-full"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

const HeroSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], ['0%', '20%']);

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-[#002D25]">
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <Image
          src="/block-assets/agency-2/agency-2-1ksMQXYASS408nfxWcXKvyqE3U-aff4d7f0.png"
          alt="Smart Energy Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-20"
        />
      </motion.div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
            Smart Energy, <span className="text-[#E4FFA1]">Expertly Delivered</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-[#EBEBEB]">
            From initial consultation to full-scale implementation, we provide end-to-end biogas solutions tailored to your farm's unique needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-8 py-4 text-base font-semibold text-black bg-white rounded-full"
          >
            Get a Free Assessment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      title: "Biogas Plant Installation",
      description: "From site assessment to commissioning, we deliver full-scale biogas plant solutions. Our team handles every step, ensuring your system is optimized for performance and seamlessly integrated into your operations.",
      imageUrl: "https://framerusercontent.com/images/RW1APUwRBnWStV8j9RrMjt4Lnno.png?width=1933&height=1086"
    },
    {
      title: "Waste-to-Energy Conversion",
      description: "Our expert engineers design custom biogas systems to maximize gas output from your specific waste streams. We turn agricultural residue into a reliable energy source, reducing your costs and environmental footprint.",
      imageUrl: "https://framerusercontent.com/images/9B4OhN8t00b9v63SKazfGQbSgc.png?width=1148&height=1196"
    },
    {
      title: "Biofertilizer Recovery & Soil Enrichment",
      description: "Beyond energy, our systems capture nutrient-rich digestate, a powerful organic biofertilizer. We help you create a closed-loop system that enhances soil health, boosts crop yields, and promotes sustainable farming.",
      imageUrl: "https://framerusercontent.com/images/avxPuQNGe6Opl04xZFP1KVyiw.png?width=1148&height=1196"
    },
  ];
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-black tracking-tight">Eco-Friendly Solutions We Provide</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Powering Farms with Clean, Circular Energy
          </p>
        </motion.div>
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="lg:w-1/2">
                <div className="relative aspect-square lg:aspect-[1.1] rounded-2xl overflow-hidden">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <span className="text-2xl font-mono text-gray-400">0{index + 1}</span>
                <h3 className="mt-2 text-3xl md:text-4xl font-display font-bold text-black tracking-tight">{service.title}</h3>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">{service.description}</p>
                <Link href="#" className="mt-8 inline-block text-black font-semibold group">
                  Learn more
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection: React.FC = () => {
    const testimonials: Testimonial[] = [
      {
        quote: "A team of young people who wake up the market, have expertise in-house and gain experience in the field. All the best for the future!",
        author: "John Doe, CEO of Greenway Farms",
        companyLogo: "https://framerusercontent.com/images/TCKhYzJ9089cauXsbX168cUVsr8.svg?width=104&height=24",
        bgColor: "bg-[#E4FFA1]",
        textColor: "text-black",
        authorColor: "text-gray-700",
      },
      {
        quote: "Biogax's system has revolutionized our waste management and cut our energy bills by over 60%. An essential partner for modern farming.",
        author: "Jane Smith, Owner of Sunnyside Agriculture",
        companyLogo: "https://framerusercontent.com/images/FIOahvlVI8fgV49d39bbW3yXyo.svg?width=102&height=22",
        bgColor: "bg-white",
        textColor: "text-black",
        authorColor: "text-gray-600",
      },
      {
        quote: "The biofertilizer produced by their system is top-notch. Our crop yields have never been better. Truly a sustainable solution.",
        author: "Samuel Lee, Manager at Terra Organics",
        companyLogo: "https://framerusercontent.com/images/j9Z9NEHYEqmkWrVXHl3Hh1zMRhk.svg?width=77&height=22",
        bgColor: "bg-white",
        textColor: "text-black",
        authorColor: "text-gray-600",
      },
    ];

  return (
    <section className="py-20 md:py-32 bg-[#F7F7F7]">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono tracking-widest text-gray-500">TESTIMONIALS</h2>
          <p className="mt-4 text-4xl md:text-6xl font-display font-bold text-black tracking-tight">
            Trusted by Leading Agricultural Innovators
          </p>
        </motion.div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`p-8 md:p-12 rounded-2xl flex flex-col justify-between ${testimonial.bgColor}`}
            >
              <div>
                <Image
                  src={testimonial.companyLogo}
                  alt="Company Logo"
                  width={120}
                  height={30}
                  className="mb-8"
                />
                <p className={`text-xl md:text-2xl font-medium leading-snug ${testimonial.textColor}`}>
                  “{testimonial.quote}”
                </p>
              </div>
              <div className="mt-8">
                <Image
                  src={`https://framerusercontent.com/images/rLJMSxLW8qqmCLwOF8FMDwMrLiQ.png?width=160&height=160`}
                  alt={testimonial.author}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <p className={`mt-4 text-base font-semibold ${testimonial.authorColor}`}>
                  {testimonial.author}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FaqSection: React.FC = () => {
    const faqs: FaqItem[] = [
      {
        question: "How much space does a biogas plant require?",
        answer: "The space required depends on the size of your farm and the volume of waste. Small-scale systems can fit in an area as small as 10x10 meters, while larger commercial plants may require more space. We conduct a free site assessment to determine the perfect fit for your property.",
      },
      {
        question: "What types of waste can be used?",
        answer: "Our systems are designed to process a wide range of organic waste, including livestock manure (cow, pig, poultry), crop residues (straw, husks), food processing waste, and energy crops. We customize the system to handle your specific waste streams.",
      },
      {
        question: "How long does it take to install a biogas system?",
        answer: "Installation time varies based on the project's complexity. A small farm system might take 4-6 weeks from start to finish, while a larger industrial installation could take 3-6 months. We provide a detailed project timeline after the initial assessment.",
      },
      {
        question: "What is the return on investment (ROI)?",
        answer: "The ROI for a biogas system is typically very attractive, with payback periods ranging from 3 to 7 years. This is achieved through significant savings on electricity and gas bills, revenue from selling excess energy to the grid, and the value of the high-quality biofertilizer produced.",
      },
    ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-black tracking-tight">Got questions?</h2>
          <p className="mt-4 text-lg text-gray-500">We've got answers. If you can't find what you're looking for, feel free to contact us.</p>
          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <p className="font-semibold text-black">Still got questions?</p>
            <a href="mailto:hey@biogax.com" className="text-[#E4FFA1] bg-black rounded-lg px-2 py-1 text-sm font-mono mt-2 inline-block">hey@biogax.com</a>
          </div>
        </motion.div>
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="lg:col-span-2 space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <details className="group p-6 border border-gray-200 rounded-xl">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-black text-lg">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


const CtaSection: React.FC = () => {
  return (
    <section className="bg-[#002D25] text-white py-20 md:py-32">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
                    Ready to Transform Your Farm With <span className="text-[#E4FFA1]">Biogax?</span>
                </h2>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
                    Get a free, no-obligation energy assessment to see how much you can save and earn with a custom biogas solution.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-10 px-8 py-4 text-base font-semibold text-black bg-[#E4FFA1] rounded-full"
                >
                    Free Energy Assessment
                </motion.button>
            </motion.div>
        </div>
    </section>
  );
};


const Footer: React.FC = () => {
    return (
        <footer className="bg-[#001F1A] text-white pt-20 pb-10">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1">
                        <Image
                            src="/block-assets/agency-2/agency-2-EikuxwDlcxDhExsrn77csIFZtB0-893d1bc0.svg"
                            alt="Biogax Logo"
                            width={140}
                            height={39}
                        />
                        <p className="mt-6 text-gray-400 text-sm">Turning agricultural waste into clean energy and valuable resources.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">Links</h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Projects</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">Socials</h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">Contact</h3>
                        <ul className="mt-4 space-y-4 text-sm">
                            <li className="flex items-start">
                                <Phone className="w-4 h-4 mr-3 mt-1 text-gray-400"/>
                                <span className="text-gray-400">+542 456 789 963</span>
                            </li>
                            <li className="flex items-start">
                                <Mail className="w-4 h-4 mr-3 mt-1 text-gray-400"/>
                                <span className="text-gray-400">hey@biogax.com</span>
                            </li>
                             <li className="flex items-start">
                                <MapPin className="w-4 h-4 mr-3 mt-1 text-gray-400"/>
                                <span className="text-gray-400">123 Green Energy Ave, Farmville, USA</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <p className="text-gray-500">&copy; {new Date().getFullYear()} Biogax. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-white">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// --- Main Page Component ---
export default function Agency2ServicesPage() {
  return (
    <div className="bg-white font-body">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}