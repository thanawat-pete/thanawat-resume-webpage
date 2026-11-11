import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Briefcase,
  CheckCircle2,
  FileText,
  Layers,
  Sparkles,
  ExternalLink,
  Code2,
  Globe,
} from 'lucide-react';
import GithubIcon from './icons/GithubIcon';

export default function Projects() {
  const { lang, data } = useApp();
  const { projects } = data;

  return (
    <section id="projects" className="py-14 border-b border-base-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{data.nav.projects}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-base-content tracking-tight">
            {lang === 'th' ? 'โครงงานและผลงานที่โดดเด่น' : 'Featured Projects & Portfolio'}
          </h2>
          <p className="text-sm text-base-content/70">
            {lang === 'th'
              ? 'ผลงานพัฒนาโปรเจกต์จริงที่เน้นการออกแบบสถาปัตยกรรม และการสร้าง UI/UX ที่ตอบโจทย์การใช้งานจริง'
              : 'Real-world software engineering and personal projects showcasing frontend, architecture, and UI/UX skills.'}
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, pIndex) => (
            <div
              key={project.id}
              className="card bg-base-100 border border-base-300 shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              {/* Card Header Strip */}
              <div className="bg-gradient-to-r from-primary/10 via-base-200 to-secondary/10 px-6 py-4 border-b border-base-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary text-primary-content font-bold shadow-sm">
                    {project.id === 'resume-webpage' ? (
                      <Globe className="w-5 h-5" />
                    ) : (
                      <FileText className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-black text-base-content">
                        {project.title}
                      </h3>
                      <span className="badge badge-primary font-bold text-xs">
                        {project.role}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-base-content/70 font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="badge badge-outline text-xs font-medium">
                    {project.type}
                  </span>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-xs btn-neutral gap-1.5 font-semibold"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-xs btn-primary gap-1 font-semibold text-primary-content"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Description */}
                <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements & Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-primary flex items-center gap-1.5">
                    <Layers className="w-4 h-4" />
                    <span>{data.ui.keyHighlights}</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {project.achievements.map((ach, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-base-200/50 hover:bg-base-200 transition-colors text-sm text-base-content/85"
                      >
                        <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2 pt-2 border-t border-base-200">
                  <div className="text-xs font-bold text-base-content/60 uppercase tracking-wider">
                    Technologies & Libraries
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="badge badge-md bg-base-200 border-base-300 font-medium text-xs text-base-content hover:badge-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
