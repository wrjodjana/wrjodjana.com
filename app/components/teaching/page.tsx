import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from "react-icons/fa";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import { Link as LinkIcon } from "lucide-react";

import cs124 from "../../../public/experience/cs.jpg";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const teachingPositions = [
  {
    role: "Coure Assistant - CS 124 (Intro to Computer Science I)",
    course: "CS 124",
    dates: "Jan 2024 - May 2024",
    location: "Champaign, Illinois",
    description: ["Taught basic object-oriented principles and supported", "debugging with Android Studio"],
    image: cs124,
    link: "https://cs124.cs.illinois.edu/",
  },
];

export default function TeachingSection() {
  return (
    <div className={`${robotoMono.className} max-w-4xl p-4`}>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-100 mb-4">Teaching</h1>
        <div className="w-24 h-1 bg-gray-700 mx-auto rounded-full"></div>
      </div>

      {teachingPositions.map((position, index) => (
        <section key={index} className="bg-gray-900 text-gray-300 p-3 rounded-lg mb-4 group relative">
          <div className="flex items-start">
            <div className="mr-4 flex-shrink-0">
              <div className="w-12 h-12 bg-[#13294B] rounded-lg flex items-center justify-center">
                <Image src={position.image} alt={`${position.course} Logo`} width={70} height={70} className="rounded-full" />
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold">{position.role}</h2>
                {position.link && (
                  <a href={position.link} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <LinkIcon className="w-3.5 h-3.5 text-gray-300" />
                  </a>
                )}
              </div>
              <div className="flex items-center text-xs text-gray-500 mt-1 mb-2">
                <FaCalendarAlt className="mr-1" />
                <span>{position.dates}</span>
                <FaMapMarkerAlt className="ml-3 mr-1" />
                <span>{position.location}</span>
              </div>
              <div className="text-xs text-gray-400">
                <p className="leading-relaxed">- Taught basic object-oriented principles in Java and supported</p>
                <p className="leading-relaxed ml-2">debugging with Android Studio</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
