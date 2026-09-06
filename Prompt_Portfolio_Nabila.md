# Prompt & Panduan Pembuatan Website Portofolio Formal

Dokumen ini berisi perintah (prompt) lengkap beserta seluruh struktur kode JavaScript (React.js + Tailwind CSS) untuk membangun website portofolio formal atas nama **Nabila Balqis Aprilia**.

---

## 1. Spesifikasi Proyek

- **Nama Pemilik:** Nabila Balqis Aprilia
- **Gelar / Profesi:** Fresh Graduate S1 Manajemen (IPK: 3.75) | Administrasi & HR
- **Skema Warna:** Cream (`#FDFBF7`), Beige/Light Cream (`#F7F4EE`), Warm Taupe/Gold (`#8C6D46`), Dark Charcoal (`#2C2A29`).
- **Tipografi:** Formal (Font Serif untuk Heading / Title, Sans-Serif untuk Body Text).
- **Kontak:**
  - Email: `nabilabalqisapriliaa@gmail.com`
  - Telepon / WA: `+62 823-1427-4384`
  - Lokasi: `Semarang, Jawa Tengah`

---

## 2. Struktur Folder Proyek

```text
my-portfolio/
├── public/
│   ├── Formal.jpeg
│   ├── CV_Nabila.pdf
│   └── BNSP_Sertifikat.pdf
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Awards.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── Badge.jsx
│   │       ├── Card.jsx
│   │       └── SectionTitle.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── tailwind.config.js
```

---

## 3. Kode Sumber Lengkap (Source Code)

### File: `src/data/portfolio.js`
```javascript
export const personalInfo = {
  name: "Nabila Balqis Aprilia",
  title: "Fresh Graduate S1 Manajemen",
  email: "nabilabalqisapriliaa@gmail.com",
  phone: "+62 823-1427-4384",
  location: "Semarang, Jawa Tengah",
  about: "Fresh graduate S1 Manajemen Universitas Dian Nuswantoro dengan IPK 3,75 dan pengalaman magang sebagai Staff Admin. Berpengalaman dalam pencatatan dan input data, pengelolaan dokumen administrasi, pembuatan surat jalan, serta mendukung kegiatan operasional perusahaan. Memiliki sertifikasi kompetensi Konsultan Pratama Bidang Manajemen Sumber Daya Manusia IKM serta menguasai Microsoft Office dan Google Workspace.",
  education: {
    institution: "Universitas Dian Nuswantoro",
    degree: "Sarjana Manajemen",
    period: "Sept 2022 - Feb 2026",
    gpa: "3.75"
  }
};

export const experiences = [
  {
    role: "Staff Admin",
    company: "PT Posporindo Nusantara",
    period: "Feb 2023 - Mar 2023",
    description: [
      "Melakukan pencatatan dan input data pengeluaran harian untuk mendukung ketertiban administrasi.",
      "Menyiapkan dan membuat surat jalan untuk mendukung proses administrasi sebelum digunakan dalam kegiatan operasional.",
      "Memeriksa kelengkapan dan kesesuaian data serta dokumen administrasi sebelum digunakan dalam kegiatan operasional.",
      "Mendukung kegiatan administrasi harian dan proses pengiriman barang agar berjalan secara tertib dan terdokumentasi."
    ]
  }
];

export const awards = [
  {
    title: "Sertifikasi Kompetensi Konsultan Pratama Bidang MSDM IKM",
    issuer: "LSP Universitas Dian Nuswantoro (BNSP)",
    year: "2025 - 2027"
  },
  {
    title: "TOEFL Prediction Test (Score: 463)",
    issuer: "Center for Foreign Language Training (CFLT) UDINUS",
    year: "2025 - 2027"
  },
  {
    title: "Seminar Persiapan Karier 'Siap Menghadapi Tantangan Kerja'",
    issuer: "UPT Layanan Karir dan Alumni UDINUS",
    year: "2025"
  },
  {
    title: "Campus Day - Jalan Ninja Mahasiswa: Cepat Lulus dan Kerja Pakai AI",
    issuer: "MarkPlus Institute",
    year: "2025"
  }
];

export const skills = {
  hardSkills: ["Administrasi Data & Dokumen", "Data Entry", "Pengelolaan Dokumen MSDM"],
  softSkills: ["Komunikasi", "Kerja Sama Tim", "Manajemen Waktu", "Perhatian terhadap Detail", "Kemampuan Beradaptasi"],
  software: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Google Docs", "Google Sheets", "Google Drive"]
};

export const projects = [
  {
    title: "Sistem Pengelolaan Dokumen Operasional & Administrasi",
    category: "Administrasi & Operasional",
    description: "Pengelolaan pencatatan data pengeluaran harian dan standardisasi dokumen surat jalan untuk ketertiban alur operasional perusahaan.",
    fileUrl: "/CV_Nabila.pdf"
  }
];
```

---

### File: `src/components/layout/Navbar.jsx`
```jsx
import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'AWARDS', href: '#awards' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E8E2D5]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-lg font-serif font-bold tracking-wider text-[#2C2A29]">
          NABILA BALQIS
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-widest text-[#5A554E] hover:text-[#8C6D46] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="bg-[#2C2A29] text-[#FDFBF7] px-5 py-2 rounded-full text-xs font-semibold tracking-wider hover:bg-[#8C6D46] transition-colors"
        >
          Let's Connect
        </a>
      </div>
    </header>
  );
};

export default Navbar;
```

---

### File: `src/components/layout/Footer.jsx`
```jsx
import React from 'react';
import { personalInfo } from '../../data/portfolio';

const Footer = () => {
  return (
    <footer className="bg-[#2C2A29] text-[#E8E2D5] py-8 border-t border-[#4A4643]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs tracking-wider">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex space-x-6 text-xs tracking-wider">
          <a href={`mailto:${personalInfo.email}`} className="hover:text-[#8C6D46] transition-colors">
            {personalInfo.email}
          </a>
          <a href={`tel:${personalInfo.phone}`} className="hover:text-[#8C6D46] transition-colors">
            {personalInfo.phone}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---

### File: `src/components/sections/Hero.jsx`
```jsx
import React from 'react';
import { personalInfo } from '../../data/portfolio';

const Hero = () => {
  return (
    <section id="home" className="bg-[#FDFBF7] py-20 md:py-28 border-b border-[#E8E2D5]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs tracking-widest text-[#8C6D46] uppercase font-bold">
            Portofolio Profesional
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2C2A29] leading-tight">
            Halo, Saya <br />
            <span className="text-[#8C6D46]">{personalInfo.name}</span>
          </h1>
          <p className="text-[#5A554E] text-base leading-relaxed">
            Fresh graduate S1 Manajemen Universitas Dian Nuswantoro (IPK 3,75). Memiliki keahlian di bidang administrasi data, pengelolaan dokumen operasional, serta manajemen sumber daya manusia.
          </p>
          <div className="flex space-x-4 pt-4">
            <a
              href="/CV_Nabila.pdf"
              download
              className="bg-[#8C6D46] text-white px-6 py-3 rounded-lg text-xs font-semibold tracking-wider hover:bg-[#725736] transition shadow-sm"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="border border-[#2C2A29] text-[#2C2A29] px-6 py-3 rounded-lg text-xs font-semibold tracking-wider hover:bg-[#2C2A29] hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-4 border-[#E8E2D5] shadow-md">
            <img
              src="/Formal.jpeg"
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

---

### File: `src/components/sections/About.jsx`
```jsx
import React from 'react';
import { personalInfo } from '../../data/portfolio';

const About = () => {
  return (
    <section id="about" className="bg-[#F7F4EE] py-20 border-b border-[#E8E2D5]">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-serif font-bold text-[#2C2A29]">About Me</h2>
          <div className="w-16 h-0.5 bg-[#8C6D46] mx-auto"></div>
        </div>

        <div className="bg-[#FDFBF7] p-8 md:p-10 rounded-xl shadow-sm border border-[#E8E2D5] space-y-8">
          <p className="text-[#5A554E] leading-relaxed text-base">
            {personalInfo.about}
          </p>

          <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-[#E8E2D5]">
            <div>
              <h3 className="font-serif font-bold text-[#2C2A29] text-lg mb-2">Pendidikan</h3>
              <p className="font-semibold text-[#2C2A29]">{personalInfo.education.institution}</p>
              <p className="text-sm text-[#5A554E]">{personalInfo.education.degree} (IPK: {personalInfo.education.gpa})</p>
              <p className="text-xs text-[#8C8275] mt-1">{personalInfo.education.period}</p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-[#2C2A29] text-lg mb-2">Karasteristik Utama</h3>
              <ul className="text-sm text-[#5A554E] space-y-1 list-disc list-inside">
                <li>Teliti & Detail-Oriented</li>
                <li>Komunikatif & Mampu Bekerja dalam Tim</li>
                <li>Bertanggung Jawab & Cepat Beradaptasi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
```

---

### File: `src/components/sections/Experience.jsx`
```jsx
import React from 'react';
import { experiences } from '../../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="bg-[#FDFBF7] py-20 border-b border-[#E8E2D5]">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-serif font-bold text-[#2C2A29]">Work Experience</h2>
          <div className="w-16 h-0.5 bg-[#8C6D46] mx-auto"></div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-[#F7F4EE] p-8 rounded-xl border border-[#E8E2D5] shadow-sm">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#2C2A29]">{exp.role}</h3>
                  <p className="text-[#8C6D46] font-medium text-sm">{exp.company}</p>
                </div>
                <span className="text-xs font-semibold text-[#8C8275] bg-[#E8E2D5] px-3 py-1 rounded-full mt-2 md:mt-0 w-max">
                  {exp.period}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[#5A554E] text-sm leading-relaxed">
                {exp.description.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
```

---

### File: `src/components/sections/Skills.jsx`
```jsx
import React from 'react';
import { skills } from '../../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="bg-[#F7F4EE] py-20 border-b border-[#E8E2D5]">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-serif font-bold text-[#2C2A29]">Skills & Tools</h2>
          <div className="w-16 h-0.5 bg-[#8C6D46] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E8E2D5]">
            <h3 className="font-serif font-bold text-[#2C2A29] mb-4 text-center">Hard Skills</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.hardSkills.map((s, idx) => (
                <span key={idx} className="bg-[#F7F4EE] text-[#2C2A29] text-xs px-3 py-1.5 rounded-md border border-[#E8E2D5]">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E8E2D5]">
            <h3 className="font-serif font-bold text-[#2C2A29] mb-4 text-center">Soft Skills</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.softSkills.map((s, idx) => (
                <span key={idx} className="bg-[#F7F4EE] text-[#2C2A29] text-xs px-3 py-1.5 rounded-md border border-[#E8E2D5]">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E8E2D5]">
            <h3 className="font-serif font-bold text-[#2C2A29] mb-4 text-center">Software & Tools</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.software.map((s, idx) => (
                <span key={idx} className="bg-[#F7F4EE] text-[#2C2A29] text-xs px-3 py-1.5 rounded-md border border-[#E8E2D5]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
```

---

### File: `src/components/sections/Projects.jsx`
```jsx
import React from 'react';
import { projects } from '../../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="bg-[#FDFBF7] py-20 border-b border-[#E8E2D5]">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-serif font-bold text-[#2C2A29]">Projects</h2>
          <div className="w-16 h-0.5 bg-[#8C6D46] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-[#F7F4EE] p-8 rounded-xl border border-[#E8E2D5] shadow-sm space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#8C6D46] font-semibold">{project.category}</span>
              <h3 className="text-xl font-serif font-bold text-[#2C2A29]">{project.title}</h3>
              <p className="text-[#5A554E] text-sm leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
```

---

### File: `src/components/sections/Awards.jsx`
```jsx
import React from 'react';
import { awards } from '../../data/portfolio';

const Awards = () => {
  return (
    <section id="awards" className="bg-[#F7F4EE] py-20 border-b border-[#E8E2D5]">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-serif font-bold text-[#2C2A29]">Awards & Certifications</h2>
          <div className="w-16 h-0.5 bg-[#8C6D46] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {awards.map((award, idx) => (
            <div key={idx} className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E8E2D5] shadow-sm">
              <span className="text-xs text-[#8C8275] font-medium">{award.year}</span>
              <h3 className="font-serif font-bold text-[#2C2A29] text-base mt-1">{award.title}</h3>
              <p className="text-xs text-[#8C6D46] mt-2 font-medium">{award.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
```

---

### File: `src/components/sections/Contact.jsx`
```jsx
import React from 'react';
import { personalInfo } from '../../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#FDFBF7] py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-serif font-bold text-[#2C2A29]">Contact</h2>
          <p className="text-[#5A554E] text-sm">Mari terhubung untuk peluang kerja dan kolaborasi profesional.</p>
          <div className="w-16 h-0.5 bg-[#8C6D46] mx-auto"></div>
        </div>

        <div className="max-w-md mx-auto bg-[#F7F4EE] p-8 rounded-xl border border-[#E8E2D5] shadow-sm space-y-6 text-center">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#8C8275] font-semibold mb-1">Email</h3>
            <a href={`mailto:${personalInfo.email}`} className="text-base font-medium text-[#2C2A29] hover:text-[#8C6D46] transition-colors">
              {personalInfo.email}
            </a>
          </div>
          <div className="border-t border-[#E8E2D5] pt-4">
            <h3 className="text-xs uppercase tracking-widest text-[#8C8275] font-semibold mb-1">Telepon / WhatsApp</h3>
            <a href={`tel:${personalInfo.phone}`} className="text-base font-medium text-[#2C2A29] hover:text-[#8C6D46] transition-colors">
              {personalInfo.phone}
            </a>
          </div>
          <div className="border-t border-[#E8E2D5] pt-4">
            <h3 className="text-xs uppercase tracking-widest text-[#8C8275] font-semibold mb-1">Lokasi</h3>
            <p className="text-base font-medium text-[#2C2A29]">{personalInfo.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
```

---

### File: `src/App.jsx`
```jsx
import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Awards from './components/sections/Awards';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2A29] font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```
