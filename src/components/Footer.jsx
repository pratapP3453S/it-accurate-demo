import React from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube,
  FaChevronDown
} from 'react-icons/fa';
import { 
  MdEmail, 
  MdPhone, 
  MdLocationOn 
} from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-12 pb-6 px-4 sm:px-6 lg:px-8 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand & Quick Links */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">JIT ACCURATE</h2>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-indigo-500 after:rounded-full">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Home</span>
                </a>
              </li>
              <li className="relative group">
                <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Courses</span>
                  <FaChevronDown className="ml-1 text-xs opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                </a>
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <a href="#" className="block px-4 py-2 hover:bg-indigo-50 dark:hover:bg-gray-700">Web Development</a>
                  <a href="#" className="block px-4 py-2 hover:bg-indigo-50 dark:hover:bg-gray-700">Data Science</a>
                  <a href="#" className="block px-4 py-2 hover:bg-indigo-50 dark:hover:bg-gray-700">Digital Marketing</a>
                </div>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">About</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Blogs</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-indigo-500 after:rounded-full">
            Legal
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">Terms of Service</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">Privacy Policy</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">Refund Policy</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-indigo-500 after:rounded-full">
            Contact
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <MdEmail className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
              <a href="mailto:info@itaccurata.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 ml-2">
                info@itaccurata.com
              </a>
            </li>
            <li className="flex items-start">
              <MdPhone className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
              <a href="tel:09175978889" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 ml-2">
                09175978889
              </a>
            </li>
            <li className="flex items-start">
              <MdLocationOn className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
              <div className="ml-2">
                <strong className="font-medium">Nagpur:</strong>
                <p className="text-sm">607, 608 B-wing, Lokmat Bhavan, Lokmat Square, Ramdaspehi, Nagpur Ph. - 09175978889</p>
              </div>
            </li>
            <li className="flex items-start">
              <MdLocationOn className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
              <div className="ml-2">
                <strong className="font-medium">Theme:</strong>
                <p className="text-sm">Office No. 806, Paradise Tower, Noupada, Thane West Ph. - 07738277389</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-indigo-500 after:rounded-full">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              <FaYoutube className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} JIT ACCURATE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;