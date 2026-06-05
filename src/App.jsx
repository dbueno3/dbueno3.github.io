import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LeetcodePlan from './pages/leetcodeplan';
import Lifting from './pages/Lifting';
import './styles/global.scss';

const SECRET_HASH = '#dsa-x9k2';

export default function App() {
  const [page, setPage] = useState('Home');
  const [fadeKey, setFadeKey] = useState(0);
  const [secretMode, setSecretMode] = useState(
    typeof window !== 'undefined' && window.location.hash === SECRET_HASH
  );

  
  useEffect(() => {
    const onHashChange = () => {
      setSecretMode(window.location.hash === SECRET_HASH);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (p) => {
    setPage(p);
    setFadeKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Secret mode: render the tracker by itself, no navbar/footer/glows.
  if (secretMode) {
    return <LeetcodePlan />;
  }

  const renderPage = () => {
    switch (page) {
      case 'Home':    return <Home key={fadeKey} />;
      case 'About':   return <About key={fadeKey} />;
      case 'Contact': return <Contact key={fadeKey} />;
      default:        return <Home key={fadeKey} />;
      case 'Lifting': return <Lifting key={fadeKey} />;
    }
  };

  return (
    <div className="app">
      {/* Ambient background glows */}
      <div className="ambient-glow ambient-glow--top" />
      <div className="ambient-glow ambient-glow--bottom" />

      <Navbar currentPage={page} onNavigate={navigate} />

      <main className="main-content">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}