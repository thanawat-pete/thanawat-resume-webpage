import React from 'react';
import { useApp } from '../context/AppContext';
import {
  User,
  MapPin,
  Calendar,
  Languages,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  Headphones,
  Zap,
  Users,
  FileCode,
  Sparkles,
} from 'lucide-react';

export default function About() {
  const { lang, data } = useApp();
  const { personal, softSkills, languages, internship } = data;

  const softSkillIcons = [
    HeartHandshake, // Communication
    Lightbulb,      // Problem solving
    Headphones,     // Active listening
    Zap,            // Fast learner
    Users,          // Teamwork
    FileCode,       // Documentation
  ];

  return (
    <section id="about" className="py-14 border-b border-base-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <User className="w-3.5 h-3.5" />
            <span>{data.ui.personalInfo}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-base-content tracking-tight">
            {lang === 'th' ? 'ข้อมูลส่วนตัวและความพร้อมในการฝึกงาน' : 'Personal Profile & Internship Readiness'}
          </h2>
          <p className="text-sm text-base-content/70">
            {lang === 'th'
              ? 'ประวัติส่วนบุคคล ทักษะทางอารมณ์และสังคม และความสามารถทางภาษา'
              : 'Background information, interpersonal abilities, and language competencies.'}
          </p>
        </div>

        {/* 2-Column Grid: Left (Personal Info & Internship Target) / Right (Languages & Proficiency) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Personal Info Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="card bg-base-100 border border-base-300 shadow-sm p-6 space-y-5">
              <h3 className="text-lg font-bold text-base-content flex items-center gap-2 border-b border-base-200 pb-3">
                <User className="w-5 h-5 text-primary" />
                <span>{data.ui.personalInfo}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <span className="text-xs text-base-content/60 font-medium">
                    {lang === 'th' ? 'ชื่อ-นามสกุล' : 'Full Name'}
                  </span>
                  <div className="font-semibold text-base-content">{personal.name}</div>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-base-content/60 font-medium">
                    {lang === 'th' ? 'ชื่อเล่น' : 'Nickname'}
                  </span>
                  <div className="font-semibold text-base-content">{personal.nickname}</div>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-base-content/60 font-medium">
                    {lang === 'th' ? 'วันเกิด / อายุ' : 'Date of Birth / Age'}
                  </span>
                  <div className="font-semibold text-base-content">
                    {personal.birthDate} ({personal.age})
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-base-content/60 font-medium">
                    {lang === 'th' ? 'สัญชาติ / ศาสนา / เพศ' : 'Nationality / Religion / Gender'}
                  </span>
                  <div className="font-semibold text-base-content">
                    {personal.nationality} / {personal.religion} / {personal.gender}
                  </div>
                </div>

                <div className="sm:col-span-2 space-y-1">
                  <span className="text-xs text-base-content/60 font-medium">
                    {lang === 'th' ? 'ที่อยู่ตามทะเบียนบ้าน' : 'Permanent Address'}
                  </span>
                  <div className="font-medium text-base-content flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{personal.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Internship Target Highlight Box */}
            <div className="card bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 border border-primary/20 p-6 space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold text-base">
                <Sparkles className="w-5 h-5" />
                <span>{internship.title}</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="badge badge-sm badge-primary mt-0.5 font-bold">
                    {lang === 'th' ? 'ระยะเวลา' : 'Period'}
                  </span>
                  <span className="font-semibold text-base-content">{internship.period}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="badge badge-sm badge-secondary mt-0.5 font-bold">
                    {lang === 'th' ? 'พื้นที่' : 'Area'}
                  </span>
                  <span className="text-base-content">{internship.targetLocation}</span>
                </div>
                <p className="text-xs text-base-content/75 pt-1 leading-relaxed">
                  {internship.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Language Competencies */}
          <div className="lg:col-span-6 space-y-6">
            <div className="card bg-base-100 border border-base-300 shadow-sm p-6 space-y-6">
              <h3 className="text-lg font-bold text-base-content flex items-center gap-2 border-b border-base-200 pb-3">
                <Languages className="w-5 h-5 text-primary" />
                <span>{lang === 'th' ? 'ความสามารถทางภาษา' : 'Language Proficiency'}</span>
              </h3>

              <div className="space-y-6">
                {languages.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-base text-base-content">{item.language}</span>
                      <span className="badge badge-outline badge-sm font-semibold">{item.level}</span>
                    </div>

                    <progress
                      className="progress progress-primary w-full"
                      value={item.percentage}
                      max="100"
                    />

                    <p className="text-xs text-base-content/70 italic">{item.details}</p>

                    {/* Breakdown sub-skills for English */}
                    {item.subSkills && (
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        {item.subSkills.map((sub, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-2.5 rounded-lg bg-base-200/70 border border-base-300/50 flex flex-col justify-between"
                          >
                            <span className="text-xs text-base-content/70 font-medium">
                              {sub.skill}
                            </span>
                            <span className="text-xs font-bold text-primary mt-1">
                              {sub.rating}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold text-base-content">
              {data.ui.softSkills} (Soft Skills)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => {
              const Icon = softSkillIcons[index % softSkillIcons.length];
              return (
                <div
                  key={index}
                  className="card bg-base-100 border border-base-300 hover:border-primary/50 hover:shadow-md transition-all duration-200 p-5 space-y-2 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-base-content group-hover:text-primary transition-colors">
                      {skill.title}
                    </h4>
                    <div className="text-xs text-primary/80 font-medium">
                      {skill.subtitle}
                    </div>
                  </div>
                  <p className="text-xs text-base-content/70 leading-relaxed pt-1">
                    {skill.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
