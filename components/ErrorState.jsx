export default function ErrorState({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center gap-4 py-20 text-center">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#E8483A]">
        Reel jammed
      </div>
      <p className="max-w-sm text-[#F5EFE6]/70">
        {message || "Something broke while fetching movies. Try again."}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-1 rounded-full border border-[#F5EFE6]/30 px-5 py-2 text-sm text-[#F5EFE6] transition hover:border-[#E8483A] hover:text-[#E8483A]"
        >
          Try again
        </button>
      )}
    </div>
  );
}
