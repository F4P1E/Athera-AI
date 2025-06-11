import Link from "next/link";
import NavbarActions from "./navbar-actions";

export default async function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-100 shadow-md">
      <div className="text-lg font-bold">Athera AI</div>
      <nav className="flex gap-6">
        <Link href="/meditation" className="hover:text-[#34C0FC]">
          Meditation
        </Link>
        <Link href="/mood-diary" className="hover:text-[#34C0FC]">
          Mood Diary
        </Link>
        <Link href="/services" className="hover:text-[#34C0FC]">
          Services
        </Link>
        <Link href="/about" className="hover:text-[#34C0FC]">
          About Us
        </Link>
      </nav>
      <NavbarActions />
    </header>
  );
}
