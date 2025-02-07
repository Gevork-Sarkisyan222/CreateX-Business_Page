'use client';

import React, { useState, useRef } from 'react';
import Container from './container';
import FormSection from './form-section';
import { motion } from 'motion/react';

type Props = {};

function ValuesBlock({}: Props) {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  return (
    <Container className="mt-[120px] text-center flex justify-center flex-col max-[1000px]:px-[20px]">
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
        viewport={{ once: true, margin: '-100px' }}
        className="font-[700] text-[48px] mb-[24px] max-[1000px]:text-[32px]">
        We are Createx Construction Bureau
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
        viewport={{ once: true, margin: '-100px' }}
        className="text-[18px] font-[400] text-[#787A80] mb-[60px]  max-[1000px]:text-[14px] noBold">
        We are rightfully considered to be the best construction company in the USA.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
        viewport={{ once: true, margin: '-100px' }}
        className="relative flex justify-center items-center mb-[160px] max-[550px]:mb-[100px] max-[1275px]:px-[20px]">
        {/* Video */}
        <div className="relative w-full max-w-[1230px]">
          <video
            ref={videoRef}
            className={`w-[1230px] max-[1310px]:w-[100%] max-h-[full] rounded-[4px] shadow-lg transition-opacity duration-300 ${
              videoPlaying ? 'opacity-100' : 'opacity-70'
            }`}
            controls
            autoPlay
            loop
            muted
            poster="path-to-thumbnail.jpg" // Replace with your video thumbnail path
            onPause={() => setVideoPlaying(false)}
            onPlay={() => setVideoPlaying(true)}>
            <source src="https://live.verstaem.online/createx/about-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!videoPlaying && (
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-[4px] transition-opacity duration-300"></div>
          )}
        </div>

        {/* Play Button */}
        {!videoPlaying && (
          <button
            className="absolute bg-[#ff5a30] w-[80px] h-[80px] rounded-full flex justify-center items-center transition-all duration-300 ease-in-out opacity-100 hover:opacity-80"
            onClick={handlePlayPause}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="white" />
            </svg>
          </button>
        )}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
        viewport={{ once: true, margin: '-100px' }}
        className="font-[700] text-[48px] mb-[24px] max-[1000px]:text-[32px]">
        Our core values
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
        viewport={{ once: true, margin: '-100px' }}
        className="text-[18px] font-[400] text-[#787A80] mb-[60px] max-[1000px]:text-[14px] noBold">
        Our mission is to set the highest standards for construction sphere.
      </motion.p>

      {/* Values */}
      {/* <div className="flex gap-[188px] text-center justify-center mb-[100px] max-[1350px]:mb-[25px] relative max-[1350px]:flex-col max-[1350px]:items-center max-[1350px]:gap-[40px]"> */}
      <div className="flex gap-[188px] text-center justify-center mb-[100px] max-[1350px]:mb-[25px] relative max-[1350px]:items-center max-[1350px]:grid max-[1350px]:grid-cols-2 max-[1350px]:place-items-center max-[1350px]:gap-[100px] max-[630px]:flex max-[630px]:flex-col">
        <motion.article
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col  max-w-[285px] items-center justify-center relative">
          <img width={50} className="mb-[24px]" src="/ic-like.svg" alt="" />
          <h2 className="font-[700] text-[20px] mb-[8px]">Quality</h2>
          <p className="text-[#787A80] font-[400] text-[16px] noBold">
            Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip
            sunt.
          </p>
          {/* Divider */}
          <div
            className="absolute right-[-94px] top-[50%] translate-y-[-50%] h-[188px] w-[1px] bg-no-repeat max-[1350px]:hidden"
            style={{
              backgroundImage: "url('https://live.verstaem.online/createx/img/divider.svg')",
              backgroundSize: 'contain',
            }}></div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col max-w-[285px] items-center justify-center relative">
          <img width={50} className="mb-[24px]" src="/ic-hand.svg" alt="" />
          <h2 className="font-[700] text-[20px] mb-[8px]">Safety</h2>
          <p className="text-[#787A80] font-[400] text-[16px] noBold">
            Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim
            empor est ea.
          </p>
          {/* Divider */}
          <div
            className="absolute right-[-94px] top-[50%] translate-y-[-50%] h-[188px] w-[1px] bg-no-repeat max-[1350px]:hidden"
            style={{
              backgroundImage: "url('https://live.verstaem.online/createx/img/divider.svg')",
              backgroundSize: 'contain',
            }}></div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex flex-col  max-w-[285px] items-center justify-center">
          <img width={50} className="mb-[24px]" src="/ic-slippers.svg" alt="" />
          <h2 className="font-[700] text-[20px] mb-[8px]">Comfort</h2>
          <p className="text-[#787A80] font-[400] text-[16px] noBold">
            Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco
            proident ea ad.
          </p>
        </motion.article>
      </div>

      <motion.div
        initial={{ opacity: 0, rotateY: 0 }}
        whileInView={{ opacity: 1, rotateY: 360 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}>
        <FormSection />
      </motion.div>
    </Container>
  );
}

export default ValuesBlock;
