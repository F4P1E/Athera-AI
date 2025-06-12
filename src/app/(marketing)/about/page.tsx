import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      {/* ✅ Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-28 pb-16 px-6">
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-md">
          About <span className="text-[#34C0FC]">Athera AI</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          A fusion of AI & mindfulness, empowering digital wellness through
          smart, adaptive solutions.
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
              Athera AI is dedicated to redefining digital wellness. We harness
              AI to help individuals build mindful, healthy relationships with
              technology.
            </p>
            <p className="mt-4 text-gray-700 text-md text-center">
              Our adaptive meditation, AI-generated music, and real-time screen
              tracking ensure that wellness is tailored to you.
            </p>
            <p className="mt-4 text-gray-700 text-md text-center">
              By merging AI intelligence with mindfulness science, we
              personalize every step of your journey towards balance and
              well-being.
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
    </>
  );
}
