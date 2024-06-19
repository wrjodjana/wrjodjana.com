import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

export default function InformationSection() {
  return (
    <header className="flex flex-col items-center text-left max-w-2xl">
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
        <a href="/resume.pdf" className="text-green-600 text-2xl">
          <FaFileAlt />
        </a>
      </div>
      <p className="mt-4">
        Hi! I&apos;m Warren, a student at the University of Illinois studying Computer Science and Geographic Information Science. I&apos;m mostly interested in full-stack web development, geospatial analysis and data science (AI/ML).
      </p>
      <p className="mt-4">
        On campus, I&apos;m currently a research assistant at the Uncertainty Quantification Group and a backend engineer intern at Tootak. Previously, I did research in the special education department and was a course assistant for the
        largest CS class, CS 124.
      </p>
      <p className="mt-4">I&apos;m currently based in Urbana, Illinois but I&apos;ve lived in Jakarta and Surabaya previously. I am also a huge NBA and VCT fan and also like spicy food.</p>
    </header>
  );
}
