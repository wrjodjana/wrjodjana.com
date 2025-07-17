import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-['Times_New_Roman'] text-[18px] leading-none">
      <div className="max-w-[800px] mx-auto p-4 md:p-10">
        <div className="flex gap-10 justify-start mt-10 md:mt-20 ml-0 pl-0 md:pl-12">
          {/* Sidebar */}
          <div className="text-right min-w-[100px] leading-none flex-shrink-0">
            <Link href="/" className="block mb-2 underline text-[18px] leading-none text-[#0000ee]">
              Home
            </Link>
            <Link href="/projects" className="block mb-2 underline text-[18px] leading-none text-[#0000ee]">
              Projects
            </Link>
          </div>

          {/* Main Content */}
          <div className="w-[600px] flex-shrink-0 text-black text-[18px]">
            <h1 className="text-[1.5rem] mb-6 mt-0 leading-none font-bold">Warren Jodjana</h1>
            <img src="/profile.jpg" alt="Warren Jodjana" className="max-w-[150px] my-5 block" />

            <p className="mb-4 leading-none">I am currently studying Statistics & Computer Science at UIUC. My interests include software development, machine learning and artificial intelligence.</p>
            <p className="mb-4 leading-none">I am originally from Jakarta and Surabaya, Indonesia. This summer I am interning at ExtraHop in Seattle building an AI agent to create changelog releases.</p>
            <p className="mb-4 leading-none">I also enjoy working at the intersection of technology and environment, specifically within transportation and agriculture.</p>

            <h2 className="text-[18px] font-bold mt-0 mb-1 leading-none">Contacts</h2>
            <div className="mt-1 mb-4">
              <a href="https://www.linkedin.com/in/wrjodjana/" target="_blank" rel="noopener noreferrer" className="block mb-1 leading-none text-blue-600 underline">
                Linkedin
              </a>
              <a href="mailto:jodjanawarren@gmail.com" className="block mb-1 leading-none text-blue-600 underline">
                Email
              </a>
              <a href="https://github.com/wrjodjana" target="_blank" rel="noopener noreferrer" className="block mb-1 leading-none text-blue-600 underline">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
