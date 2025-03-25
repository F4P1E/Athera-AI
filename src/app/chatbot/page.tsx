import Link from "next/link";
import { Button } from "@/components/ui/button";
import Chatbot from "@/components/chatbot/Chatbot";

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gray-100">
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

      {/* Chatbot Section */}
      <div className="flex items-center justify-center mt-10">
        <Chatbot />
      </div>
    </div>
  );
}
