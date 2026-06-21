export default function Pagination({ page, setPage, hasNext, hasPrev }) {
  return (
    <div className="mt-10 flex items-center justify-center gap-6">
      <button
        disabled={!hasPrev}
        onClick={() => setPage(page - 1)}
        className="rounded-full border border-[#F5EFE6]/15 px-5 py-2 text-sm text-[#F5EFE6] transition hover:border-[#C9A227] hover:text-[#C9A227] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#F5EFE6]/15 disabled:hover:text-[#F5EFE6]"
      >
        ← Previous
      </button>

      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#F5EFE6]/60">
        Page {page}
      </span>

      <button
        disabled={!hasNext}
        onClick={() => setPage(page + 1)}
        className="rounded-full border border-[#F5EFE6]/15 px-5 py-2 text-sm text-[#F5EFE6] transition hover:border-[#C9A227] hover:text-[#C9A227] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#F5EFE6]/15 disabled:hover:text-[#F5EFE6]"
      >
        Next →
      </button>
    </div>
  );
}
