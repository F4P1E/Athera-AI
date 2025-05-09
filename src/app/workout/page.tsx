"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Dumbbell, CheckCircle, Flame, Timer, Sparkles } from "lucide-react";
import { OpenAI } from "openai";

interface Workout {
  title: string;
  level: string;
  duration: string;
  calories: string;
}

const workouts: Workout[] = [
  {
    title: "Full Body Strength",
    level: "Beginner",
    duration: "30 min",
    calories: "250 kcal",
  },
  {
    title: "HIIT Fat Burner",
    level: "Intermediate",
    duration: "20 min",
    calories: "300 kcal",
  },
  {
    title: "Upper Body Strength",
    level: "Advanced",
    duration: "45 min",
    calories: "400 kcal",
  },
  {
    title: "Core & Abs Shred",
    level: "Intermediate",
    duration: "25 min",
    calories: "280 kcal",
  },
  {
    title: "Legs & Glutes",
    level: "Beginner",
    duration: "35 min",
    calories: "350 kcal",
  },
];

export default function WorkoutPlan() {
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [aiWorkout, setAiWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchAiWorkout = async () => {
    setLoading(true);
    try {
      const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      });
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "user",
            content: `Suggest a ${selectedLevel.toLowerCase()} level workout plan.`,
          },
        ],
        temperature: 0.7,
      });

      const workoutData = response.choices[0].message.content;
      if (workoutData) {
        setAiWorkout(JSON.parse(workoutData)); // Ensure AI returns a valid JSON response
      } else {
        setAiWorkout(null);
      }
    } catch (error) {
      console.error("Error fetching AI workout:", error);
      setAiWorkout(null);
    }
    setLoading(false);
  };

  const filteredWorkouts =
    selectedLevel === "All"
      ? workouts
      : workouts.filter((w) => w.level === selectedLevel);

  return (
    <div className="bg-gradient-to-br from-[#F0F5FF] to-[#DDE7F9] min-h-screen flex flex-col">
      {/* ✅ Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md fixed top-0 left-0 w-full z-20">
        <div className="text-lg font-bold text-gray-900">Athera AI</div>
        <nav className="flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-[#34C0FC] transition">
            Home
          </Link>
          <Link href="/meditation" className="hover:text-[#34C0FC] transition">
            Meditation
          </Link>
          <Link href="/mood-diary" className="hover:text-[#34C0FC] transition">
            Mood Diary
          </Link>
          <Link href="/workout-plan" className="text-[#34C0FC] font-bold">
            Workout Plan
          </Link>
        </nav>
        <Link href="/sign-in">
          <Button className="bg-[#07304A] hover:bg-[#34C0FC] text-white px-4 py-2 rounded-md shadow">
            Sign In
          </Button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center pt-28 pb-10">
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-md">
          Your <span className="text-[#34C0FC]">AI-Powered</span> Workout Plan
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          Get personalized workouts based on your fitness level and train
          smarter with AI recommendations.
        </p>

        {/* Fitness Level Selector */}
        <div className="mt-6">
          <label className="text-lg font-semibold text-gray-800">
            Select Your Fitness Level:
          </label>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="block mt-2 bg-white text-gray-800 px-4 py-2 rounded-md border border-gray-300 shadow-md focus:ring-2 focus:ring-[#34C0FC] transition"
          >
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* AI Workout Button */}
        <Button
          onClick={fetchAiWorkout}
          className="mt-4 bg-[#34C0FC] text-white px-6 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-[#07304A] transition"
        >
          <Sparkles className="w-5 h-5" /> Get AI Workout Plan
        </Button>
      </section>

      {/* AI Recommended Workout */}
      {loading ? (
        <section className="container mx-auto px-6 py-6">
          <h2 className="text-2xl font-bold text-center text-gray-900">
            💡 AI Recommended Workout
          </h2>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-white/40 mt-4">
            <Skeleton className="h-6 w-3/4 mb-4" />
            <Skeleton className="h-4 w-1/4 mb-2" />
            <Skeleton className="h-4 w-1/3 mb-2" />
            <Skeleton className="h-4 w-1/4 mb-4" />
            <Skeleton className="h-10 w-full mt-4" />
          </div>
        </section>
      ) : aiWorkout ? (
        <section className="container mx-auto px-6 py-6">
          <h2 className="text-2xl font-bold text-center text-gray-900">
            💡 AI Recommended Workout
          </h2>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-white/40 transition transform hover:scale-105 mt-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Dumbbell className="text-[#34C0FC]" /> {aiWorkout.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
              <CheckCircle className="text-green-500" /> {aiWorkout.level}
            </p>
            <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
              <Timer className="text-[#34C0FC]" /> {aiWorkout.duration}
            </p>
            <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
              <Flame className="text-red-500" /> {aiWorkout.calories}
            </p>
            <Button className="mt-4 bg-[#34C0FC] text-white w-full rounded-lg shadow-lg hover:scale-105 transition-all">
              Start AI Workout
            </Button>
          </div>
        </section>
      ) : null}

      {/* Workout Plans */}
      <section className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWorkouts.map((workout, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg border border-white/40 transition transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Dumbbell className="text-[#34C0FC]" /> {workout.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
              <CheckCircle className="text-green-500" /> {workout.level}
            </p>
            <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
              <Timer className="text-[#34C0FC]" /> {workout.duration}
            </p>
            <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
              <Flame className="text-red-500" /> {workout.calories}
            </p>
            <Button className="mt-4 bg-[#34C0FC] text-white w-full rounded-lg shadow-lg hover:scale-105 transition-all">
              Start Workout
            </Button>
          </div>
        ))}
      </section>
    </div>
  );
}
