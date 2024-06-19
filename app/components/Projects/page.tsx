import React from "react";
import Image from "next/image";
import permiasuiuc from "../../../public/permiasuiuc.png";
import akar from "../../../public/akar.png";
import marketanalyzer from "../../../public/marketanalyzer.png";
import chicago from "../../../public/chicago.png";
import { FaGithub } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";

export default function ProjectsSection() {
  return (
    <section className="mt-10">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <div className="w-96 bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Permias UIUC Website</h3>
          <Image src={permiasuiuc} width={1000} height={1000} alt="Permias UIUC Website image" />
          <p className="text-sm mt-4">The official website for the Indonesian Student Association at the University of Illinois at Urbana-Champaign Campus.</p>
          <div className="text-xs mt-2">
            <strong>Technologies used:</strong> React, Tailwind, Node.js
          </div>
          <div className="flex justify-between mt-4">
            <a href="https://github.com/jbw9/PermiasWebsite" className="flex items-center hover:text-blue-500 transform hover:scale-110 transition duration-150 ease-in-out">
              <FaGithub size="24" />
            </a>
            <a href="https://permiasuiuc.org" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500 transform hover:scale-110 transition duration-150 ease-in-out">
              <IoLinkSharp size="24" />
            </a>
          </div>
        </div>
        <div className="w-96 bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">akar.study</h3>
          <Image src={akar} width={750} height={750} alt="Akar.study Website image" />
          <p className="text-sm mt-4">A flashcard application that uses space repetition and Anki&apos;s SuperMemo2 algorithm to optimize learning efficiently.</p>
          <div className="text-xs mt-2">
            <strong>Technologies used:</strong> React, Express.js, PostgreSQL, Supabase
          </div>
          <div className="flex justify-between mt-4">
            <a href="https://github.com/hindra2/akar" className="flex items-center hover:text-blue-500 transform hover:scale-110 transition duration-150 ease-in-out">
              <FaGithub size="24" />
            </a>
            <a href="https://akar.study" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500 transform hover:scale-110 transition duration-150 ease-in-out">
              <IoLinkSharp size="24" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <div className="w-96 bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Markets and Equities Analyzer</h3>
          <Image src={marketanalyzer} width={1000} height={1000} alt="Markets and Equities Analyzer image" />
          <p className="text-sm mt-4">Understanding S&P 500 and NVIDIA data through machine learning techniques and technical market indicators.</p>
          <div className="text-xs mt-2">
            <strong>Technologies used:</strong> Python, pandas, scikit-learn, matplotlib
          </div>
          <div className="flex justify-between mt-4">
            <a href="https://github.com/wrjodjana/markets-analyzer" className="flex items-center hover:text-blue-500 transform hover:scale-110 transition duration-150 ease-in-out">
              <FaGithub size="24" />
            </a>
          </div>
        </div>
        <div className="w-96 bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Chicago Environmental Analysis</h3>
          <Image src={chicago} width={750} height={750} alt="Chicago Environmental Analysis image" />
          <p className="text-sm mt-4">Utilising geospatial data science such as kernel density estimations to understand the impact of vehicular emissions on Chicago&apos;s air quality.</p>
          <div className="text-xs mt-2">
            <strong>Technologies used:</strong> R, Rmarkdown
          </div>
          <div className="flex justify-between mt-4">
            <a href="https://github.com/wrjodjana/chicago-analysis" className="flex items-center hover:text-blue-500 transform hover:scale-110 transition duration-150 ease-in-out">
              <FaGithub size="24" />
            </a>
            <a href="https://wrjodjana.github.io/chicago-analysis/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500 transform hover:scale-110 transition duration-150 ease-in-out">
              <IoLinkSharp size="24" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
