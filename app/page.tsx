import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black text-[18px] leading-none">
      <div className="max-w-[800px] mx-auto p-4 md:p-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-start mt-10 md:mt-20 ml-0 pl-0 md:pl-12">
          <div className="text-right min-w-[100px] leading-none flex-shrink-0 mb-4 md:mb-0">
            <Link href="/" className="block mb-2 underline text-[18px] leading-none text-[#0000ee]">
              home
            </Link>
            <Link href="/projects" className="block mb-2 underline text-[18px] leading-none text-[#0000ee]">
              projects
            </Link>
          </div>

          <div className="w-full md:w-[600px] flex-shrink-0 text-black text-[18px]">
            <h1 className="text-[1.5rem] mb-6 mt-0 leading-none font-bold">warren jodjana</h1>
            <img src="/profile.jpg" alt="Warren Jodjana" className="max-w-[150px] my-5 block" />

            <p className="mb-4 leading-none">i am currently studying stats and cs at uiuc. my interests include software development, mle and ai.</p>
            <p className="mb-4 leading-none">i am originally from jakarta and surabaya, indonesia. this summer i am interning at extrahop networks in seattle building an ai agent to generate detector changelogs.</p>
            <p className="mb-4 leading-none">i also enjoy working at the intersection of technology and environment, specifically within transportation and agriculture.</p>

            <h2 className="text-[18px] font-bold mt-0 mb-1 leading-none">contacts</h2>
            <div className="mt-1 mb-4">
              <a href="https://www.linkedin.com/in/wrjodjana/" target="_blank" rel="noopener noreferrer" className="block mb-1 leading-none text-[#0000ee] underline">
                linkedin
              </a>
              <a href="mailto:jodjanawarren@gmail.com" className="block mb-1 leading-none text-[#0000ee] underline">
                email
              </a>
              <a href="https://github.com/wrjodjana" target="_blank" rel="noopener noreferrer" className="block mb-1 leading-none text-[#0000ee] underline">
                github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
