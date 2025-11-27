"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

// Main Page Component
export default function Agency2PrivacyPolicyPage() {
  return (
    <div className="bg-white font-['Inter'] text-black">
      <Header />
      <main>
        <HeroSection />
        <PrivacyContentSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

// Header Component
const Header = () => (
  <header className="bg-black text-white py-4 px-4 sm:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link href="#">
        <Image
          src="/block-assets/agency-2/agency-2-jXsgAANC7gjfWRLPCRJLQYOmHg-64d1e323.svg"
          alt="Biogax Logo"
          width={81}
          height={24}
          unoptimized
        />
      </Link>
      <nav className="hidden lg:flex items-center gap-x-8">
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Services</NavLink>
        <NavLink href="#">Projects</NavLink>
        <NavLink href="#">Blogs</NavLink>
      </nav>
      <div className="flex items-center">
        <Link href="#" className="bg-[#E4FFA1] text-black font-medium py-3 px-6 rounded-full text-sm hover:bg-opacity-90 transition-colors">
          Contact Us
        </Link>
        <button className="lg:hidden ml-4 text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
);

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-x-2">
    {children}
  </Link>
);


// Hero Section Component
const HeroSection = () => (
  <section className="bg-black text-white py-20 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
      <h1 className="font-['Inter_Display'] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
        Privacy Policy
      </h1>
      <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
        Read Biogax’s Privacy Policy to learn how we handle, protect, and safeguard your data and personal information.
      </p>
    </div>
  </section>
);


// Privacy Content Section Component
const PrivacyContentSection = () => (
  <section className="py-20 lg:py-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-8">
      <div className="prose lg:prose-lg max-w-none text-[#767676] space-y-8">
        <h2 className="text-black text-3xl font-bold">Introduction</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
        
        <h3 className="text-black text-2xl font-bold">Information We Collect</h3>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Personal Data:</strong> Name, email address, phone number, etc., when you fill out a form or contact us.</li>
          <li><strong>Usage Data:</strong> Information on how you interact with our website, such as IP address, browser type, and pages visited.</li>
        </ul>

        <h3 className="text-black text-2xl font-bold">How We Use Your Information</h3>
        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        <p>We use the collected data for various purposes:</p>
        <ol className="list-decimal pl-5 space-y-2">
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
        </ol>

        <h3 className="text-black text-2xl font-bold">Data Security</h3>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>

        <h3 className="text-black text-2xl font-bold">Changes to This Privacy Policy</h3>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

        <h3 className="text-black text-2xl font-bold">Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, you can contact us:</p>
        <p>By email: <a href="mailto:contact@biogax.com" className="text-black font-medium hover:underline">contact@biogax.com</a></p>
      </div>
    </div>
  </section>
);


// CTA Section Component
const CTASection = () => (
  <section className="bg-black text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-24 flex flex-col lg:flex-row justify-between items-center gap-12">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center lg:text-left max-w-xl">
        Ready to Transform Your Farm With Biogax?
      </h2>
      <div className="flex-shrink-0">
        <Link href="#" className="bg-[#E4FFA1] text-black font-medium py-4 px-8 rounded-full text-lg inline-flex items-center gap-x-2 hover:bg-opacity-90 transition-colors">
          Free Energy Assessment
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
    <footer className="bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Mid Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20">
          <div className="lg:col-span-4">
            <Image
              src="/block-assets/agency-2/agency-2-EikuxwDlcxDhExsrn77csIFZtB0-893d1bc0.svg"
              alt="Biogax Logo"
              width={160}
              height={45}
              unoptimized
            />
            <p className="text-[#767676] mt-6 max-w-xs">
              Transforming agricultural waste into a sustainable energy source.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg text-white mb-4">Links</h3>
            <ul className="space-y-3">
              <li><FooterLink href="#">About</FooterLink></li>
              <li><FooterLink href="#">Services</FooterLink></li>
              <li><FooterLink href="#">Projects</FooterLink></li>
              <li><FooterLink href="#">Blog</FooterLink></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg text-white mb-4">Socials</h3>
            <ul className="space-y-3">
              <li><FooterLink href="#">LinkedIn</FooterLink></li>
              <li><FooterLink href="#">Twitter</FooterLink></li>
              <li><FooterLink href="#">Instagram</FooterLink></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
             <div className="space-y-4">
                <div className="flex items-start gap-4">
                   <Image src="/block-assets/agency-2/agency-2-oWpOF5rrrVciB3QGIlSxE0vpyVg-98a77c6c.svg" alt="Phone icon" width={24} height={24} unoptimized />
                   <div>
                       <h4 className="font-medium text-gray-400">Phone No:</h4>
                       <p className="text-white">+542 456 789 963</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <Image src="/block-assets/agency-2/agency-2-yEyor5A8szdb85fodiHSoHa9k-aac704cd.svg" alt="Email icon" width={24} height={24} unoptimized />
                   <div>
                       <h4 className="font-medium text-gray-400">Email:</h4>
                       <p className="text-white">contact@biogax.com</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <Image src="/block-assets/agency-2/agency-2-u2p91z4SkXnb8A14PRexqogPynE-6fc72b07.svg" alt="Location icon" width={24} height={24} unoptimized />
                   <div>
                       <h4 className="font-medium text-gray-400">Location:</h4>
                       <p className="text-white">123 Green Energy Rd, Farmville</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 order-2 sm:order-1">&copy; {new Date().getFullYear()} Biogax. All rights reserved.</p>
          <div className="flex gap-x-6 text-sm order-1 sm:order-2">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
);

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className="text-[#767676] hover:text-white transition-colors flex items-center gap-2">
        {children}
        <Image 
            src="/block-assets/agency-2/agency-2-UiJU9i4Jlh4N9ihhIBlKvqycvYw-cdcde8b5.svg" 
            alt="arrow"
            width={12}
            height={6}
            unoptimized
        />
    </Link>
);