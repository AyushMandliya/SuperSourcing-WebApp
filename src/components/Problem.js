import React from "react";

const ListItem = ({ iconSrc, text }) => (
  <div className='flex items-center'>
    <img src={iconSrc} alt='' className='h-6 w-6' />
    <p className='text-lg text-gray-600 ml-2'>{text}</p>
  </div>
);

const Section = ({ title, subtitle, items, iconSrc }) => (
  <div className='flex flex-col items-start justify-center text-left mt-8'>
    <h3 className='text-2xl font-bold text-gray-800'>{title}</h3>
    <h5 className='text-xl font-bold text-gray-400'>{subtitle}</h5>
    <div className='space-y-4 ml-8 flex flex-col mt-4'>
      {items.map((item, index) => (
        <ListItem key={index} iconSrc={iconSrc} text={item} />
      ))}
    </div>
  </div>
);

function Problem() {
  const problems = [
    "Screening from unqualified applicants",
    "Wasting valuable time in tedious Interviews",
    "Struggling to convince candidates to join on time",
    "Concerned about quality and delayed delivery",
    "Challenge of Scaling Up/Down",
  ];

  return (
    <div className='pl-10 pr-10'>
      <div className='flex justify-between w-auto pl-8 pr-8'>
        <div className='flex flex-col items-start text-right mt-8'>
          <h3 className='text-2xl font-bold text-gray-800'>PROBLEMS</h3>
          <h5 className='text-xl font-bold text-gray-400'>
            WITH TRADITIONAL WAY
          </h5>
        </div>

        <div className='flex flex-col items-end text-left mt-8'>
          <h3 className='text-2xl font-bold text-gray-800'>SOLUTIONS</h3>
          <h5 className='text-xl font-bold text-blue-600'>
            THE SUPERSOURCING WAY
          </h5>
        </div>
      </div>

      <div className='flex justify-center items-center mt-8'>
        {/* Left side */}
        <div className='flex flex-col items-start justify-center text-left mr-8'>
          <div className='space-y-4 ml-8 flex flex-col'>
            {problems.map((problem, index) => (
              <ListItem key={index} iconSrc='/close-red.svg' text={problem} />
            ))}
          </div>
        </div>

        {/* Center Image */}
        <div className='flex flex-col items-center justify-center mx-8'>
          <img
            src='/Chart_Circle.svg'
            alt='SuperSourcing Logo'
            className='h-auto w-auto'
          />
        </div>

        {/* Right side */}
        <div className='flex flex-col items-start justify-center text-left ml-8'>
          <div className='space-y-4 mr-8'>
            {problems.map((problem, index) => (
              <ListItem key={index} iconSrc='/check-blue.svg' text={problem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Problem;
