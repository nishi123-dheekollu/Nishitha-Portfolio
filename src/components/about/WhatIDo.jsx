import { HiCode, HiServer, HiChip } from "react-icons/hi";

const items = [
  {
    icon: HiCode,
    title: "Frontend Development",
    desc: "Building responsive, interactive UIs with React, Tailwind CSS and modern JavaScript.",
  },
  {
    icon: HiServer,
    title: "Backend Development",
    desc: "Designing scalable APIs and services using Node.js, Express and MongoDB.",
  },
  {
    icon: HiChip,
    title: "AI / ML Integration",
    desc: "Exploring and integrating AI-driven features into full stack applications.",
  },
];

function WhatIDo() {
  return (
    <div className="mt-12 md:mt-20">
      <p className="uppercase tracking-[0.3em] sm:tracking-[0.45em] text-cyan-300 text-xs sm:text-sm mb-6 md:mb-8">
        What I Do
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 hover:border-cyan-400/30 hover:bg-white/[0.07] transition-all duration-300"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-3 sm:mb-4">
              <Icon className="text-cyan-300" size={20} />
            </div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-2">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatIDo;
