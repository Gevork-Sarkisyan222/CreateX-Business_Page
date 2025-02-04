import React from 'react';

type Props = {};

function FormSection({}: Props) {
  return (
    <div
      style={{
        boxShadow: `
          0 80px 80px -20px rgba(154, 156, 165, 0.08),
          0 30px 24px -10px rgba(154, 156, 165, 0.05),
          0 12px 10px -6px rgba(154, 156, 165, 0.04),
          0 4px 4px -4px rgba(30, 33, 44, 0.03)
        `,
      }}
      className="max-w-[1230px]  flex flex-col gap-6 lg:gap-8 bg-white py-8 lg:py-12 px-4 sm:px-8 lg:px-16 xl:px-[60px] rounded-[4px] relative top-16 lg:top-[92px] max-[785px]:top-0">
      <h1 className="text-xl sm:text-2xl lg:text-[28px] font-bold leading-tight">
        Want to know more? Ask us a question:
      </h1>

      <form className="flex flex-col md:flex-row gap-4 md:gap-6 flex-wrap">
        <div className="flex flex-col gap-2 flex-1 min-w-[260px] text-start noBold">
          <label className="text-[#424551] text-sm" htmlFor="Name">
            Name
          </label>
          <input
            className="border-[#D7DADD] border bg-[#F4F5F6] w-full h-11 rounded-[4px] px-3 text-sm text-black outline-none"
            placeholder="Your name"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2 flex-1 min-w-[260px] text-start noBold">
          <label className="text-[#424551] text-sm" htmlFor="Phone">
            Phone
          </label>
          <input
            className="border-[#D7DADD] border bg-[#F4F5F6] w-full h-11 rounded-[4px] px-3 text-sm text-black outline-none"
            placeholder="Your phone"
            type="number"
          />
        </div>

        <div className="flex flex-col gap-2 flex-1 min-w-[260px] text-start noBold">
          <label className="text-[#424551] text-sm" htmlFor="Message">
            Message
          </label>
          <input
            className="border-[#D7DADD] border bg-[#F4F5F6] w-full h-11 rounded-[4px] px-3 text-sm text-black outline-none"
            placeholder="Your message"
            type="text"
          />
        </div>

        <button className="bg-[#FF5A30] rounded-[4px] w-full md:w-auto h-11 text-white font-bold text-sm hover:bg-[#fc3300] transition-colors duration-300 mt-2 md:mt-[27px] md:ml-auto px-6">
          SEND
        </button>
      </form>
    </div>
  );
}

export default FormSection;
