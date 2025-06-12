"use client";

import {
  BarChart2,
  BotMessageSquareIcon,
  Flame,
  Settings,
  Headphones,
  Home,
  Menu,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative h-screen">
      {/* Sidebar Toggle Button */}
      <Button
        className="fixed top-4 left-4 z-100 bg-[#07304A] text-white p-2 rounded-full shadow-lg md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <Flame size={24} /> : <Menu size={24} />}
      </Button>

      {/* Sidebar Menu */}
      <aside
        className={`fixed z-50 top-0 left-0 h-full bg-[#07304A] text-white w-64 p-6 transition-transform duration-300 ease-in-out 
  ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h2 className="text-xl font-bold">Athera AI</h2>
        <ul className="mt-4 space-y-3">
          <li>
            <Link
              href="/"
              className="flex items-center gap-3 hover:text-[#0AA9ED] cursor-pointer"
            >
              <Home size={20} /> Home
            </Link>
          </li>
          <li>
            <Link
              href="/guidedmeditation"
              className="flex items-center gap-3 hover:text-[#0AA9ED] cursor-pointer"
            >
              <Headphones size={20} /> Guided Meditations
            </Link>
          </li>
          <li>
            <Link
              href="/analytics"
              className="flex items-center gap-3 hover:text-[#0AA9ED] cursor-pointer"
            >
              <BarChart2 size={20} /> Analytics
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="flex items-center gap-3 hover:text-[#0AA9ED] cursor-pointer"
            >
              <Settings size={20} /> Settings
            </Link>
          </li>
          <li>
            <Link
              href="/chatbot"
              className="flex items-center gap-3 hover:text-[#0AA9ED] cursor-pointer"
            >
              <BotMessageSquareIcon size={20} /> AI Chatbot
            </Link>
          </li>
          <li>
            <Link
              href="/workout"
              className="flex items-center gap-3 hover:text-[#0AA9ED] cursor-pointer"
            >
              <Flame size={20} /> Workout Plan
            </Link>
          </li>
        </ul>
      </aside>

      <main className="pl-0 md:pl-64 w-full bg-[#F0F9FF] text-[#07304A] min-h-screen transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
