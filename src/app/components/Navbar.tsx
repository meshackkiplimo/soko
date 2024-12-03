import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">E-Shop</Link>
        </div>

        {/* Links */}
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link href="/products" className="hover:text-gray-200">
            Products
          </Link>
          <Link href="/about" className="hover:text-gray-200">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </div>

        {/* Cart Icon */}
        <div>
          <Link href="/cart" className="hover:text-gray-200">
            🛒 Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
