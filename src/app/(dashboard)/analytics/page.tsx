"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Line, Bar } from "react-chartjs-2";
import {
  Activity,
  HeartPulse,
  Timer,
  BrainCircuit,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import Link from "next/link";

// Register Chart.js Components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

// Sample Data (Replace with API or AI data)
const weeklyMeditationData = [20, 30, 45, 50, 65, 75, 90]; // Minutes per day
const weeklyWorkoutData = [10, 15, 20, 30, 35, 40, 50]; // Minutes per day

export default function AnalyticsPage() {
  const [aiInsights, setAiInsights] = useState(
    "Loading AI-generated insights..."
  );

  useEffect(() => {
    // Simulate AI-powered insights (Replace with API Call)
    setTimeout(() => {
      setAiInsights(
        "You are on track! Increase HIIT workouts by 10% for better results."
      );
    }, 1500);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#F0F5FF] to-[#DDE7F9] min-h-screen px-6 py-10">
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
          <Link
            href="/workout-plan"
            className="hover:text-[#34C0FC] transition"
          >
            Workouts
          </Link>
          <Link href="/analytics" className="text-[#34C0FC] font-bold">
            Analytics
          </Link>
        </nav>
        <Link href="/sign-in">
          <Button className="bg-[#07304A] hover:bg-[#34C0FC] text-white px-4 py-2 rounded-md shadow">
            Sign In
          </Button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-10 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-md">
          Your <span className="text-[#34C0FC]">Personal Analytics</span>{" "}
          Dashboard
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Track your meditation, workout, and overall wellness progress in real
          time.
        </p>
      </section>

      {/* AI Insights Section */}
      <div className="max-w-5xl mx-auto mb-8 p-6 bg-white/90 shadow-xl rounded-xl border border-gray-200 flex items-center gap-4">
        <Sparkles className="text-yellow-500 w-10 h-10" />
        <p className="text-gray-700 font-medium">{aiInsights}</p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">
        <Card className="p-4 shadow-lg bg-white border border-gray-200 hover:scale-105 transition">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <HeartPulse className="text-red-500" /> Heart Rate
            </CardTitle>
            <span className="text-green-500 font-bold text-lg">78 bpm</span>
          </CardHeader>
          <CardContent className="text-gray-600">
            Resting heart rate is stable.
          </CardContent>
        </Card>

        <Card className="p-4 shadow-lg bg-white border border-gray-200 hover:scale-105 transition">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <BrainCircuit className="text-blue-500" /> Mental Focus
            </CardTitle>
            <span className="text-purple-500 font-bold text-lg">High</span>
          </CardHeader>
          <CardContent className="text-gray-600">
            Consistent meditation is improving focus.
          </CardContent>
        </Card>

        <Card className="p-4 shadow-lg bg-white border border-gray-200 hover:scale-105 transition">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <TrendingUp className="text-green-500" /> Activity Level
            </CardTitle>
            <span className="text-blue-500 font-bold text-lg">85%</span>
          </CardHeader>
          <CardContent className="text-gray-600">
            You are reaching your weekly fitness goal.
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-6xl mt-8">
        {/* Meditation Trend */}
        <Card className="p-4 shadow-lg bg-white border border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <Timer className="text-[#34C0FC]" /> Weekly Meditation Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Line
              data={{
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [
                  {
                    label: "Meditation (min)",
                    data: weeklyMeditationData,
                    borderColor: "#34C0FC",
                    backgroundColor: "rgba(52, 192, 252, 0.2)",
                    borderWidth: 3,
                  },
                ],
              }}
            />
          </CardContent>
        </Card>

        {/* Workout Progress */}
        <Card className="p-4 shadow-lg bg-white border border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <Activity className="text-green-500" /> Workout Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Bar
              data={{
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [
                  {
                    label: "Workout (min)",
                    data: weeklyWorkoutData,
                    backgroundColor: "rgba(34, 197, 94, 0.5)",
                    borderColor: "#22C55E",
                    borderWidth: 2,
                  },
                ],
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
