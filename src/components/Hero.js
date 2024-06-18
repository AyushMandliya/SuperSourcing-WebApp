import React from "react";
import PropTypes from "prop-types";
import styles from "./Hero.module.css";

// Input component
const EmailInput = ({ placeholder }) => (
  <input
    type='email'
    placeholder={placeholder}
    className='px-4 py-3 border border-gray-300 rounded-lg bg-white mr-2'
  />
);

EmailInput.propTypes = {
  placeholder: PropTypes.string,
};

EmailInput.defaultProps = {
  placeholder: "Your work email",
};

// Button component
const HireButton = ({ text }) => (
  <button className='px-4 py-3 bg-blue-500 text-white rounded-full'>
    {text}
  </button>
);

HireButton.propTypes = {
  text: PropTypes.string,
};

HireButton.defaultProps = {
  text: "Hire Now",
};

// Hero component
const Hero = () => (
  <section className='bg-gray-50 flex flex-col md:flex-row items-center p-8'>
    <article className='bg-gray-50 text-black p-6 rounded-md md:w-3/5 mb-4 md:mb-0'>
      <h1 className='text-6xl font-bold mb-4'>
        Hire Software Developers Perfectly Matched
        <br />
        by AI,
        <span className={styles.bg_linear_gradient}> 10X Faster!</span>
      </h1>
      <h3 className='text-gray-600 mb-4 text-2xl'>
        Skip CV screening, interview rounds, & <b>save 90% time</b> by either
        hiring a software developer or your entire engineering team with us.
      </h3>
      <div className='flex items-center'>
        <EmailInput />
        <HireButton />
      </div>
    </article>
    <div className='md:w-2/5'>
      <video
        autoPlay
        muted
        loop
        width='100%'
        playsInline
        className='rounded-md'
        aria-label='Promotional video showing benefits of hiring software developers through our service'
      >
        <source src='/Hire-Software-Developers.webm' type='video/webm' />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
);

export default Hero;
