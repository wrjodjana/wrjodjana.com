import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function InformationSection() {
  return (
    <header className={`${robotoMono.className} flex flex-col md:flex-row max-w-4xl mx-auto p-4`}>
      <div className="flex flex-col items-center md:mr-8 mb-4 md:mb-0">
        <h1 className="text-4xl font-bold mb-2">Warren Jodjana</h1>
        <div className="flex space-x-4">
          <a href="mailto:jodjana2@illinois.edu" className="text-red-600 text-2xl hover:text-red-700">
            <FaEnvelope />
          </a>
          <a href="https://github.com/wrjodjana" className="text-gray-300 text-2xl hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/wrjodjana" className="text-blue-700 text-2xl hover:text-blue-800">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <p className="flex-1 text-md leading-relaxed text-justify">
        I&apos;m a student at the University of Illinois at Urbana-Champaign studying Computer Science and Statistics with a minor in Geographic Information Science. I&apos;m mostly interested in full-stack web development, data engineering
        and machine learning. Outside of this, I enjoy watching the NBA, playing Valorant and eating good food. Feel free to reach out at jodjana2@illinois.edu.
      </p>
    </header>
  );
}
