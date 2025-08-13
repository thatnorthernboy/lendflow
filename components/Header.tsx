'use client';
import {useState, useEffect} from 'react';
import LocaleSwitcher from './LocaleSwitcher';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors ${scrolled ? 'bg-white/30 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container-max flex items-center justify-between py-3">
        <a href="#" className="text-lg font-bold text-deepblue">LendFlow</a>
        <nav className="flex items-center gap-4 text-sm text-deepblue">
          <a href="#how" className="hover:text-gold transition-colors">How it works</a>
          <a href="#faq" className="hover:text-gold transition-colors">FAQ</a>
          <a href="#donor" className="hover:text-gold transition-colors">Donate</a>
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  );
}
