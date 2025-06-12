"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const meditationData = [
  // Sample data for meditation analytics
  { day: "Mon", minutes: 20 },
  { day: "Tue", minutes: 15 },
  { day: "Wed", minutes: 25 },
  { day: "Thu", minutes: 30 },
  { day: "Fri", minutes: 10 },
  { day: "Sat", minutes: 40 },
  { day: "Sun", minutes: 35 },
];

export default function Meditation() {
  // Meditation page component
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold">
          Discover Inner Peace with Meditation
        </h1>
        <p className="text-lg text-[#0AA9ED] mt-2">
          Guided meditations to help you relax, focus, and achieve mindfulness.
        </p>
        <Image
          src="/meditation/how-to-meditate.jpg"
          alt="Meditation"
          width={600}
          height={300}
          className="mx-auto mt-6 rounded-lg shadow-lg"
        />
      </section>

      <Separator className="my-10 bg-gray-400" />

      {/* Meditation Picker */}
      <section className="text-center">
        <h2 className="text-3xl font-bold">Select Your Meditation Date</h2>
        <div className="mt-4 flex justify-center items-center gap-4">
          <Calendar size={24} className="text-[#0AA9ED]" />
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) =>
              setSelectedDate(date ?? new Date())
            }
            className="p-2 border rounded-lg"
          />
        </div>
        <Link href="/session">
          <Button className="mt-6 bg-[#07304A] text-white px-6 py-2">
            Begin Session
          </Button>
        </Link>
      </section>

      <Separator className="my-10 bg-gray-400" />

      {/* Analytics Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold">Your Meditation Activity</h2>
        <p className="text-lg text-gray-600 mt-2">
          Track your meditation minutes throughout the week.
        </p>
        <div className="mt-6 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={meditationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="minutes"
                stroke="#0AA9ED"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </>
  );
}
