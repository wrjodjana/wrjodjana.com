import Link from "next/link";

export default function Home() {
  return (
    <div className="font-['Times_New_Roman'] text-black bg-white max-w-[800px] mx-auto leading-none text-lg p-10 min-h-screen">
      <div className="flex gap-10 justify-start mt-20 ml-0 pl-12">
        <div className="text-right min-w-[100px] leading-none flex-shrink-0">
          <Link href="/" className="block mb-2 text-blue-600 underline text-lg leading-none">
            Home
          </Link>
          <Link href="/projects" className="block mb-2 text-blue-600 underline text-lg leading-none">
            Projects
          </Link>
        </div>

        <div className="w-[600px] flex-shrink-0 text-black text-lg">
          <h1 className="text-2xl mb-6 mt-0 leading-none font-bold">Warren Jodjana</h1>

          <p className="leading-none text-lg mb-4">I am currently studying Statistics & Computer Science at UIUC. My interests include software development, machine learning and geospatial analysis.</p>

          <p className="leading-none text-lg mb-4"> I am originally from Jakarta and Surabaya, Indonesia. This summer I am interning at ExtraHop in Seattle building internal tooling for the security team.</p>

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
  );
}
