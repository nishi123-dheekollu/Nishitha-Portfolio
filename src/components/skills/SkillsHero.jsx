import { HiCode, HiServer, HiChip, HiCog } from "react-icons/hi";

const categories = [
  {
    icon: HiCode,
    title: "Frontend",
    skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "React Three Fiber"],
  },
  {
    icon: HiServer,
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "SQL", "REST APIs", "JWT Authentication"],
  },
  {
    icon: HiChip,
    title: "AI & Data",
    skills: ["Python", "LLM Integration (OpenRouter)", "Sentence Transformers", "Prompt Engineering"],
  },
  {
    icon: HiCog,
    title: "Tools & Deployment",
    skills: ["Git & GitHub", "Vercel", "Render", "VS Code"],
  },
];

function Skills() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-16 sm:px-10 md:px-16 lg:px-24 md:py-20 overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="absolute top-10 -left-20 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-cyan-500/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-indigo-500/10 rounded-full blur-[110px] md:blur-[130px] pointer-events-none"></div>

      <div className="relative w-full max-w-6xl mx-auto">

        <p className="uppercase tracking-[0.3em] sm:tracking-[0.45em] text-cyan-300 text-xs sm:text-sm">
          Tech Stack
        </p>

        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-black mt-4 sm:mt-5">
          Skills &amp;
          <br />
          Technologies
        </h2>

        <p className="mt-4 sm:mt-6 text-slate-400 text-base sm:text-lg max-w-2xl">
          Tools and technologies I've used to build real, deployed
          projects — from full-stack MERN apps to AI-driven features.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-10 md:mt-14">
          {categories.map(({ icon: Icon, title, skills }, i) => (
            <div
              key={title}
              className="
                group relative rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 md:p-8
                hover:border-cyan-400/30 hover:bg-white/[0.07]
                hover:shadow-[0_0_50px_rgba(34,211,238,.12)]
                transition-all duration-300
                opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]
              "
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div
                  className="
                    w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center
                    group-hover:bg-cyan-400/20 group-hover:shadow-[0_0_20px_rgba(34,211,238,.4)]
                    transition-all duration-300
                  "
                >
                  <Icon className="text-cyan-300" size={20} />
                </div>
                <h3 className="text-white font-semibold text-lg sm:text-xl">{title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 py-1.5 sm:px-4 sm:py-2
                      rounded-full
                      bg-white/5 border border-white/10
                      text-slate-300 text-xs sm:text-sm
                      hover:border-cyan-400/40 hover:text-cyan-300
                      hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(34,211,238,.25)]
                      transition-all duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}

export default Skills;
