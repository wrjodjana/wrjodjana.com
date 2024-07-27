import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function InformationSection() {
  return (
    <header className={`${robotoMono.className} flex flex-col items-center text-left max-w-2xl`}>
      <h1 className="text-4xl font-bold">Warren Jodjana</h1>
      <div className="flex space-x-4 mt-2">
        <a href="mailto:jodjana2@illinois.edu" className="text-red-600 text-2xl">
          <FaEnvelope />
        </a>
        <a href="https://github.com/wrjodjana" className="text-gray-700 text-2xl">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/wrjodjana" className="text-blue-700 text-2xl">
          <FaLinkedin />
        </a>
      </div>
      <p className="mt-4">
        Hi! I&apos;m Warren, a student at the University of Illinois studying Computer Science with a secondary in Geographic Information Science. I&apos;m mostly interested in full-stack web development, geospatial analysis and data
        science (AI/ML). I&apos;m an incoming data engineering intern at Halodoc.
      </p>
      <p className="mt-4">
        On campus, I&apos;m currently a research assistant at the{" "}
        <a href="https://uq.cee.illinois.edu/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          Uncertainty Quantification Group
        </a>{" "}
        and a backend engineer intern at{" "}
        <a href="https://tootak.org/en/home/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          Tootak
        </a>
        . Previously, I did research in the special education department and was a course assistant for the largest CS class,{" "}
        <a href="https://www.cs124.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          CS 124.
        </a>
      </p>
      <p className="mt-4">
        I&apos;m currently based in Urbana, Illinois but I&apos;ve lived in Jakarta and Surabaya previously. I am also a huge NBA and VCT fan and also like{" "}
        <a href="https://en.wikipedia.org/wiki/Ayam_penyet" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          spicy food.
        </a>
      </p>
    </header>
  );
}
