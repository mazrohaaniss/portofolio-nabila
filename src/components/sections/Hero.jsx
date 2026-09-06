import React from 'react';
import { personalInfo } from '../../data/portfolio';
import { Download, Mail, Award, GraduationCap, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-[#FDFBF7] py-16 md:py-24 border-b border-[#E8E2D5]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#F7F4EE] border border-[#E8E2D5] px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wider text-[#8C6D46] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#8C6D46] animate-pulse"></span>
            Portofolio Profesional
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#2C2A29] leading-[1.15]">
            Halo, Saya <br />
            <span className="text-[#8C6D46]">{personalInfo.name}</span>
          </h1>

          <p className="text-[#5A554E] text-base md:text-lg leading-relaxed max-w-xl font-normal">
            Fresh graduate <strong>S1 Manajemen</strong> Universitas Dian Nuswantoro dengan <strong>IPK 3,75</strong>. Berpengalaman dalam administrasi data, ketertiban operasional surat jalan, serta tersertifikasi kompetensi <strong>MSDM oleh BNSP</strong>.
          </p>

          {/* Key Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-[#F7F4EE] p-3 rounded-lg border border-[#E8E2D5]">
              <div className="text-xs text-[#8C8275]">Indeks Prestasi Kumulatif</div>
              <div className="text-xl font-serif font-bold text-[#2C2A29]">3.75 / 4.00</div>
            </div>
            <div className="bg-[#F7F4EE] p-3 rounded-lg border border-[#E8E2D5]">
              <div className="text-xs text-[#8C8275]">Sertifikasi BNSP</div>
              <div className="text-sm font-semibold text-[#8C6D46] mt-0.5">MSDM Pratama</div>
            </div>
            <div className="bg-[#F7F4EE] p-3 rounded-lg border border-[#E8E2D5] col-span-2 sm:col-span-1">
              <div className="text-xs text-[#8C8275]">Pengalaman Kerja</div>
              <div className="text-sm font-semibold text-[#2C2A29] mt-0.5">Staff Admin</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/CV_Nabila.pdf"
              download="CV_Nabila_Balqis_Aprilia.pdf"
              className="inline-flex items-center gap-2 bg-[#8C6D46] text-white px-6 py-3.5 rounded-lg text-xs font-semibold tracking-wider hover:bg-[#725736] transition-all shadow-sm hover:shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD CV</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-[#2C2A29] text-[#2C2A29] px-6 py-3.5 rounded-lg text-xs font-semibold tracking-wider hover:bg-[#2C2A29] hover:text-white transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>CONTACT ME</span>
            </a>
          </div>
        </div>

        {/* Right Column: Formal Portrait */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative">
            {/* Background Decorative Accent Frame */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#8C6D46]/20 via-[#E8E2D5] to-[#8C6D46]/10 rounded-2xl -rotate-2 -z-10"></div>
            
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[26rem] rounded-xl overflow-hidden border-4 border-[#FDFBF7] shadow-xl bg-neutral-200">
              <img
                src="/Formal.jpeg"
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Credential Tag */}
            <div className="absolute -bottom-4 -left-4 bg-[#FDFBF7] border border-[#E8E2D5] px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-[#8C6D46]" />
              <div>
                <p className="text-[11px] font-bold text-[#2C2A29] leading-tight">S1 Manajemen</p>
                <p className="text-[10px] text-[#8C8275]">Univ Dian Nuswantoro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
