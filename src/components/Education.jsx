import React from 'react';
import { useApp } from '../context/AppContext';
import {
  GraduationCap,
  Award,
  Calendar,
  Building,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function Education() {
  const { lang, data } = useApp();
  const { education } = data;

  return (
    <section id="education" className="py-14 border-b border-base-200 bg-base-200/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{data.nav.education}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-base-content tracking-tight">
            {lang === 'th' ? 'ประวัติการศึกษา' : 'Academic Background'}
          </h2>
          <p className="text-sm text-base-content/70">
            {lang === 'th'
              ? 'การศึกษาระดับอุดมศึกษาและผลการเรียนทางวิชาการ'
              : 'Higher education credentials and academic excellence.'}
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-3xl mx-auto">
          <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-base-200 pb-5">
              <div className="space-y-1.5">
                <span className="badge badge-primary font-bold text-xs">
                  {education.status}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-base-content">
                  {education.institution}
                </h3>
                <p className="text-sm text-base-content/80 font-medium flex items-center gap-2">
                  <Building className="w-4 h-4 text-primary" />
                  <span>{education.faculty}</span>
                </p>
              </div>

              {/* GPA Highlight Badge */}
              <div className="flex-shrink-0 flex sm:flex-col items-center justify-center p-3 rounded-2xl bg-warning/10 border border-warning/30 text-center gap-1.5 sm:gap-0">
                <span className="text-[11px] font-bold text-warning uppercase tracking-wider">
                  {education.gpaLabel}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-warning">
                  {education.gpa}
                </span>
              </div>
            </div>

            {/* Degree & Highlights */}
            <div className="space-y-4">
              <div className="text-base font-semibold text-base-content">
                {education.degree}
              </div>

              <div className="space-y-2.5">
                {education.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-base-content/80">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

