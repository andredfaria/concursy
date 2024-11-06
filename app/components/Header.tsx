"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "#simulados", text: "Simulados" },
    { href: "#como-funciona", text: "Como Funciona" },
    { href: "#depoimentos", text: "Depoimentos" },
    { href: "#contato", text: "Contato" },
  ];

  return (
    <header className="bg-custom-blue text-black shadow-lg relative">
      <div className="container mx-auto bg-primary-color px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Concursy"
            width={50}
            height={50}
            className="mr-4"
          />
          <span className="text-2xl font-bold">Concursy</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-custom-white hover:text-indigo-200 transition-colors"
            >
              {item.text}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-custom-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-custom-blue shadow-lg">
          <div className="flex flex-col py-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-custom-white hover:text-indigo-200 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
