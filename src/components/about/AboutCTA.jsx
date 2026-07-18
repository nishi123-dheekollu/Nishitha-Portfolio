import { HiDownload, HiMail } from "react-icons/hi";

function AboutCTA() {
  return (
    <div className="mt-8 sm:mt-10 md:mt-14 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
      <a
        href="https://drive.google.com/file/d/1Mm5DehKghhiTPgWLgAeGPEIuVF_qX99P/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="
          flex items-center justify-center gap-2
          px-6 py-3 sm:px-8 sm:py-4
          rounded-xl
          bg-cyan-400/15
          text-cyan-300
          border border-cyan-400/30
          uppercase tracking-[0.12em] sm:tracking-[0.15em] text-xs sm:text-sm font-medium
          hover:bg-cyan-400/25
          hover:shadow-[0_0_35px_rgba(34,211,238,.35)]
          transition-all duration-300
        "
      >
        <HiDownload size={16} className="sm:w-[18px] sm:h-[18px]" />
        Download Resume
      </a>

      <a
        href="mailto:nishithadheekollu111@gmail.com"
        className="
          flex items-center justify-center gap-2
          px-6 py-3 sm:px-8 sm:py-4
          rounded-xl
          bg-white/5
          text-white
          border border-white/15
          uppercase tracking-[0.12em] sm:tracking-[0.15em] text-xs sm:text-sm font-medium
          hover:bg-white/10
          hover:border-white/30
          transition-all duration-300
        "
      >
        <HiMail size={16} className="sm:w-[18px] sm:h-[18px]" />
        Get In Touch
      </a>
    </div>
  );
}

export default AboutCTA;
