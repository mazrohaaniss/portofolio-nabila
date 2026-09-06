import React from 'react';
import { experiences } from '../../data/portfolio';
import { Briefcase, Calendar, Building, CheckCircle } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-[#FDFBF7] py-20 border-b border-[#E8E2D5]">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#8C6D46] font-bold">
            Riwayat Karir
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2A29]">
            Work Experience
          </h2>
          <div className="w-16 h-0.5 bg-[#8C6D46] mx-auto mt-2"></div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#F7F4EE] p-8 sm:p-10 rounded-2xl border border-[#E8E2D5] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#8C6D46]"></div>
              
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#8C6D46] font-semibold uppercase tracking-wider mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#2C2A29]">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#5A554E] font-medium mt-1">
                    <Building className="w-4 h-4 text-[#8C6D46]" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C8275] bg-[#E8E2D5] px-3.5 py-1.5 rounded-full w-max">
                  <Calendar className="w-3.5 h-3.5 text-[#8C6D46]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="border-t border-[#E8E2D5] pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C8275] mb-4">
                  Tanggung Jawab & Kontribusi Utama:
                </h4>
                <ul className="space-y-3">
                  {exp.description.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-sm text-[#5A554E] leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#8C6D46] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
