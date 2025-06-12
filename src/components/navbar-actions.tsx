import { Button } from "./ui/button";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import NotificationPopover from "./notification-popover";
import UserNav from "./user-nav";

export default async function NavbarActions() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      {user ? (
        <div className="flex items-center gap-4">
          <NotificationPopover />
          <UserNav user={user} />
        </div>
      ) : (
        <Link href="/sign-in">
          <Button className="bg-[#07304A] hover:bg-[#34C0FC] text-white">
            Sign In
          </Button>
        </Link>
      )}
    </>
  );
}
