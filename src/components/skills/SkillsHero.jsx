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
    <section className="relative min-h-screen flex flex-col justify-center px-24 py-20 overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="absolute top-10 -left-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="relative w-full max-w-6xl mx-auto">

        <p className="uppercase tracking-[0.45em] text-cyan-300 text-sm">
          Tech Stack
        </p>

        <h2 className="text-white text-6xl font-black mt-5">
          Skills &amp;
          <br />
          Technologies
        </h2>

        <p className="mt-6 text-slate-400 text-lg max-w-2xl">
          Tools and technologies I've used to build real, deployed
          projects — from full-stack MERN apps to AI-driven features.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-14">
          {categories.map(({ icon: Icon, title, skills }, i) => (
            <div
              key={title}
              className="
                group relative rounded-2xl bg-white/5 border border-white/10 p-8
                hover:border-cyan-400/30 hover:bg-white/[0.07]
                hover:shadow-[0_0_50px_rgba(34,211,238,.12)]
                transition-all duration-300
                opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]
              "
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="
                    w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center
                    group-hover:bg-cyan-400/20 group-hover:shadow-[0_0_20px_rgba(34,211,238,.4)]
                    transition-all duration-300
                  "
                >
                  <Icon className="text-cyan-300" size={22} />
                </div>
                <h3 className="text-white font-semibold text-xl">{title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4 py-2 rounded-full
                      bg-white/5 border border-white/10
                      text-slate-300 text-sm
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
