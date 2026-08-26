import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black text-[18px] leading-none">
      <div className="max-w-[960px] mx-auto p-4 md:p-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-start mt-10 md:mt-20 ml-0 pl-0 md:pl-12">
          <Nav />

          <div className="w-full md:w-[720px] flex-shrink-0 text-black text-[18px]">
            <h1 className="text-[1.5rem] mb-6 mt-0 leading-none font-bold">warren jodjana</h1>

            <p className="mb-4 leading-none">
              i studied cs and stats at illinois. currently working fulltime but focused on building <strong>untitled</strong>, an experimental platform for the shelves agents pick your dev tool from.{" "}
            </p>
            <p className="mb-4 leading-none">
              i first became interested in technology and startups after reading{" "}
              <a href="https://en.wikipedia.org/wiki/Delivering_Happiness" style={{ textDecoration: "underline" }}>
                delivering happiness
              </a>{" "}
              by tony hsieh when i was 13.
            </p>
            <p className="mb-4 leading-none">i am originally from jakarta and surabaya, indonesia. would love to talk more if your in the geo/aeo space!</p>

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
