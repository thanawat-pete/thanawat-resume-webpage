import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  GraduationCap,
} from 'lucide-react';
import GithubIcon from './icons/GithubIcon';

export default function Hero() {
  const { lang, data, showToast } = useApp();
  const { personal, internship, education } = data;

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} ${data.ui.copySuccess}`);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20 border-b border-base-200">
      {/* Subtle decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Column: Intro & Info */}
          <div className="flex-1 text-center lg:text-left space-y-5">
            {/* Seeking Internship Banner */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-success/15 border border-success/30 text-success font-medium text-xs sm:text-sm shadow-sm animate-pulse">
              <span className="w-2.5 h-2.5 rounded-full bg-success animate-ping" />
              <span className="font-semibold">{internship.status}:</span>
              <span>{internship.period}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-base-content">
                  {personal.name}
                </h1>
                <span className="badge badge-primary badge-outline text-sm font-semibold px-3 py-3">
                  {lang === 'th' ? `ชื่อเล่น: ${personal.nickname}` : `Nickname: ${personal.nickname}`}
                </span>
              </div>
              <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {personal.subtitle}
              </p>
            </div>

            {/* University & GPA badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap text-sm text-base-content/80">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-base-200 border border-base-300 font-medium">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>{education.institution}</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-md bg-warning/15 text-warning font-semibold border border-warning/30">
                <span>GPA {education.gpa}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-base-200 border border-base-300">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>{personal.city}</span>
              </div>
            </div>

            {/* Bio summary */}
            <p className="text-base text-base-content/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personal.bio}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="btn btn-primary btn-md shadow-md hover:shadow-primary/30 transition-all font-semibold gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>{data.ui.contactMe}</span>
              </a>

              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-neutral btn-md gap-2 font-semibold"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={personal.lineUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-md gap-2 font-semibold text-emerald-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Line ID: {personal.line}</span>
              </a>
            </div>

            {/* Quick Contact Chips with 1-Click Copy */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs">
              <button
                type="button"
                onClick={() => copyToClipboard(personal.email, 'Email')}
                className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-base-200 hover:bg-base-300 text-base-content/80 transition-colors cursor-pointer"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>{personal.email}</span>
                <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                type="button"
                onClick={() => copyToClipboard(personal.phone, 'Phone')}
                className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-base-200 hover:bg-base-300 text-base-content/80 transition-colors cursor-pointer"
                title="Click to copy phone"
              >
                <Phone className="w-3.5 h-3.5 text-secondary" />
                <span>{personal.phone}</span>
                <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-base-200 text-base-content/80">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                <span>{personal.birthDate} ({personal.age})</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image Card */}
          <div className="relative flex-shrink-0">
            {/* Gradient border wrap */}
            <div className="relative p-1.5 rounded-3xl bg-gradient-to-tr from-primary via-secondary to-accent shadow-2xl">
              <div className="relative overflow-hidden rounded-[22px] bg-base-100 w-56 sm:w-64 md:w-72 aspect-[3/4]">
                <img
                  src="/profile.png"
                  alt={personal.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Role Badge */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-base-100 border border-base-300 shadow-xl rounded-2xl px-3.5 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <div className="text-left">
                <div className="text-[10px] text-base-content/60 font-semibold uppercase tracking-wider">
                  Specialization
                </div>
                <div className="text-xs font-bold text-base-content">
                  Frontend & React 19
                </div>
              </div>
            </div>

            {/* Floating Honor Badge */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-base-100 border border-base-300 shadow-xl rounded-2xl px-3.5 py-1.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-warning" />
              <div className="text-left">
                <div className="text-[10px] text-base-content/60 font-semibold uppercase tracking-wider">
                  Honors
                </div>
                <div className="text-xs font-bold text-warning">
                  GPA 3.77
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
