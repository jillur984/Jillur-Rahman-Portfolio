import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa"; // Importing phone icon

const Footer = () => {
  return (
    <div
      id="Footer"
      className=" bg-slate-900 text-white p-10 md:p-12 flex flex-col md:flex-row justify-between items-center"
    >
      <div className="mb-6 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Contact</h1>
        <h3 className="text-sm md:text-lg font-normal">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-lg flex flex-col md:flex-row gap-4">
        <li className="flex gap-2 items-center hover:text-gray-200 transition duration-200">
          <MdOutlineEmail size={25} />
          <span>jillur.cse.bd@gmail.com</span>
        </li>
        <li className="flex gap-2 items-center hover:text-gray-200 transition duration-200">
          <CiLinkedin size={25} />
          <a
            href="https://www.linkedin.com/in/md-jillur-rahman-155793221/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <span>linkedin.com/in/md-jillur-rahman-155793221</span>
          </a>
        </li>
        <li className="flex gap-2 items-center hover:text-gray-200 transition duration-200">
          <FaGithub size={25} />
          <a
            href="https://github.com/jillur984"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <span>github.com/jillur984</span>
          </a>
        </li>
        <li className="flex gap-2 items-center hover:text-gray-200 transition duration-200">
          <FaPhone size={25} />
          <span>+8801611780984</span> 
        </li>
      </ul>
    </div>
  );
};

export default Footer;
