"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
      // Call your sign-up API or service here
      console.log("Sign-up attempt:", { email, password });
    }
  };

  return (
    <div className="relative min-h-screen flex bg-gradient-to-br from-[#F0F5FF] to-[#DDE7F9]">
      {/* Left Section (Image) */}
      <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("/hero/hero-background-1.jpg")' }}></div>

      {/* Right Section (Form) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
            Create Your Account
          </h1>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm mb-4 text-center">{error}</div>
          )}

          {/* Sign-up Form */}
          <form onSubmit={handleSignUp}>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#34C0FC] placeholder:text-gray-500"
                placeholder="youremail@domain.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#34C0FC] placeholder:text-gray-500"
                placeholder="********"
                required
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 font-medium" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#34C0FC] placeholder:text-gray-500"
                placeholder="********"
                required
              />
            </div>

            <Button className="w-full bg-[#34C0FC] text-white py-3 rounded-md shadow-md hover:bg-[#1D92D0] transition">
              Sign Up
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-[#34C0FC] font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
