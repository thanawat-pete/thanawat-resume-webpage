import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Award,
  Calendar,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export default function Certifications() {
  const { lang, data } = useApp();
  const { certifications } = data;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: lang === 'th' ? 'ทั้งหมด (14)' : 'All (14)' },
    { id: 'ai', label: lang === 'th' ? 'AI & Prompt' : 'AI & Prompt' },
    { id: 'uiux', label: lang === 'th' ? 'UI/UX & Design' : 'UI/UX & Design' },
    { id: 'software', label: lang === 'th' ? 'Software & Web' : 'Software & Web' },
    { id: 'cloud', label: lang === 'th' ? 'Cloud & Data' : 'Cloud & Data' },
  ];

  const filteredCerts = certifications.filter((cert) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'ai') {
      return (
        cert.category.includes('AI') ||
        cert.category.includes('Prompt') ||
        cert.category.includes('Intelligence')
      );
    }
    if (selectedCategory === 'uiux') {
      return cert.category.includes('UI/UX') || cert.category.includes('Design');
    }
    if (selectedCategory === 'software') {
      return (
        cert.category.includes('Software') ||
        cert.category.includes('Cybersecurity')
      );
    }
    if (selectedCategory === 'cloud') {
      return cert.category.includes('Cloud') || cert.category.includes('Data');
    }
    return true;
  });

  return (
    <section id="certifications" className="py-14 border-b border-base-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>{data.nav.certifications}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-base-content tracking-tight">
            {lang === 'th' ? 'การอบรมและใบรับรองความรู้ (14 รายการ)' : 'Training & Certifications (14 Credentials)'}
          </h2>
          <p className="text-sm text-base-content/70">
            {lang === 'th'
              ? 'ใบรับรองความรู้จริงจาก Google, IBM, Meta, Vanderbilt, Scrimba, Xbox และ Cloud Ace สามารถตรวจสอบได้'
              : 'Verified credentials from Google, IBM, Meta, Vanderbilt, Scrimba, Xbox, and Cloud Ace.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`btn btn-sm rounded-lg transition-all ${
                selectedCategory === cat.id
                  ? 'btn-primary text-primary-content shadow-sm'
                  : 'btn-ghost text-base-content/70 hover:bg-base-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="card bg-base-100 border border-base-300 hover:border-primary/50 hover:shadow-md transition-all duration-200 p-5 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <span className="badge badge-sm badge-primary badge-outline text-[11px] font-semibold">
                      {cert.category}
                    </span>
                    <span className="badge badge-sm badge-ghost text-[10px] text-base-content/60">
                      {cert.platform}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-base-content/60 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <h4 className="font-bold text-base text-base-content leading-snug">
                  {cert.name}
                </h4>
              </div>

              <div className="pt-3 border-t border-base-200 flex items-center justify-between text-xs text-base-content/70">
                <span className="font-semibold text-base-content/90">
                  {cert.issuer}
                </span>

                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline hover:text-primary-focus transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-success" />
                    <span>{data.ui.verifyCredential}</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-success font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
