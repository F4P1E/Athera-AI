import Link from "next/link";
import Image from "next/image";
import NavbarActions from "./navbar-actions";

export default async function Navbar() {
  return (
    <nav className="fixed inset-x-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-full relative text-xs md:text-base md:max-w-4/5 mx-auto flex items-center">
        {/* Left Navigation */}
        <div className="flex w-full items-center justify-between">
          <Link
            href="/meditation"
            className="text-gray-700 hover:text-[#34C0FC] transition-colors duration-200 font-medium"
          >
            Meditation
          </Link>
          <Link
            href="/mood-diary"
            className="text-gray-700 hover:text-[#34C0FC] transition-colors duration-200 font-medium"
          >
            Mood Diary
          </Link>
          <Link
            href="/home"
            className="text-gray-700 hover:text-[#34C0FC] transition-colors duration-200 font-medium"
          >
            Home
          </Link>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center w-1/2">
          <div className="rounded-full overflow-hidden w-10 h-10">
            <Link href="/">
              <Image
                src="/logo/Athera AI.png"
                alt="Athera AI"
                width={120}
                height={60}
                className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="flex w-full items-center justify-between">
          <Link
            href="/service"
            className="text-gray-700 hover:text-[#34C0FC] transition-colors duration-200 font-medium"
          >
            Service
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-[#34C0FC] transition-colors duration-200 font-medium"
          >
            Contact
          </Link>
          <Link
            href="/about-us"
            className="text-gray-700 hover:text-[#34C0FC] transition-colors duration-200 font-medium"
          >
            About Us
          </Link>
          <NavbarActions />
        </div>
      </div>
    </nav>
  );
}
