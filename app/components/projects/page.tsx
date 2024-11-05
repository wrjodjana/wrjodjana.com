import React from "react";
import { Roboto_Mono } from "next/font/google";
import { Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

import stocks from "../../../public/projects/stocks.png";
import permias from "../../../public/permiasuiuc.png";
import chicago from "../../../public/chicago.png";
import akar from "../../../public/akar.png";

const projects = [
  {
    title: "US Equities and Market Analyzer",
    description: "Developed a module to analyse US stocks using technical indicators (VWAP, SMA, EMA) and machine learning algorithms such as multi-layer perceptrons, SVM, RSI and AROON",
    imageUrl: stocks,
    githubUrl: "https://github.com/wrjodjana/markets-analyzer",
    liveUrl: null,
    tags: ["Python", "pandas", "Numpy", "scikit-learn"],
  },
  {
    title: "Permias UIUC Website",
    description: "Established a dynamic website for the Indonesian Association at UIUC, serving over 300 students, resulting in 50% increase in event engagement and 25+ new member sign-ups",
    imageUrl: permias,
    githubUrl: "https://github.com/jbw9/PermiasWebsite",
    liveUrl: "https://www.permiasuiuc.org",
    tags: ["React", "Tailwind", "TypeScript", "Supabase"],
  },
  {
    title: "Chicago Environmental Analysis",
    description: "Using R, performed geospatial operations such as Kernel Density Estimation and Proximity Analysis, to assesstraffic density, air quality trends and accessibility of EV Stations, thereby aiding in urban development",
    imageUrl: chicago,
    githubUrl: "https://github.com/wrjodjana/chicago-analysis",
    liveUrl: "https://wrjodjana.github.io/chicago-analysis/",
    tags: ["R", "Rmd"],
  },
  {
    title: "akar",
    description:
      "Developed a flashcard webapp using space repetition and the SuperMemo2 algorithm, increasing user retention by 85.2%. Worked in an agile environment using React and Express to set up the user interface and flashcard system",
    imageUrl: akar,
    githubUrl: "https://github.com/hindra2/akar",
    liveUrl: "https://akar.study/#/landing",
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL"],
  },
];

export default function ProjectsSection() {
  return (
    <div className={`${robotoMono.className} max-w-6xl mx-auto p-4`}>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-100 mb-4">Projects</h1>
        <div className="w-24 h-1 bg-gray-700 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <section key={index} className="bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="relative h-72">
              <Image src={project.imageUrl} alt={project.title} fill className="object-cover object-top" priority={index === 0} />
              {(project.githubUrl || project.liveUrl) && (
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-300">
                        <Github className="w-6 h-6 text-gray-100" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-300">
                        <LinkIcon className="w-6 h-6 text-gray-100" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="p-5">
              <h2 className="text-lg font-bold text-gray-100 mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
