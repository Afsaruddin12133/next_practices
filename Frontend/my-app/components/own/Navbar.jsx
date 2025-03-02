'use client';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";

import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Product', href: '/product' },
  { name: 'Contact', href: '/contact' },
  { name: 'Each-Product', href: '/eproduct' },
  { name: 'Login', href: '/login' },
  { name: 'About', href: '/about' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-xl font-bold text-gray-900">MyBrand</div>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600 transition">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
