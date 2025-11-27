"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Plus, Minus, ArrowRight, ChevronDown, Mail, Phone, MapPin } from 'lucide-react'

// --- Type Definitions ---
interface NavLinkProps {
  href: string
  children: React.ReactNode
}

interface FaqItemProps {
  question: string
  children: React.ReactNode
}

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

interface ContactInfoProps {
  icon: React.ReactNode
  title: string
  text: string
}

// --- Sub-components ---

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href} className="text-black text-opacity-70 hover:text-opacity-100 transition-colors duration-300 font-medium">
    {children}
  </Link>
)

const Header = () => (
  <header className="bg-[#E4FFA1] w-full py-4 px-4 md:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link href="/">
        <Image
          src="/block-assets/agency-2/agency-2-jXsgAANC7gjfWRLPCRJLQYOmHg-64d1e323.svg"
          alt="Biogax Logo"
          width={81}
          height={24}
        />
      </Link>
      <nav className="hidden lg:flex items-center gap-8">
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Services</NavLink>
        <NavLink href="#">Projects</NavLink>
        <NavLink href="#">Blogs</NavLink>
      </nav>
      <div className="flex items-center gap-4">
        <Link href="/contact" className="hidden lg:inline-block font-medium text-black bg-white border border-gray-200 rounded-full px-6 py-3 hover:bg-gray-100 transition-colors duration-300">
          Contact
        </Link>
        <button className="lg:hidden p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
)

const HeroSection = () => (
  <section className="bg-[#002D25] text-white text-center py-20 md:py-32 px-4">
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-['Inter_Display'] tracking-tighter">
      Get in Touch
    </h1>
    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
      Get in touch with Biogax. Request a free energy assessment and discover how our biogas solutions can cut costs and power your farm.
    </p>
  </section>
)

const ContactFormSection = () => (
  <section className="py-24 px-4 md:px-8 bg-white">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <p className="font-['Fragment_Mono'] text-sm uppercase text-gray-500 tracking-widest">GET A QUOTE</p>
        <h2 className="text-4xl md:text-5xl font-bold font-['Inter_Display'] mt-2">Send us a Message</h2>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input type="text" id="name" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E4FFA1] focus:border-[#002D25] transition" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" id="email" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E4FFA1] focus:border-[#002D25] transition" placeholder="Enter your email" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input type="tel" id="phone" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E4FFA1] focus:border-[#002D25] transition" placeholder="Enter your phone number" />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
          <input type="text" id="company" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E4FFA1] focus:border-[#002D25] transition" placeholder="Enter your company name" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service</label>
          <div className="relative">
            <select id="service" className="w-full p-4 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-[#E4FFA1] focus:border-[#002D25] transition">
              <option>Select a service</option>
              <option>Biogas Plant Installation</option>
              <option>Energy Assessment</option>
              <option>System Maintenance</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
              <ChevronDown className="text-gray-500" size={20} />
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea id="message" rows={5} className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E4FFA1] focus:border-[#002D25] transition" placeholder="Your message..."></textarea>
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="w-full bg-[#002D25] text-white font-semibold py-4 px-8 rounded-full hover:bg-black transition-colors duration-300 flex items-center justify-center gap-2">
            Send Message
            <ArrowRight size={20} />
          </button>
        </div>
      </form>
    </div>
  </section>
)

const FaqItem: React.FC<FaqItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg md:text-xl font-medium text-black">{question}</h3>
        {isOpen ? <Minus size={24} className="text-black"/> : <Plus size={24} className="text-black"/>}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-gray-600 leading-relaxed">
            {children}
        </div>
      </div>
    </div>
  )
}

const FaqsSection = () => (
    <section className="bg-white py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold font-['Inter_Display']">Got questions?</h2>
                <p className="mt-4 text-lg text-gray-600">Find answers to common questions about our biogas solutions.</p>
            </div>
            <div>
                <FaqItem question="What is biogas and how is it produced?">
                    <p>Biogas is a renewable energy source produced from the breakdown of organic matter (like farm manure and crop residues) in an oxygen-free environment. This process, called anaerobic digestion, creates a methane-rich gas that can be used for electricity, heating, and fuel.</p>
                </FaqItem>
                <FaqItem question="What are the main benefits of installing a biogas system on my farm?">
                    <p>Key benefits include reducing energy costs, creating a new revenue stream from surplus energy, managing waste more effectively, producing a nutrient-rich organic fertilizer (digestate), and significantly lowering your farm's carbon footprint.</p>
                </FaqItem>
                <FaqItem question="How much space is required for a biogas plant?">
                    <p>The space required depends on the size of your operation and the volume of waste produced. We design compact, scalable systems tailored to your farm's specific layout and needs. During our free assessment, we can provide a precise estimate.</p>
                </FaqItem>
                 <FaqItem question="What is the expected ROI on a biogas system?">
                    <p>The return on investment (ROI) varies based on factors like energy prices, government incentives, and system size. Typically, farms see a payback period of 3-7 years, with significant long-term savings and potential profits afterward.</p>
                </FaqItem>
                <FaqItem question="What kind of maintenance do biogas systems require?">
                    <p>Our biogas systems are designed for durability and minimal upkeep. Routine maintenance involves simple checks and monitoring, which we provide training for. We also offer comprehensive maintenance packages for your peace of mind.</p>
                </FaqItem>
            </div>
            <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold">Still got questions?</h3>
                <p className="mt-2 text-gray-600">Don't hesitate to reach out to our team.</p>
                <a href="mailto:hey@biogax.com" className="mt-6 inline-block text-lg font-semibold text-[#002D25] hover:underline">
                    hey@biogax.com
                </a>
            </div>
        </div>
    </section>
)

const CtaSection = () => (
  <section className="bg-[#002D25] text-white py-24 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Inter_Display']">
        Ready to Transform Your Farm With Biogax?
      </h2>
      <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
        Request a free energy assessment and discover how our biogas solutions can cut costs and power your farm.
      </p>
      <div className="mt-10">
        <Link href="#" className="inline-flex items-center justify-center gap-2 bg-[#E4FFA1] text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-white transition-colors duration-300">
          Free Energy Assessment
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  </section>
)

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
    {children}
  </Link>
)

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, text }) => (
  <div className="flex items-start gap-4">
    <div className="bg-white/10 p-3 rounded-full">{icon}</div>
    <div>
      <h4 className="text-gray-400 text-sm">{title}</h4>
      <p className="text-white font-medium">{text}</p>
    </div>
  </div>
)

const Footer = () => (
  <footer className="bg-black text-white pt-24 pb-8 px-4 md:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Link href="/">
            <Image
              src="/block-assets/agency-2/agency-2-EikuxwDlcxDhExsrn77csIFZtB0-893d1bc0.svg"
              alt="Biogax Logo"
              width={120}
              height={34}
            />
          </Link>
          <p className="mt-6 text-gray-400 max-w-xs">
            We're helping farmers turn waste into opportunity with sustainable biogas systems.
          </p>
        </div>
        <div className="lg:col-span-2">
          <h3 className="font-semibold text-lg mb-4">Links</h3>
          <div className="flex flex-col gap-3">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Services</FooterLink>
            <FooterLink href="#">Projects</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
          </div>
        </div>
        <div className="lg:col-span-2">
          <h3 className="font-semibold text-lg mb-4">Socials</h3>
          <div className="flex flex-col gap-3">
            <FooterLink href="#">LinkedIn</FooterLink>
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <ContactInfo icon={<Phone size={20} className="text-[#E4FFA1]" />} title="Phone No:" text="+542 456 789 963" />
            <ContactInfo icon={<Mail size={20} className="text-[#E4FFA1]" />} title="Email:" text="info@biogax.com" />
            <ContactInfo icon={<MapPin size={20} className="text-[#E4FFA1]" />} title="Location:" text="123 Green Valley, Farmville" />
          </div>
        </div>
      </div>
      <div className="mt-20 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Biogax. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms & Conditions</FooterLink>
        </div>
      </div>
    </div>
  </footer>
)

// --- Main Page Component ---

export default function Agency2ContactPage() {
  return (
    <div className="bg-white font-['Inter']">
      <Header />
      <main>
        <HeroSection />
        <ContactFormSection />
        <FaqsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}