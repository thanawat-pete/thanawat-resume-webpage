import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowUp, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const { lang, data } = useApp();
  const { personal, ui } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-base-200 bg-base-200/40 py-8 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-base-content/70">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span className="font-semibold text-base-content">
            {personal.name}
          </span>
          <span className="hidden sm:inline">•</span>
          <span>
            © {new Date().getFullYear()} {ui.allRights}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span>Built with React 19, Tailwind CSS & DaisyUI</span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="btn btn-ghost btn-sm btn-circle text-base-content/80 hover:text-primary"
          title="Back to top"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
