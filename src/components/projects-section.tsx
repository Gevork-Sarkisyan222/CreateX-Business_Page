'use client';

import React, { useState } from 'react';

type Props = {};

const projects = [
  {
    title: 'Red Finger Building',
    category: 'Business Centers',
    image:
      'https://s3-alpha-sig.figma.com/img/bcc0/76f1/e55e41c3618d544882c733c9df6994fc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qir-Q-cZMi6vLE7ohGcP-7Un0lzBZg~HR3N~8XcJVMoFg9HuG-KLOFt90d0VPpzlnMp4dCrfIECj0SNVCyQMgZ7g9~zwkeaz-LWriNWdOlf2xt63ihRC6pYYp~JyybaQcaHb4PC7VFCKj7Q7W5WZ42AnoEK2dKXhXDC5-PY0irm2kD701n7OOkX2XJHwLtEl0YI4DjEUwucBawbuvYQ8VQHYdh2Jzsr2TGXsMqn9DegOyv0SXMzmgfKX2R~6vXcQHOraRp-BPtubg8hel~JJdola44Cm2m42fsfGBvtzZFj3zPBphcrDkIinXzZ69~MwQzt~beK1O~JfWK284wcWgQ__',
  },
  {
    title: 'Cubes Building',
    category: 'Business Centers',
    image:
      'https://s3-alpha-sig.figma.com/img/2311/78ad/421618d5ac84c5165746c5f0e741ece2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dCMPK4m5D0ejhmCz81-mJHmo0ngRwAZVPvzqMj1qjoYzbD-MdWcOB1akdrjEOQeNDNQEYFHOu6r-W-PcLMLhK~OMjdVSNLTYBVsQLrk1QEOWQijyDLBqn2u54J9P3Kwnb7NCSFpG5k30mVL0XoKZLeTQlbAqCLxwwpq5Z-iO-nP5dtGM7cRudMeSxDWT7Q761SJ6sJM8ShCjsR8yCN74tumSQylV01ZfueNDqNKp4AP~feUN5XO~ZWFBd1zPqjDib~uSL4ERZSXT3xnaBwMR~JIBo~-7UPLYktc5L~8xjResnGY~0FLsLkxqa3AQOAsOJhC4FUtZuzCpdKiFuOVOtw__',
  },
  {
    title: 'The Pencil Building',
    category: 'Stores & Malls',
    image:
      'https://s3-alpha-sig.figma.com/img/83e8/83c7/e31ecaae040c14943844c1fc4bafbe3a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PO0rNhhBFYW~UQDB62~rA7RsGwBAf6n5-B7T1AsRSeJXrlXhkAmhRnXVf0irpwqeNnpnkrA3cQs~qUoVUraZLr0UI0andIGmF3x8-Qo7uYatIwmTcwf0KVaSx-MUpZ09V~jjslWoOiP2qbGaRxBzNhSzArBKli7YEGUqZA1EYEpPc4IQ4T7ctWVqGz~qROAx08YQAf7qDsZnfBziKB5TZJT50tlaEGAGLvGfr6F5Us-knDIpd5k0NRFhlYwnttzLq1Wz7cc~E4TPqiTr6uwuiQqhgN9ykmBLpiPqIVQSa-dKDJN9WWU4~TgR-a2fWp66KB3XQr~AQP0VS1z6ggaXHA__',
  },
  {
    title: 'Red Finger Building',
    category: 'Business Centers',
    image:
      'https://s3-alpha-sig.figma.com/img/bcc0/76f1/e55e41c3618d544882c733c9df6994fc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qir-Q-cZMi6vLE7ohGcP-7Un0lzBZg~HR3N~8XcJVMoFg9HuG-KLOFt90d0VPpzlnMp4dCrfIECj0SNVCyQMgZ7g9~zwkeaz-LWriNWdOlf2xt63ihRC6pYYp~JyybaQcaHb4PC7VFCKj7Q7W5WZ42AnoEK2dKXhXDC5-PY0irm2kD701n7OOkX2XJHwLtEl0YI4DjEUwucBawbuvYQ8VQHYdh2Jzsr2TGXsMqn9DegOyv0SXMzmgfKX2R~6vXcQHOraRp-BPtubg8hel~JJdola44Cm2m42fsfGBvtzZFj3zPBphcrDkIinXzZ69~MwQzt~beK1O~JfWK284wcWgQ__',
  },
  {
    title: 'The Pencil Building',
    category: 'Stores & Malls',
    image:
      'https://s3-alpha-sig.figma.com/img/83e8/83c7/e31ecaae040c14943844c1fc4bafbe3a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PO0rNhhBFYW~UQDB62~rA7RsGwBAf6n5-B7T1AsRSeJXrlXhkAmhRnXVf0irpwqeNnpnkrA3cQs~qUoVUraZLr0UI0andIGmF3x8-Qo7uYatIwmTcwf0KVaSx-MUpZ09V~jjslWoOiP2qbGaRxBzNhSzArBKli7YEGUqZA1EYEpPc4IQ4T7ctWVqGz~qROAx08YQAf7qDsZnfBziKB5TZJT50tlaEGAGLvGfr6F5Us-knDIpd5k0NRFhlYwnttzLq1Wz7cc~E4TPqiTr6uwuiQqhgN9ykmBLpiPqIVQSa-dKDJN9WWU4~TgR-a2fWp66KB3XQr~AQP0VS1z6ggaXHA__',
  },
  {
    title: 'The Pencil Building',
    category: 'Stores & Malls',
    image:
      'https://s3-alpha-sig.figma.com/img/83e8/83c7/e31ecaae040c14943844c1fc4bafbe3a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PO0rNhhBFYW~UQDB62~rA7RsGwBAf6n5-B7T1AsRSeJXrlXhkAmhRnXVf0irpwqeNnpnkrA3cQs~qUoVUraZLr0UI0andIGmF3x8-Qo7uYatIwmTcwf0KVaSx-MUpZ09V~jjslWoOiP2qbGaRxBzNhSzArBKli7YEGUqZA1EYEpPc4IQ4T7ctWVqGz~qROAx08YQAf7qDsZnfBziKB5TZJT50tlaEGAGLvGfr6F5Us-knDIpd5k0NRFhlYwnttzLq1Wz7cc~E4TPqiTr6uwuiQqhgN9ykmBLpiPqIVQSa-dKDJN9WWU4~TgR-a2fWp66KB3XQr~AQP0VS1z6ggaXHA__',
  },
  {
    title: 'Red Finger Building',
    category: 'Business Centers',
    image:
      'https://s3-alpha-sig.figma.com/img/bcc0/76f1/e55e41c3618d544882c733c9df6994fc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qir-Q-cZMi6vLE7ohGcP-7Un0lzBZg~HR3N~8XcJVMoFg9HuG-KLOFt90d0VPpzlnMp4dCrfIECj0SNVCyQMgZ7g9~zwkeaz-LWriNWdOlf2xt63ihRC6pYYp~JyybaQcaHb4PC7VFCKj7Q7W5WZ42AnoEK2dKXhXDC5-PY0irm2kD701n7OOkX2XJHwLtEl0YI4DjEUwucBawbuvYQ8VQHYdh2Jzsr2TGXsMqn9DegOyv0SXMzmgfKX2R~6vXcQHOraRp-BPtubg8hel~JJdola44Cm2m42fsfGBvtzZFj3zPBphcrDkIinXzZ69~MwQzt~beK1O~JfWK284wcWgQ__',
  },
  {
    title: 'Cubes Building',
    category: 'Business Centers',
    image:
      'https://s3-alpha-sig.figma.com/img/2311/78ad/421618d5ac84c5165746c5f0e741ece2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dCMPK4m5D0ejhmCz81-mJHmo0ngRwAZVPvzqMj1qjoYzbD-MdWcOB1akdrjEOQeNDNQEYFHOu6r-W-PcLMLhK~OMjdVSNLTYBVsQLrk1QEOWQijyDLBqn2u54J9P3Kwnb7NCSFpG5k30mVL0XoKZLeTQlbAqCLxwwpq5Z-iO-nP5dtGM7cRudMeSxDWT7Q761SJ6sJM8ShCjsR8yCN74tumSQylV01ZfueNDqNKp4AP~feUN5XO~ZWFBd1zPqjDib~uSL4ERZSXT3xnaBwMR~JIBo~-7UPLYktc5L~8xjResnGY~0FLsLkxqa3AQOAsOJhC4FUtZuzCpdKiFuOVOtw__',
  },
  {
    title: 'Red Finger Building',
    category: 'Business Centers',
    image:
      'https://s3-alpha-sig.figma.com/img/bcc0/76f1/e55e41c3618d544882c733c9df6994fc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qir-Q-cZMi6vLE7ohGcP-7Un0lzBZg~HR3N~8XcJVMoFg9HuG-KLOFt90d0VPpzlnMp4dCrfIECj0SNVCyQMgZ7g9~zwkeaz-LWriNWdOlf2xt63ihRC6pYYp~JyybaQcaHb4PC7VFCKj7Q7W5WZ42AnoEK2dKXhXDC5-PY0irm2kD701n7OOkX2XJHwLtEl0YI4DjEUwucBawbuvYQ8VQHYdh2Jzsr2TGXsMqn9DegOyv0SXMzmgfKX2R~6vXcQHOraRp-BPtubg8hel~JJdola44Cm2m42fsfGBvtzZFj3zPBphcrDkIinXzZ69~MwQzt~beK1O~JfWK284wcWgQ__',
  },
  {
    title: 'Cubes Building',
    category: 'Business Centers',
    image:
      'https://s3-alpha-sig.figma.com/img/2311/78ad/421618d5ac84c5165746c5f0e741ece2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dCMPK4m5D0ejhmCz81-mJHmo0ngRwAZVPvzqMj1qjoYzbD-MdWcOB1akdrjEOQeNDNQEYFHOu6r-W-PcLMLhK~OMjdVSNLTYBVsQLrk1QEOWQijyDLBqn2u54J9P3Kwnb7NCSFpG5k30mVL0XoKZLeTQlbAqCLxwwpq5Z-iO-nP5dtGM7cRudMeSxDWT7Q761SJ6sJM8ShCjsR8yCN74tumSQylV01ZfueNDqNKp4AP~feUN5XO~ZWFBd1zPqjDib~uSL4ERZSXT3xnaBwMR~JIBo~-7UPLYktc5L~8xjResnGY~0FLsLkxqa3AQOAsOJhC4FUtZuzCpdKiFuOVOtw__',
  },
  {
    title: 'Cubes Building',
    category: 'Business Centers',
    image:
      'https://s3-alpha-sig.figma.com/img/2311/78ad/421618d5ac84c5165746c5f0e741ece2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dCMPK4m5D0ejhmCz81-mJHmo0ngRwAZVPvzqMj1qjoYzbD-MdWcOB1akdrjEOQeNDNQEYFHOu6r-W-PcLMLhK~OMjdVSNLTYBVsQLrk1QEOWQijyDLBqn2u54J9P3Kwnb7NCSFpG5k30mVL0XoKZLeTQlbAqCLxwwpq5Z-iO-nP5dtGM7cRudMeSxDWT7Q761SJ6sJM8ShCjsR8yCN74tumSQylV01ZfueNDqNKp4AP~feUN5XO~ZWFBd1zPqjDib~uSL4ERZSXT3xnaBwMR~JIBo~-7UPLYktc5L~8xjResnGY~0FLsLkxqa3AQOAsOJhC4FUtZuzCpdKiFuOVOtw__',
  },
  {
    title: 'The Pencil Building',
    category: 'Stores & Malls',
    image:
      'https://s3-alpha-sig.figma.com/img/83e8/83c7/e31ecaae040c14943844c1fc4bafbe3a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PO0rNhhBFYW~UQDB62~rA7RsGwBAf6n5-B7T1AsRSeJXrlXhkAmhRnXVf0irpwqeNnpnkrA3cQs~qUoVUraZLr0UI0andIGmF3x8-Qo7uYatIwmTcwf0KVaSx-MUpZ09V~jjslWoOiP2qbGaRxBzNhSzArBKli7YEGUqZA1EYEpPc4IQ4T7ctWVqGz~qROAx08YQAf7qDsZnfBziKB5TZJT50tlaEGAGLvGfr6F5Us-knDIpd5k0NRFhlYwnttzLq1Wz7cc~E4TPqiTr6uwuiQqhgN9ykmBLpiPqIVQSa-dKDJN9WWU4~TgR-a2fWp66KB3XQr~AQP0VS1z6ggaXHA__',
  },
];

function ProjectSection({}: Props) {
  const visibleCards = 3;
  const maxSlide = projects.length - visibleCards;

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="pt-[120px] max-w-[1230px] mx-auto max-[1360px]:px-[20px]">
      <div className="flex justify-between max-[640px]:flex-col">
        <h1 className="font-[700] text-[48px] mb-[60px] max-[1360px]:text-[32px] max-[640px]:mb-[24px] max-[570px]:text-[28px] max-[470px]:text-[24px]">
          Browse our selected projects <br /> and learn more about our work
        </h1>

        <div className="flex gap-[12px] items-center max-[640px]:mb-[24px] max-[1105px]:hidden">
          <button
            onClick={handlePrev}
            className="w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center transition-all duration-300 hover:bg-[#ff5a30] group">
            <svg
              className="rotate-180 transition-all duration-300 group-hover:fill-white"
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z"
                className="fill-[#424551] group-hover:fill-white"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center transition-all duration-300 hover:bg-[#ff5a30] group">
            <svg
              className="transition-all duration-300 group-hover:fill-white"
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z"
                className="fill-[#424551] group-hover:fill-white"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* project cards */}
      <div className="overflow-hidden relative">
        <section
          style={{
            transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`,
          }}
          className={`flex gap-[30px] items-center max-[800px]:grid-cols-2 max-[580px]:grid-cols-1 transition-transform duration-500 max-[1105px]:hidden`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/3 max-w-[390px] max-[580px]:max-w-full pb-[24px] group">
              <img className="w-full" src={project.image} alt={project.title} />
              <div className="text-center m-auto mt-[16px] bg-[#FFFFFF] max-h-[51px] group-hover:max-h-[120px] overflow-hidden duration-300 transition-all">
                <h2 className="font-[700] text-[20px]">{project.title}</h2>
                <p className="font-[400] text-[14px] text-[#787A80] noBold">{project.category}</p>
                <button className="border-[#FF5A30] border-[1px] text-[#FF5A30] rounded-[4px] w-[207px] h-[44px] font-[700] text-[16px] duration-300 transition-all uppercase bg-transparent mt-[24px]">
                  View project
                </button>
              </div>
            </div>
          ))}
        </section>

        <section
          className={`gap-[30px] items-center max-[1105px]:grid max-[1105px]:grid-cols-2 max-[580px]:grid-cols-1 hidden`}>
          {projects.map((project, index) => (
            <div key={index} className="max-w-[390px] max-[1105px]:max-w-full pb-[24px] group">
              <img className="w-full" src={project.image} alt={project.title} />
              <div className="text-center m-auto mt-[16px] bg-[#FFFFFF] max-h-[51px] group-hover:max-h-[120px] overflow-hidden duration-300 transition-all">
                <h2 className="font-[700] text-[20px]">{project.title}</h2>
                <p className="font-[400] text-[14px] text-[#787A80] noBold">{project.category}</p>
                <button className="border-[#FF5A30] border-[1px] text-[#FF5A30] rounded-[4px] w-[207px] h-[44px] font-[700] text-[16px] duration-300 transition-all uppercase bg-transparent mt-[24px]">
                  View project
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="flex justify-center gap-[40px] max-[585px]:gap-[10px] items-center mb-[60px] mt-[85px] max-[585px]:flex-col">
        <h1 className="font-[700] text-[28px]">Explore all our works</h1>
        <button className="bg-[#FF5A30] rounded-[4px] w-[207px] h-[44px] text-white font-[700] text-[16px] hover:bg-[#fc3300] duratuion-300 transition-all uppercase">
          View portfolio
        </button>
      </div>
    </div>
  );
}

export default ProjectSection;
