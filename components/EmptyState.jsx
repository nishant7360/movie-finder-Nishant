export default function EmptyState({ query }) {
  return (
    <div className="flex flex-col items-center gap-3 py-20 text-center">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#C9A227]">
        No screening found
      </div>
      <p className="max-w-sm text-[#F5EFE6]/70">
        {query
          ? `Nothing matches "${query}". Try a different title or check the spelling.`
          : "Search for a title to start browsing."}
      </p>
    </div>
  );
}
