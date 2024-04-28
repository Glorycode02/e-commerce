import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="text-black py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo ac ultricies lacinia.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-1"><a href="#">Home</a></li>
              <li className="mb-1"><a href="#">Shop</a></li>
              <li className="mb-1"><a href="#">About</a></li>
              <li className="mb-1"><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#"><FaGithub/></a>
              <a href="#"><FaStackOverflow /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaTwitter/></a>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-6" />
        <div className="text-sm text-center">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
