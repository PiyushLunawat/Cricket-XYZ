import React from 'react';
import Drawer from './Drawer'; // Import the Drawer component
import icon from '../assets/img/blackBall.svg';
import instagram from '../assets/img/instagram.svg';
import facebook from '../assets/img/facebook.svg';
import twitter from '../assets/img/twitter.svg';
import youtube from '../assets/img/youtube.svg';

export const Footer = ({ isOpen, toggleDrawer }) => {
  return (
    <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer}>
      <div className="py-2 px-8 text-white">
        <h2 className="text-xl font-bold text-center mb-4">Contact Us</h2>
        <div className='flex justify-between'>
          <table className="table-auto w-full text-sm mb-4">
            <tbody>
              <tr>
                <td className="font-semibold">Postal Address:</td>
                <td>Street 69, Phoenix Sports City, Mumbai, India</td>
              </tr>
              <tr>
                <td className="font-semibold">Telephone:</td>
                <td>+971 4 3828800</td>
              </tr>
              <tr>
                <td className="font-semibold">Email:</td>
                <td>enquiries@cricketxyz.com</td>
              </tr>
            </tbody>
          </table>

          <div className="">
            <div className="flex gap-1 text-xl justify-center items-center font-normal">
              <img src={icon} alt="xYz" className="w-6 h-6 mr-2" />
              cricket<i>XYZ</i>
            </div>

            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://facebook.com/cricketxyz" className="text-green-300">
                <img src={facebook} alt="F" className="w-6 h-6 mr-2 bg-green-300" />
              </a>
              <a href="https://twitter.com/cricketxyz" className="text-green-300">
                <img src={twitter} alt="X" className="w-6 h-6 mr-2 bg-green-300" />
              </a>
              <a href="https://instagram.com/cricketxyz" className="text-green-300">
                <img src={instagram} alt="i" className="w-6 h-6 mr-2 bg-green-300" />
              </a>
              <a href="https://youtube.com/cricketxyz" className="text-green-300">
                <img src={youtube} alt="YT" className="w-6 h-6 mr-2 bg-green-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-2">
          <div className="text-xs pt-2 border-t border-green-400">
            Copyright 2024 <i>XYZ</i>. All rights reserved.
          </div>
        </div>
      </div>
    </Drawer>
  );
};
