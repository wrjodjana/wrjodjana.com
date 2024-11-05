import React from "react";
import InformationSection from "./components/information/page";
import ExperienceSection from "./components/experience/page";
import EducationSection from "./components/education/page";
import ProjectsSection from "./components/projects/page";
import TeachingSection from "./components/teaching/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start p-8 bg-gray-900 text-gray-200 min-h-screen">
      <InformationSection />
      <ExperienceSection />
      <EducationSection />
      <TeachingSection />
      <ProjectsSection />
    </main>
  );
}
