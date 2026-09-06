import React from 'react';
import { personalInfo } from '../../data/portfolio';
import { GraduationCap, Award, CheckCircle2, Building2, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-[#F7F4EE] py-20 border-b border-[#E8E2D5]">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#8C6D46] font-bold">
            Tentang Saya
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2A29]">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-[#8C6D46] mx-auto mt-2"></div>
        </div>

        <div className="bg-[#FDFBF7] p-8 md:p-12 rounded-2xl shadow-sm border border-[#E8E2D5] space-y-10">
          <div className="max-w-4xl space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2C2A29]">
              Profil Singkat & Komitmen Profesional
            </h3>
            <p className="text-[#5A554E] leading-relaxed text-base sm:text-lg">
              {personalInfo.about}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-[#E8E2D5]">
            {/* Pendidikan */}
            <div className="bg-[#F7F4EE] p-6 rounded-xl border border-[#E8E2D5] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#8C6D46]/10 flex items-center justify-center text-[#8C6D46]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#2C2A29] text-lg">Pendidikan Terakhir</h4>
                  <p className="text-xs text-[#8C8275]">Riwayat Akademik Resmi</p>
                </div>
              </div>

              <div className="space-y-1.5 pl-1">
                <p className="font-bold text-[#2C2A29] text-base">
                  {personalInfo.education.institution}
                </p>
                <div className="inline-block bg-[#E8E2D5] text-[#2C2A29] text-xs font-semibold px-2.5 py-1 rounded">
                  {personalInfo.education.degree}
                </div>
                <div className="flex items-center gap-4 text-xs text-[#5A554E] pt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#8C6D46]" />
                    {personalInfo.education.period}
                  </span>
                  <span className="font-bold text-[#8C6D46]">
                    IPK: {personalInfo.education.gpa} / 4.00
                  </span>
                </div>
              </div>
            </div>

            {/* Karakteristik Utama */}
            <div className="bg-[#F7F4EE] p-6 rounded-xl border border-[#E8E2D5] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#8C6D46]/10 flex items-center justify-center text-[#8C6D46]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#2C2A29] text-lg">Karakteristik Utama</h4>
                  <p className="text-xs text-[#8C8275]">Nilai Kerja & Etika Profesi</p>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-[#5A554E]">
                {personalInfo.strengths.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8C6D46] mt-2 shrink-0"></div>
                    <div>
                      <strong className="text-[#2C2A29]">{s.title}:</strong> {s.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
