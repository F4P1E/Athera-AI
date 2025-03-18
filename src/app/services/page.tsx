import { Button } from "@/components/ui/button";
import { FaBrain, FaMusic, FaClock, FaChartLine } from "react-icons/fa";
import Link from "next/link";

export default function ServicePage() {
  const services = [
    {
      icon: <FaBrain size={50} className="text-blue-500" />,
      title: "AI-Powered Meditation",
      description: "Experience personalized meditation sessions designed to improve focus and relaxation.",
    },
    {
      icon: <FaMusic size={50} className="text-green-500" />,
      title: "AI-Generated Music",
      description: "Enjoy AI-curated chill music that adapts to your mood and enhances your wellness journey.",
    },
    {
      icon: <FaClock size={50} className="text-purple-500" />,
      title: "Screen Time Tracking",
      description: "Monitor and manage your screen time effectively to maintain a healthy digital balance.",
    },
    {
      icon: <FaChartLine size={50} className="text-red-500" />,
      title: "Progress Analytics",
      description: "Track your wellness journey with real-time insights and detailed progress reports.",
    },
  ];

  return (
    <div>
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

      {/* Service Section */}
      <section className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-16 px-4">
        <div className="container mx-auto text-center">
          {/* Header */}
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="text-lg text-gray-600 mt-2">
            Discover the AI-powered tools that help you achieve better digital wellness.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition duration-300"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-10">
            <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
