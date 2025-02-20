'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useMediaQuery } from 'react-responsive';

type Props = {};

function Services({}: Props) {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <div
      style={{
        backgroundImage: `url('https://live.verstaem.online/createx/img/services-bg.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="max-w-[1230px] mx-auto pt-[210px] max-[770px]:pt-[100px] px-[20px]">
        <div className="text-center mb-[60px]">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-[24px] font-[700] text-[46px] max-[640px]:text-[36px]">
            Our services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-[18px] text-[#787A80] font-[400] mx-auto noBold">
            Createx Construction Bureau is a construction giant with a full range of construction
            services.
          </motion.p>
        </div>

        {/* Service Cards Grid */}

        {/* for desktop */}
        <section
          className="grid grid-cols-4 gap-[30px] mb-[80px] 
          max-[1200px]:grid-cols-3 
          max-[900px]:grid-cols-2 
          max-[640px]:grid-cols-1
          max-[640px]:gap-[20px] max-[640px]:hidden">
          {/* Card 1 - Construction */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{
              boxShadow: `
                0px 4px 4px -4px rgba(30, 33, 44, 0.03),
                0px 12px 10px -6px rgba(154, 156, 165, 0.04),
                0px 30px 24px -10px rgba(154, 156, 165, 0.05),
                0px 80px 80px -20px rgba(154, 156, 165, 0.08)
              `,
            }}
            className="w-full min-h-[285px] rounded-[4px] bg-white flex items-center justify-center flex-col gap-[20px] 
              transition-all duration-500 hover:bg-black hover:text-white cursor-pointer group
              p-[20px] text-center">
            <svg
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:scale-110 transition-transform">
              <g clipPath="url(#clip0_144815_2081)">
                <path
                  d="M50.9766 27.5234C51.8179 27.5234 52.5 26.8413 52.5 26V14.625C52.5 13.7837 51.8179 13.1016 50.9766 13.1016C49.9146 13.1016 29.168 13.1016 28.0234 13.1016V3.25C28.0234 2.40866 27.3413 1.72656 26.5 1.72656H10.25C9.40866 1.72656 8.72656 2.40866 8.72656 3.25V13.1016H2.02344C1.18209 13.1016 0.5 13.7837 0.5 14.625V26C0.5 26.8413 1.18209 27.5234 2.02344 27.5234H8.72656V35.8516H2.02344C1.18209 35.8516 0.5 36.5337 0.5 37.375V48.75C0.5 49.5913 1.18209 50.2734 2.02344 50.2734H50.9766C51.8179 50.2734 52.5 49.5913 52.5 48.75V37.375C52.5 36.5337 51.8179 35.8516 50.9766 35.8516H44.2734V27.5234H50.9766ZM49.4531 24.4766C47.8232 24.4766 37.7597 24.4766 36.1484 24.4766V16.1484H49.4531V24.4766ZM33.1016 24.4766C31.5059 24.4766 21.5046 24.4766 19.8984 24.4766V16.1484H33.1016V24.4766ZM11.7734 4.77344H24.9766V13.1016C23.3809 13.1016 13.3796 13.1016 11.7734 13.1016V4.77344ZM3.54688 24.4766V16.1484H16.8516V24.4766C15.2396 24.4766 5.17645 24.4766 3.54688 24.4766ZM11.7734 27.5234H24.9766V35.8516C23.3809 35.8516 13.3796 35.8516 11.7734 35.8516V27.5234ZM3.54688 38.8984H16.8516V47.2266H3.54688V38.8984ZM19.8984 38.8984H33.1016V47.2266H19.8984V38.8984ZM49.4531 38.8984V47.2266H36.1484V38.8984H49.4531ZM41.2266 35.8516C39.6309 35.8516 29.6296 35.8516 28.0234 35.8516V27.5234H41.2266V35.8516Z"
                  className="fill-[#FF5A30] group-hover:fill-white"
                />
              </g>
              <defs>
                <clipPath id="clip0_144815_2081">
                  <rect width="52" height="52" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
            <h1 className="font-[700] text-[20px] max-[640px]:text-[18px]">Construction</h1>
          </motion.div>

          {/* Card 2 - Project Development */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            viewport={{ once: true }}
            style={{
              boxShadow: `
                0px 4px 4px -4px rgba(30, 33, 44, 0.03),
                0px 12px 10px -6px rgba(154, 156, 165, 0.04),
                0px 30px 24px -10px rgba(154, 156, 165, 0.05),
                0px 80px 80px -20px rgba(154, 156, 165, 0.08)
              `,
            }}
            className="w-full min-h-[285px] rounded-[4px] bg-white flex items-center justify-center flex-col gap-[20px] 
              transition-all duration-500 hover:bg-black hover:text-white cursor-pointer group
              p-[20px] text-center">
            <svg
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:scale-110 transition-transform">
              <g clipPath="url(#clip0_144815_1789)">
                <path
                  d="M46.4062 3.14844C44.1552 3.14844 42.1854 4.37521 41.1303 6.19531H2.02344C1.18209 6.19531 0.5 6.87741 0.5 7.71875V47.3281C0.5 48.1695 1.18209 48.8516 2.02344 48.8516H46.4062C49.7663 48.8516 52.5 46.1179 52.5 42.7578V9.24219C52.5 5.88209 49.7663 3.14844 46.4062 3.14844ZM46.4062 45.8047C45.8103 45.8047 4.1011 45.8047 3.54688 45.8047V9.24219H40.3125V42.7578C40.3125 43.5992 40.9946 44.2812 41.8359 44.2812C42.6773 44.2812 43.3594 43.5992 43.3594 42.7578C43.3594 41.0778 44.7262 39.7109 46.4062 39.7109C48.0863 39.7109 49.4531 41.0778 49.4531 42.7578C49.4531 44.4379 48.0863 45.8047 46.4062 45.8047ZM49.4531 37.4818C48.5563 36.9619 47.5153 36.6641 46.4062 36.6641C45.2972 36.6641 44.2562 36.9619 43.3594 37.4818V9.24219C43.3594 7.56214 44.7262 6.19531 46.4062 6.19531C48.0863 6.19531 49.4531 7.56214 49.4531 9.24219V37.4818Z"
                  className="fill-[#FF5A30] group-hover:fill-white"
                />
                <path
                  d="M35.6406 12.2891H8.21875C7.37741 12.2891 6.69531 12.9712 6.69531 13.8125V41.2344C6.69531 42.0757 7.37741 42.7578 8.21875 42.7578H23.4531C23.8572 42.7578 24.2446 42.5972 24.5303 42.3115C24.8161 42.0259 24.9766 41.6384 24.9766 41.2344V38.1875C24.9766 36.2013 26.2501 34.507 28.0234 33.8782V41.2344C28.0234 42.0757 28.7055 42.7578 29.5469 42.7578H35.6406C36.482 42.7578 37.1641 42.0757 37.1641 41.2344V13.8125C37.1641 12.9712 36.482 12.2891 35.6406 12.2891ZM34.1172 39.7109H31.0703V32.0938C31.0703 31.2524 30.3882 30.5703 29.5469 30.5703C25.3468 30.5703 21.9297 33.9874 21.9297 38.1875V39.7109H9.74219V30.5703H15.8359V35.1406C15.8359 35.982 16.518 36.6641 17.3594 36.6641C18.2007 36.6641 18.8828 35.982 18.8828 35.1406V29.0469C18.8828 28.2055 18.2007 27.5234 17.3594 27.5234H9.74219V15.3359H18.8828V21.4297H14.3125C13.4712 21.4297 12.7891 22.1118 12.7891 22.9531C12.7891 23.7945 13.4712 24.4766 14.3125 24.4766H20.4062H26.5C27.3413 24.4766 28.0234 23.7945 28.0234 22.9531C28.0234 22.1118 27.3413 21.4297 26.5 21.4297H21.9297V15.3359H34.1172V39.7109Z"
                  className="fill-[#FF5A30] group-hover:fill-white"
                />
              </g>
              <defs>
                <clipPath id="clip0_144815_1789">
                  <rect width="52" height="52" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
            <h1 className="font-[700] text-[20px] max-[640px]:text-[18px]">Project Development</h1>
          </motion.div>

          {/* Card 3 - Interior Design */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              boxShadow: `
                0px 4px 4px -4px rgba(30, 33, 44, 0.03),
                0px 12px 10px -6px rgba(154, 156, 165, 0.04),
                0px 30px 24px -10px rgba(154, 156, 165, 0.05),
                0px 80px 80px -20px rgba(154, 156, 165, 0.08)
              `,
            }}
            className="w-full min-h-[285px] rounded-[4px] bg-white flex items-center justify-center flex-col gap-[20px] 
              transition-all duration-500 hover:bg-black hover:text-white cursor-pointer group
              p-[20px] text-center">
            <svg
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:scale-110 transition-transform">
              <g clipPath="url(#clip0_144815_1698)">
                <path
                  d="M11.2656 36.6641C8.74555 36.6641 6.69531 38.7143 6.69531 41.2344C6.69531 43.7544 8.74555 45.8047 11.2656 45.8047C13.7857 45.8047 15.8359 43.7544 15.8359 41.2344C15.8359 38.7143 13.7857 36.6641 11.2656 36.6641ZM11.2656 42.7578C10.4256 42.7578 9.74219 42.0744 9.74219 41.2344C9.74219 40.3944 10.4256 39.7109 11.2656 39.7109C12.1056 39.7109 12.7891 40.3944 12.7891 41.2344C12.7891 42.0744 12.1056 42.7578 11.2656 42.7578Z"
                  className="fill-[#FF5A30] group-hover:fill-white"
                />
                <path
                  d="M49.7504 30.9497C50.7897 29.5433 50.9811 27.582 50.0361 25.9454L43.9455 15.2945C42.8919 13.4696 40.6701 12.6369 38.6882 13.1667C39.1102 11.2698 38.2823 9.23477 36.5124 8.21295L25.9584 2.11961C24.4511 1.24922 22.6489 1.33839 21.2628 2.19568C20.4596 0.880141 19.0104 0 17.3594 0H5.07031C2.55024 0 0.5 2.05024 0.5 4.57031C0.5 5.62707 0.5 46.2132 0.5 47.4297C0.5 49.9498 2.55024 52 5.07031 52C6.25382 52 42.1374 52 47.9297 52C50.4498 52 52.5 49.9498 52.5 47.4297V35.1406C52.5 33.2675 51.3669 31.6547 49.7504 30.9497ZM18.8828 47.4297C18.8828 48.2697 18.1994 48.9531 17.3594 48.9531H5.07031C4.23029 48.9531 3.54688 48.2697 3.54688 47.4297C3.54688 46.7337 3.54688 34.2857 3.54688 33.6172H18.8828V47.4297ZM18.8828 30.5703H3.54688V18.2812H18.8828V30.5703ZM18.8828 15.2344H3.54688V4.57031C3.54688 3.73029 4.23029 3.04688 5.07031 3.04688H17.3594C18.1994 3.04688 18.8828 3.73029 18.8828 4.57031V15.2344ZM21.9297 6.04988L22.3533 5.31609C22.7736 4.58839 23.7073 4.33814 24.4349 4.75831L34.989 10.8516C35.7167 11.2718 35.9668 12.2056 35.5456 12.9353L33.7853 15.9951C33.7412 16.0602 33.7016 16.1278 33.6683 16.1984L21.9297 36.6026V6.04988ZM21.9297 42.7126L36.171 17.9581L39.1156 16.258C39.8621 15.8271 40.8859 16.0888 41.3037 16.8125L47.3944 27.4633C47.8156 28.1929 47.57 29.1283 46.8328 29.5539C45.7449 30.1837 23.0011 43.3507 21.9297 43.971V42.7126ZM49.4531 47.4297C49.4531 48.2697 48.7697 48.9531 47.9297 48.9531H21.6677C21.8301 48.4951 21.9212 48.0039 21.9282 47.4926L45.8954 33.6172H47.9297C48.7697 33.6172 49.4531 34.3006 49.4531 35.1406V47.4297Z"
                  className="fill-[#FF5A30] group-hover:fill-white"
                />
              </g>
              <defs>
                <clipPath id="clip0_144815_1698">
                  <rect width="52" height="52" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
            <h1 className="font-[700] text-[20px] max-[640px]:text-[18px]">Interior Design</h1>
          </motion.div>

          {/* Card 4 - Repairs */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            viewport={{ once: true }}
            style={{
              boxShadow: `
                0px 4px 4px -4px rgba(30, 33, 44, 0.03),
                0px 12px 10px -6px rgba(154, 156, 165, 0.04),
                0px 30px 24px -10px rgba(154, 156, 165, 0.05),
                0px 80px 80px -20px rgba(154, 156, 165, 0.08)
              `,
            }}
            className="w-full min-h-[285px] rounded-[4px] bg-white flex items-center justify-center flex-col gap-[20px] 
              transition-all duration-500 hover:bg-black hover:text-white cursor-pointer group
              p-[20px] text-center">
            <svg
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:scale-110 transition-transform">
              <path
                d="M43.3594 4.57031C43.3594 2.05029 41.3091 0 38.7891 0H8.32031C5.80029 0 3.75 2.05029 3.75 4.57031V13.7109C3.75 16.231 5.80029 18.2812 8.32031 18.2812H38.7891C41.3091 18.2812 43.3594 16.231 43.3594 13.7109V12.1875H44.8828C45.7227 12.1875 46.4062 12.8711 46.4062 13.7109V19.8047C46.4062 20.6446 45.7227 21.3281 44.8828 21.3281H26.6016C24.0815 21.3281 22.0312 23.3784 22.0312 25.8984V30.4688H20.5078C19.6664 30.4688 18.9844 31.1507 18.9844 31.9922V38.003L17.4609 44.1952C16.4703 48.1573 19.464 52 23.5547 52C27.6473 52 30.6379 48.1533 29.65 44.2007L28.125 38.003V31.9922C28.125 31.1507 27.443 30.4688 26.6016 30.4688H25.0781V25.8984C25.0781 25.0586 25.7617 24.375 26.6016 24.375H44.8828C47.4028 24.375 49.4531 22.3247 49.4531 19.8047V13.7109C49.4531 11.1909 47.4028 9.14062 44.8828 9.14062H43.3594V4.57031ZM25.0781 33.5156V36.6641H22.0312V33.5156H25.0781ZM23.5547 48.9531C21.456 48.9531 19.9044 46.9834 20.4182 44.9287L21.702 39.7109H25.4074L26.6924 44.9343C27.2026 46.9746 25.6609 48.9531 23.5547 48.9531ZM8.32031 3.04688H38.7891C39.6289 3.04688 40.3125 3.73044 40.3125 4.57031V6.09375H35.7422C34.2616 6.09375 32.3684 6.64838 30.1761 7.29028C27.2149 8.15753 23.859 9.14062 20.5078 9.14062C17.2412 9.14062 14.9381 8.18649 12.9061 7.34503C11.3525 6.70154 9.88541 6.09375 8.32031 6.09375H6.79688V4.57031C6.79688 3.73044 7.48044 3.04688 8.32031 3.04688ZM40.3125 13.7109C40.3125 14.5508 39.6289 15.2344 38.7891 15.2344H8.32031C7.48044 15.2344 6.79688 14.5508 6.79688 13.7109V9.14062H8.32031C9.27921 9.14062 10.3654 9.59052 11.7401 10.1598C13.9209 11.0632 16.6349 12.1875 20.5078 12.1875C24.2962 12.1875 28.031 11.0933 31.0326 10.2146C32.9179 9.66232 34.6988 9.14062 35.7422 9.14062H40.3125V13.7109Z"
                className="fill-[#FF5A30] group-hover:fill-white"
              />
            </svg>
            <h1 className="font-[700] text-[20px] max-[640px]:text-[18px]">Repairs</h1>
          </motion.div>
        </section>

        {/* ========= */}

        {/* for mobile */}
        <section className="gap-[30px] mb-[80px] grid-cols-1 max-[640px]:gap-[20px] hidden max-[640px]:grid">
          {/* Card 1 - Construction */}
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{
              boxShadow: `
                0px 4px 4px -4px rgba(30, 33, 44, 0.03),
                0px 12px 10px -6px rgba(154, 156, 165, 0.04),
                0px 30px 24px -10px rgba(154, 156, 165, 0.05),
                0px 80px 80px -20px rgba(154, 156, 165, 0.08)
              `,
            }}
            className="w-full min-h-[285px] rounded-[4px] bg-white flex items-center justify-center flex-col gap-[20px] 
              transition-all duration-500 hover:bg-black hover:text-white cursor-pointer group
              p-[20px] text-center">
            <svg
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:scale-110 transition-transform">
              <g clipPath="url(#clip0_144815_2081)">
                <path
                  d="M50.9766 27.5234C51.8179 27.5234 52.5 26.8413 52.5 26V14.625C52.5 13.7837 51.8179 13.1016 50.9766 13.1016C49.9146 13.1016 29.168 13.1016 28.0234 13.1016V3.25C28.0234 2.40866 27.3413 1.72656 26.5 1.72656H10.25C9.40866 1.72656 8.72656 2.40866 8.72656 3.25V13.1016H2.02344C1.18209 13.1016 0.5 13.7837 0.5 14.625V26C0.5 26.8413 1.18209 27.5234 2.02344 27.5234H8.72656V35.8516H2.02344C1.18209 35.8516 0.5 36.5337 0.5 37.375V48.75C0.5 49.5913 1.18209 50.2734 2.02344 50.2734H50.9766C51.8179 50.2734 52.5 49.5913 52.5 48.75V37.375C52.5 36.5337 51.8179 35.8516 50.9766 35.8516H44.2734V27.5234H50.9766ZM49.4531 24.4766C47.8232 24.4766 37.7597 24.4766 36.1484 24.4766V16.1484H49.4531V24.4766ZM33.1016 24.4766C31.5059 24.4766 21.5046 24.4766 19.8984 24.4766V16.1484H33.1016V24.4766ZM11.7734 4.77344H24.9766V13.1016C23.3809 13.1016 13.3796 13.1016 11.7734 13.1016V4.77344ZM3.54688 24.4766V16.1484H16.8516V24.4766C15.2396 24.4766 5.17645 24.4766 3.54688 24.4766ZM11.7734 27.5234H24.9766V35.8516C23.3809 35.8516 13.3796 35.8516 11.7734 35.8516V27.5234ZM3.54688 38.8984H16.8516V47.2266H3.54688V38.8984ZM19.8984 38.8984H33.1016V47.2266H19.8984V38.8984ZM49.4531 38.8984V47.2266H36.1484V38.8984H49.4531ZM41.2266 35.8516C39.6309 35.8516 29.6296 35.8516 28.0234 35.8516V27.5234H41.2266V35.8516Z"
                  className="fill-[#FF5A30] group-hover:fill-white"
                />
              </g>
              <defs>
                <clipPath id="clip0_144815_2081">
                  <rect width="52" height="52" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
            <h1 className="font-[700] text-[20px] max-[640px]:text-[18px]">Construction</h1>
          </motion.div>

          {/* Card 2 - Project Development */}
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut', duration: 0.1 }}
            viewport={{ once: true }}
            style={{
              boxShadow: `
                0px 4px 4px -4px rgba(30, 33, 44, 0.03),
                0px 12px 10px -6px rgba(154, 156, 165, 0.04),
                0px 30px 24px -10px rgba(154, 156, 165, 0.05),
                0px 80px 80px -20px rgba(154, 156, 165, 0.08)
              `,
            }}
            className="w-full min-h-[285px] rounded-[4px] bg-white flex items-center justify-center flex-col gap-[20px] 
              transition-all duration-500 hover:bg-black hover:text-white cursor-pointer group
              p-[20px] text-center">
            <svg
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:scale-110 transition-transform">
              <g clipPath="url(#clip0_144815_1789)">
                <path
                  d="M46.4062 3.14844C44.1552 3.14844 42.1854 4.37521 41.1303 6.19531H2.02344C1.18209 6.19531 0.5 6.87741 0.5 7.71875V47.3281C0.5 48.1695 1.18209 48.8516 2.02344 48.8516H46.4062C49.7663 48.8516 52.5 46.1179 52.5 42.7578V9.24219C52.5 5.88209 49.7663 3.14844 46.4062 3.14844ZM46.4062 45.8047C45.8103 45.8047 4.1011 45.8047 3.54688 45.8047V9.24219H40.3125V42.7578C40.3125 43.5992 40.9946 44.2812 41.8359 44.2812C42.6773 44.2812 43.3594 43.5992 43.3594 42.7578C43.3594 41.0778 44.7262 39.7109 46.4062 39.7109C48.0863 39.7109 49.4531 41.0778 49.4531 42.7578C49.4531 44.4379 48.0863 45.8047 46.4062 45.8047ZM49.4531 37.4818C48.5563 36.9619 47.5153 36.6641 46.4062 36.6641C45.2972 36.6641 44.2562 36.9619 43.3594 37.4818V9.24219C43.3594 7.56214 44.7262 6.19531 46.4062 6.19531C48.0863 6.19531 49.4531 7.56214 49.4531 9.24219V37.4818Z"
                  className="fill-[#FF5A30] group-hover:fill-white"
                />
                <path
                  d="M35.6406 12.2891H8.21875C7.37741 12.2891 6.69531 12.9712 6.69531 13.8125V41.2344C6.69531 42.0757 7.37741 42.7578 8.21875 42.7578H23.4531C23.8572 42.7578 24.2446 42.5972 24.5303 42.3115C24.8161 42.0259 24.9766 41.6384 24.9766 41.2344V38.1875C24.9766 36.2013 26.2501 34.507 28.0234 33.8782V41.2344C28.0234 42.0757 28.7055 42.7578 29.5469 42.7578H35.6406C36.482 42.7578 37.1641 42.0757 37.1641 41.2344V13.8125C37.1641 12.9712 36.482 12.2891 35.6406 12.2891ZM34.1172 39.7109H31.0703V32.0938C31.0703 31.2524 30.3882 30.5703 29.5469 30.5703C25.3468 30.5703 21.9297 33.9874 21.9297 38.1875V39.7109H9.74219V30.5703H15.8359V35.1406C15.8359 35.982 16.518 36.6641 17.3594 36.6641C18.2007 36.6641 18.8828 35.982 18.8828 35.1406V29.0469C18.8828 28.2055 18.2007 27.5234 17.3594 27.5234H9.74219V15.3359H18.8828V21.4297H14.3125C13.4712 21.4297 12.7891 22.1118 12.7891 22.9531C12.7891 23.7945 13.4712 24.4766 14.3125 24.4766H20.4062H26.5C27.3413 24.4766 28.0234 23.7945 28.0234 22.9531C28.0234 22.1118 27.3413 21.4297 26.5 21.4297H21.9297V15.3359H34.1172V39.7109Z"
                  className="fill-[#FF5A30] group-hover:fill-white"
                />
              </g>
              <defs>
                <clipPath id="clip0_144815_1789">
                  <rect width="52" height="52" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
            <h1 className="font-[700] text-[20px] max-[640px]:text-[18px]">Project Development</h1>
          </motion.div>

          {/* Card 3 - Interior Design */}
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut', duration: 0.2 }}
            viewport={{ once: true }}
            style={{
              boxShadow: `
                0px 4px 4px -4px rgba(30, 33, 44, 0.03),
                0px 12px 10px -6px rgba(154, 156, 165, 0.04),
                0px 30px 24px -10px rgba(154, 156, 165, 0.05),
                0px 80px 80px -20px rgba(154, 156, 165, 0.08)
              `,
            }}
            className="w-full min-h-[285px] rounded-[4px] bg-white flex items-center justify-center flex-col gap-[20px] 
              transition-all duration-500 hover:bg-black hover:text-white cursor-pointer group
              p-[20px] text-center">
            <svg
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:scale-110 transition-transform">
              <g clipPath="url(#clip0_144815_1698)">
                <path
                  d="M11.2656 36.6641C8.74555 36.6641 6.69531 38.7143 6.69531 41.2344C6.69531 43.7544 8.74555 45.8047 11.2656 45.8047C13.7857 45.8047 15.8359 43.7544 15.8359 41.2344C15.8359 38.7143 13.7857 36.6641 11.2656 36.6641ZM11.2656 42.7578C10.4256 42.7578 9.74219 42.0744 9.74219 41.2344C9.74219 40.3944 10.4256 39.7109 11.2656 39.7109C12.1056 39.7109 12.7891 40.3944 12.7891 41.2344C12.7891 42.0744 12.1056 42.7578 11.2656 42.7578Z"
                  className="fill-[#FF5A30] group-hover:fill-white"
                />
                <path
                  d="M49.7504 30.9497C50.7897 29.5433 50.9811 27.582 50.0361 25.9454L43.9455 15.2945C42.8919 13.4696 40.6701 12.6369 38.6882 13.1667C39.1102 11.2698 38.2823 9.23477 36.5124 8.21295L25.9584 2.11961C24.4511 1.24922 22.6489 1.33839 21.2628 2.19568C20.4596 0.880141 19.0104 0 17.3594 0H5.07031C2.55024 0 0.5 2.05024 0.5 4.57031C0.5 5.62707 0.5 46.2132 0.5 47.4297C0.5 49.9498 2.55024 52 5.07031 52C6.25382 52 42.1374 52 47.9297 52C50.4498 52 52.5 49.9498 52.5 47.4297V35.1406C52.5 33.2675 51.3669 31.6547 49.7504 30.9497ZM18.8828 47.4297C18.8828 48.2697 18.1994 48.9531 17.3594 48.9531H5.07031C4.23029 48.9531 3.54688 48.2697 3.54688 47.4297C3.54688 46.7337 3.54688 34.2857 3.54688 33.6172H18.8828V47.4297ZM18.8828 30.5703H3.54688V18.2812H18.8828V30.5703ZM18.8828 15.2344H3.54688V4.57031C3.54688 3.73029 4.23029 3.04688 5.07031 3.04688H17.3594C18.1994 3.04688 18.8828 3.73029 18.8828 4.57031V15.2344ZM21.9297 6.04988L22.3533 5.31609C22.7736 4.58839 23.7073 4.33814 24.4349 4.75831L34.989 10.8516C35.7167 11.2718 35.9668 12.2056 35.5456 12.9353L33.7853 15.9951C33.7412 16.0602 33.7016 16.1278 33.6683 16.1984L21.9297 36.6026V6.04988ZM21.9297 42.7126L36.171 17.9581L39.1156 16.258C39.8621 15.8271 40.8859 16.0888 41.3037 16.8125L47.3944 27.4633C47.8156 28.1929 47.57 29.1283 46.8328 29.5539C45.7449 30.1837 23.0011 43.3507 21.9297 43.971V42.7126ZM49.4531 47.4297C49.4531 48.2697 48.7697 48.9531 47.9297 48.9531H21.6677C21.8301 48.4951 21.9212 48.0039 21.9282 47.4926L45.8954 33.6172H47.9297C48.7697 33.6172 49.4531 34.3006 49.4531 35.1406V47.4297Z"
                  className="fill-[#FF5A30] group-hover:fill-white"
                />
              </g>
              <defs>
                <clipPath id="clip0_144815_1698">
                  <rect width="52" height="52" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
            <h1 className="font-[700] text-[20px] max-[640px]:text-[18px]">Interior Design</h1>
          </motion.div>

          {/* Card 4 - Repairs */}
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut', duration: 0.3 }}
            viewport={{ once: true }}
            style={{
              boxShadow: `
                0px 4px 4px -4px rgba(30, 33, 44, 0.03),
                0px 12px 10px -6px rgba(154, 156, 165, 0.04),
                0px 30px 24px -10px rgba(154, 156, 165, 0.05),
                0px 80px 80px -20px rgba(154, 156, 165, 0.08)
              `,
            }}
            className="w-full min-h-[285px] rounded-[4px] bg-white flex items-center justify-center flex-col gap-[20px] 
              transition-all duration-500 hover:bg-black hover:text-white cursor-pointer group
              p-[20px] text-center">
            <svg
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:scale-110 transition-transform">
              <path
                d="M43.3594 4.57031C43.3594 2.05029 41.3091 0 38.7891 0H8.32031C5.80029 0 3.75 2.05029 3.75 4.57031V13.7109C3.75 16.231 5.80029 18.2812 8.32031 18.2812H38.7891C41.3091 18.2812 43.3594 16.231 43.3594 13.7109V12.1875H44.8828C45.7227 12.1875 46.4062 12.8711 46.4062 13.7109V19.8047C46.4062 20.6446 45.7227 21.3281 44.8828 21.3281H26.6016C24.0815 21.3281 22.0312 23.3784 22.0312 25.8984V30.4688H20.5078C19.6664 30.4688 18.9844 31.1507 18.9844 31.9922V38.003L17.4609 44.1952C16.4703 48.1573 19.464 52 23.5547 52C27.6473 52 30.6379 48.1533 29.65 44.2007L28.125 38.003V31.9922C28.125 31.1507 27.443 30.4688 26.6016 30.4688H25.0781V25.8984C25.0781 25.0586 25.7617 24.375 26.6016 24.375H44.8828C47.4028 24.375 49.4531 22.3247 49.4531 19.8047V13.7109C49.4531 11.1909 47.4028 9.14062 44.8828 9.14062H43.3594V4.57031ZM25.0781 33.5156V36.6641H22.0312V33.5156H25.0781ZM23.5547 48.9531C21.456 48.9531 19.9044 46.9834 20.4182 44.9287L21.702 39.7109H25.4074L26.6924 44.9343C27.2026 46.9746 25.6609 48.9531 23.5547 48.9531ZM8.32031 3.04688H38.7891C39.6289 3.04688 40.3125 3.73044 40.3125 4.57031V6.09375H35.7422C34.2616 6.09375 32.3684 6.64838 30.1761 7.29028C27.2149 8.15753 23.859 9.14062 20.5078 9.14062C17.2412 9.14062 14.9381 8.18649 12.9061 7.34503C11.3525 6.70154 9.88541 6.09375 8.32031 6.09375H6.79688V4.57031C6.79688 3.73044 7.48044 3.04688 8.32031 3.04688ZM40.3125 13.7109C40.3125 14.5508 39.6289 15.2344 38.7891 15.2344H8.32031C7.48044 15.2344 6.79688 14.5508 6.79688 13.7109V9.14062H8.32031C9.27921 9.14062 10.3654 9.59052 11.7401 10.1598C13.9209 11.0632 16.6349 12.1875 20.5078 12.1875C24.2962 12.1875 28.031 11.0933 31.0326 10.2146C32.9179 9.66232 34.6988 9.14062 35.7422 9.14062H40.3125V13.7109Z"
                className="fill-[#FF5A30] group-hover:fill-white"
              />
            </svg>
            <h1 className="font-[700] text-[20px] max-[640px]:text-[18px]">Repairs</h1>
          </motion.div>
        </section>
        {/* ====== */}

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col md:flex-row gap-[40px] items-center justify-center pb-[60px] text-center">
          <h1 className="font-[700] text-[28px] max-[640px]:text-[24px] max-[640px]:mb-[20px]">
            Learn more about our services
          </h1>
          <button
            className="bg-[#FF5A30] rounded-[4px] px-[40px] py-[12px] text-white font-[700] 
            uppercase
            text-[16px] hover:bg-[#fc3300] duration-300 transition-all
            max-[640px]:w-full">
            View services
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
