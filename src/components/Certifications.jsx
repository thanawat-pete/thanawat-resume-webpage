import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Award,
  Calendar,
  CheckCircle,
  ExternalLink,
  BookOpen,
  Sparkles,
} from 'lucide-react';

export default function Certifications() {
  const { lang, data } = useApp();
  const { certifications } = data;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: lang === 'th' ? 'ทั้งหมด (10)' : 'All (10)' },
    { id: 'ai', label: lang === 'th' ? 'AI & Prompt' : 'AI & Prompt' },
    { id: 'software', label: lang === 'th' ? 'Software & Web' : 'Software & Web' },
    { id: 'cloud-data', label: lang === 'th' ? 'Cloud & Data' : 'Cloud & Data' },
  ];

  const filteredCerts = certifications.filter((cert) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'ai')
      return (
        cert.category.includes('AI') ||
        cert.category.includes('Prompt') ||
        cert.category.includes('Intelligence')
      );
    if (selectedCategory === 'software')
      return (
        cert.category.includes('Software') ||
        cert.category.includes('Web') ||
        cert.category.includes('Programming') ||
        cert.category.includes('Cybersecurity')
      );
    if (selectedCategory === 'cloud-data')
      return cert.category.includes('Cloud') || cert.category.includes('Data');
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
            {lang === 'th' ? 'การอบรมและใบรับรองความรู้' : 'Training & Certifications'}
          </h2>
          <p className="text-sm text-base-content/70">
            {lang === 'th'
              ? 'การพัฒนาความรู้และทักษะอย่างต่อเนื่องจากสถาบันและแพลตฟอร์มระดับสากล'
              : 'Continuous professional learning from leading global universities and institutions.'}
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
          {filteredCerts.map((cert, index) => (
            <div
              key={index}
              className="card bg-base-100 border border-base-300 hover:border-primary/40 hover:shadow-md transition-all duration-200 p-5 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="badge badge-sm badge-outline text-[11px] font-semibold text-primary">
                    {cert.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-base-content/60 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <h4 className="font-bold text-base text-base-content leading-snug">
                  {cert.name}
                </h4>
              </div>

              <div className="pt-2 border-t border-base-200 flex items-center justify-between text-xs text-base-content/70">
                <span className="font-medium text-base-content/85">{cert.issuer}</span>
                <span className="flex items-center gap-1 text-success font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
