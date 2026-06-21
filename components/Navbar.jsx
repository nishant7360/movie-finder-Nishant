export default function Navbar() {
  return (
    <header className="relative border-b border-[#F5EFE6]/10 bg-[#0B0D0F]">
      <div
        className="absolute inset-x-0 top-0 flex justify-between px-4 opacity-40"
        aria-hidden="true"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#F5EFE6]/30"
          />
        ))}
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C9A227]">
            Now Screening
          </span>
        </div>
        <h1 className="font-display text-2xl font-bold uppercase tracking-tight text-[#F5EFE6] sm:text-3xl">
          MovieFinder
        </h1>
      </div>
    </header>
  );
}
