import React from 'react';
import icon from '../assets/img/blackBall.jpg';

const Header = ({ onContactClick }) => {
  return (
    <header className="bg-[#09090B] text-white p-4 drop-shadow-[0_10px_10px_rgba(7,7,8,15)]">
      <div className="px-2 md:px-8 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/" className="flex gap-1 justify-between text-lg md:text-xl items-center font-normal">
            <img src={icon} alt='xYz' className='w-6 h-6'/>
            cricket<i className="hidden sm:block">.XYZ</i>
          </a>
        </div>

        <nav className=''>
          <ul className="flex space-x-6 items-center">
            <li>
              <a href="/" className="hover:text-green-500 text-xs sm:text-base">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-500 text-xs sm:text-base">About</a>
            </li>
            <li className="hover:text-green-500 text-xs sm:text-base" onClick={(e) => { e.preventDefault(); onContactClick(); }}>
                Contact
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
