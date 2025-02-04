import React from 'react';
import Container from './container';

type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-[#1E212C] max-[1295px]:px-[20px]">
      <Container className="py-[80px]">
        <div className="flex items-center gap-[242px] max-[920px]:flex-col max-[920px]:gap-[40px] max-[920px]:items-start">
          <div className="flex flex-col max-w-[493px]">
            <div className="flex gap-[60px] max-[440px]:flex-col max-[440px]:gap-[20px]">
              <img width={142} src="/white-logo.svg" alt="" />

              <div className="flex items-center gap-[18px]">
                <img src="/WhatsApp.svg" alt="" />
                <img src="/Messanger.svg" alt="" />
                <img src="/Facebook.svg" alt="" />
                <img src="/Twitter.svg" alt="" />
                <img src="/Youtube.svg" alt="" />
              </div>
            </div>

            <p className="mt-[24px] text-[#787A80] font-[400] text-[14px] noBold">
              Createx Construction Bureau has been successfully operating in the USA construction
              market since 2000. We are proud to offer you quality construction and exemplary
              service. Our mission is to set the highest standards for construction sphere.
            </p>
          </div>

          <div>
            <h1 className="text-white font-[700] text-[24px] mb-[24px]">Let’s stay in touch</h1>
            <div className="relative flex items-center w-[495px] max-[1120px]:w-full">
              <input
                className="border-[#61646d] border-[1px] bg-[#393b47] h-[44px] rounded-[4px] py-[10px] pb-[10px] pl-[15px] pr-[120px] text-[14px] font-[400] outline-none flex-1 text-white noBold"
                placeholder="Your email address"
                type="email"
              />
              <button className="absolute right-0 bg-[#FF5A30] rounded-t-right-[4px] rounded-b-right-[4px]  w-[131px] h-[44px] text-white font-[700] text-[14px] hover:bg-[#fc3300] duration-300 transition-all mr-[1px]">
                SUBSCRIBE
              </button>
            </div>

            <p className="mt-[16px] font-[400] text-[12px] text-[#787A80] noBold">
              *Subscribe to our newsletter to receive communications and early updates from Createx
              Construction Bureau.
            </p>
          </div>
        </div>

        <div className="flex gap-[125px] items-center mt-[73px] max-[655px]:flex-col max-[655px]:gap-[40px] max-[655px]:items-start">
          <ul className="flex flex-col gap-[8px]">
            <h2 className="font-[700] text-white text-[15px]">HEAD OFFICE</h2>
            <li className="text-[#787A80] font-[400]">
              <span className="text-white">Address:</span> 8502 Preston Rd. Inglewood, New York
            </li>
            <li className="text-[#787A80] font-[400] noBold">
              <span className="text-white">Call:</span>
              (405) 555-0128
            </li>
            <li className="text-[#787A80] font-[400]">
              <span className="text-white">Email:</span> hello@createx.com
            </li>
          </ul>

          <ul className="flex flex-col gap-[8px]">
            <h2 className="font-[700] text-white text-[15px]">WHO WE ARE</h2>
            <li className="text-[#787A80] font-[400]">About Us</li>
            <li className="text-[#787A80] font-[400]">Available Positions</li>
            <li className="text-[#787A80] font-[400]">Contacts</li>
          </ul>

          <ul className="flex flex-col gap-[8px]">
            <h2 className="font-[700] text-white text-[15px]">OUR EXPERIENCE</h2>
            <li className="text-[#787A80] font-[400]">Services</li>
            <li className="text-[#787A80] font-[400]">Work</li>
            <li className="text-[#787A80] font-[400]">News</li>
          </ul>
        </div>

        <div className="flex text-white font-[400] text-[12px] mt-[60px] gap-[5px] noBold">
          © All rights reserved. Made with <img src="/heart (2).svg" alt="" /> by Createx Studio
        </div>
      </Container>
    </div>
  );
}

export default Footer;
