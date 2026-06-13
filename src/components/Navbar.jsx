import './Navbar.scss';

const PAGES = ['Home', 'About', 'Lifting', 'Contact'];

function SunIcon() {
return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
);
}

function MoonIcon() {
return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);
}

export default function Navbar({ currentPage, onNavigate, theme, onToggleTheme }) {
return (
    <nav className="navbar">
    <div className="navbar__inner">
        <div className="navbar__logo" onClick={() => onNavigate('Home')}>
        D.
        </div>
        <div className="navbar__links">
        {PAGES.map((page) => (
            <button
            key={page}
            className={`navbar__link ${currentPage === page ? 'navbar__link--active' : ''}`}
            onClick={() => onNavigate(page)}
            >
            {page}
            </button>
        ))}
        <div className="navbar__divider" />
        <button className="navbar__theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
        </div>
    </div>
    </nav>
);
}
