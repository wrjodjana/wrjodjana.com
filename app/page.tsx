import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white text-black font-['Times_New_Roman'] text-lg">
      <div className="max-w-[800px] mx-auto p-4 md:p-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-start mt-10 md:mt-20 ml-0 pl-0 md:pl-12">
          <div className="text-right min-w-[100px] leading-none flex-shrink-0 mb-4 md:mb-0">
            <Link href="/" className="block mb-2 text-blue-600 underline text-lg leading-none">
              Home
            </Link>
            <Link href="/projects" className="block mb-2 text-blue-600 underline text-lg leading-none">
              Projects
            </Link>
          </div>

          <div className="w-full md:w-[600px] flex-shrink-0 text-black text-lg">
            <h1 className="text-2xl mb-6 mt-0 leading-none font-bold">Warren Jodjana</h1>

            <p className="leading-none text-lg mb-4">I am currently studying Statistics & Computer Science at UIUC. My interests include software development, machine learning and geospatial analysis.</p>

            <p className="leading-none text-lg mb-4"> I am originally from Jakarta and Surabaya, Indonesia. This summer I am interning at ExtraHop in Seattle building an in-house tool to create changelog releases.</p>

            <p className="leading-none text-lg mb-4">I also do research using GNNs to understand transport networks such as bridges and traffic flow, and CNNs to predict crop yields for soybean analysis.</p>

            <h2 className="text-lg font-bold mb-1 leading-none">Contacts</h2>
            <div className="mt-1">
              <a href="https://www.linkedin.com/in/wrjodjana/" target="_blank" className="block mb-1 leading-none text-blue-600 underline">
                Linkedin
              </a>
              <a href="mailto:jodjanawarren@gmail.com" className="block mb-1 leading-none text-blue-600 underline">
                Email
              </a>
              <a href="https://github.com/wrjodjana" target="_blank" className="block mb-1 leading-none text-blue-600 underline">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
