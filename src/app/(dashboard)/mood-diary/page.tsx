"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Line } from "react-chartjs-2";
import { format, subDays } from "date-fns";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MoodEntry {
  date: string;
  mood: string;
  note?: string;
}

const moodOptions = [
  {
    name: "Happy",
    icon: "😊",
    color: "bg-green-100 border-green-500 text-green-700",
  },
  {
    name: "Neutral",
    icon: "😐",
    color: "bg-yellow-100 border-yellow-500 text-yellow-700",
  },
  {
    name: "Sad",
    icon: "😢",
    color: "bg-blue-100 border-blue-500 text-blue-700",
  },
  {
    name: "Energetic",
    icon: "⚡",
    color: "bg-orange-100 border-orange-500 text-orange-700",
  },
];

export default function MoodDiary() {
  const [moodData, setMoodData] = useState<MoodEntry[]>([]);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [note, setNote] = useState<string>("");
  const today = format(new Date(), "yyyy-MM-dd");

  useEffect(() => {
    const savedMoods = localStorage.getItem("mood-diary");
    if (savedMoods) {
      setMoodData(JSON.parse(savedMoods));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mood-diary", JSON.stringify(moodData));
  }, [moodData]);

  const logMood = (mood: string) => {
    setSelectedMood(mood);
    const newEntry = { date: today, mood, note };
    const updatedData = moodData.filter((entry) => entry.date !== today);
    setMoodData([...updatedData, newEntry]);
  };

  const getMoodForDate = (date: string) => {
    const entry = moodData.find((entry) => entry.date === date);
    return entry ? entry.mood : null;
  };

  const getMoodIndex = (mood: string | null) => {
    if (mood === "Happy") return 3;
    if (mood === "Energetic") return 4;
    if (mood === "Neutral") return 2;
    if (mood === "Sad") return 1;
    return 0;
  };

  const weeklyData = Array.from({ length: 7 })
    .map((_, i) => {
      const date = format(subDays(new Date(), i), "yyyy-MM-dd");
      return { date, mood: getMoodForDate(date) };
    })
    .reverse();

  const moodChartData = {
    labels: weeklyData.map((entry) => format(new Date(entry.date), "EEE")),
    datasets: [
      {
        label: "Mood Level",
        data: weeklyData.map((entry) => getMoodIndex(entry.mood)),
        borderColor: "#34C0FC",
        backgroundColor: "rgba(52, 192, 252, 0.3)",
        fill: true,
      },
    ],
  };

  return (
    <div className="p-6">
      {/* Mood Selection */}
      <h3 className="text-lg font-semibold mb-3">How are you feeling today?</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {moodOptions.map((mood) => (
          <button
            key={mood.name}
            className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg transition-transform transform hover:scale-105 shadow-sm ${
              mood.color
            } ${selectedMood === mood.name ? "ring-4 ring-blue-400" : ""}`}
            onClick={() => logMood(mood.name)}
          >
            <span className="text-3xl">{mood.icon}</span>
            <span className="text-sm mt-2 font-medium">{mood.name}</span>
          </button>
        ))}
      </div>

      {/* Notes Section */}
      <h3 className="text-lg font-semibold mb-2">📖 Today&apos;s Reflection</h3>
      <Textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write about your day..."
        className="w-full mb-3"
      />
      <Button
        className="w-full bg-blue-600 text-white hover:bg-blue-700"
        onClick={() => logMood(selectedMood || "Neutral")}
      >
        Save Mood & Note
      </Button>

      {/* Weekly Mood Tracker */}
      <h3 className="text-lg font-semibold mt-6 mb-3">
        📊 Your Mood This Week
      </h3>
      <div className="grid grid-cols-7 gap-2">
        {weeklyData.map((entry, i) => {
          const moodOption = moodOptions.find((m) => m.name === entry.mood);

          return (
            <div key={entry.date} className="text-center">
              <div className="text-xs text-gray-500">
                {format(subDays(new Date(), i), "EEE")}
              </div>
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-md text-lg ${
                  moodOption?.color || "bg-gray-200"
                }`}
              >
                {moodOption?.icon || "-"}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mood Trend Chart */}
      <h3 className="text-lg font-semibold mt-6 mb-3 text-center">
        📈 Mood Trend
      </h3>
      <div className="w-full h-48">
        <Line
          data={moodChartData}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
}
