import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-100 shadow-md">
        <div className="text-lg font-bold">Athera AI</div>
        <nav className="flex gap-6">
          <Link href="/meditation" className="hover:text-[#34C0FC]">Meditation</Link>
          <Link href="/mood-diary" className="hover:text-[#34C0FC]">Mood Diary</Link>
          <Link href="/services" className="hover:text-[#34C0FC]">Services</Link>
          <Link href="/about" className="hover:text-[#34C0FC]">About Us</Link>
        </nav>
        <Link href="/sign-in">
          <Button className="bg-[#07304A] hover:bg-[#34C0FC] text-white">Sign In</Button>
        </Link>
      </header>

      {/* About Us Section */}
      {/* About Us Section */}
      <section className="bg-gray-100 min-h-screen flex items-center justify-center py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 max-w-screen-lg">

          {/* Left: Centered Logo Section (600x600) */}
          <div className="bg-[#009FE3] p-10 rounded-lg flex justify-center items-center w-[600px] h-[600px] shadow-lg">
            <Image
              src="/logo/Athera AI.png" // Replace with your actual logo path
              alt="Athera AI Logo"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>

          {/* Right: Centered About Us Content (600x600) */}
          <div className="bg-[#D0E7FA] p-10 rounded-lg w-[600px] h-[600px] shadow-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 text-center">ABOUT US</h2>
            <p className="mt-4 text-gray-900 font-semibold text-center">
              Welcome to Athera AI - Digital Wellness, where technology meets mindfulness.
              We believe in empowering individuals to cultivate healthier digital habits
              through AI-driven solutions that adapt to your unique lifestyle.
            </p>
            <p className="mt-4 text-gray-700 text-md text-center">
              At Athera AI, we combine cutting-edge artificial intelligence with
              wellness science to create personalized meditation timers, screen time
              tracking, and adaptive wellness plans that grow with you.
            </p>
            <p className="mt-4 text-gray-700 text-md text-center">
              Whether you're looking to enhance focus, improve sleep, or simply find more
              balance in your digital life, our platform provides intelligent guidance
              tailored to your needs.
            </p>
            <p className="mt-4 text-gray-700 text-md text-center">
              Your well-being is at the core of what we do. With seamless social logins,
              real-time progress tracking, and AI-generated meditation music, we make
              wellness both accessible and intuitive.
            </p>
            <div className="mt-6 flex justify-center">
              <Button className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg text-lg">
                Explore More
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
