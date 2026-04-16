export function SiteHeader() {
  return (
    <header className="bg-surface-container-lowest/95 text-on-surface backdrop-blur-md border-b border-outline-variant/40 shadow-sm shadow-emerald-900/5 docked full-width top-0 sticky z-50">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-serif font-black text-on-surface tracking-tight">
          TAXsafar
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            className="text-on-surface border-b-2 border-primary pb-1 font-sans text-sm tracking-wide"
            href="#"
          >
            Home
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface transition-colors font-sans text-sm tracking-wide"
            href="#"
          >
            Services
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface transition-colors font-sans text-sm tracking-wide"
            href="#"
          >
            About us
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface transition-colors font-sans text-sm tracking-wide"
            href="#"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="cursor-pointer text-on-surface-variant font-medium text-sm hover:opacity-80 transition-all">
            Partner Login
          </button>
          <button className="cursor-pointer bg-primary hover:bg-primary-container text-on-primary px-6 py-2.5 rounded-lg text-sm font-semibold transition-all active:scale-95">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}

