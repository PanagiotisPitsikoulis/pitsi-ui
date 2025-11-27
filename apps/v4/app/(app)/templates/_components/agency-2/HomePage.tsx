// @ts-nocheck
"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useTransform, useScroll } from "motion/react"
import { ArrowRight, ChevronDown, Linkedin, Twitter, Instagram, Phone, Mail, MapPin, BookOpen, Star, Award, TrendingUp, CheckCircle, Users, Briefcase, Lightbulb } from 'lucide-react'

// --- Type Definitions ---
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface AwardLogoProps {
  src: string;
  alt: string;
}

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
}

interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  link: string;
}

interface TestimonialCardProps {
  logo: string;
  text: string;
  author: string;
  company: string;
}

interface FaqItemProps {
  question: string;
  answer: string;
}

// --- Sub-components ---

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href} className="text-white hover:text-[#e4ffa1] transition-colors duration-300 text-[16px] font-medium px-4 py-2">
    {children}
  </Link>
);

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-[#002d25]/80 backdrop-blur-sm">
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <Link href="/">
          <Image src="/block-assets/agency-2/agency-2-AFwXQUK9MMdnMdYyZE79TctHdlE-1f826f66.svg" alt="Biogax Logo" width={81} height={24} />
        </Link>
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/blog">Blogs</NavLink>
        </nav>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center justify-center px-6 py-3 bg-[#e4ffa1] text-[#002d25] font-bold rounded-full text-sm"
        >
          Contact Us
          <ArrowRight className="ml-2 w-4 h-4" />
        </motion.button>
      </div>
    </div>
  </header>
);

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section className="relative h-screen min-h-[800px] bg-[#002d25] text-white overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="/block-assets/agency-2/agency-2-f9NvQ83dbDeuMAAoNh05FBHt1mw-7900d83e.png"
          alt="Farmland background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-40"
        />
      </motion.div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-mono text-sm uppercase tracking-widest text-[#e4ffa1]">Farm-Powered Energy</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mt-4 max-w-4xl leading-tight">
            Sustainable Biogas Energy for Modern Agriculture
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center px-8 py-4 bg-[#e4ffa1] text-[#002d25] font-bold rounded-full text-base">
            Book a demo <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center px-8 py-4 bg-transparent border border-white text-white font-bold rounded-full text-base">
            How it works
          </motion.button>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="absolute bottom-10 left-0 right-0 max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
        >
            <StatCard value="1.2M+ tons" label="Organic Waste Processed" />
            <StatCard value="50M+ kWh" label="Clean Energy Installed" />
            <StatCard value="250+" label="Farms Empowered" />
        </motion.div>
      </div>
    </section>
  );
};

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <motion.div
    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
    className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
  >
    <p className="font-display font-bold text-4xl text-[#e4ffa1]">{value}</p>
    <p className="text-white/80 mt-2">{label}</p>
  </motion.div>
);

const brands = [
  { src: "https://framerusercontent.com/images/rHspQO7eR95Gmirx7c5uAclh8.svg", alt: "Brand 1" },
  { src: "https://framerusercontent.com/images/kDgAc9jW9i9H9gsWMJzYbCSFJ6Q.svg", alt: "Brand 2" },
  { src: "https://framerusercontent.com/images/1owsNx2phueT5YvR3zbGTuIJ7M.svg", alt: "Brand 3" },
  { src: "https://framerusercontent.com/images/R5wytmc0EXBl0eI8FG666AhrRn0.svg", alt: "Brand 4" },
  { src: "https://framerusercontent.com/images/vtbhJElO4uLy2RolPcM5TOM07Q.svg", alt: "Brand 5" },
];

const BrandsSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-[1200px] mx-auto px-4 text-center">
      <p className="text-lg text-gray-500">Trusted by top agriculture leader</p>
      <div className="relative mt-12 overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="flex-shrink-0 w-1/5 flex justify-center items-center px-8">
              <Image src={brand.src} alt={brand.alt} width={140} height={35} className="grayscale hover:grayscale-0 transition-all" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const WhatWeDoSection = () => (
  <section className="py-24 bg-[#f7f7f7]">
    <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-sm uppercase tracking-widest text-gray-500">WHAT WE DO</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 text-[#002d25] leading-tight">Powering Farms with Clean, Circular Energy</h2>
        <p className="mt-6 text-lg text-gray-600">We're helping farmers turn waste into opportunity with sustainable biogas systems that fuel productivity and protect the planet. Our mission is simple: to make clean energy accessible to farmers by transforming everyday agricultural waste into reliable biogas.</p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="space-y-6"
      >
        <FeatureCard
          icon={<TrendingUp className="w-8 h-8 text-[#002d25]" />}
          title="Boost Your Farm's Sustainability"
          description="Reduce carbon emissions and your environmental footprint with clean, renewable biogas energy."
        />
        <FeatureCard
          icon={<CheckCircle className="w-8 h-8 text-[#002d25]" />}
          title="Maximize Farm Efficiency"
          description="Cut energy costs and create valuable bio-fertilizer, turning waste streams into revenue streams."
        />
        <FeatureCard
          icon={<Award className="w-8 h-8 text-[#002d25]" />}
          title="Generate Revenue from Waste"
          description="Our custom-designed systems are built to meet the unique needs and scale of your farming operations."
        />
      </motion.div>
    </div>
  </section>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <motion.div
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-start space-x-6"
    >
        <div className="bg-[#e4ffa1] p-4 rounded-full">
            {icon}
        </div>
        <div>
            <h3 className="font-bold text-xl text-[#002d25]">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    </motion.div>
);

const services = [
    {
        image: "https://framerusercontent.com/images/om7WTGKadTNlJ3HPkNyVDE5xXX4.png?scale-down-to=1024&width=2240&height=2600",
        title: "Biogas System Design",
        description: "Custom-engineered biogas solutions tailored to your farm's specific waste output and energy needs."
    },
    {
        image: "https://framerusercontent.com/images/BuD1c6H5KDQ8NtQbVYwFqb4oDCo.png?width=840&height=975",
        title: "Installation & Commissioning",
        description: "Full-service installation and system commissioning by our team of experienced technicians."
    },
    {
        image: "https://framerusercontent.com/images/I5fjViChalLoQLnnaxpIAM1zzI.png?width=841&height=976",
        title: "Operations & Maintenance",
        description: "Ongoing support and maintenance plans to ensure your system runs at peak efficiency year-round."
    }
];

const ServicesSection = () => (
    <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p className="font-mono text-sm uppercase tracking-widest text-gray-500">SERVICES WE OFFER</p>
                <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 text-[#002d25] leading-tight">Clean energy solutions built for farms</h2>
            </motion.div>

            <motion.div
                className="grid md:grid-cols-3 gap-8 mt-16 text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                        className="rounded-2xl overflow-hidden group"
                    >
                        <div className="relative h-80">
                            <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-8 bg-gray-50">
                            <h3 className="font-bold text-2xl text-[#002d25]">{service.title}</h3>
                            <p className="mt-2 text-gray-600">{service.description}</p>
                            <a href="#" className="flex items-center mt-6 text-[#002d25] font-bold group-hover:text-green-700 transition-colors">
                                Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

const processSteps = [
    { step: 1, title: 'Site Audit', description: 'Performed waste and energy assessment; estimated 4–5 tons of daily cow dung.', icon: <BookOpen/> },
    { step: 2, title: 'System Design', description: 'Custom fixed-dome digester with gas storage, slurry outlet, and underground piping.', icon: <Lightbulb/> },
    { step: 3, title: 'Construction', description: 'Took 6 weeks with local masonry labor and prefabricated dome components.', icon: <Briefcase/> },
    { step: 4, title: 'Installation & Integration', description: 'Biogas piped directly to kitchen, milking parlor, and backup generator.', icon: <Users/> },
];

const ProcessSection = () => (
    <section className="py-24 bg-[#002d25] text-white">
        <div className="max-w-[1200px] mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <p className="font-mono text-sm uppercase tracking-widest text-[#e4ffa1]">OUR PROCESS</p>
                <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight">Implementation Process.</h2>
            </motion.div>

            <div className="mt-20">
                <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20" aria-hidden="true"></div>
                    {processSteps.map((item, index) => (
                        <motion.div
                            key={item.step}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            variants={{
                                hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                        >
                            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-[#e4ffa1] text-[#002d25] rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                                            {item.step}
                                        </div>
                                        <h3 className="font-bold text-2xl text-white">{item.title}</h3>
                                    </div>
                                    <p className="mt-4 text-white/80">{item.description}</p>
                                </div>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 bg-[#002d25] p-2 rounded-full border-4 border-[#e4ffa1]">
                                <div className="text-[#e4ffa1] w-6 h-6">{item.icon}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);


const projects = [
    { image: "https://framerusercontent.com/images/gPvWkluhTZcaBGMARUCjYN07DhQ.jpg?width=876&height=584", title: "Green Pastures Dairy Biogas Plant", category: "Dairy Farming" },
    { image: "https://framerusercontent.com/images/eACpYOlzzfJnZBBboMbTCZb1Ck.png?width=438&height=213", title: "Savannah Agro-Processing Retrofit", category: "Agro-Processing" },
    { image: "https://framerusercontent.com/images/rZ1tNz9b9U8RSGNeIgbrTrSEkI.png?width=438&height=213", title: "Nyeri Co-Digestion Pilot", category: "Community Project" }
];

const ProjectsSection = () => (
    <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-between items-end mb-12"
            >
                <div>
                    <p className="font-mono text-sm uppercase tracking-widest text-gray-500">SEE OUR PROJECTS</p>
                    <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 text-[#002d25] leading-tight">See How We’re Powering Change</h2>
                </div>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:flex items-center justify-center px-6 py-3 bg-[#002d25] text-white font-bold rounded-full text-sm">
                    View All Projects
                </motion.button>
            </motion.div>
            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                        className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
                    >
                        <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-500"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <p className="text-sm font-semibold">{project.category}</p>
                            <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                        </div>
                        <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="w-6 h-6 text-white"/>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

const testimonials = [
    { logo: 'https://framerusercontent.com/images/TCKhYzJ9089cauXsbX168cUVsr8.svg', text: '“A team of young people who wake up the market, have expertise in-house and gain experience in the field.”', author: 'John Doe', company: 'Green Acres Farm' },
    { logo: 'https://framerusercontent.com/images/FIOahvlVI8fgV49d39bbW3yXyo.svg', text: '“Biogax has revolutionized our waste management. The energy savings are substantial, and the process was seamless.”', author: 'Jane Smith', company: 'Sunrise Organics' },
    { logo: 'https://framerusercontent.com/images/2bIy5NFM43MHYHka0m1XlfhiU.svg', text: '“The system is incredibly efficient. We’re now energy independent and our environmental footprint is minimal.”', author: 'Sam Wilson', company: 'Heritage Farms' },
];

const TestimonialsSection = () => (
    <section className="py-24 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p className="font-mono text-sm uppercase tracking-widest text-gray-500">TESTIMONIALS</p>
                <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 text-[#002d25] leading-tight">Trusted by Leading Agricultural Innovators</h2>
            </motion.div>
            <motion.div
                className="grid md:grid-cols-3 gap-8 mt-16 text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                        className={`p-8 rounded-2xl flex flex-col justify-between ${index === 0 ? 'bg-[#e4ffa1]' : 'bg-white'}`}
                    >
                        <div>
                            <Image src={testimonial.logo} alt={testimonial.company} width={104} height={24} />
                            <p className="mt-6 text-xl font-medium text-[#002d25]">"{testimonial.text}"</p>
                        </div>
                        <div className="mt-8">
                            <p className="font-bold text-[#002d25]">{testimonial.author}</p>
                            <p className="text-sm text-gray-600">{testimonial.company}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);


const FaqItem: React.FC<FaqItemProps & { index: number }> = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 py-6">
            <button className="w-full flex justify-between items-center text-left" onClick={() => setIsOpen(!isOpen)}>
                <span className="text-xl font-semibold text-[#002d25]">{question}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pt-4 text-gray-600">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FaqSection = () => {
    const faqs = [
        { question: "What is biogas and how is it produced?", answer: "Biogas is a renewable energy source produced from the breakdown of organic matter (like farm waste) in the absence of oxygen. Our systems create a controlled environment called a digester where microbes perform this breakdown, releasing methane-rich gas that can be used for energy." },
        { question: "How much space does a biogas system require?", answer: "The footprint of a system varies depending on the scale of your operation. We design compact systems tailored to your available space, ranging from small-scale units for family farms to larger installations for industrial agricultural facilities." },
        { question: "What is the return on investment?", answer: "ROI depends on factors like your current energy costs, waste volume, and local incentives. Most farms see a payback period of 3-7 years, with significant savings on energy bills and additional revenue from selling surplus energy or bio-fertilizer." },
        { question: "Can the system handle different types of waste?", answer: "Yes, our systems are versatile and can process a wide range of organic materials, including animal manure, crop residues, and food processing waste. We conduct a thorough site audit to customize the system for your specific waste stream." }
    ];
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="font-mono text-sm uppercase tracking-widest text-gray-500">FAQs</p>
                    <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 text-[#002d25] leading-tight">Got questions?</h2>
                    <p className="mt-6 text-lg text-gray-600">Find answers to common questions about biogas technology, our process, and how Biogax can benefit your farm.</p>
                    <div className="mt-12 bg-gray-50 p-8 rounded-2xl">
                        <p className="font-semibold text-xl text-[#002d25]">Still got questions?</p>
                        <p className="mt-2 text-gray-600">Contact us at <a href="mailto:hey@biogax.com" className="text-[#002d25] font-bold underline">hey@biogax.com</a></p>
                    </div>
                </motion.div>
                <div>
                    {faqs.map((faq, index) => (
                        <FaqItem key={index} index={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const CtaSection = () => (
    <section className="bg-[#002d25] text-white">
        <div className="max-w-[1200px] mx-auto px-4 py-20 text-center">
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight">Ready to Transform Your Farm With Biogax?</h2>
            <p className="mt-6 text-xl max-w-2xl mx-auto text-white/80">Schedule a free energy assessment to discover how much you can save and earn with a custom biogas solution.</p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-10 flex items-center justify-center px-8 py-4 bg-[#e4ffa1] text-[#002d25] font-bold rounded-full text-base mx-auto">
                Get Your Free Energy Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-[#002d25] text-white/70 pt-16 pb-8 border-t border-white/20">
        <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2">
                    <Image src="/block-assets/agency-2/agency-2-EikuxwDlcxDhExsrn77csIFZtB0-6fe01e8d.svg" alt="Biogax Logo" width={208} height={58} />
                    <p className="mt-6 text-base">Turn farm waste into clean energy with Biogax.</p>
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg mb-4">Links</h4>
                    <ul className="space-y-3">
                        <li><Link href="/about" className="hover:text-white">About</Link></li>
                        <li><Link href="/services" className="hover:text-white">Services</Link></li>
                        <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
                        <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg mb-4">Socials</h4>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:text-white flex items-center"><Linkedin className="w-4 h-4 mr-2" /> LinkedIn</a></li>
                        <li><a href="#" className="hover:text-white flex items-center"><Twitter className="w-4 h-4 mr-2" /> Twitter</a></li>
                        <li><a href="#" className="hover:text-white flex items-center"><Instagram className="w-4 h-4 mr-2" /> Instagram</a></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold text-white text-lg mb-4">Contact</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start"><Phone className="w-4 h-4 mr-2 mt-1 flex-shrink-0" /> +542 456 789 963</li>
                        <li className="flex items-start"><Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0" /> hey@biogax.com</li>
                        <li className="flex items-start"><MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" /> 123 Green Way, Farmville, AG 54321</li>
                    </ul>
                </div>
            </div>
            <div className="mt-16 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center text-sm">
                <p>©Biogax. All Rights Reserved.</p>
                <div className="flex space-x-4 mt-4 sm:mt-0">
                    <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
                </div>
            </div>
        </div>
    </footer>
);


export default function Agency2Home() {
  return (
    <div className="bg-white font-body">
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <WhatWeDoSection />
        <ServicesSection />
        <ProcessSection/>
        <ProjectsSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}