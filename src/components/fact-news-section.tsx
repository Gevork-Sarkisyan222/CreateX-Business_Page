import React from 'react';
import Container from './container';
import NewsCard from './news-card';

type Props = {};

function FactNewsSection({}: Props) {
  return (
    <div className="relative overflow-hidden">
      <img
        className="absolute top-[-310px] left-0"
        src="https://live.verstaem.online/createx/img/facts-bg.png"
        alt=""
      />

      <Container className="pt-[170px] max-[550px]:pt-[90px]">
        <div className="text-center">
          <h1 className="font-[700] text-[46px] mb-[60px] max-[600px]:text-[32px] px-[40px]">
            Some facts and figures
          </h1>

          {/* percentes */}
          <div className="flex gap-[48px] items-center justify-center mb-[180px] max-[900px]:grid max-[900px]:grid-cols-2 justify-items-center max-[550px]:grid-cols-1">
            <div className="flex-col items-center">
              {/* start Процент */}
              <div className="w-[148px] h-[148px] flex items-center justify-center relative rounded-full text-[32px] font-[700] mb-[20px] bg-white">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    borderWidth: '7px',
                    borderStyle: 'solid',
                    borderColor: 'transparent',
                    borderRadius: '100px',
                    background: 'conic-gradient(#F89828 0% 57%, #f8dfbe 57% 100%) border-box',
                    WebkitMask:
                      'linear-gradient(white 0 0) padding-box, linear-gradient(white 0 0) border-box',
                    WebkitMaskComposite: 'destination-out',
                    maskComposite: 'exclude',
                  }}></div>

                {/* Текст остается поверх */}
                <span className="relative z-10">57%</span>
              </div>
              {/* end Процент */}

              <p className="font-[400] text-[14px] text-[#1E212C] noBold">
                Totally satisfied clients
              </p>
            </div>
            <div className="flex-col items-center">
              {/* <div className="w-[148px] h-[148px] flex items-center justify-center border-[#F52F6E] border-[7px] rounded-[100px] bg-white text-[32px] font-[700] mb-[20px]">
                20
              </div> */}

              {/* start Процент */}
              <div className="w-[148px] h-[148px] flex items-center justify-center relative rounded-full text-[32px] font-[700] mb-[20px] bg-white">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    borderWidth: '7px',
                    borderStyle: 'solid',
                    borderColor: 'transparent',
                    borderRadius: '100px',
                    background: 'conic-gradient(#F52F6E  0% 75%, #fbe4ec 75% 100%) border-box',
                    WebkitMask:
                      'linear-gradient(white 0 0) padding-box, linear-gradient(white 0 0) border-box',
                    WebkitMaskComposite: 'destination-out',
                    maskComposite: 'exclude',
                  }}></div>

                {/* Текст остается поверх */}
                <span className="relative z-10">20</span>
              </div>
              {/* end Процент */}

              <p className="font-[400] text-[14px] text-[#1E212C] noBold">
                Totally satisfied clients
              </p>
            </div>

            <div className="flex-col items-center">
              {/* start Процент */}
              <div className="w-[148px] h-[148px] flex items-center justify-center relative rounded-full text-[32px] font-[700] mb-[20px] bg-white">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    borderWidth: '7px',
                    borderStyle: 'solid',
                    borderColor: 'transparent',
                    borderRadius: '100px',
                    background: 'conic-gradient(#5A87FC  0% 85%, #ccdbfb 85% 100%) border-box',
                    WebkitMask:
                      'linear-gradient(white 0 0) padding-box, linear-gradient(white 0 0) border-box',
                    WebkitMaskComposite: 'destination-out',
                    maskComposite: 'exclude',
                  }}></div>

                {/* Текст остается поверх */}
                <span className="relative z-10">9452</span>
              </div>
              {/* end Процент */}

              <p className="font-[400] text-[14px] text-[#1E212C] noBold">Working hours spent</p>
            </div>

            <div className="flex-col items-center">
              <div className="w-[148px] h-[148px] flex items-center justify-center border-[#03CEA4] border-[7px] rounded-[100px] bg-white text-[32px] font-[700] mb-[20px]">
                100%
              </div>

              <p className="font-[400] text-[14px] text-[#1E212C] noBold">Working hours spent</p>
            </div>
          </div>
        </div>

        <h1 className="mb-[60px] font-[700] text-center text-[46px]">Recent news</h1>

        <div className="flex gap-[30px] items-center px-[20px] max-[1145px]:flex-col">
          <NewsCard
            imageUrl="https://s3-alpha-sig.figma.com/img/bae6/2295/631f7adc908aa3c09809e618ce8d7924?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jTKLM5X7Nuv4pSH-LS~tvyztRE8VcSdCJPdpSsQ15hTFFsWdwT7D6uAeTF2AxUs5GTxLp5QQNc0dFrshNKLNDPy8g1M51JFSK1wdY1HN2-JkETuFfQ-AHbbkiv9KmhmXPittVSHjjAqNPdRS-c0-e5o9a0QTpJskLBxelEd0MvqC~eqid9BS4vtQrw9JH-Z4awWJ-unviVdGIe0W-P6~VRm1hQMYuHtc7o4XS~vMVekj6CtDPbgNj6xr1IaTKc2SClWdJJtXIGC3oTOEVj2Y7arVVnZ2nGcb0Vet52dVR-DXsJCpVYV~Kdd3Cr00pU8p-5nQg9jisQeO6gPxyxXuZg__"
            desc="Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis..."
            title="How to Build Climate Change-Resilient Infrastructure"
          />

          <div className="grid grid-cols-1 gap-4 max-[1145px]:w-full">
            <NewsCard
              className="h-[255px]"
              imageUrl="https://s3-alpha-sig.figma.com/img/d3ae/0069/a076d840be513d07538c5857de2b26a8?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QOMWQyVYjbG9YdYBNtgCG4oHWNfEMN~fsK1O06VfeyvJwy4q098UGmoFpWU0js7zRkS72FHpS2a8sIqEGP2I4njuZIgqsKW3iJbI~-Cc8-6RXp1DmQyk8pE2~bAbh7Ay5sryFULL00wKwwcCXbyeGgsg3mTsCK9dHxuA87oinu4OXzxEOJi0EJWeM1I3bKI2ePUgiSw2ITf9y8jx-Zk--~JcJG2DLQXS53xtggW-xlRAw4dgMWeWSdOQpJCYvB-VxETwnNCHTGGo0ITS6Bc1bzmQdf5Tmxx5C2R6veFp0uefiyeFYW5NcRUoHHsy4Seym3crIEdm~Qx1tZ9QI~7S1A__"
              title="How Construction Can Help Itself"
            />

            <NewsCard
              className="h-[255px]"
              imageUrl="https://s3-alpha-sig.figma.com/img/674a/2c13/f6d69ef2eee9ed03584b1e65b1bb8908?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AyaL7iVEDIsZ1F7ux~r9ScLNn-jPhN3S~WHyt3D1D9GR0oGC3dMVKVdSvvz3qSgnPDkeMZEVU54yhoHuUfb7O1dd5cbAleTcJ~xBzsa-i1mf8pi8CnlYbc8If5B3dtTpKffhGKJs8A~OfQgclfy1-B9FhINZFH9jTqnn9Yn4gOi7LDo005tpvELkXiO7uPn6x7y46-TGzX9u8jry-fch0bNh4BN2P~nTH4lqUHdTJAut5LzOLwz8QMRH0KsLCekvf2zsyvg9FIT5oCpmv6nbOiBoZOHZGlR2GRkUrfJsjSp2y68QV4hEfXBlc2adqJDzCk3Cdu6eTSDXq6Kx5Lphuw__"
              title="Types of Flooring Materials"
            />
          </div>
        </div>

        <div className="flex justify-center gap-[40px] items-center mb-[60px] mt-[85px] px-[20px] max-[655px]:flex-col">
          <h1 className="font-[700] text-[28px] max-[425px]:text-[24px]">
            Explore all our news posts
          </h1>
          <button className="bg-[#FF5A30] rounded-[4px] w-[207px] h-[44px] text-white font-[700] text-[16px] hover:bg-[#fc3300] duratuion-300 transition-all uppercase">
            View all news
          </button>
        </div>
      </Container>
    </div>
  );
}

export default FactNewsSection;
