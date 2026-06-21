export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-4 py-20">
      <div
        className="h-10 w-10 animate-spin rounded-full border-2 border-[#F5EFE6]/20 border-t-[#C9A227]"
        aria-hidden="true"
      />
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#F5EFE6]/50">
        Loading page…
      </p>
    </div>
  );
}
