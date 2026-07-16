export default function SearchBar({ value, onChange }) {
  return (
        <input
        type="text"
        placeholder="Search Faculty..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition-all duration-300 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-600/10 focus:ring-4 focus:ring-blue-500/15 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
        />
  );
}
