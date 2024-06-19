import React from "react";
import ProjectsSection from "./components/Projects/page";
import InformationSection from "./components/Information/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start p-8 bg-white text-gray-900 min-h-screen">
      <InformationSection />
      <ProjectsSection />
    </main>
  );
}
