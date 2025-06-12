"use client";

import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const supabase = createClient();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/sign-in");
  };

  return (
    <Button
      onClick={handleSignOut}
      className="bg-red-600 hover:bg-red-700 text-white"
    >
      Sign Out
    </Button>
  );
}
