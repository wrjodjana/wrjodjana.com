import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import { Link as LinkIcon } from "lucide-react";

// images
import TooTak from "../../../public/experience/tootak.png";
import Halodoc from "../../../public/experience/halodoc.jpeg";
import UQGroup from "../../../public/experience/uq-group.png";
import SPED from "../../../public/experience/sped.jpg";
import cs from "../../../public/experience/cs.jpg";
import disruption from "../../../public/experience/disruption.png";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function ExperienceSection() {
  return (
    <div className={`${robotoMono.className} max-w-4xl p-4`}>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-100 mb-4">Experience</h1>
        <div className="w-24 h-1 bg-gray-700 mx-auto rounded-full"></div>
      </div>
      <section className="bg-gray-900 text-gray-300 p-3 rounded-lg mb-4 group relative">
        <div className="flex items-start">
          <div className="mr-4 flex-shrink-0">
            <div className="w-12 h-12 bg-[#13294B] rounded-lg flex items-center justify-center">
              <Image src={cs} alt="CS Logo" width={70} height={70} className="rounded-full" />
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold">Research Intern - UDL Group</h2>
              <a
                href="https://classtranscribe.illinois.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <LinkIcon className="w-3.5 h-3.5 text-gray-300" />
              </a>
            </div>
            <div className="flex items-center text-xs text-gray-500 mt-1 mb-2">
              <FaCalendarAlt className="mr-1" />
              <span>Jan 2025 - Present</span>
              <FaMapMarkerAlt className="ml-3 mr-1" />
              <span>Champaign, Illinois</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-2">
              - Enhanced computer vision models for flash detection to improve
              <br />
              lecture accessibility for epileptic students
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "React", "C#", "RabbitMQ", "PostgreSQL"].map((tech, index) => (
                <span key={index} className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded-full text-[10px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-gray-300 p-3 rounded-lg mb-4 group relative">
        <div className="flex items-start">
          <div className="mr-4 flex-shrink-0">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <Image src={UQGroup} alt="UQ Group Logo" width={40} height={40} />
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold">Research Intern - Uncertainty Quantification Group</h2>
              <a href="https://resilientroutes.app" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <LinkIcon className="w-3.5 h-3.5 text-gray-300" />
              </a>
            </div>
            <div className="flex items-center text-xs text-gray-500 mt-1 mb-2">
              <FaCalendarAlt className="mr-1" />
              <span>May 2024 - Present</span>
              <FaMapMarkerAlt className="ml-3 mr-1" />
              <span>Champaign, Illinois</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-2">
              - Building a webapp to integrate GNNs for seismic reliability
              <br />
              of highway bridge systems for risk managers
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Flask", "PyTorch", "dgl", "NetworkX", " AWS EC2"].map((tech, index) => (
                <span key={index} className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded-full text-[10px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-gray-300 p-3 rounded-lg mb-4">
        <div className="flex items-start">
          <div className="mr-4 flex-shrink-0">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <Image src={disruption} alt="Disruption Lab Logo" width={70} height={70} className="rounded-full" />
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="text-base font-bold mb-1">Software Engineer - Disruption Lab at Gies</h2>
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <FaCalendarAlt className="mr-1" />
              <span>Sep 2024 - Present</span>
              <FaMapMarkerAlt className="ml-3 mr-1" />
              <span>Champaign, Illinois</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-2">
              - Developing private LLMs for accounting classes (ACCY 593)
              <br />
              in the Gies College of Buisness
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "LangChain", "OpenAI API", "Streamlit"].map((tech, index) => (
                <span key={index} className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded-full text-[10px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-gray-300 p-3 rounded-lg mb-4">
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
            <p className="text-xs text-gray-400 mb-2">- Backend engineering for gamified modules</p>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express", "MongoDB", "AWS S3"].map((tech, index) => (
                <span key={index} className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded-full text-[10px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-gray-300 p-3 rounded-lg mb-4 group relative">
        <div className="flex items-start">
          <div className="mr-4 flex-shrink-0">
            <div className="w-12 h-12 bg-[#eb0b4b] rounded-lg flex items-center justify-center">
              <Image src={Halodoc} alt="Halodoc Logo" width={40} height={40} className="rounded-full" />
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold">Data Engineer Intern - Halodoc Technology</h2>
              <a
                href="https://blogs.halodoc.io/tag/data-engineering/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <LinkIcon className="w-3.5 h-3.5 text-gray-300" />
              </a>
            </div>
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <FaCalendarAlt className="mr-1" />
              <span>July 2024 - Aug 2024</span>
              <FaMapMarkerAlt className="ml-3 mr-1" />
              <span>Jakarta, Indonesia</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-2">
              - ETL pipelines for file tracker data and data archiving
              <br />
              for non-partitioned mySQL tables
            </p>
            <div className="flex flex-wrap gap-2">
              {["pandas", "SQL", "Airflow", "AWS Redshift", "PySpark"].map((tech, index) => (
                <span key={index} className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded-full text-[10px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-gray-300 p-3 rounded-lg mb-4">
        <div className="flex items-start">
          <div className="mr-4 flex-shrink-0">
            <div className="w-12 h-12 bg-[#13294B] rounded-lg flex items-center justify-center">
              <Image src={SPED} alt="SPED Logo" width={80} height={80} className="rounded-full" />
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
            <p className="text-xs text-gray-400 leading-relaxed mb-2">
              - Architected text classification models using NLP to analyse
              <br />
              interviews with students with disabilities
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "scikit-learn", "TensorFlow"].map((tech, index) => (
                <span key={index} className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded-full text-[10px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
