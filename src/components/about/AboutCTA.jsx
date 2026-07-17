import { HiDownload, HiMail } from "react-icons/hi";

function AboutCTA() {
  return (
    <div className="mt-14 flex flex-wrap gap-4">
      <a
        href="/c:\Users\Manisha\Downloads\Nishitha_Dheekollu_Resume.docx"
        download
        className="
          flex items-center gap-2
          px-8 py-4
          rounded-xl
          bg-cyan-400/15
          text-cyan-300
          border border-cyan-400/30
          uppercase tracking-[0.15em] text-sm font-medium
          hover:bg-cyan-400/25
          hover:shadow-[0_0_35px_rgba(34,211,238,.35)]
          transition-all duration-300
        "
      >
        <HiDownload size={18} />
        Download Resume
      </a>

      <a
        href="mailto:nishithadheekollu111@gmail.com"
        className="
          flex items-center gap-2
          px-8 py-4
          rounded-xl
          bg-white/5
          text-white
          border border-white/15
          uppercase tracking-[0.15em] text-sm font-medium
          hover:bg-white/10
          hover:border-white/30
          transition-all duration-300
        "
      >
        <HiMail size={18} />
        Get In Touch
      </a>

    </div>
  );
}

export default AboutCTA;
