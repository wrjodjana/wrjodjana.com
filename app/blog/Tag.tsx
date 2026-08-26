export default function Tag({ children }: { children: string }) {
  return (
    <span className="inline-block border border-[#ccc] text-[#555] rounded-sm px-1.5 py-[2px] text-[12px] leading-none align-middle">
      {children}
    </span>
  );
}
