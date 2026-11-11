import React, { createContext, useContext, useState, useEffect } from 'react';
import { resumeData } from '../data/resumeData';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Language state (default to Thai 'th', can switch to 'en')
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('app_lang') || 'th';
  });

  // Theme state ('light' or 'dark')
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('app_theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Toast notification state
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('app_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('app_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2500);
  };

  const currentData = resumeData[lang] || resumeData.th;

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        theme,
        toggleTheme,
        data: currentData,
        showToast,
      }}
    >
      {children}
      {toastMessage && (
        <div className="toast toast-bottom toast-end z-50">
          <div className="alert alert-success shadow-lg text-sm font-medium">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

