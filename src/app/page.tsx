import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Notebook,
  BrainCircuit,
  Bot,
  Activity,
  HeartPulse,
  Users,
  Headphones,
  Lightbulb,
} from "lucide-react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-100 shadow-md">
        <div className="text-lg font-bold">Athera AI</div>
        <nav className="flex gap-6">
          <Link href="/meditation" className="hover:text-[#34C0FC]">
            Meditation
          </Link>
          <Link href="/mood-diary" className="hover:text-[#34C0FC]">
            Mood Diary
          </Link>
          <Link href="/services" className="hover:text-[#34C0FC]">
            Services
          </Link>
          <Link href="/about" className="hover:text-[#34C0FC]">
            About Us
          </Link>
        </nav>
        <Link href="/sign-in">
          <Button className="bg-[#07304A] hover:bg-[#34C0FC] text-white">
            Sign In
          </Button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="bg-[#F0F9FF] py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-[#07304A] leading-tight">
              Your AI-Powered <br />
              Mental Health Companion
            </h1>
            <p className="mt-4 text-lg text-[#0AA9ED]">
              Discover the power of AI to transform your mental health journey
              with personalized insights and wellness support.
            </p>
            <div className="mt-6">
              <button className="bg-[#07304A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0AA9ED] transition duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <Image
              src="/hero/image.png"
              alt="AI Wellness"
              width={500}
              height={400}
              className="drop-shadow-lg rounded-xl"
            />
          </div>
        </div>
      </section>
      {/* Success Stories */}
      <section className="bg-gradient-to-r from-[#7BD5FE] to-[#34C0FC] py-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#07304A]">
              Inspiring Success Stories
            </h2>
            <p className="mt-4 text-lg text-[#07304A]">
              At our AI-powered Digital Wellness platform, we celebrate the
              transformative journeys of our users. From improved mindfulness
              and balanced screen time to personalized wellness plans and
              enhanced mental clarity, our community’s success stories showcase
              the impact of AI-driven guidance and self-care. Explore these
              inspiring experiences and discover how our platform can help you
              achieve a healthier, more mindful lifestyle.
            </p>
            <Button className="mt-6 bg-[#07304A] text-[#F0F9FF] font-semibold px-6 py-3 rounded-lg hover:bg-[#0077B6]-200 transition duration-300">
              Join Today
            </Button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <Image
              src="/inspire/image.png"
              alt="Success Stories"
              width={500}
              height={350}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#F0F9FF]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#07304A]">
            We Offer the Best Services
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Enhance your mental well-being with AI-powered tools and real-time
            insights.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-10">
            {/* Mood Diary */}
            <div className="p-6 bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300">
              <Notebook className="mx-auto mb-4 text-[#0AA9ED]" size={40} />
              <h3 className="text-xl font-semibold text-[#07304A]">
                Mood Diary
              </h3>
              <p className="text-gray-600 mt-2">
                Log daily emotions and track patterns to improve self-awareness.
              </p>
            </div>

            {/* Guided Exercises */}
            <div className="p-6 bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300">
              <BrainCircuit className="mx-auto mb-4 text-[#0AA9ED]" size={40} />
              <h3 className="text-xl font-semibold text-[#07304A]">
                Guided Exercises
              </h3>
              <p className="text-gray-600 mt-2">
                Reduce stress with personalized exercises and meditation guides.
              </p>
            </div>

            {/* AI Chatbot */}
            <div className="p-6 bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300">
              <Bot className="mx-auto mb-4 text-[#0AA9ED]" size={40} />
              <h3 className="text-xl font-semibold text-[#07304A]">
                AI Chatbot
              </h3>
              <p className="text-gray-600 mt-2">
                Get 24/7 mental health support with instant AI-driven insights.
              </p>
            </div>

            {/* Real-Time Monitoring */}
            <div className="p-6 bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300">
              <Activity className="mx-auto mb-4 text-[#0AA9ED]" size={40} />
              <h3 className="text-xl font-semibold text-[#07304A]">
                Real-Time Monitoring
              </h3>
              <p className="text-gray-600 mt-2">
                Track stress, heart rate, and sleep patterns for better
                well-being.
              </p>
            </div>

            {/* Heart Rate Analysis */}
            <div className="p-6 bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300">
              <HeartPulse className="mx-auto mb-4 text-[#0AA9ED]" size={40} />
              <h3 className="text-xl font-semibold text-[#07304A]">
                Heart Rate Analysis
              </h3>
              <p className="text-gray-600 mt-2">
                Monitor heart rate trends to optimize stress and relaxation
                balance.
              </p>
            </div>

            {/* Community Support */}
            <div className="p-6 bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300">
              <Users className="mx-auto mb-4 text-[#0AA9ED]" size={40} />
              <h3 className="text-xl font-semibold text-[#07304A]">
                Community Support
              </h3>
              <p className="text-gray-600 mt-2">
                Connect with like-minded individuals for shared wellness
                journeys.
              </p>
            </div>

            {/* Soothing Soundscapes */}
            <div className="p-6 bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300">
              <Headphones className="mx-auto mb-4 text-[#0AA9ED]" size={40} />
              <h3 className="text-xl font-semibold text-[#07304A]">
                Soothing Soundscapes
              </h3>
              <p className="text-gray-600 mt-2">
                Listen to AI-curated music to aid meditation and relaxation.
              </p>
            </div>

            {/* Personalized Insights */}
            <div className="p-6 bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300">
              <Lightbulb className="mx-auto mb-4 text-[#0AA9ED]" size={40} />
              <h3 className="text-xl font-semibold text-[#07304A]">
                Personalized Insights
              </h3>
              <p className="text-gray-600 mt-2">
                AI-driven recommendations based on your mental wellness trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#07304A] text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
          <p className="text-lg text-gray-300 mt-2">
            Real stories from people who improved their well-being with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* Testimonial 1 */}
            <div className="bg-[#0A2A3E] p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition duration-300">
              <Image
                src="/avatars/michael.png"
                alt="Michael"
                width={80}
                height={80}
                className="rounded-full mb-4 border-2 border-[#0AA9ED]"
              />
              <h3 className="text-xl font-semibold">Alex, 23</h3>
              <p className="text-gray-300 mt-2">
                “The AI-powered wellness app is amazing. It keeps me on track
                and motivated!”
              </p>
              {/* Rating Stars */}
              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-[#FFC107] fill-[#FFC107]"
                    size={20}
                  />
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#0A2A3E] p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition duration-300">
              <Image
                src="/avatars/dong.png"
                alt="Dong"
                width={80}
                height={80}
                className="rounded-full mb-4 border-2 border-[#0AA9ED]"
              />
              <h3 className="text-xl font-semibold">Dong, 24</h3>
              <p className="text-gray-300 mt-2">
                “Using this app has been a life-changing experience. Highly
                recommended!”
              </p>
              {/* Rating Stars */}
              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-[#FFC107] fill-[#FFC107]"
                    size={20}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="p-12 text-center bg-[#F9FAFB]">
        <h2 className="text-3xl font-bold text-[#07304A]">Pricing Plan</h2>
        <p className="text-lg text-gray-600 mt-2">
          Choose the best plan that fits your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Free Plan */}
          <div className="p-8 bg-white border border-gray-300 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-[#07304A]">Free Plan</h3>
            <p className="text-4xl font-bold text-[#0AA9ED] mt-3">$0</p>
            <p className="text-gray-600 mt-2">
              1 user, basic features, responsive design.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>✔ AI-powered insights</li>
              <li>✔ Limited meditation sessions</li>
              <li>✔ Community support</li>
            </ul>
            <Button className="mt-6 w-full bg-[#0AA9ED] hover:bg-[#34C0FC] text-white">
              Get Started
            </Button>
          </div>

          {/* Basic Plan */}
          <div className="p-8 bg-[#0AA9ED] text-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform scale-105">
            <h3 className="text-2xl font-semibold">Basic Plan</h3>
            <p className="text-4xl font-bold mt-3">$15</p>
            <p className="mt-2">2 users, detailed plan, 2000 AI prompts.</p>
            <ul className="mt-4 space-y-2 text-white text-sm">
              <li>✔ Everything in Free Plan</li>
              <li>✔ Personalized meditation guides</li>
              <li>✔ More AI insights</li>
            </ul>
            <Button className="mt-6 w-full bg-white text-[#0AA9ED] hover:text-[#34C0FC]">
              Subscribe Now
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="p-8 bg-gray-900 text-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold">Pro Plan</h3>
            <p className="text-4xl font-bold mt-3">$20</p>
            <p className="mt-2">4 users, premium music & content.</p>
            <ul className="mt-4 space-y-2 text-gray-300 text-sm">
              <li>✔ Everything in Basic Plan</li>
              <li>✔ Premium meditation & music</li>
              <li>✔ AI-powered wellness coaching</li>
            </ul>
            <Button className="mt-6 w-full bg-white text-gray-900 hover:bg-gray-200">
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <Separator className="my-2 bg-gray-500" />{" "}
              {/* Shadcn Separator */}
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-[#0AA9ED] transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#0AA9ED] transition"
                  >
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
              <Separator className="my-2 bg-gray-500" />{" "}
              {/* Shadcn Separator */}
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
    </main>
  );
}
