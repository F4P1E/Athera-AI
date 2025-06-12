import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#07304A] text-white py-10">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div>
            <h2 className="text-2xl font-bold">Athera AI</h2>
            <p className="text-gray-300 mt-2">
              Your AI-powered mental health companion. Stay mindful, stay
              healthy.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <Separator className="my-2 bg-gray-500" /> {/* Shadcn Separator */}
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#0AA9ED] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#0AA9ED] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#0AA9ED] transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#0AA9ED] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <Separator className="my-2 bg-gray-500" /> {/* Shadcn Separator */}
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-[#0AA9ED] transition"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-[#0AA9ED] transition"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-[#0AA9ED] transition"
              >
                <Instagram size={24} />
              </Link>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <Separator className="my-6 bg-gray-600" /> {/* Shadcn Separator */}
        <div className="text-gray-400 text-sm">
          <p>© 2025 Athera AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
