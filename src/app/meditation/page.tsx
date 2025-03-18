import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlayCircle, Headphones, Clock } from "lucide-react";

export default function Meditation() {
  return (
    <main className="bg-[#F0F9FF] text-[#07304A]">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold">Discover Inner Peace with Meditation</h1>
        <p className="text-lg text-[#0AA9ED] mt-2">
          Guided meditations to help you relax, focus, and achieve mindfulness.
        </p>
        <Image 
          src="/hero/meditation-hero.png" 
          alt="Meditation" 
          width={600} 
          height={300} 
          className="mx-auto mt-6 rounded-lg shadow-lg"
        />
      </section>

      <Separator className="my-10 bg-gray-400" />

      {/* Guided Meditation Section */}
      <section className="px-6 text-center">
        <h2 className="text-3xl font-bold">Guided Meditation Sessions</h2>
        <p className="text-lg text-gray-600 mt-2">
          Explore different meditation styles to suit your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {/* Meditation Type 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <PlayCircle className="text-[#0AA9ED] mx-auto mb-2" size={40} />
            <h3 className="font-semibold">Mindfulness Meditation</h3>
            <p className="text-sm text-gray-500">
              Improve awareness and stay present in the moment.
            </p>
          </div>

          {/* Meditation Type 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Headphones className="text-[#0AA9ED] mx-auto mb-2" size={40} />
            <h3 className="font-semibold">Guided Relaxation</h3>
            <p className="text-sm text-gray-500">
              Relax deeply with soothing voice-guided sessions.
            </p>
          </div>

          {/* Meditation Type 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Clock className="text-[#0AA9ED] mx-auto mb-2" size={40} />
            <h3 className="font-semibold">Sleep Meditation</h3>
            <p className="text-sm text-gray-500">
              Fall asleep faster with calming sleep-focused meditations.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-10 bg-gray-400" />

      {/* How It Works Section */}
      <section className="px-6 text-center">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">
          Follow these simple steps to get started with meditation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">1. Choose a Session</h3>
            <p className="text-sm text-gray-500">
              Pick a meditation session that fits your goal.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">2. Find a Quiet Space</h3>
            <p className="text-sm text-gray-500">
              Ensure you're in a calm environment for better focus.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">3. Start Meditating</h3>
            <p className="text-sm text-gray-500">
              Listen, breathe, and relax with guided instructions.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-10 bg-gray-400" />

      {/* Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-bold">Start Your Meditation Journey Today</h2>
        <p className="text-lg text-gray-600 mt-2">
          Unlock mindfulness and relaxation with just one click.
        </p>
        <Button className="mt-4 bg-[#07304A] text-white px-6 py-2">Begin Now</Button>
      </section>
    </main>
  );
}
