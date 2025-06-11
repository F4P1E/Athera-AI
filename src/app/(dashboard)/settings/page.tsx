"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Camera, Lock, Trash2, Save } from "lucide-react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [avatar, setAvatar] = useState("/default-avatar.png");

  return (
    <main
      className={`min-h-screen p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Back to Home Button */}
      <div className="mb-6">
        <Link
          href="/"
          className="flex items-center text-blue-600 hover:underline"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-center">User Settings</h1>
      <p className="text-center text-gray-500">
        Manage your account settings and preferences
      </p>

      <div className="max-w-3xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
        {/* Profile Section */}
        <section>
          <h2 className="text-xl font-semibold">Profile</h2>
          <Separator className="my-4" />
          <div className="flex items-center gap-6">
            <div className="relative w-20 h-20">
              <Image
                src={avatar}
                alt="Avatar"
                width={80}
                height={80}
                className="rounded-full object-cover border"
              />
              <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full cursor-pointer">
                <Camera size={16} />
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setAvatar(URL.createObjectURL(file));
                    }
                  }}
                />
              </label>
            </div>
            <div className="flex-1">
              <label className="text-sm text-gray-500">Full Name</label>
              <Input placeholder="Enter your name" className="mt-1" />
              <label className="text-sm text-gray-500 mt-3 block">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="mt-1"
              />
            </div>
          </div>
        </section>

        {/* Security Settings */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Security</h2>
          <Separator className="my-4" />
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-md font-medium">Change Password</h3>
              <p className="text-sm text-gray-500">
                Update your account password
              </p>
            </div>
            <Button variant="outline">
              <Lock size={16} className="mr-2" /> Change
            </Button>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <h3 className="text-md font-medium">
                Enable Two-Factor Authentication (2FA)
              </h3>
              <p className="text-sm text-gray-500">
                Extra layer of security for your account
              </p>
            </div>
            <Switch />
          </div>
        </section>

        {/* Notifications */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <Separator className="my-4" />
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-md font-medium">Email Notifications</h3>
              <p className="text-sm text-gray-500">Receive updates via email</p>
            </div>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
        </section>

        {/* Appearance */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Appearance</h2>
          <Separator className="my-4" />
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-md font-medium">Dark Mode</h3>
              <p className="text-sm text-gray-500">
                Enable dark mode for better visibility
              </p>
            </div>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>
        </section>

        {/* Account Actions */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-red-600">Danger Zone</h2>
          <Separator className="my-4" />
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-md font-medium">Delete Account</h3>
              <p className="text-sm text-gray-500">
                Permanently remove your account
              </p>
            </div>
            <Button variant="destructive">
              <Trash2 size={16} className="mr-2" /> Delete
            </Button>
          </div>
        </section>

        {/* Save Button */}
        <div className="mt-8 text-right">
          <Button className="bg-blue-600 text-white">
            <Save size={16} className="mr-2" /> Save Changes
          </Button>
        </div>
      </div>
    </main>
  );
}
