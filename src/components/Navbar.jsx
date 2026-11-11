import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Sun,
  Moon,
  Globe,
  Printer,
  Menu,
  X,
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Mail,
  User,
} from 'lucide-react';

export default function Navbar() {
  const { lang, setLang, theme, toggleTheme, data, showToast } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const navLinks = [
    { href: '#about', label: data.nav.about, icon: User },
    { href: '#skills', label: data.nav.skills, icon: Code2 },
    { href: '#projects', label: data.nav.projects, icon: Briefcase },
    { href: '#education', label: data.nav.education, icon: GraduationCap },
    { href: '#certifications', label: data.nav.certifications, icon: Award },
    { href: '#contact', label: data.nav.contact, icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-base-200/80 bg-base-100/85 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/profile.png"
              alt="Thanawat Srisaeng"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/40 group-hover:ring-primary transition-all duration-300"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full ring-2 ring-base-100" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight group-hover:text-primary transition-colors">
              {lang === 'th' ? 'ธนวัฒน์ ศรีแสง' : 'Thanawat S.'}
            </span>
            <span className="text-xs text-base-content/60 font-medium">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-base-content/75 hover:text-primary hover:bg-base-200/60 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Theme, Language, Print */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="join border border-base-300 rounded-lg p-0.5 bg-base-200/50">
            <button
              type="button"
              onClick={() => setLang('th')}
              className={`join-item btn btn-xs border-none font-semibold ${
                lang === 'th'
                  ? 'btn-primary text-primary-content shadow-sm'
                  : 'bg-transparent text-base-content/70 hover:text-base-content'
              }`}
              title="ภาษาไทย"
            >
              TH
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`join-item btn btn-xs border-none font-semibold ${
                lang === 'en'
                  ? 'btn-primary text-primary-content shadow-sm'
                  : 'bg-transparent text-base-content/70 hover:text-base-content'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle btn-sm text-base-content/80 hover:text-primary"
            aria-label="Toggle theme"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4 text-warning" />
            )}
          </button>

          {/* Print / Save PDF Button */}
          <button
            type="button"
            onClick={handlePrint}
            className="hidden sm:inline-flex btn btn-outline btn-sm gap-1.5 text-xs font-semibold rounded-lg hover:btn-primary"
            title={data.nav.downloadPdf}
          >
            <Printer className="w-3.5 h-3.5" />
            <span>PDF</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden btn btn-ghost btn-circle btn-sm text-base-content"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-base-200 bg-base-100/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-1 animate-fadeIn">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-base-content/80 hover:text-primary hover:bg-base-200 transition-colors"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span>{item.label}</span>
              </a>
            );
          })}
          <div className="pt-2 border-t border-base-200 flex justify-between items-center px-1">
            <button
              type="button"
              onClick={handlePrint}
              className="btn btn-outline btn-sm w-full gap-2 text-xs"
            >
              <Printer className="w-4 h-4" />
              <span>{data.nav.downloadPdf}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

