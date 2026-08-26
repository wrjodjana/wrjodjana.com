import Link from "next/link";

const links = [
  { href: "/", label: "home" },
  { href: "/blog", label: "blog" },
];

export default function Nav() {
  return (
    <div className="text-right min-w-[100px] leading-none flex-shrink-0 mb-4 md:mb-0">
      {links.map((l) => (
        <Link key={l.href} href={l.href} className="block mb-2 underline text-[18px] leading-none text-[#0000ee]">
          {l.label}
        </Link>
      ))}
    </div>
  );
}
