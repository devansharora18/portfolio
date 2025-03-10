"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
    <nav className="bg-inherit text-white shadow-lg pt-2">
      <div className="container mx-auto flex items-center justify-between px-6 pt-4">
        {/* Logo */}
        <Link href="/" className="text-xl lg:text-2xl font-bold">
          <span className="text-indigo-600">{"<"} </span> DEVANSHARORA <span className="text-indigo-600"> {" />"}</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
        <ul className="hidden md:flex space-x-6 text-lg">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:text-indigo-600 transition duration-300">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}

        <div>
          <Link href="#contact" className="hidden md:block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all">
            Contact
          </Link>
        </div>
        </div>


        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden text-center py-4 space-y-4 bg-black">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="block text-lg hover:text-blue-400 transition" onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#contact" className="block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all w-fit m-auto" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
    </header>
  );
}