import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cartIcon from '../../../public/Buy.png';
import logo from '../../../public/Group 2.png'
import user from '../../../public/user.png'


const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-orange-500 p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold ">
          <Link href="/" className='flex items-center'>
          <Image src={logo} alt="logo" width={35} height={35} className="mr-2 " />
          
          DOWNTOP
          
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-full max-w-lg my-4 sm:my-0 sm:ml-4">
          <input
            type="text"
            placeholder="Search essentials, groceries, and more..."
            className="w-full p-3 border border-gray-200 rounded-l-md focus:outline-none focus:ring focus:ring-gray-400"
          />
          <button className="bg-orange-500 text-white px-6 py-3 rounded-r-md hover:bg-orange-600">
            Search
          </button>
        </div>

        {/* Cart and Sign In */}
        <div className="flex space-x-11 ">
          <Link href="/cart" className="hover:text-orange-600 text-black flex  items-center">
          <Image src={cartIcon} alt="Cart" width={35} height={35} className="mr-2" />
          Cart
             
          </Link>
          <Link href="/sign-in" className="hover:text-orange-600 text-black flex items-center ">
          <Image src={user} alt="user" width={40} height={40} className="mr-2"    />
            Sign up/sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
