import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Code2,
  Layout,
  Database,
  Wrench,
  Bot,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

export default function Skills() {
  const { lang, data } = useApp();
  const { skills } = data;

  const categoryIcons = {
    frontend: Layout,
    backend: Database,
    tools: Wrench,
    ai: Bot,
  };

  return (
    <section id="skills" className="py-14 border-b border-base-200 bg-base-200/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Code2 className="w-3.5 h-3.5" />
            <span>{data.ui.technicalSkills}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-base-content tracking-tight">
            {lang === 'th' ? 'ทักษะทางเทคนิคและความเชี่ยวชาญ' : 'Technical Skills & Proficiencies'}
          </h2>
          <p className="text-sm text-base-content/70">
            {lang === 'th'
              ? 'ภาษาโปรแกรม เครื่องมือ และเทคโนโลยีที่ใช้ในการพัฒนาระบบจริง'
              : 'Programming languages, libraries, databases, and engineering tools.'}
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.categories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Code2;
            return (
              <div
                key={cat.id}
                className="card bg-base-100 border border-base-300 hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 p-6 space-y-4"
              >
                <div className="flex items-center gap-3 border-b border-base-200 pb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-base-content">{cat.name}</h3>
                    <span className="text-xs text-base-content/60">
                      {cat.items.length} {lang === 'th' ? 'รายการ' : 'technologies'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-base-200 text-base-content hover:bg-primary hover:text-primary-content transition-all duration-200 cursor-default shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-content" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Primary Stack Highlight Bar */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary text-primary-content">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-base-content">
                {lang === 'th' ? 'จุดแข็งหลัก (Core Focus): Modern Frontend Stack' : 'Core Focus: Modern Frontend Stack'}
              </div>
              <div className="text-xs text-base-content/70">
                React 19 + Vite + Tailwind CSS + DaisyUI + Zustand + Client-side File Processing
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-primary">
            <span>Ready for Production</span>
            <CheckCircle className="w-4 h-4 text-success" />
          </div>
        </div>
      </div>
    </section>
  );
}

