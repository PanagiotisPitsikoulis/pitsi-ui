// @ts-nocheck
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  ArrowRight,
  Plus,
  Minus,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center h-20">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/block-assets/simple-3/simple-3-BmS69e2QB7ycncVFjIkGd0jsuMg-1d5f9e64.png"
            alt="Logo"
            width={32}
            height={32}
          />
          <span className="font-bold text-xl">Surfing</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Courses
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Locations
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Why Us
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Testimonials
          </Link>
        </nav>
        <div className="hidden lg:block">
          <button className="bg-[#ff4f01] text-white px-6 py-3 rounded-full font-semibold">
            Book a lesson
          </button>
        </div>
        <div className="lg:hidden">
          <Menu className="w-8 h-8" />
        </div>
      </div>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="pt-20 lg:pt-32 pb-16 lg:pb-24 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-black relative inline-block">
        SURF
        <span
          className="absolute -top-4 -right-8"
          style={{
            backgroundImage:
              'url("/block-assets/simple-3/simple-3-iUf7olk5ArVXfGdHgj3M6pO7tD8-0bafeacb.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          *
        </span>
        IING
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Free Framer template built for surfing schools, camps, and instructors.
        Fully responsive, ocean-inspired design to showcase lessons, locations,
        and surf culture – no code needed.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-[#ff4f01] text-white px-8 py-4 rounded-full font-semibold text-lg">
          Book a lesson
        </button>
        <button className="bg-gray-100 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg">
          Learn more
        </button>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase">
          Welcome to
        </h2>
        <p className="text-4xl lg:text-5xl font-bold text-black mt-2">
          Surfing Institute®
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative aspect-video">
          <Image
            src="/block-assets/simple-3/simple-3-yuLp2Ht67rTokFGIudDWop95NxE-904f8523.jpg"
            alt="Surfing"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
        <div className="mt-8 lg:mt-0 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-black">About Us</h3>
            <p className="text-gray-600 mt-2">
              We are a passionate team of certified surf instructors dedicated
              to sharing the thrill of riding waves.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black">Our Mission</h3>
            <p className="text-gray-600 mt-2">
              Our mission is to provide a safe, fun, and supportive
              environment for surfers of all levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ImageBreaker = ({ src }) => (
  <div className="w-full h-80 lg:h-[500px] overflow-hidden">
    <Image
      src={src}
      alt="Surfer"
      width={2400}
      height={1800}
      className="w-full h-full object-cover"
    />
  </div>
);

const CoursesSection = () => (
  <section className="py-16 lg:py-24 bg-[#f9f9f9]">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase">
          Find Your Wave
        </h2>
        <p className="text-4xl lg:text-5xl font-bold text-black mt-2">
          Courses
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Beginner Surfing Course",
            desc: "Never touched a board? We’ll teach you ocean safety, paddling, popping up.",
          },
          {
            title: "Intermediate Coaching",
            desc: "Refine your technique, improve your timing, and master new maneuvers.",
          },
          {
            title: "Advanced Surfing Training",
            desc: "Chase bigger waves with guided training focused on speed, control, and waves.",
          },
          {
            title: "Kids & Teens Surf Camps",
            desc: "Fun, safe, and super exciting! Special programs designed for younger surfers.",
          },
        ].map((course, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-black">{course.title}</h3>
            <p className="text-gray-600 mt-2">{course.desc}</p>
            <button className="mt-6 bg-[#ff4f01] text-white px-6 py-3 rounded-full font-semibold">
              Book now
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LocationsSection = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase">
          Beaches
        </h2>
        <p className="text-4xl lg:text-5xl font-bold text-black mt-2">
          Our Locations
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: "Bali, Indonesia 🇮🇩",
            desc: "Tropical waves, warm waters, and year-round surf bliss in a true island paradise.",
            img: "https://framerusercontent.com/images/i7SB4u5Axz3RTW1CPJdIn2zvLw.jpg?width=2400&height=1800",
          },
          {
            name: "Byron Bay, Australia 🇦🇺",
            desc: "Relaxed coastal vibes and some of Australia’s most iconic and consistent waves.",
            img: "https://framerusercontent.com/images/AMYB9eY5qxLJU6PaKLaSzgKrUWg.jpg?width=2400&height=1800",
          },
          {
            name: "Goa, India 🇮🇳",
            desc: "Golden beaches, vibrant culture, and gentle waves perfect for all skill levels.",
            img: "https://framerusercontent.com/images/lS7Nkm6j5V1wni8Ub4DST429M.png?width=2400&height=1346",
          },
          {
            name: "Hossegor, France 🇫🇷",
            desc: "Europe’s surf mecca with powerful Atlantic swells and a lively surf scene.",
            img: "https://framerusercontent.com/images/DLtGmVkIQVTdvYSR3mYfX06Qc.jpg?width=1920&height=1280",
          },
          {
            name: "Santa Cruz, California 🇺🇸",
            desc: "Surf culture capital with consistent waves and a thriving beach-town atmosphere.",
            img: "https://framerusercontent.com/images/2cHjm3CEvUQDQEoz6mOQ9fvRRQ.jpg?width=1920&height=1281",
          },
        ].map((loc) => (
          <div key={loc.name} className="bg-white rounded-2xl overflow-hidden">
            <Image
              src={loc.img}
              alt={loc.name}
              width={640}
              height={427}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-black">{loc.name}</h3>
              <p className="text-gray-600 mt-2">{loc.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyUsSection = () => (
  <section className="py-16 lg:py-24 bg-[#f9f9f9]">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase">
          Process
        </h2>
        <p className="text-4xl lg:text-5xl font-bold text-black mt-2">
          Beach to Board
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {[
          {
            num: "01",
            title: "Awareness",
            desc: "Learn tides, currents, and surf rules for safe, confident surfing.",
          },
          {
            num: "02",
            title: "Familiarization",
            desc: "Understand your board, handling, and positioning before hitting waves.",
          },
          {
            num: "03",
            title: "Paddling",
            desc: "Master paddling strength and body placement for easier wave catching.",
          },
          {
            num: "04",
            title: "Pop-Up",
            desc: "Practice quick, smooth transitions from paddling to standing on waves.",
          },
          {
            num: "05",
            title: "Wave Reading",
            desc: "Learn to spot the right waves and predict their movement.",
          },
          {
            num: "06",
            title: "Catch & Ride",
            desc: "Experience the thrill of catching and riding your first waves.",
          },
        ].map((item) => (
          <div key={item.num} className="flex gap-6">
            <div className="text-2xl font-bold text-[#ff4f01]">{item.num}</div>
            <div>
              <h3 className="text-xl font-bold text-black">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GallerySection = () => {
  const images = [
    "https://framerusercontent.com/images/7G2b8blZNaXaYHNc8wHmtH6rVk.png?scale-down-to=1024&width=1500&height=1500",
    "https://framerusercontent.com/images/NO1lECwAGlXmUZrmNDHm7a4Qyc.png?scale-down-to=1024&width=1500&height=1500",
    "https://framerusercontent.com/images/ZxWrWGjuQqINf9UImpDu8b2XeA.png?scale-down-to=1024&width=1500&height=1500",
    "https://framerusercontent.com/images/4hghtnzD2eBWL0NCQykxYlrM2WI.png?scale-down-to=1024&width=1500&height=1500",
    "https://framerusercontent.com/images/KQGNjyNt0T5PXD5FgzAP3CyKmY.png?scale-down-to=1024&width=1500&height=1500",
    "https://framerusercontent.com/images/fB8OnDmH0e1zPZbjRy0xtaf1Mo.png?scale-down-to=1024&width=1500&height=1500",
  ];
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase">
          Photos
        </h2>
        <p className="text-4xl lg:text-5xl font-bold text-black mt-2">
          Meet Memories
        </p>
      </div>
      <div className="relative overflow-hidden group">
        <div className="flex animate-marquee group-hover:pause">
          {[...images, ...images].map((src, i) => (
            <div key={i} className="w-64 h-80 mx-4 flex-shrink-0">
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                width={256}
                height={320}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const TestimonialsSection = () => (
  <section className="py-16 lg:py-24 bg-[#f9f9f9]">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase">
          Testimonials
        </h2>
        <p className="text-4xl lg:text-5xl font-bold text-black mt-2">
          Riders’ Words
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            text: "I never thought surfing could be this fun until these amazing instructors guided me patiently.",
            name: "Diego",
            img: "https://framerusercontent.com/images/imhojxQn7ygkdFIyLSvXVmE2VA.jpg?width=640&height=427",
          },
          {
            text: "From my first paddle to my first wave, the team made every moment truly unforgettable.",
            name: "Sofia",
            img: "https://framerusercontent.com/images/87UnUkLH4HYNIwP3UibsgzA1pJs.jpg?width=4000&height=3000",
          },
          {
            text: "I felt safe, supported, and inspired throughout my entire learning journey with this passionate crew.",
            name: "Michael",
            img: "https://framerusercontent.com/images/9nOvvK8KhDYJxv4czySkRiQBGWk.jpg?width=640&height=960",
          },
        ].map((t, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl">
            <p className="text-gray-600 text-lg">"{t.text}"</p>
            <div className="flex items-center gap-4 mt-6">
              <Image
                src={t.img}
                alt={t.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="font-bold text-black">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FaqItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-medium text-black">{q}</h3>
        {isOpen ? (
          <Minus className="w-6 h-6" />
        ) : (
          <Plus className="w-6 h-6" />
        )}
      </button>
      {isOpen && <p className="text-gray-600 mt-4">{a}</p>}
    </div>
  );
};

const FaqSection = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase">
          FAQs
        </h2>
        <p className="text-4xl lg:text-5xl font-bold text-black mt-2">
          Got Questions?
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <FaqItem
          q="What should I bring to my surf lesson?"
          a="Just bring yourself, a swimsuit, a towel, and plenty of sunscreen! We provide all the necessary equipment, including a surfboard and a wetsuit."
        />
        <FaqItem
          q="Do I need any prior experience?"
          a="Not at all! Our beginner courses are designed for complete novices. We'll teach you everything you need to know to get started safely."
        />
        <FaqItem
          q="What if the weather is bad?"
          a="Safety is our top priority. If conditions are unsafe for surfing (e.g., thunderstorms or very high winds), we will reschedule your lesson for another time."
        />
        <FaqItem
          q="How long does a typical lesson last?"
          a="A standard lesson is about 2 hours long, which includes a safety briefing on land, warm-up, and plenty of time in the water to practice."
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 bg-[#090909] text-white">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/block-assets/simple-3/simple-3-BmS69e2QB7ycncVFjIkGd0jsuMg-1d5f9e64.png"
              alt="Logo"
              width={32}
              height={32}
            />
            <span className="font-bold text-xl">Surfing</span>
          </Link>
          <p className="text-gray-400 mt-4">
            Join us and ride the waves.
          </p>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Locations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow us</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>© 2025 Surfing Institute. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function Simple3Home() {
  return (
    <div className="bg-white font-['Inter']">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ImageBreaker src="/block-assets/simple-3/simple-3-iUf7olk5ArVXfGdHgj3M6pO7tD8-0bafeacb.jpg" />
        <CoursesSection />
        <ImageBreaker src="/block-assets/simple-3/simple-3-Vl2bZnKpOf6Dax2BvaoVvOXV4Yk-f81cc0d0.jpg" />
        <LocationsSection />
        <ImageBreaker src="/block-assets/simple-3/simple-3-FRGxuGf8L6qhufEDpGKqlGwLEQc-22a5e98a.jpg" />
        <WhyUsSection />
        <ImageBreaker src="/block-assets/simple-3/simple-3-Yx8icdamVONiaUVZguK8IyzG0-a40748de.jpg" />
        <GallerySection />
        <ImageBreaker src="/block-assets/simple-3/simple-3-b1ZEG0zokVKaNuIKzEo24dakoBI-5ec6335c.jpg" />
        <TestimonialsSection />
        <ImageBreaker src="/block-assets/simple-3/simple-3-DuIydvKQeoa9Gar3BcYNIrxv8-fd951e4c.jpg" />
        <FaqSection />
        <ImageBreaker src="/block-assets/simple-3/simple-3-jCVW089DYHlH7udde79mZQL7Jc-ca945231.jpg" />
      </main>
      <Footer />
    </div>
  );
}