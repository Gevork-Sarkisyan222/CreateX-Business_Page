'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useMediaQuery } from 'react-responsive';

type Props = {};

function Header({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 1106px)' });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="max-w-[1400px] mx-auto">
      <header className="pt-[38px] pb-[21px]">
        <motion.div
          initial={{ opacity: isMobile ? 0 : '', x: isMobile ? 300 : '' }}
          whileInView={{
            opacity: isMobile ? 1 : '',
            x: isMobile ? 0 : '',
            transition: { delay: 0.4 },
          }}
          viewport={{ once: true }}
          className="flex justify-around max-[1105px]:justify-between max-[1105px]:px-[20px] items-center">
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
            viewport={{ once: true }}
            className="flex gap-[60px] items-center">
            <img src="/logo.svg" alt="logo" />

            <ul className="flex gap-[40px] items-center font-[700] text-[#424551] max-[1105px]:hidden">
              <li className="transition-all duration-500 hover:text-[#ff5a30] cursor-pointer">
                About Us
              </li>
              <li className="transition-all duration-500 hover:text-[#ff5a30] cursor-pointer">
                Services
              </li>
              <li className="transition-all duration-500 hover:text-[#ff5a30] cursor-pointer">
                Work
              </li>
              <li className="transition-all duration-500 hover:text-[#ff5a30] cursor-pointer">
                News
              </li>
              <li className="transition-all duration-500 hover:text-[#ff5a30] cursor-pointer">
                Contacts
              </li>
            </ul>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
            viewport={{ once: true }}
            className="flex items-center gap-[36px] max-[1105px]:hidden">
            <div className="flex gap-[12px]">
              <img src="/Rectangle (Stroke).svg" alt="" />
              <article className="cursor-pointer">
                <h2 className="font-[700] text-[14px]">Call us</h2>
                <p className="text-[18px] font-[400] transition-all duration-500 hover:text-[#ff5a30] cursor-pointer">
                  (405) 555-0128
                </p>
              </article>
            </div>

            <div className="flex gap-[12px] relative">
              <img src="/1chat.svg" alt="image" />
              <img className="absolute bottom-[3px] left-[8px]" src="/2chat.svg" alt="image" />
              <article className="cursor-pointer">
                <h2 className="font-[700] text-[14px]">Talk to us</h2>
                <p className="text-[18px] font-[400] transition-all duration-500 hover:text-[#ff5a30] cursor-pointer">
                  hello@createx.com
                </p>
              </article>
            </div>
          </motion.section>

          <button onClick={toggleMenu} className="hidden max-[1105px]:block">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </motion.div>

        {/* Black Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeMenu}></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-[70%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
          <div className="p-[50px] max-[590px]:p-6 max-[590px]:pt-[40px]">
            <ul className="flex flex-col gap-6 text-[#424551] font-[700] text-[16px]">
              <li>About Us</li>
              <li>Services</li>
              <li>Work</li>
              <li>News</li>
              <li>Contacts</li>
            </ul>

            <section className="mt-8">
              <div className="flex gap-[12px]">
                <img src="/Rectangle (Stroke).svg" alt="" />
                <article>
                  <h2 className="font-[700] text-[14px]">Call us</h2>
                  <p className="text-[18px] font-[400]">(405) 555-0128</p>
                </article>
              </div>

              <div className="flex gap-[12px] mt-6 relative">
                <img src="/1chat.svg" alt="image" />
                <img className="absolute bottom-[3px] left-[8px]" src="/2chat.svg" alt="image" />
                <article>
                  <h2 className="font-[700] text-[14px]">Talk to us</h2>
                  <p className="text-[18px] font-[400]">hello@createx.com</p>
                </article>
              </div>
            </section>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
