import { Button } from "@/components/ui/button";
import { FaBrain, FaMusic, FaClock, FaChartLine } from "react-icons/fa";

export default function ServicePage() {
  const services = [
    {
      icon: (
        <FaBrain
          size={50}
          className="text-blue-500 group-hover:text-blue-400 transition-all duration-300"
        />
      ),
      title: "AI-Powered Meditation",
      description:
        "Personalized meditation sessions designed to improve focus and relaxation.",
    },
    {
      icon: (
        <FaMusic
          size={50}
          className="text-green-500 group-hover:text-green-400 transition-all duration-300"
        />
      ),
      title: "AI-Generated Music",
      description:
        "AI-curated chill music that adapts to your mood and enhances your wellness journey.",
    },
    {
      icon: (
        <FaClock
          size={50}
          className="text-purple-500 group-hover:text-purple-400 transition-all duration-300"
        />
      ),
      title: "Screen Time Tracking",
      description:
        "Monitor and manage your screen time effectively for a healthy digital balance.",
    },
    {
      icon: (
        <FaChartLine
          size={50}
          className="text-red-500 group-hover:text-red-400 transition-all duration-300"
        />
      ),
      title: "Progress Analytics",
      description:
        "Track your wellness journey with real-time insights and progress reports.",
    },
  ];

  return (
    <>
      {/* ✅ Services Section */}
      <section className="flex flex-col items-center justify-center py-20 px-6 flex-grow">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our AI-Powered Services
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            Discover the AI-powered tools that enhance your digital wellness
            journey.
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
              <h3 className="text-xl font-semibold mt-4 text-gray-900">
                {service.title}
              </h3>
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
    </>
  );
}
