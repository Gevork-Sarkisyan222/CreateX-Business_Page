'use client';

import React from 'react';
import Container from './container';
import * as motion from 'motion/react-client';
import { useMediaQuery } from 'react-responsive';

type Props = {};

function DiscusForm({}: Props) {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 516px)' });

  return (
    <div
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage:
          'url(https://s3-alpha-sig.figma.com/img/75b5/c0d6/aa3e13c7465310229d970e2c13d9d922?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PiOCYCt82e2INl7Z3He~n9kpsdepRqu8LCu9hahHYKVjBsLBBExFmOFj5rUD3LOOGeCXuI9I5WsT8vJEZeE-HVQgsRZsbr4cRzWpsgBFUu9BSYINsJjr2BCoIZxFSL92EZhlY8cs6KkloQOtupANQGVfXMFR68~MD0TVQVa6boKzP7NN66E-~pMLB5gpJqwJaabYY87vJHd2~jFJYJ93N5lhqF65ziGq3v0Lva5EPb6b0JgCgqHRI10u8gNQNz~utTsk75eV633XNy4cQNN3ffpfVAs0JeGjkyrH97So7ZoVo1v2FBGr0QjTnH3tcIBWs2tiOYE-KMxOWNZ51lkH6g__)',
      }}
      className="w-full">
      {' '}
      <Container className="flex justify-end w-full px-[20px]">
        <motion.form
          initial={{ opacity: 0, x: isSmallScreen ? -200 : -500 }}
          whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            boxShadow: `
              0px 4px 4px -4px #1E212C0D,
              0px 12px 10px -6px #1E212C14,
              0px 26px 24px -10px #1E212C1A,
              0px 60px 80px -20px #1E212C29
            `,
          }}
          className="bg-white max-w-[495px] px-[40px] py-[48px] rounded-[4px] border-[1px] border-[#E5E8ED] my-[80px]">
          <h1 className="font-[700] text-[28px] text-[#1E212C]">A quick way to discuss details</h1>

          <div className="flex flex-col pt-[24px]">
            <div className="flex flex-col gap-[0px] text-start mb-[20px]">
              <label
                className="mb-[5px] text-[#424551] text-[14px] font-[400] noBold"
                htmlFor="Name">
                Name
              </label>
              <input
                className="border-[#D7DADD] border-[1px] bg-[#F4F5F6] w-full h-[44px] rounded-[4px] p-[10px] text-[14px] font-[400] text-[black] outline-none noBold"
                placeholder="Your name"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-[0px] text-start mb-[20px]">
              <label
                className="mb-[5px] text-[#424551] text-[14px] font-[400] noBold"
                htmlFor="Phone">
                Phone
              </label>
              <input
                className="border-[#D7DADD] border-[1px] bg-[#F4F5F6] w-full h-[44px] rounded-[4px] p-[10px] text-[14px] font-[400] text-[black] outline-none noBold"
                placeholder="Your phone number"
                type="number"
              />
            </div>

            <div className="flex flex-col gap-[0px] text-start mb-[20px]">
              <label
                className="mb-[5px] text-[#424551] text-[14px] font-[400] noBold"
                htmlFor="Phone">
                Email
              </label>
              <input
                className="border-[#D7DADD] border-[1px] bg-[#F4F5F6] w-full h-[44px] rounded-[4px] p-[10px] text-[14px] font-[400] text-[black] outline-none noBold"
                placeholder="Your working email"
                type="email"
              />
            </div>

            <div className="flex flex-col gap-[0px] text-start mb-[20px]">
              <label
                className="mb-[5px] text-[#424551] text-[14px] font-[400] noBold"
                htmlFor="Message">
                Message
              </label>
              <textarea
                className="border-[#D7DADD] border-[1px] resize-none max-h-[66px] bg-[#F4F5F6] w-full  rounded-[4px] p-[10px] text-[14px] font-[400] text-[black] outline-none noBold"
                placeholder="Your message"
              />
            </div>

            <div className="flex">
              <input
                id="default-checkbox"
                type="checkbox"
                className="flex-shrink-0 appearance-none w-[16px] h-[16px] border-[1px] border-solid border-[#FF5A30] rounded-sm bg-white 
    checked:bg-[#FF5A30] checked:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M13.3%203.3L6%2010.6%202.7%207.3a1%201%200%200%200-1.4%201.4l4%204a1%201%200%200%200%201.4%200l8-8a1%201%200%200%200-1.4-1.4z%22/%3E%3C/svg%3E')]
    bg-no-repeat bg-center focus:ring-2 focus:ring-[#FF5A30] focus:ring-offset-0 cursor-pointer"
              />

              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 noBold">
                I agree to receive communications from Createx Construction Bureau.
              </label>
            </div>

            <div className="flex justify-center">
              <button className="bg-[#FF5A30] rounded-[4px] w-[174px] h-[44px] text-white font-[700] text-[14px] hover:bg-[#fc3300] duratuion-300 transition-all mt-[35px] uppercase">
                send request
              </button>
            </div>
          </div>
        </motion.form>
      </Container>
    </div>
  );
}

export default DiscusForm;
