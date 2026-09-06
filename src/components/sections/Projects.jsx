import React from 'react';
import { projects } from '../../data/portfolio';
import { FolderKanban, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="bg-[#FDFBF7] py-20 border-b border-[#E8E2D5]">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#8C6D46] font-bold">
            Studi Kasus & Proyek
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2A29]">
            Projects
          </h2>
          <div className="w-16 h-0.5 bg-[#8C6D46] mx-auto mt-2"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#F7F4EE] p-8 sm:p-10 rounded-2xl border border-[#E8E2D5] shadow-sm hover:shadow-md transition-all duration-300 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#8C6D46] font-bold bg-[#E8E2D5]/60 px-3 py-1 rounded-full w-max">
                  <FolderKanban className="w-3.5 h-3.5" />
                  {project.category}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-[#2C2A29]">
                  {project.title}
                </h3>
                <p className="text-[#5A554E] text-sm sm:text-base leading-relaxed mt-3">
                  {project.description}
                </p>
              </div>

              {project.highlights && (
                <div className="bg-[#FDFBF7] p-5 rounded-xl border border-[#E8E2D5] space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C8275]">
                    Cakupan Implementasi:
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#5A554E]">
                        <CheckCircle2 className="w-4 h-4 text-[#8C6D46] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-2 flex">
                <a
                  href={project.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#2C2A29] text-white px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider hover:bg-[#8C6D46] transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>{project.actionLabel || "Lihat Dokumen Terkait"}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
