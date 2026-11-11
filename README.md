# Thanawat Srisaeng — Resume Webpage 🚀

Modern, responsive, bilingual resume webpage for **Thanawat Srisaeng (Pete)**, Software Engineering Student at Nakhon Pathom Rajabhat University (GPA 3.77).

Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **DaisyUI v5**.

🌐 **GitHub Repository:** [thanawat-resume-webpage](https://github.com/thanawat-pete/thanawat-resume-webpage.git)

---

## ✨ Features

- 🌐 **Bilingual Support (i18n):** Switch smoothly between **Thai (ภาษาไทย)** and **English** with persistent preference in `localStorage`.
- 🌓 **Theme Switching:** Instant toggle between **Light (ขาว)** and **Dark (มืด)** themes powered by DaisyUI semantic colors and system preference detection.
- 📱 **Fully Responsive:** Optimized for mobile phones, tablets, laptops, and ultra-wide displays.
- 🖨️ **Print & PDF Ready:** Dedicated `@media print` stylesheets for generating clean, paper-friendly PDF resumes directly from the browser (`Ctrl+P` or via the top-bar button).
- ⚡ **Modern Tech Stack:** React 19, Vite HMR, Tailwind CSS v4, DaisyUI v5, and Lucide React icons.
- 📋 **1-Click Copy:** Fast clipboard copying for email, phone number, and Line ID with toast feedback.
- 💼 **Internship Readiness Callout:** Clear highlighting of availability (December 2026 – March/April 2027) in Bangkok & Metropolitan Area.

---

## 🛠️ Tech Stack

- **Core:** React 19, Vite 8
- **Styling:** Tailwind CSS v4, DaisyUI v5
- **Typography:** Prompt, Plus Jakarta Sans (Google Fonts)
- **Icons:** Lucide React & Custom SVG
- **Deployment:** Vercel / GitHub Pages / Render ready

---

## 📂 Project Structure

```text
my-resume-webpage/
├── public/
│   ├── profile.png        # Profile photograph
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── icons/
│   │   │   └── GithubIcon.jsx
│   │   ├── About.jsx            # Personal info, soft skills & languages
│   │   ├── Certifications.jsx   # 10 verified Coursera / Google / IBM certs
│   │   ├── ContactSection.jsx   # Contact cards & internship CTA
│   │   ├── Education.jsx        # University & GPA 3.77 honors
│   │   ├── Footer.jsx           # Minimal footer
│   │   ├── Hero.jsx             # Hero banner with avatar & quick links
│   │   ├── Navbar.jsx           # Sticky glassmorphism header & controls
│   │   ├── Projects.jsx         # Featured T-Check capstone project
│   │   └── Skills.jsx           # Technical skills by category
│   ├── context/
│   │   └── AppContext.jsx       # Theme, language & toast provider
│   ├── data/
│   │   └── resumeData.js        # Bilingual resume data source
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 👤 Author

- **Name:** Thanawat Srisaeng (Pete) / นาย ธนวัฒน์ ศรีแสง
- **Role:** Software Engineering Student, Nakhon Pathom Rajabhat University (NPRU)
- **Email:** [thanawadsrisaeng@gmail.com](mailto:thanawadsrisaeng@gmail.com)
- **GitHub:** [@thanawat-pete](https://github.com/thanawat-pete)
- **Line ID:** 0855564028
