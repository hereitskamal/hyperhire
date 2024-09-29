'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../public/logo.png';
import Dropdown from './microComponents/Dropdown';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState('bg-transparent');

  const handleDropdownSelect = (option: string) => {
    console.log(`Selected option: ${option}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor('bg-cyan-700 bg-opacity-100');
      } else {
        setBgColor('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 left-0 z-30 transition-colors duration-300 ${bgColor}`}>
      <div className="main-container container mx-auto flex items-center justify-between px-6 md:px-16 py-4">
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="Brand Logo" width={114} height={40} priority={true} className="mr-2" />
        </Link>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Dropdown
            label="채용"
            color="text-gray-800"
            options={['해외 개발자 원격 채용', '외국인 원격 채용 (비개발 직군)', '한국어 가능 외국인 채용']}
            onSelect={handleDropdownSelect}
          />
          <Link href="/about" className="text-white hover:text-gray-300">
            해외 개발자 활용 서비스
          </Link>
        </div>

        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-white text-cyan-600 font-bold rounded-xl px-6 py-2 hover:bg-gray-100 transition duration-200">
              문의하기
            </button>
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-white text-gray-800 absolute w-full z-20 mt-2 rounded-lg">
          <div className="flex flex-col items-center py-2">
            <Dropdown
              label="채용"
              labelColor="text-gray-800"
              color="text-gray-800"
              options={['해외 개발자 원격 채용', '외국인 원격 채용 (비개발 직군)', '한국어 가능 외국인 채용']}
              onSelect={handleDropdownSelect}
            />
            <Link href="/about" className="py-2 hover:text-gray-300">
              해외 개발자 활용 서비스
            </Link>
            <Link href="/contact">
              <button className="bg-white text-cyan-600 font-bold rounded-xl px-4 py-2 hover:bg-gray-100 transition duration-200">
                문의하기
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
