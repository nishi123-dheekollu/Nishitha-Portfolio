import ProjectsCard from "./ProjectsCard";

const projects = [
  {
    tagline: "Full-Stack MERN Platform",
    title: "EduNexa",
    description:
      "A full-stack learning platform with 10 courses (324 lessons), JWT authentication, and sequential course unlocking. Includes an AI Mentor powered by an LLM via OpenRouter to help learners in real time.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "OpenRouter LLM", "Tailwind CSS"],
    github: "https://github.com/nishi123-dheekollu/edunexa-ai-learning-platform",
    live: "https://learningplatform-mocha.vercel.app/",
  },
  {
    tagline: "Hack2skill × Redrob AI Hackathon",
    title: "Intelligent Candidate Discovery",
    description:
      "Built for the India Runs hackathon on the 'Intelligent Candidate Discovery' track — a candidate ranking system using a two-stage heuristic and sentence-transformer pipeline to surface the best-fit candidates.",
    tech: ["Python", "Sentence Transformers", "Heuristic Ranking", "Git"],
    github: "https://github.com/nishi123-dheekollu/redrob-hackathon",
    live: null,
  },
];

function Projects() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-24 py-20 overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="absolute top-10 -left-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="relative w-full max-w-6xl mx-auto">

        <p className="uppercase tracking-[0.45em] text-cyan-300 text-sm">
          My Work
        </p>

        <h2 className="text-white text-6xl font-black mt-5">
          Featured
          <br />
          Projects
        </h2>

        <p className="mt-6 text-slate-400 text-lg max-w-2xl">
          A selection of things I've built — from a deployed full-stack
          platform to an AI hackathon submission.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-14">
          {projects.map((project, i) => (
            <ProjectsCard key={project.title} {...project} delay={i * 120} />
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

export default Projects;
