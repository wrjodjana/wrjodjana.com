import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-white text-black text-[18px] leading-none">
      <div className="max-w-[800px] mx-auto p-4 md:p-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-start mt-10 md:mt-20 ml-0 pl-0 md:pl-12">
          {/* Sidebar */}
          <div className="text-right min-w-[100px] leading-none flex-shrink-0 mb-4 md:mb-0">
            <Link href="/" className="block mb-2 text-[#0000ee] underline text-[18px] leading-none">
              home
            </Link>
            <Link href="/projects" className="block mb-2 text-[#0000ee] underline text-[18px] leading-none">
              projects
            </Link>
          </div>

          <div className="w-full md:w-[600px] flex-shrink-0 text-black text-[18px]">
            <h1 className="text-[1.5rem] mb-6 mt-0 leading-none font-bold">projects</h1>
            <p className="leading-none text-[18px] mb-2"> most of these projects are incomplete but I had fun building them:</p>

            <ul className="list-disc list-inside leading-none text-[18px] mb-4 ml-8">
              <li className="mb-2">
                <a href="https://www.resilientroutes.app/" className="text-[#0000ee] underline">
                  resilientroutes
                </a>{" "}
                — made me like web dev but neural networks is hard
              </li>
              <li className="mb-2">
                <a href="https://apps.apple.com/us/app/explorifyy/id6739402841" className="text-[#0000ee] underline">
                  explorify
                </a>{" "}
                — made me hate react native and mobile dev
              </li>
              <li className="mb-2">
                <a href="https://wrjodjana.github.io/chicago-analysis/" className="text-[#0000ee] underline">
                  chicago environment analysis
                </a>{" "}
                — made me appreciate the earth more
              </li>
              <li className="mb-2">
                <a href="https://github.com/wrjodjana/hazard-map" className="text-[#0000ee] underline">
                  hazard map
                </a>{" "}
                — was building this until i got my internship in june
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
