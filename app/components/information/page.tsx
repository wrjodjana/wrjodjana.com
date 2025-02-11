import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function InformationSection() {
  return (
    <header className={`${robotoMono.className} max-w-4xl mx-auto p-4`}>
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold mb-3 text-gray-100">Warren Jodjana</h1>
        <div className="flex space-x-6 mb-6">
          <a href="mailto:jodjana2@illinois.edu" className="text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
            <FaEnvelope className="text-xl" />
            <span className="text-sm">Email</span>
          </a>
          <a href="https://github.com/wrjodjana" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors duration-200 flex items-center gap-2">
            <FaGithub className="text-xl" />
            <span className="text-sm">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/wrjodjana" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-200 flex items-center gap-2">
            <FaLinkedin className="text-xl" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>

        <div className="max-w-2xl text-center">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            I&apos;m an undergraduate at the University of Illinois of Urbana-Champaign studying Computer Science and Statistics, with interests in full-stack web development, machine learning, and quantitative analytics.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">Outside of this, I enjoy watching the NBA, playing Valorant, and eating good food (mostly spicy ones).</p>
        </div>
      </div>
    </header>
  );
}
