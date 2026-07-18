import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ title, tagline, description, tech, github, live, delay = 0 }) {
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
      <p className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-cyan-300 text-[10px] sm:text-xs mb-2">
        {tagline}
      </p>

      <h3 className="text-white font-bold text-xl sm:text-2xl mb-3 sm:mb-4">{title}</h3>

      <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed mb-5 sm:mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 sm:px-3 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] sm:text-xs"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="
            flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl
            bg-white/5 border border-white/15 text-white text-xs sm:text-sm font-medium
            hover:bg-white/10 hover:border-white/30
            transition-all duration-300
          "
        >
          <FaGithub size={15} />
          Code
        </a>

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl
              bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-medium
              hover:bg-cyan-400/25 hover:shadow-[0_0_25px_rgba(34,211,238,.3)]
              transition-all duration-300
            "
          >
            <HiExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
