import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";

// images
import TooTak from "../../../public/experience/tootak.png";
import Halodoc from "../../../public/experience/halodoc.jpeg";
import UQGroup from "../../../public/experience/uq-group.png";
import SPED from "../../../public/experience/sped.jpg";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function ExperienceSection() {
  return (
    <div className={`${robotoMono.className} max-w-4xl p-4`}>
      <h1 className="text-2xl font-bold text-gray-100 mb-4">Experience</h1>
      <section className="bg-gray-900 text-gray-300 p-3 rounded-lg mb-0">
        <div className="flex items-start">
          <div className="mr-4 flex-shrink-0">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <Image src={TooTak} alt="TooTak Logo" width={40} height={40} className="rounded-full" />
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="text-base font-bold mb-1">Software Engineer Intern - TooTak</h2>
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <FaCalendarAlt className="mr-1" />
              <span>May 2024 - July 2024</span>
              <FaMapMarkerAlt className="ml-3 mr-1" />
              <span>Champaign, Illinois</span>
            </div>
            <p className="text-xs text-gray-400">- Backend engineering for gamified modules</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-gray-300 p-3 rounded-lg mb-0">
        <div className="flex items-start">
          <div className="mr-4 flex-shrink-0">
            <div className="w-12 h-12 bg-[#eb0b4b] rounded-lg flex items-center justify-center">
              <Image src={Halodoc} alt="Halodoc Logo" width={40} height={40} className="rounded-full" />
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="text-base font-bold mb-1">Data Engineer Intern - Halodoc Technology</h2>
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <FaCalendarAlt className="mr-1" />
              <span>July 2024 - Aug 2024</span>
              <FaMapMarkerAlt className="ml-3 mr-1" />
              <span>Jakarta, Indonesia</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              - ETL pipelines for file tracker data and data archiving
              <br />
              for non-partitioned mySQL tables
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-gray-300 p-3 rounded-lg mb-0">
        <div className="flex items-start">
          <div className="mr-4 flex-shrink-0">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <Image src={UQGroup} alt="UQ Group Logo" width={40} height={40} />
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="text-base font-bold mb-1">Research Intern - Uncertainty Quantification Group</h2>
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <FaCalendarAlt className="mr-1" />
              <span>May 2024 - Present</span>
              <FaMapMarkerAlt className="ml-3 mr-1" />
              <span>Champaign, Illinois</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              - Building a web application to integrate GNNs to determine
              <br />
              seismic reliability of bridge failures
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-gray-300 p-3 rounded-lg mb-0">
        <div className="flex items-start">
          <div className="mr-4 flex-shrink-0">
            <div className="w-12 h-12 bg-[#13294B] rounded-lg flex items-center justify-center">
              <Image src={SPED} alt="SPED Logo" width={40} height={40} className="rounded-full" />
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="text-base font-bold mb-1">Research Intern - Department of Special Education</h2>
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <FaCalendarAlt className="mr-1" />
              <span>Jan 2024 - May 2024</span>
              <FaMapMarkerAlt className="ml-3 mr-1" />
              <span>Champaign, Illinois</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              - Architected text classification models using NLP to analyse
              <br />
              interviews with students with disabilities
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
