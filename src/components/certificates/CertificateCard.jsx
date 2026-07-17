import { HiExternalLink, HiBadgeCheck } from "react-icons/hi";

function CertificateCard({ title, issuer, date, tech, link, delay = 0 }) {
  return (
    <div
      className="
        group relative rounded-2xl bg-white/5 border border-white/10 p-8
        hover:border-cyan-400/30 hover:bg-white/[0.07]
        hover:shadow-[0_0_50px_rgba(34,211,238,.12)]
        transition-all duration-300
        opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]
      "
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
          <HiBadgeCheck className="text-cyan-300" size={24} />
        </div>
        <span className="text-slate-500 text-xs">{date}</span>
      </div>

      <h3 className="text-white font-bold text-xl mb-1">{title}</h3>
      <p className="text-slate-400 text-sm mb-5">{issuer}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs"
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
          inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
          bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 text-sm font-medium
          hover:bg-cyan-400/25 hover:shadow-[0_0_25px_rgba(34,211,238,.3)]
          transition-all duration-300
        "
      >
        <HiExternalLink size={16} />
        Verify Certificate
      </a>
    </div>
  );
}

export default CertificateCard;
