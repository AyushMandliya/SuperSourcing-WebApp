import React from "react";
import Example from "@/components/Example";
const NavLink = ({ href, children, additionalClasses = "" }) => (
  <a href={href} className={`text-black rounded-lg p-2 ${additionalClasses}`}>
    {children}
  </a>
);

const Navbar = () => {
  return (
    <nav className='bg-gray-50 hover:bg-slate-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-4 lg:px-4'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <NavLink href='/'>
                <img
                  src='/logo-dark.svg'
                  alt='SuperSourcing Logo'
                  className='h-8 w-auto px-2' // Adjusted padding for the image
                />
              </NavLink>
            </div>
            <Example />
          </div>
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center space-x-4'>
              <NavLink href='/' additionalClasses='underline font-bold'>
                Schedule a Call
              </NavLink>
              <NavLink
                href='/'
                additionalClasses='bg-black text-white hover:bg-gray-800 rounded-full px-4 py-2.5 font-bold'
              >
                Hire Developers
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
