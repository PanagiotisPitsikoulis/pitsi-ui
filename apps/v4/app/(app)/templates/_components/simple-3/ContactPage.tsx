"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Phone, Mail, ChevronDown, MoveRight } from 'lucide-react'

// --- TYPE DEFINITIONS ---

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  contact: string;
  actionText: string;
}

interface FaqItemProps {
  question: string;
  children: React.ReactNode;
}

// --- SUB-COMPONENTS ---

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href} className="text-base font-medium text-[#090909] transition-colors hover:text-[#ff4f01]">
    {children}
  </Link>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
      style={{
        borderBottom: '1px solid rgba(9, 9, 9, 0.1)',
      }}
    >
      <div className="max-w-[1238px] mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-[88px]">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/block-assets/simple-3/simple-3-BmS69e2QB7ycncVFjIkGd0jsuMg-1d5f9e64.png"
              alt="Logo"
              width={40}
              height={40}
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Courses</NavLink>
            <NavLink href="#">Locations</NavLink>
            <NavLink href="#">Why Us</NavLink>
            <NavLink href="#">Testimonials</NavLink>
          </nav>
          
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-3 text-base font-semibold text-white bg-[#ff4f01] rounded-xl hover:bg-opacity-90 transition-all"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6">
          <nav className="flex flex-col items-center gap-6">
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Courses</NavLink>
            <NavLink href="#">Locations</NavLink>
            <NavLink href="#">Why Us</NavLink>
            <NavLink href="#">Testimonials</NavLink>
            <Link
              href="/contact"
              className="px-6 py-3 text-base font-semibold text-white bg-[#ff4f01] rounded-xl hover:bg-opacity-90 transition-all w-fit"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};


const ContactCard: React.FC<ContactCardProps> = ({ icon, title, contact, actionText }) => (
  <div className="relative flex-1 p-8 overflow-hidden bg-[#fcfcfc] rounded-3xl flex flex-col gap-4 items-start">
     <div 
      className="absolute inset-0 w-full h-full bg-no-repeat" 
      style={{
        backgroundImage: "url('/block-assets/simple-3/simple-3-yuLp2Ht67rTokFGIudDWop95NxE-904f8523.jpg')",
        backgroundSize: '150% auto',
        backgroundPosition: '50% 70%',
        opacity: 0.05,
      }}
    ></div>
    <div className="relative z-10 flex flex-col items-start h-full">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
        {icon}
      </div>
      <p className="text-base font-medium text-[#757575]">{title}</p>
      <h3 className="font-['Inter_Display'] text-2xl font-bold text-[#090909]">{contact}</h3>
      <div className="mt-auto pt-4">
        <Link href="#" className="font-semibold text-[#ff4f01] flex items-center gap-2 group">
          {actionText}
          <MoveRight size={20} className="transition-transform group-hover:translate-x-1"/>
        </Link>
      </div>
    </div>
  </div>
);

const FaqItem: React.FC<FaqItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-['Inter_Display'] text-xl lg:text-2xl font-semibold text-[#090909]">{question}</span>
        <div className="relative w-8 h-8 flex-shrink-0">
          <div className={`absolute w-4 h-0.5 bg-[#090909] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}></div>
          <div className="absolute w-4 h-0.5 bg-[#090909] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 text-base text-[#757575] max-w-prose">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};


export default function Simple3ContactPage() {
  return (
    <div className="bg-white font-['Inter']">
      <Header />

      <main className="pt-[88px]">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40 bg-[#fcfcfc]">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center" 
            style={{
              backgroundImage: "url('/block-assets/simple-3/simple-3-HgxJHrw2srfmt6gEMEUKLRS2yNM-30f4cc08.jpg')",
              opacity: 0.1,
            }}
          ></div>
          <div className="relative max-w-[1238px] mx-auto px-6 sm:px-8">
            <div className="max-w-4xl text-center mx-auto">
              <p className="font-semibold text-lg text-[#ff4f01]">Contact</p>
              <h1 className="font-['Inter_Display'] text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#090909] mt-4">
                Say Hello to <br />
                Next Adventure<span className="text-[#ff4f01]">*</span>
              </h1>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-6xl mx-auto">
              <ContactCard
                icon={<Phone size={24} className="text-[#ff4f01]" />}
                title="Call us on"
                contact="+1 (555) 123-4567"
                actionText="Call"
              />
              <ContactCard
                icon={<Mail size={24} className="text-[#ff4f01]" />}
                title="Email us at"
                contact="hello@surfing.com"
                actionText="Email"
              />
              <ContactCard
                icon={<MoveRight size={24} className="text-[#ff4f01]" />}
                title="Reach out us"
                contact="New York, USA"
                actionText="Reach"
              />
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 md:py-32">
          <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 text-left">
              <div>
                <label htmlFor="full-name" className="sr-only">Full Name</label>
                <input type="text" name="full-name" id="full-name" autoComplete="name" placeholder="Full Name" className="block w-full rounded-xl border-gray-300 px-5 py-4 placeholder:text-gray-500 focus:ring-[#ff4f01] focus:border-[#ff4f01]" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" autoComplete="email" placeholder="Email" className="block w-full rounded-xl border-gray-300 px-5 py-4 placeholder:text-gray-500 focus:ring-[#ff4f01] focus:border-[#ff4f01]" />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input type="tel" name="phone" id="phone" autoComplete="tel" placeholder="Phone Number" className="block w-full rounded-xl border-gray-300 px-5 py-4 placeholder:text-gray-500 focus:ring-[#ff4f01] focus:border-[#ff4f01]" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" rows={4} placeholder="Message" className="block w-full rounded-xl border-gray-300 px-5 py-4 placeholder:text-gray-500 focus:ring-[#ff4f01] focus:border-[#ff4f01]"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full justify-center px-8 py-4 text-base font-semibold text-white bg-[#ff4f01] rounded-xl hover:bg-opacity-90 transition-all">Send Message</button>
              </div>
            </form>
          </div>
        </section>
        
        {/* Image Breaker */}
        <div className="h-[300px] md:h-[500px] lg:h-[700px] w-full">
            <Image
                src="/block-assets/simple-3/simple-3-Lzpkb5gP8G1zhG9R0qCk192Xn0-60074e8a.jpg"
                alt="Surfers walking on beach"
                width={1920}
                height={1280}
                className="w-full h-full object-cover"
                unoptimized
            />
        </div>

        {/* FAQ Section */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16">
              <p className="font-semibold text-lg text-[#ff4f01]">FAQs</p>
              <h2 className="font-['Inter_Display'] text-5xl md:text-7xl font-extrabold text-[#090909] mt-4">
                Got Questions?
              </h2>
            </div>
            <div>
              <FaqItem question="What skill level is required?">
                <p>Our courses cater to all skill levels, from absolute beginners to advanced surfers looking to refine their technique. We have dedicated instructors and programs for each level.</p>
              </FaqItem>
              <FaqItem question="What should I bring to my lesson?">
                <p>We recommend bringing a swimsuit, a towel, sunscreen, and a reusable water bottle. We provide the surfboard and a wetsuit if needed. Most importantly, bring your enthusiasm!</p>
              </FaqItem>
              <FaqItem question="Are there age restrictions for the courses?">
                <p>We welcome surfers of all ages! Our kids' programs start from age 6, and there's no upper age limit. Safety is our priority, and we ensure an appropriate and enjoyable experience for everyone.</p>
              </FaqItem>
               <FaqItem question="What is your cancellation policy?">
                <p>We offer a flexible cancellation policy. You can receive a full refund if you cancel at least 48 hours before your scheduled lesson. For cancellations within 48 hours, we provide a credit for a future booking.</p>
              </FaqItem>
            </div>
          </div>
        </section>

        {/* Image Breaker 2 */}
        <div className="h-[300px] md:h-[500px] lg:h-[700px] w-full">
            <Image
                src="/block-assets/simple-3/simple-3-JGR3zUkx84J2S5Wp3gFkodvK0TM-09d2a053.jpg"
                alt="Surfer riding a wave"
                width={1920}
                height={1216}
                className="w-full h-full object-cover"
                unoptimized
            />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#090909] text-white">
        <div 
          className="py-24 md:py-32 relative bg-no-repeat bg-right"
          style={{ backgroundImage: "url('/block-assets/simple-3/simple-3-rkxBzTPZdrwzklrQ8WxcM6qJDA4-f27858d2.jpg')", opacity: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-[#090909] to-transparent"></div>
          <div className="relative max-w-[1238px] mx-auto px-6 sm:px-8">
            <div className="max-w-2xl">
              <h2 className="font-['Inter_Display'] text-5xl md:text-7xl font-extrabold text-white">
                Surf<span className="text-[#ff4f01]">*</span><br/>IING
              </h2>
              <p className="mt-8 text-lg text-gray-300">
                Join our community and embark on an unforgettable surfing journey. Whether you're a beginner or a pro, we have something for you.
              </p>
              <div className="mt-12">
                <Link
                  href="#"
                  className="inline-block px-8 py-4 text-lg font-semibold text-white bg-[#ff4f01] rounded-xl hover:bg-opacity-90 transition-all"
                >
                  Book a Lesson
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16">
          <div className="max-w-[1238px] mx-auto px-6 sm:px-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
            <div className="col-span-2 lg:col-span-2">
              <Link href="#">
                <Image
                  src="/block-assets/simple-3/simple-3-BmS69e2QB7ycncVFjIkGd0jsuMg-1d5f9e64.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  unoptimized
                />
              </Link>
            </div>
            <div>
              <h3 className="font-['Inter_Display'] text-lg font-bold">About</h3>
              <nav className="mt-4 flex flex-col gap-2">
                <Link href="#" className="text-gray-400 hover:text-white">About</Link>
                <Link href="#" className="text-gray-400 hover:text-white">Courses</Link>
                <Link href="#" className="text-gray-400 hover:text-white">Locations</Link>
                <Link href="#" className="text-gray-400 hover:text-white">Why Us</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-['Inter_Display'] text-lg font-bold">Community</h3>
              <nav className="mt-4 flex flex-col gap-2">
                <Link href="#" className="text-gray-400 hover:text-white">Testimonials</Link>
                <Link href="#" className="text-gray-400 hover:text-white">Instructors</Link>
                <Link href="#" className="text-gray-400 hover:text-white">Gallery</Link>
              </nav>
            </div>
            <div>
               <h3 className="font-['Inter_Display'] text-lg font-bold">Social</h3>
              <nav className="mt-4 flex flex-col gap-2">
                <Link href="#" className="text-gray-400 hover:text-white">Instagram</Link>
                <Link href="#" className="text-gray-400 hover:text-white">Facebook</Link>
                <Link href="#" className="text-gray-400 hover:text-white">Twitter</Link>
              </nav>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 max-w-[1238px] mx-auto px-6 sm:px-8 text-center text-gray-500">
            <p>&copy; 2025 Surfing Institute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}