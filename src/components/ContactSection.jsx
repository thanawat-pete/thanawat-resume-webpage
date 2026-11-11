import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  Send,
  Sparkles,
} from 'lucide-react';
import GithubIcon from './icons/GithubIcon';

export default function ContactSection() {
  const { lang, data, showToast } = useApp();
  const { personal, internship, ui } = data;
  const [copiedKey, setCopiedKey] = useState(null);

  const copyValue = (key, text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    showToast(`${label} ${ui.copySuccess}`);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const contactItems = [
    {
      key: 'email',
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      copyText: personal.email,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      key: 'phone',
      icon: Phone,
      label: lang === 'th' ? 'โทรศัพท์' : 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/[^0-9]/g, '')}`,
      copyText: personal.phone,
      color: 'text-secondary',
      bg: 'bg-secondary/10',
    },
    {
      key: 'line',
      icon: MessageCircle,
      label: 'Line ID',
      value: personal.line,
      href: personal.lineUrl,
      copyText: personal.line,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
    },
    {
      key: 'github',
      icon: GithubIcon,
      label: 'GitHub Profile',
      value: `@${personal.github}`,
      href: personal.githubUrl,
      copyText: personal.githubUrl,
      color: 'text-base-content',
      bg: 'bg-base-200',
    },
  ];

  return (
    <section id="contact" className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Call to action card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-indigo-600 to-secondary p-8 sm:p-12 text-white shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{internship.status}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {ui.seekingTitle}
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {internship.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="btn bg-white text-slate-900 hover:bg-slate-100 border-none font-bold gap-2 shadow-lg"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>{ui.sendEmail}</span>
              </a>

              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-slate-900 font-semibold gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Decorative shapes */}
          <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const isCopied = copiedKey === item.key;
            return (
              <div
                key={item.key}
                className="card bg-base-100 border border-base-300 hover:border-primary/50 shadow-sm p-5 space-y-3 flex flex-col justify-between group transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <button
                    type="button"
                    onClick={() => copyValue(item.key, item.copyText, item.label)}
                    className="btn btn-ghost btn-circle btn-xs text-base-content/60 hover:text-primary"
                    title={`Copy ${item.label}`}
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-success" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div>
                  <div className="text-xs text-base-content/60 font-medium">
                    {item.label}
                  </div>
                  <div className="text-sm font-bold text-base-content truncate mt-0.5">
                    {item.value}
                  </div>
                </div>

                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 pt-1"
                >
                  <span>{lang === 'th' ? 'เปิดใช้งาน' : 'Connect'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
