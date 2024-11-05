import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";

// images
import illinois from "../../../public/education/illinois.jpg";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function EducationSection() {
  return (
    <div className={`${robotoMono.className} max-w-4xl p-4`}>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-100 mb-4">Education</h1>
        <div className="w-24 h-1 bg-gray-700 mx-auto rounded-full"></div>
      </div>
      <section className="bg-gray-900 text-white p-3 rounded-lg mb-0">
        <div className="flex items-start">
          <div className="mr-4 flex-shrink-0">
            <div className="w-12 h-12 bg-[#13294B] rounded-lg flex items-center justify-center">
              <Image src={illinois} alt="UQ Group Logo" width={500} height={500} className="rounded-full" />
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="text-base font-bold mb-1">University of Illinois at Urbana-Champaign</h2>
            <p className="flex items-center text-xs text-white mb-1">Bachelor of Science in Computer Science and Statistics</p>
            <p className="text-xs text-gray-300 leading-relaxed">
              - GPA: 3.93
              <br />
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              - Relevant Coursework: Data Structures, Object Oriented Programming,
              <br />
              Discrete Structures, Linear Algebra, Software Design Lab
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
