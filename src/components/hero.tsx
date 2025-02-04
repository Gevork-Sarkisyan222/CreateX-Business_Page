'use client';

import React, { useState, useRef } from 'react';
import Container from './container';

type Props = {};

const slidesData = [
  {
    id: 1,
    background: '/fon.jpeg',
    title: 'CREATE<span className="text-[#ff5832]">X</span> CONSTRUCTION',
    text: 'Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.',
  },
  {
    id: 2,
    background:
      'https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    title: 'INDUSTRIAL<span className="text-[#ff5832]">X</span> INNOVATION',
    text: 'Modern engineering solutions for complex projects. We combine cutting-edge technology with proven construction methods to deliver outstanding results.',
  },
  {
    id: 3,
    background:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    title: 'SAFETY<span className="text-[#ff5832]">X</span> FIRST',
    text: 'Implementing the highest safety standards across all construction sites. Our zero-accident policy ensures protection for both workers and clients.',
  },
  {
    id: 4,
    background:
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    title: 'BUILDING<span className="text-[#ff5832]">X</span> FUTURE',
    text: "Sustainable construction practices for tomorrow's architecture. Energy-efficient solutions and eco-friendly materials for green building projects.",
  },
];

function Hero({}: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesData.length;

  // Рефы для хранения начальной и конечной координаты касания
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Обработчик начала касания
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Обработчик перемещения пальца по экрану
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Обработчик завершения касания, сравниваем координаты
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50; // минимальное расстояние для срабатывания свайпа
    if (distance > threshold) {
      // свайп влево – переходим к следующему слайду
      handleNext();
    } else if (distance < -threshold) {
      // свайп вправо – переходим к предыдущему слайду
      handlePrev();
    }
    // Сброс значений
    touchStartX.current = null;
    touchEndX.current = null;
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      {/* Слайды */}
      <div
        className="flex transition-transform duration-[0.5s] ease-in"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative">
            {/* Фон */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('${slide.background}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}></div>

            {/* Затемнение */}
            <div className="absolute inset-0 bg-[rgba(30,33,44,0.6)]"></div>

            {/* Контент */}
            <Container>
              <div className="relative pt-[220px] max-[430px]:pt-[100px] max-w-[577px] text-white pb-[179px] max-[1410px]:px-[20px]">
                <h1 className="text-[72px] font-[700] max-[655px]:text-[48px] max-[430px]:text-[32px]">
                  CREATE<span className="text-[#ff5832]">X</span> CONSTRUCTION
                </h1>
                <p className="pt-[24px] text-[20px] font-[400] max-[655px]:text-[16px] max-[430px]:text-[14px] noBold">
                  {slide.text}
                </p>
                <div className="flex gap-[24px] items-center pt-[61px] max-[430px]:flex-col max-[430px]:items-start">
                  <button className="text-white uppercase w-[277px] h-[51px] flex justify-center items-center bg-transparent font-[700] border-[1px] border-white rounded-[4px] text-[16px] transition-all duration-300 hover:bg-[#ff5832] hover:border-[#ff5832]">
                    Learn more about us
                  </button>
                  <button className="text-white uppercase h-[51px] flex justify-center items-center bg-[#ff5832] font-[700] border-[1px] border-[#ff5832] rounded-[4px] text-[16px] px-6 transition-all duration-300 hover:bg-[#fc3300] hover:border-[#fc3300]">
                    SUBMIT REQUEST
                  </button>
                </div>
              </div>

              {/* Индикаторы слайдов */}
              <ul className="relative z-10 flex items-center gap-[10px] pb-[120px] text-white text-[28px] font-[700] max-[1410px]:px-[20px] max-[700px]:hidden">
                {slidesData.map((slide, index) => (
                  <li
                    onClick={() => setCurrentSlide(index)}
                    key={slide.id}
                    className="flex flex-col cursor-pointer">
                    <b
                      className={`${
                        index === currentSlide
                          ? 'text-white'
                          : 'text-white/30 hover:text-white transition-all duration-300'
                      }`}>
                      {String(index + 1).padStart(2, '0')}
                    </b>
                    <div
                      className={`w-[178px] h-[2px] transition-all duration-300 max-[820px]:w-[140px]  ${
                        index === currentSlide ? 'bg-white' : 'bg-white/30 hover:bg-white'
                      }`}></div>
                  </li>
                ))}
              </ul>
            </Container>
          </div>
        ))}
      </div>

      {/* Стрелки управления (скрыты на мобильных) */}
      <button
        onClick={handlePrev}
        className="max-[1350px]:hidden absolute left-8 top-1/2 -translate-y-1/2 w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center shadow-lg transition-all duration-300 hover:bg-[#ff5832] group">
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
        className="max-[1350px]:hidden absolute right-8 top-1/2 -translate-y-1/2 w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center shadow-lg transition-all duration-300 hover:bg-[#ff5832] group">
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
  );
}

export default Hero;
