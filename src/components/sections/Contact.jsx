import React from 'react';
import { personalInfo } from '../../data/portfolio';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const whatsappUrl = "https://wa.me/6282314274384?text=Halo%20Nabila,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.";

  return (
    <section id="contact" className="bg-[#FDFBF7] py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#8C6D46] font-bold">
            Hubungi Saya
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2A29]">
            Get In Touch
          </h2>
          <p className="text-[#5A554E] text-sm sm:text-base max-w-lg mx-auto">
            Terbuka untuk peluang kerja penuh waktu, kontrak, maupun magang profesional di bidang Administrasi, Operasional, dan MSDM.
          </p>
          <div className="w-16 h-0.5 bg-[#8C6D46] mx-auto mt-2"></div>
        </div>

        <div className="max-w-2xl mx-auto bg-[#F7F4EE] p-8 sm:p-12 rounded-2xl border border-[#E8E2D5] shadow-sm space-y-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Email Card */}
            <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E8E2D5] space-y-2 text-center">
              <div className="w-10 h-10 rounded-lg bg-[#8C6D46]/10 flex items-center justify-center text-[#8C6D46] mx-auto mb-2">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-[#8C8275] font-semibold">
                Email Resmi
              </h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-sm font-semibold text-[#2C2A29] hover:text-[#8C6D46] transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E8E2D5] space-y-2 text-center">
              <div className="w-10 h-10 rounded-lg bg-[#8C6D46]/10 flex items-center justify-center text-[#8C6D46] mx-auto mb-2">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-[#8C8275] font-semibold">
                Telepon / WhatsApp
              </h3>
              <a
                href={`tel:${personalInfo.phone}`}
                className="block text-sm font-semibold text-[#2C2A29] hover:text-[#8C6D46] transition-colors"
              >
                {personalInfo.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Location Bar */}
          <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#E8E2D5] flex items-center justify-center gap-2 text-sm text-[#5A554E]">
            <MapPin className="w-4 h-4 text-[#8C6D46]" />
            <span>Domisili: <strong className="text-[#2C2A29]">{personalInfo.location}</strong></span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href={`mailto:${personalInfo.email}?subject=Tawaran%20Kerjasama%20-%20Nabila%20Balqis`}
              className="inline-flex items-center justify-center gap-2 bg-[#2C2A29] text-[#FDFBF7] px-6 py-3.5 rounded-xl text-xs font-semibold tracking-wider hover:bg-[#8C6D46] transition-all shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Email</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#8C6D46] text-white px-6 py-3.5 rounded-xl text-xs font-semibold tracking-wider hover:bg-[#725736] transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
