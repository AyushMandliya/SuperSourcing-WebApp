import React from "react";

const MyCarousel = () => {
  return (
    <div className='rfm-marquee-container bg-black'>
      <div
        className='rfm-marquee'
        style={{
          "--play": "running",
          "--direction": "normal",
          "--duration": "30s", // Simplified duration for example
          "--delay": "0s",
          "--iteration-count": "infinite",
          "--min-width": "100%",
        }}
      >
        <div className='rfm-initial-child-container'>
          <div className='rfm-child'>
            <div className='col-12 overflow-hidden'>
              <div className='flex'>
                <h1 className='text-6xl text-white py-10 font-bold relative'>
                  <span className='inline-block animate-marquee'>
                    Build Your Dream Team
                  </span>
                  <span className='inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text'>
                    10X Faster.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='rfm-marquee'
        style={{
          "--play": "running",
          "--direction": "normal",
          "--duration": "30s", // Simplified duration for example
          "--delay": "0s",
          "--iteration-count": "infinite",
          "--min-width": "100%",
        }}
      >
        <div className='rfm-child'>
          <div className='col-12 overflow-hidden'>
            <div className='flex'>
              <h1 className='text-6xl text-white py-10 font-bold relative'>
                <span className='inline-block animate-marquee'>
                  Build Your Dream Team.
                </span>
                <span className='inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text'>
                  10X Faster. |
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
