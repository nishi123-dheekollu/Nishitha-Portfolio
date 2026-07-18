import { HiExternalLink, HiBadgeCheck } from "react-icons/hi";

function CertificateCard({ title, issuer, date, tech, link, delay = 0 }) {
  return (
    <div
      className="
        group relative rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 md:p-8
        hover:border-cyan-400/30 hover:bg-white/[0.07]
        hover:shadow-[0_0_50px_rgba(34,211,238,.12)]
        transition-all duration-300
        opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]
      "
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
          <HiBadgeCheck className="text-cyan-300" size={22} />
        </div>
        <span className="text-slate-500 text-xs">{date}</span>
      </div>

      <h3 className="text-white font-bold text-lg sm:text-xl mb-1">{title}</h3>
      <p className="text-slate-400 text-sm mb-4 sm:mb-5">{issuer}</p>

      <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 sm:px-3 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] sm:text-xs"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="
          inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl
          bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-medium
          hover:bg-cyan-400/25 hover:shadow-[0_0_25px_rgba(34,211,238,.3)]
          transition-all duration-300
        "
      >
        <HiExternalLink size={15} />
        Verify Certificate
      </a>
    </div>
  );
}

export default CertificateCard;
