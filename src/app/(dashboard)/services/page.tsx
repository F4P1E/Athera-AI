import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaBrain, FaMusic, FaClock, FaChartLine } from "react-icons/fa";
import { Facebook, Twitter, Instagram } from "lucide-react"; // Icons from Lucide
import Link from "next/link";

export default function ServicePage() {
  const services = [
    {
      icon: <FaBrain size={50} className="text-blue-500 group-hover:text-blue-400 transition-all duration-300" />,
      title: "AI-Powered Meditation",
      description: "Personalized meditation sessions designed to improve focus and relaxation.",
    },
    {
      icon: <FaMusic size={50} className="text-green-500 group-hover:text-green-400 transition-all duration-300" />,
      title: "AI-Generated Music",
      description: "AI-curated chill music that adapts to your mood and enhances your wellness journey.",
    },
    {
      icon: <FaClock size={50} className="text-purple-500 group-hover:text-purple-400 transition-all duration-300" />,
      title: "Screen Time Tracking",
      description: "Monitor and manage your screen time effectively for a healthy digital balance.",
    },
    {
      icon: <FaChartLine size={50} className="text-red-500 group-hover:text-red-400 transition-all duration-300" />,
      title: "Progress Analytics",
      description: "Track your wellness journey with real-time insights and progress reports.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f5ff] to-[#e3ebf9] flex flex-col">
      {/* ✅ Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-10">
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

      {/* ✅ Services Section */}
      <section className="flex flex-col items-center justify-center py-20 px-6 flex-grow">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">Our AI-Powered Services</h2>
          <p className="text-lg text-gray-600 mt-3">
            Discover the AI-powered tools that enhance your digital wellness journey.
          </p>
        </div>

        {/* ✅ Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200"
            >
              <div className="bg-gray-100 p-4 rounded-full group-hover:bg-opacity-80 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>

        {/* ✅ Call-to-Action Button */}
        <div className="mt-12">
          <Button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:scale-105 transition-all duration-300">
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
              <Separator className="my-2 bg-gray-500" />
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
              <Separator className="my-2 bg-gray-500" />
              <div className="flex justify-center md:justify-start gap-4 mt-2">
                <Link href="https://facebook.com" target="_blank" className="hover:text-[#0AA9ED] transition">
                  <Facebook size={24} />
                </Link>
                <Link href="https://twitter.com" target="_blank" className="hover:text-[#0AA9ED] transition">
                  <Twitter size={24} />
                </Link>
                <Link href="https://instagram.com" target="_blank" className="hover:text-[#0AA9ED] transition">
                  <Instagram size={24} />
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <Separator className="my-6 bg-gray-600" />
          <div className="text-gray-400 text-sm text-center">
            <p>© 2025 Athera AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
