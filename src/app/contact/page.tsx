import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-br from-[#F0F5FF] to-[#DDE7F9] min-h-screen">
      {/* ✅ Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md fixed top-0 left-0 w-full z-20">
        <div className="text-lg font-bold text-gray-900">Athera AI</div>
        <nav className="flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-[#34C0FC] transition">Home</Link>
          <Link href="/about" className="hover:text-[#34C0FC] transition">About</Link>
          <Link href="/services" className="hover:text-[#34C0FC] transition">Services</Link>
          <Link href="/contact" className="text-[#34C0FC] font-bold">Contact</Link>
        </nav>
        <Link href="/sign-in">
          <Button className="bg-[#07304A] hover:bg-[#34C0FC] text-white px-4 py-2 rounded-md shadow">
            Sign In
          </Button>
        </Link>
      </header>

      {/* ✅ Hero Section */}
      <section className="flex flex-col items-center text-center pt-28 pb-10">
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-md">
          Get in <span className="text-[#34C0FC]">Touch</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          Have questions? We’re here to help! Contact us for inquiries, support, or collaborations.
        </p>
      </section>

      {/* ✅ Contact Section */}
      <section className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* 📩 Contact Form */}
        <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/40">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Send us a message</h2>
          <form className="mt-6 flex flex-col space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-[#34C0FC]" />
            <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-[#34C0FC]" />
            <textarea placeholder="Your Message" rows={4} className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-[#34C0FC]"></textarea>
            <Button className="bg-[#34C0FC] text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:scale-105 transition-all duration-300">
              Send Message
            </Button>
          </form>
        </div>

        {/* 📍 Contact Info */}
        <div className="flex flex-col space-y-6 bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/40">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Our Contact Info</h2>
          <div className="flex items-center space-x-4">
            <Mail className="text-[#34C0FC] w-6 h-6" />
            <p className="text-gray-700">support@atheraai.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-[#34C0FC] w-6 h-6" />
            <p className="text-gray-700">+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-[#34C0FC] w-6 h-6" />
            <p className="text-gray-700">123 AI Street, Tech City, USA</p>
          </div>

          {/* 🗺️ Google Map Embed */}
          <iframe
            className="rounded-lg shadow-md"
            width="100%"
            height="200"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?..."
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </div>
  );
}
