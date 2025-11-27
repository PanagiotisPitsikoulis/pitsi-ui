"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Header = () => (
  <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[calc(100%-48px)] mx-auto">
    <div className="bg-black rounded-full px-6 py-4 flex items-center justify-between">
      <Link href="/">
        <Image
          src="/block-assets/agency-2/agency-2-jXsgAANC7gjfWRLPCRJLQYOmHg-64d1e323.svg"
          alt="Biogax logo"
          width={81}
          height={24}
        />
      </Link>
      <nav className="hidden lg:flex items-center gap-8">
        <Link href="#" className="text-white text-base font-medium">Home</Link>
        <Link href="#" className="text-white text-base font-medium">About</Link>
        <Link href="#" className="text-white text-base font-medium">Services</Link>
        <Link href="#" className="text-white text-base font-medium">Projects</Link>
        <Link href="#" className="text-white text-base font-medium">Blogs</Link>
      </nav>
      <div className="flex items-center gap-2">
        <button className="bg-[#E4FFA1] text-black text-base font-bold py-3 px-6 rounded-full">
          Contact us
        </button>
        <button className="lg:hidden bg-white/10 p-3 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="bg-black text-white pt-48 pb-24 text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-6xl md:text-8xl font-bold font-inter-display tracking-tighter leading-none">
        Terms and Conditions
      </h1>
      <p className="mt-6 text-lg text-[#767676] font-inter">Terms</p>
    </div>
  </section>
);

const ContentSection = () => (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12 text-black">
          <div>
            <h2 className="text-3xl font-bold font-inter-display mb-4">Introduction</h2>
            <p className="text-lg text-[#767676] font-inter leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use as their default model text, and a search for will uncover many web sites still in their infancy.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-inter-display mb-4">User&apos;s Responsibilities</h3>
            <p className="text-lg text-[#767676] font-inter leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has distribution. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has distribution.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-inter-display mb-4">Privacy Policy</h3>
            <p className="text-lg text-[#767676] font-inter leading-relaxed">
              A reader will be distracted by the way readable content of a page when looking at its layout. A reader will be distracted by the way readable content of a page when looking at its layout. The point of using is that it has distribution.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-inter-display mb-4">Content Ownership</h3>
            <p className="text-lg text-[#767676] font-inter leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has distribution. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has distribution.
            </p>
          </div>
        </div>
      </div>
    </section>
);


const CtaSection = () => (
  <section className="bg-black text-white py-24">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-5xl md:text-7xl font-bold font-inter-display max-w-4xl mx-auto leading-tight">
        Ready to Transform Your Farm With Biogax?
      </h2>
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="bg-[#E4FFA1] text-black text-lg font-bold py-4 px-8 rounded-full w-full sm:w-auto">
          Free Energy Assessment
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-white pt-24 pb-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Image
            src="/block-assets/agency-2/agency-2-EikuxwDlcxDhExsrn77csIFZtB0-893d1bc0.svg"
            alt="Biogax logo"
            width={208}
            height={58}
            className="mb-8"
          />
        </div>
        <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-inter font-semibold text-lg mb-6">Links</h4>
                <ul className="space-y-4">
                  <li><Link href="#" className="font-inter text-base text-[#767676] hover:text-white">About</Link></li>
                  <li><Link href="#" className="font-inter text-base text-[#767676] hover:text-white">Services</Link></li>
                  <li><Link href="#" className="font-inter text-base text-[#767676] hover:text-white">Projects</Link></li>
                  <li><Link href="#" className="font-inter text-base text-[#767676] hover:text-white">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-inter font-semibold text-lg mb-6">Socials</h4>
                <ul className="space-y-4">
                  <li><Link href="#" className="font-inter text-base text-[#767676] hover:text-white">LinkedIn</Link></li>
                  <li><Link href="#" className="font-inter text-base text-[#767676] hover:text-white">Facebook</Link></li>
                  <li><Link href="#" className="font-inter text-base text-[#767676] hover:text-white">Instagram</Link></li>
                </ul>
              </div>
              <div className="col-span-2">
                 <div className="grid grid-cols-1 gap-y-6">
                    <div className="flex gap-4 items-start">
                        <Image src="/block-assets/agency-2/agency-2-oWpOF5rrrVciB3QGIlSxE0vpyVg-98a77c6c.svg" alt="Phone icon" width="32" height="33"/>
                        <div>
                            <p className="text-[#767676] text-sm font-inter">Phone No:</p>
                            <p className="text-white text-base font-inter">+542 456 789 963</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <Image src="/block-assets/agency-2/agency-2-yEyor5A8szdb85fodiHSoHa9k-aac704cd.svg" alt="Email icon" width="33" height="33"/>
                        <div>
                            <p className="text-[#767676] text-sm font-inter">Email:</p>
                            <p className="text-white text-base font-inter">biogax@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <Image src="/block-assets/agency-2/agency-2-u2p91z4SkXnb8A14PRexqogPynE-6fc72b07.svg" alt="Location icon" width="33" height="33"/>
                        <div>
                            <p className="text-[#767676] text-sm font-inter">Address:</p>
                            <p className="text-white text-base font-inter">4517 Washington Ave. Manchester, Kentucky 39495</p>                        </div>
                    </div>
                 </div>
              </div>
            </div>
        </div>
      </div>
      <div className="mt-24 pt-8 border-t border-[#333] flex flex-col md:flex-row justify-between items-center text-sm text-[#767676] font-inter">
        <p>©Biogax</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
);


export default function Agency2TermsAndConditions() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <HeroSection />
        <ContentSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}