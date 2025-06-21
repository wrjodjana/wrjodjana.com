import Link from "next/link";

export default function Projects() {
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
          <h1 className="text-2xl mb-6 mt-0 leading-none font-bold">Projects</h1>
          <p className="leading-none text-lg mb-2"> Most of these projects are incomplete but I had fun building them:</p>

          <ul className="list-disc list-inside leading-none text-lg mb-4 ml-8">
            <li className="mb-2">
              <a href="https://www.resilientroutes.app/" className="text-blue-600 underline">
                resilientroutes
              </a>{" "}
              - a network visualizer that uses GNNs to predict bridge probaiblity failures.
            </li>
            <li className="mb-2">
              <a href="https://apps.apple.com/us/app/explorifyy/id6739402841" className="text-blue-600 underline">
                explorify
              </a>{" "}
              - a mobile application connecting students with campus orgs/events.
            </li>
            <li className="mb-2">
              <a href="https://apps.apple.com/us/app/explorifyy/id6739402841" className="text-blue-600 underline">
                chicago environment analysis
              </a>{" "}
              - a mini-thesis on understanding Chicago&apos;s air quality based on traffic density, trends and EV station accessibility.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
