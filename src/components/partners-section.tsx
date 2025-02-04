'use client';

import React, { useState } from 'react';

type Props = {};

type Testimonial = {
  id: number;
  author: string;
  position: string;
  text: string;
  image: string;
};

function PartnersSection({}: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      author: 'Анна Петрова',
      position: 'Дизайнер, Студия "Креатив"',
      text: 'Работая с этой командой, я почувствовала настоящий профессионализм и стремление к инновациям. Результаты превзошли мои ожидания.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 2,
      author: 'Иван Смирнов',
      position: 'Разработчик, TechSolutions',
      text: 'Их подход к решению задач уникален и эффективен. Приятно работать с людьми, которые действительно увлечены своим делом.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 3,
      author: 'София Иванова',
      position: 'Маркетолог, GlobalMarket',
      text: 'Команда помогла нам выйти на новый уровень взаимодействия с клиентами. Их идеи свежие и вдохновляющие.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      id: 4,
      author: 'Дмитрий Кузнецов',
      position: 'Менеджер проектов, BuildIt',
      text: 'Сотрудничество оказалось плодотворным и взаимовыгодным. Рекомендую всем, кто ценит качество и оперативность.',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-[80px] bg-[#F4F5F6]">
      <div className="max-w-[1230px] mx-auto max-[1320px]:px-[20px]">
        <div className="text-center">
          <h1 className="font-[700] text-[46px] max-[650px]:text-[32px]">
            Supported by 12+ partners
          </h1>
        </div>

        <div className="flex gap-[70px] items-center justify-center max-[1320px]:grid max-[1320px]:grid-cols-2 max-[1320px]:gap-[20px] max-[1320px]:justify-items-center max-[1320px]:mt-[30px]">
          <img
            width={150}
            src="https://s3-alpha-sig.figma.com/img/c5e5/b91c/105ec894eb955e978d7274a029dee59c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U~FaTrcwhs2csLxD3culp6dbM6UL1Hg9shOYPTLeIUUqDU1dK2MfKJocY-jP7eaeulklsYEfA0ehDg9A~q6oLVAd7fIxHwJ0iaxq61m9y12c-52g2pTCOZN6foC3rxFlH5RQMZqCRrBSOWGN3utAmg0iSVvxF0H9GyT~9ERVxxd~qSmUubSdRdRNCqU5wzCOKg86Zs9XnyGU5V7SXzjBoSHf~qdLlArKJh-KmqZXwkPtt8Pcrr29321ZpvdkOZ3wPgsyoKxQanV8UjVkoyRzWbSEiaQDzWBRDkDJU0~0RjAFonqNsQH6LnbO6-StSCItYhX0WWL22TOfEpCJk2-9kQ__"
            alt=""
          />
          <img
            width={150}
            src="https://s3-alpha-sig.figma.com/img/a87b/fef2/d8e12e5fe4bd89f45142880d1a891387?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PlgMT3OPqsJ~s7JyGqtTSyThT-8tydR~VC8eHvOPCX6y3hraNQwpVOAc0Dqi7p~~QG47S58-JoIulyiUvYVh40Kxp~IZIjQXjOW7JqhuDb5XiWaYB1P-SVZCnCqO9A82qjuuR9PgSXm~FoD6LTZZStRX5U2P-uEuxofIg8-lfoH1aKbG~XRYETci9OyZdX-sPbZfGa2OPqi40R3Jv2t8P8tPM00Djq7IDQ2LsLe1xuot-cz71WdSSZgC9l-iIjjw0Q6w5ZEfSdvdWGsl3p7Rzz0-tVC-rvGEJzk1M1nITWMQiYoPsTnVZvqY6fX4rkna0ZFR44wTDmStEi1RzWRMOQ__"
            alt=""
          />
          <img
            width={150}
            src="https://s3-alpha-sig.figma.com/img/6350/0650/4a0304c6115a1fb006467546f1cf3e3f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j16CDmdvZHIWplTenrjwB8kIjyQNIVfEloxTdqEj9bv5r1hn3ySk8k9AQ2wz5dCd2UQ-0MK5ROZlQLs4YLuLSu28JTn9h2ACWDrEYhsHiowroKbJNMc~r1thLPcX3R-w1jishJ4ga-FTzZIEIs5Qs3eiFz4GsouXf3sF4HdylBSmRfj65VQpYd83805WXpxdAP212gVHuVGNs1O~Oz~GhKs1TURu-n32YOHPr8WJdgufYdwbpWivS8JfWCituW1u84346eS3wcg53EpZGmwQ8UMmYyWdMWdoSLjfCNnv9kH0KWfiKDeQvK-Fjw6bgYQX3c0YZwIn1nOi5cgWBxmYeA__"
            alt=""
          />
          <img
            width={150}
            src="https://s3-alpha-sig.figma.com/img/f8c3/0adc/dae91bf3c4eeabe51f5538366f88f239?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9wdREvkkm1z5xDL6tsW8TZB3kUvP5A1NLAJApVijSjs9ixFUcwFIcJli1qBH6rNhqfys~8kZGwr3TkNuk4iPxByDOcwAQPPHHecOLrCSNKKp6BN7YSProB5H5YwsGA8KFOBpiaH9UDA6FHwTr4QFbHaqvpkAJiQa9pEefLgY3Nc2Yv4Frq65kG1ru7OoiTE6e3RrV4lpyenVjvobqSXGhAqYe-MJd-bABQFngXzAV86HX-siMu~FXmjv5t1idpPc3AuhRW3V1qPIvMg9Q6y8lKi8iRdBYW3nZoFf825b7OmCQcnE0qpI71lDFw0tp2CjcPVafeLh7aOxgz5TLsh6Q__"
            alt=""
          />
          <img
            width={150}
            src="https://s3-alpha-sig.figma.com/img/c915/d6bd/459e74913fa7983d9c8d5f1a6e621339?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lrwTvZ7rCI-oIaZvrrD5Bb6vSDRV-2pJnum-oNOmyYgP2wb2aiN5BZMJXzdOp9SzpCrwk-YjqDt3qu5kAVLkpdcz2EX6Xls23EbV7yIm4uykAw9KQLLFujGawk6Xxf0KJIhETqnukjsm4PihPu7DGvVsH~XkOJkRziLWSuD-Ap8WB9h5m~I7ddOqh~a0QtUdA3ZYYbPLa32ONXihCoJPbX7OBt9fSlO0WsoThm2~DfRaOlS-1IGduWvyLXcHWI5qDrj-rygoxWBXVp1hEyCc57F6dn9z67Ok~6vlX1A70dHsscHCPFvpxKZeTFdaje5rgZAPuJ7dAXMhY51oh1Q2Ug__"
            alt=""
          />
          <img
            width={170}
            src="https://s3-alpha-sig.figma.com/img/6bab/cdb7/5a959a2b066cc908e29c4abac6c786f3?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EgGw5RNkCac511piKSDBca7KNpSmVIMTFw-WfpU3ICvxMTidr8KDZcyMucLS2aZVxwhUWytDOJdD4e3prB9x3pR0mJs7xkhziXzecizI3DRTnYeXFo78zVXjSuWwV0thM5X78BAumNxQGjH7HooNRZYV2J9xTS0vNgi~siB3t2Bk8oFBaTB6qvZFRGB8fzWBPKJFlcGDCGKU732sYjh61nCE4HkeZo9vPKl-rBpDg~mFyeGgqqj~v-EvBPFADr4Fg277gKDhy8PuehxCpDtzz65JjrdolAsy~Z4a5sIHjuyS2nOgpZRrZuSg0uvtbVW3TTQAFWBYCnW6iFvuQNz2UQ__"
            alt=""
          />
        </div>

        <article className="mt-[170px] flex gap-[125px] max-[600px]:mt-[100px]">
          <div className="max-w-[612px] pb-[121px] relative overflow-hidden">
            <h1 className="text-[46px] font-[700] mb-[60px] max-[600px]:text-[28px]">
              What our clients are saying
            </h1>

            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full">
                  <img
                    width={72}
                    height={72}
                    className="mb-[24px] rounded-[100px]"
                    src={testimonial.image}
                    alt=""
                  />
                  <p className="font-[400] text-[16px] mb-[24px] noBold text-[#424551]">
                    {testimonial.text}
                  </p>

                  <h2 className="font-[700] text-[#1E212C] text-[17px]">{testimonial.author}</h2>
                  <div className="flex justify-between items-center">
                    <p className="text-[#787A80] font-[400] text-[14px] noBold">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-[12px] items-center absolute right-[30px] bottom-[130px] max-[1321px]:bottom-[115px]">
              <button
                onClick={prevSlide}
                className="w-[48px] h-[48px] bg-transparent rounded-full flex justify-center items-center transition-all duration-300 hover:bg-[#ff5a30] group">
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
                onClick={nextSlide}
                className="w-[48px] h-[48px] bg-transparent rounded-full flex justify-center items-center transition-all duration-300 hover:bg-[#ff5a30] group">
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

          <img
            className="mb-[-60px] max-[1320px]:w-[380px] max-[1320px]:h-[441px] max-[915px]:hidden"
            src="https://s3-alpha-sig.figma.com/img/8950/f5b3/dee44805efdefe9dee6999e4c5df751d?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=APpY91njbiPvnLJrZi-BeBDlaSHNWyw2~cLxnkKf273Fi0znzfAV4SZIdlkian~xiEp5AH~D2G~tRu~wMrDGAyTQmYNlgmw30GcRhg~yJCDEK1zc9b6eggSOK7jYsLhAeG1EZTlV-udFdEMCSPXV-Zq9MikNMG2ObM2tPFQn7x3o7xS4fYVCMFk0R0u09XQqBWpB4g3qk0gyI1tL0DRf5pa8Y4zoTpRxBnGxY9YRwQbYM7eDCyCja1wfzIkXQFLAoSsTiYgShp3Sc-fjlkOhCcxN4OU6Mk2QuldgPp5cNwA0l-jsb0V07ZJ-miz5jIwy~GjFq~okqUesFk7hX0sXgw__"
            alt=""
          />
        </article>
      </div>
    </div>
  );
}

export default PartnersSection;
