"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState("");

  return (
    <nav className="bg-black/50 backdrop-blur-md text-gray-400 py-4 px-6 flex justify-between items-center border-b border-gray-700 fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="text-3xl font-medium">
        <Link href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">
          MECHA.az
        </Link>
      </div>

      <ul className="flex space-x-10 text-[15px]">
        {["Home", "Solutions", "Platform", "Use Cases", "Network"].map((item) => (
          <li key={item}>
            <Link
              href={`/${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition-colors"
              onClick={() => setActive(item)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex space-x-3 items-center">
        <Link
          href="/login"
          className="border border-transparent bg-gradient-to-r from-cyan-400 to-teal-500 p-[1px] rounded-md"
        >
          <div className="px-3 py-1 bg-black text-white text-[15px] rounded hover:bg-opacity-80 transition">
            Login
          </div>
        </Link>

        <Link
          href="/signup"
          className="px-4 py-1 bg-cyan-400 text-white text-[15px] font-medium rounded hover:bg-cyan-500 transition flex items-center justify-center"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
