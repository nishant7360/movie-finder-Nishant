export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for a title…"
        aria-label="Search for a movie title"
        className="w-full rounded-full border border-[#F5EFE6]/15 bg-[#15181B] px-5 py-3 text-[#F5EFE6] placeholder:text-[#F5EFE6]/40 outline-none transition focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
      />
    </div>
  );
}
