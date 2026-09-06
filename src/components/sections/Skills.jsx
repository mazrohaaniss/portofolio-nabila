import React from 'react';
import { skills } from '../../data/portfolio';
import { Database, Users, Laptop, Check } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="bg-[#F7F4EE] py-20 border-b border-[#E8E2D5]">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#8C6D46] font-bold">
            Kompetensi
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2A29]">
            Skills & Tools
          </h2>
          <div className="w-16 h-0.5 bg-[#8C6D46] mx-auto mt-2"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Hard Skills */}
          <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#E8E2D5] shadow-sm flex flex-col justify-between hover:border-[#8C6D46]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F7F4EE] border border-[#E8E2D5] flex items-center justify-center text-[#8C6D46] mb-5 mx-auto">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-[#2C2A29] text-xl mb-4 text-center">
                Hard Skills
              </h3>
              <p className="text-xs text-[#8C8275] text-center mb-6">
                Keahlian teknis administratif dan kepatuhan operasional
              </p>
              <div className="space-y-2.5">
                {skills.hardSkills.map((s, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 bg-[#F7F4EE] text-[#2C2A29] text-xs font-medium px-3.5 py-2.5 rounded-lg border border-[#E8E2D5]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#8C6D46] shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#E8E2D5] shadow-sm flex flex-col justify-between hover:border-[#8C6D46]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F7F4EE] border border-[#E8E2D5] flex items-center justify-center text-[#8C6D46] mb-5 mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-[#2C2A29] text-xl mb-4 text-center">
                Soft Skills
              </h3>
              <p className="text-xs text-[#8C8275] text-center mb-6">
                Interpersonal, kepemimpinan diri, dan komunikasi kerja
              </p>
              <div className="space-y-2.5">
                {skills.softSkills.map((s, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 bg-[#F7F4EE] text-[#2C2A29] text-xs font-medium px-3.5 py-2.5 rounded-lg border border-[#E8E2D5]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#8C6D46] shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Software & Tools */}
          <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#E8E2D5] shadow-sm flex flex-col justify-between hover:border-[#8C6D46]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F7F4EE] border border-[#E8E2D5] flex items-center justify-center text-[#8C6D46] mb-5 mx-auto">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-[#2C2A29] text-xl mb-4 text-center">
                Software & Tools
              </h3>
              <p className="text-xs text-[#8C8275] text-center mb-6">
                Aplikasi perkantoran untuk pengolahan data dan kolaborasi
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {skills.software.map((s, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F7F4EE] text-[#2C2A29] p-3 rounded-lg border border-[#E8E2D5] text-center hover:bg-[#FAF8F3] transition-colors"
                  >
                    <div className="text-xs font-semibold">{s.name}</div>
                    <div className="text-[10px] text-[#8C6D46] font-medium mt-1">{s.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
