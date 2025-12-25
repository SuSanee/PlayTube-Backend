import searchIcon from "../../assets/icons/search_icon.svg";
import logoIcon from "../../assets/icons/logo_icon.svg";
import menuIcon from "../../assets/icons/hamburger_icon.svg";
import plusIcon from "../../assets/icons/plus_icon.svg";

const Header = () => {
  return (
    <header className="h-16 flex items-center justify-between gap-4 px-5 py-3 bg-[#111212] text-white border-b border-neutral-800">
      <div className="flex items-center gap-6 shrink-0">
        <button
          type="button"
          aria-label="Open menu"
        >
          <img src={menuIcon} aria-label="Menu" className="w-10 h-10" />
        </button>
        <div className="flex items-center gap-1">
          <img src={logoIcon} aria-label="logo" className="h-10 w-8" />
          <span className="text-lg font-semibold tracking-tight">PlayTube</span>
        </div>
      </div>

      <div className="flex flex-1 max-w-3xl items-center gap-2">
        <div className="flex flex-1 items-center gap-3 rounded-full bg-neutral-900 border border-neutral-800 px-4 py-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-500"
          />
          <button type="button" aria-label="Search" className="shrink-0">
            <img src={searchIcon} alt="Search" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-6 shrink-0">
        <button
          type="button"
          className="inline-flex rounded-full bg-white text-black px-2 py-1 text-md font-semibold hover:bg-neutral-200"
        >
          <div className="flex gap-1 bg-white items-center">
            <img src={plusIcon} aria-label="Plus" className="w-7 h-7" />
            <span>Create</span>
          </div>
        </button>
        <button
          type="button"
          aria-label="Profile"
          className="h-10 w-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-500"
        />
      </div>
    </header>
  );
};

export default Header;
