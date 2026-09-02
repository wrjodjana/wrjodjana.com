import type { Heading } from "./posts";

export default function Toc({ headings }: { headings: Heading[] }) {
  if (headings.length === 0) return null;
  return (
    <nav className="hidden xl:block flex-shrink-0 self-start sticky top-10 leading-none whitespace-nowrap">
      {headings.map((h) => (
        <a key={h.id} href={`#${h.id}`} className="block mb-2 text-[14px] leading-none text-[#555] hover:underline">
          {h.text}
        </a>
      ))}
    </nav>
  );
}
