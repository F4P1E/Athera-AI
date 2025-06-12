import Link from "next/link";
import NavbarActions from "./navbar-actions";

export default async function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md fixed top-0 left-0 w-full z-20">
      <div className="text-lg font-bold text-gray-900">Athera AI</div>
      <nav className="flex gap-6 text-gray-700 font-medium">
        <Link href="/" className="hover:text-[#34C0FC] transition">
          Home
        </Link>
        <Link href="/meditation" className="hover:text-[#34C0FC] transition">
          Meditation
        </Link>
        <Link href="/workout-plan" className="hover:text-[#34C0FC] transition">
          Workouts
        </Link>
        <Link href="/analytics" className="text-[#34C0FC] font-bold">
          Analytics
        </Link>
      </nav>
      <NavbarActions />
    </header>
  );
}
