import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-br from-[#F0F5FF] to-[#DDE7F9] min-h-screen">
      {/* ✅ Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md fixed top-0 left-0 w-full z-20">
        <div className="text-lg font-bold text-gray-900">Athera AI</div>
        <nav className="flex gap-6 text-gray-700 font-medium">
          <Link href="/meditation" className="hover:text-[#34C0FC] transition">Meditation</Link>
          <Link href="/mood-diary" className="hover:text-[#34C0FC] transition">Mood Diary</Link>
          <Link href="/services" className="hover:text-[#34C0FC] transition">Services</Link>
          <Link href="/about" className="hover:text-[#34C0FC] transition">About Us</Link>
        </nav>
        <Link href="/sign-in">
          <Button className="bg-[#07304A] hover:bg-[#34C0FC] text-white px-4 py-2 rounded-md shadow">
            Sign In
          </Button>
        </Link>
      </header>

      {/* ✅ Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-28 pb-16 px-6">
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-md">
          About <span className="text-[#34C0FC]">Athera AI</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          A fusion of AI & mindfulness, empowering digital wellness through smart, adaptive solutions.
        </p>
      </section>

      {/* ✅ About Us Section */}
      <section className="flex items-center justify-center py-16 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 max-w-screen-lg">

          {/* Left: Glassmorphism Card with Logo */}
          <div className="bg-white/50 backdrop-blur-lg p-10 rounded-2xl shadow-2xl flex justify-center items-center w-[500px] h-[500px] border border-white/40">
            <Image
              src="/logo/Athera AI.png" // Replace with actual logo path
              alt="Athera AI Logo"
              width={500}
              height={500}
              className="object-contain drop-shadow-lg"
            />
          </div>

          {/* Right: Content Section */}
          <div className="bg-white/50 backdrop-blur-lg p-10 rounded-2xl w-[500px] h-[500px] shadow-2xl border border-white/40 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 text-center">
              Our Vision
            </h2>
            <p className="mt-4 text-gray-900 font-medium text-center">
              Athera AI is dedicated to redefining digital wellness. We harness AI to help individuals build mindful, healthy relationships with technology.
            </p>
            <p className="mt-4 text-gray-700 text-md text-center">
              Our adaptive meditation, AI-generated music, and real-time screen tracking ensure that wellness is tailored to you.
            </p>
            <p className="mt-4 text-gray-700 text-md text-center">
              By merging AI intelligence with mindfulness science, we personalize every step of your journey towards balance and well-being.
            </p>
            <div className="mt-6 flex justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:scale-105 transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="text-center py-16 bg-[#07304A] text-white">
        <h3 className="text-3xl font-bold">Start Your Journey</h3>
        <p className="text-lg text-gray-300 mt-2">
          Unlock the power of AI-driven mindfulness and digital well-being.
        </p>
        <div className="mt-6">
          <Button className="bg-[#34C0FC] hover:bg-[#56D8FF] text-white px-6 py-3 rounded-lg shadow-lg text-lg">
            Get Started
          </Button>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-[#07304A] text-white py-10">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branding Section */}
            <div>
              <h2 className="text-2xl font-bold">Athera AI</h2>
              <p className="text-gray-300 mt-2">
                Your AI-powered mental health companion. Stay mindful, stay healthy.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="my-2 h-0.5 bg-gray-500 w-full"></div>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-[#0AA9ED] transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#0AA9ED] transition">About Us</Link></li>
                <li><Link href="/services" className="hover:text-[#0AA9ED] transition">Services</Link></li>
                <li><Link href="/contact" className="hover:text-[#0AA9ED] transition">Contact</Link></li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="my-2 h-0.5 bg-gray-500 w-full"></div>
              <div className="flex justify-center md:justify-start gap-4 mt-2">
                <Link href="https://facebook.com" target="_blank" className="hover:text-[#0AA9ED] transition">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M..." /></svg>
                </Link>
                <Link href="https://twitter.com" target="_blank" className="hover:text-[#0AA9ED] transition">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M..." /></svg>
                </Link>
                <Link href="https://instagram.com" target="_blank" className="hover:text-[#0AA9ED] transition">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M..." /></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center mt-6">
            <p>© 2025 Athera AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
