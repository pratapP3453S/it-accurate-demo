import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialSidebar = () => {
  const [topOffset, setTopOffset] = useState("50%");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setTopOffset(`${Math.min(30 + scrollPosition * 0.10, 50)}%`); // Moves dynamically
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed left-2 top-1/2 transform -translate-y-1/2  p-3 hidden xl:block rounded-xl z-10 transition-all duration-300"
      style={{ top: topOffset }}
    >
      <ul className="space-y-4">
        <li>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-600 text-3xl hover:scale-110 transition-transform" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-400 text-3xl hover:scale-110 transition-transform" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 text-3xl hover:scale-110 transition-transform" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-700 text-3xl hover:scale-110 transition-transform" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialSidebar;
