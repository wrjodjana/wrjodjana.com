import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function InformationSection() {
  return (
    <header className={`${robotoMono.className} flex max-w-4xl mx-auto p-4`}>
      <div className="flex flex-col items-center mr-8">
        <h1 className="text-4xl font-bold mb-2">Warren Jodjana</h1>
        <div className="flex space-x-4">
          <a href="mailto:jodjana2@illinois.edu" className="text-red-600 text-2xl">
            <FaEnvelope />
          </a>
          <a href="https://github.com/wrjodjana" className="text-gray-300 text-2xl">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/wrjodjana" className="text-blue-700 text-2xl">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <p className="flex-1 text-md leading-relaxed text-justify">
        I'm a student at the University of Illinois at Urbana-Champaign studying Computer Science with a minor in Statistics. I'm mostly interested in full-stack web development, data engineering and machine learning. Outside of this, I
        enjoy watching the NBA, playing Valorant and eating good food. Feel free to reach out at jodjana2@illinois.edu.
      </p>
    </header>
  );
}
