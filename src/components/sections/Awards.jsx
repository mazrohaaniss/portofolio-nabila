import React from 'react';
import { awards } from '../../data/portfolio';
import { Award, FileCheck, ExternalLink, Calendar } from 'lucide-react';

const Awards = () => {
  return (
    <section id="awards" className="bg-[#F7F4EE] py-20 border-b border-[#E8E2D5]">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#8C6D46] font-bold">
            Pencapaian & Kualifikasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2A29]">
            Awards & Certifications
          </h2>
          <div className="w-16 h-0.5 bg-[#8C6D46] mx-auto mt-2"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="bg-[#FDFBF7] p-7 rounded-2xl border border-[#E8E2D5] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-wider text-[#8C6D46] uppercase bg-[#F7F4EE] px-2.5 py-1 rounded border border-[#E8E2D5]">
                    {award.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#8C8275] font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#8C6D46]" />
                    <span>{award.year}</span>
                  </div>
                </div>

                <h3 className="font-serif font-bold text-[#2C2A29] text-lg sm:text-xl leading-snug">
                  {award.title}
                </h3>

                <p className="text-xs text-[#5A554E] font-medium">
                  Diterbitkan oleh: <span className="text-[#8C6D46] font-semibold">{award.issuer}</span>
                </p>
              </div>

              {award.hasDocument && (
                <div className="pt-6 mt-4 border-t border-[#E8E2D5]">
                  <a
                    href={award.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C6D46] hover:text-[#725736] group"
                  >
                    <FileCheck className="w-4 h-4" />
                    <span className="underline underline-offset-4">Lihat Dokumen Sertifikat Resmi</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
