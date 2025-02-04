import React from 'react';

type Props = {
  imageUrl: string;
  title: string;
  desc?: string;
  className?: string;
};

function NewsCard({ imageUrl, title, desc, className }: Props) {
  return (
    <div
      style={{
        boxShadow: `
          0px 4px 4px -4px #1E212C08,
          0px 12px 10px -6px #9A9CA50A,
          0px 30px 24px -10px #9A9CA50D,
          0px 80px 80px -20px #9A9CA514
        `,
      }}
      className={`rounded-[4px] bg-white forResponsive pb-[24px] mb-[24px] overflow-hidden max-[1145px]:h-max ${className}`}>
      <img className="w-full" src={imageUrl} alt="" />

      <div className="px-[24px] pt-[24px]">
        <h2 className="font-[700] text-[20px] text-[#1E212C]">{title}</h2>

        <article className="text-[#787A80] flex gap-[15px] text-[14px] font-[400] items-center mb-[20px] mt-[12px]">
          <p className="noBold">Industry News</p>
          <div className="w-[1px] h-[16px] bg-[#787A80]"></div>
          <p className="noBold">June 24, 2020</p>
          <div className="w-[1px] h-[16px] bg-[#787A80]"></div>
          <p className="noBold">4 comments</p>
        </article>

        {desc && <p className="font-[400] text-[16px] text-[#424551] noBold">{desc}</p>}
      </div>
    </div>
  );
}

export default NewsCard;
