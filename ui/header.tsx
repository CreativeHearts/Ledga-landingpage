'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.jpg';
import Button from '@/ui/Button'; // Replace with your Button component import

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='relative   z-50 w-full py-7 px-4 bg-transparent flex justify-between items-center mx-auto'>
      {/* Logo and Hamburger Menu */}
      <div className='flex items-center'>
        <Link href={'/'} className='font-bold text-white text-[25px]'>
          <Image src={logo} alt={'logo'} className='w-28' />
        </Link>
      </div>
      {/* Desktop Menu links */}
      <div className='hidden md:flex flex-row items-center gap-6'>
        <Link
          href={'/'}
          className='text-black font-semibold text-[10px] md:text-[16px]'
        >
          About Us
        </Link>
        <Link
          href={'/'}
          className='text-black font-semibold text-[10px] md:text-[16px]'
        >
          Contact Us
        </Link>
        <Button />
      </div>
      {/* Hamburger Menu icon (visible on mobile) */}
      <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-blue-700'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      </div>
      {/* Mobile Menu */}
      {showMenu && (
        <div className='absolute top-[60px] right-0 w-full bg-white p-4 shadow-md md:hidden'>
          <div className='flex flex-col gap-4'>
            <Link href={'/'} className='text-gray-800 font-semibold text-sm'>
              About Us
            </Link>
            <Link href={'/'} className='text-gray-800 font-semibold text-sm'>
              Contact Us
            </Link>
            <Button />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
