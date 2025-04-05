import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import headerLogo from '../images/Better Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom h-16 flex items-center justify-between">
        {/* Desktop Left Links */}
        <div className="hidden sm:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('functionality')}
            className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
          >
            Functionality
          </button>
          <button
            onClick={() => scrollToSection('download')}
            className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
          >
            Download
          </button>
        </div>
        
        {/* Logo */}
        <div className="flex items-center">
          <img className="header-logo h-16" src={headerLogo} alt="Header Logo" />
        </div>

        {/* Desktop Right Links */}
        <div className="hidden sm:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('installation')}
            className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
          >
            Installation
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
          >
            Team
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
