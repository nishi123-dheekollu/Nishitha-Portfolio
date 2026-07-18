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
  {
    tagline: "Personal Portfolio Website",
    title: "This Portfolio",
    description:
      "A space-themed personal portfolio featuring a cinematic 3D Earth intro (React Three Fiber), a mouse-reactive floating satellite scene, and a fully responsive, glassmorphism-styled design across every page.",
    tech: ["React", "Tailwind CSS", "React Three Fiber", "React Router", "EmailJS"],
    github: "https://github.com/nishi123-dheekollu/Nishitha-Portfolio",
    live: "https://nishitha-portfolio-mu.vercel.app/",
  },
];

function Projects() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-16 sm:px-10 md:px-16 lg:px-24 md:py-20 overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="absolute top-10 -left-20 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-cyan-500/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-indigo-500/10 rounded-full blur-[110px] md:blur-[130px] pointer-events-none"></div>

      <div className="relative w-full max-w-7xl mx-auto">

        <p className="uppercase tracking-[0.3em] sm:tracking-[0.45em] text-cyan-300 text-xs sm:text-sm">
          My Work
        </p>

        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-black mt-4 sm:mt-5">
          Featured
          <br />
          Projects
        </h2>

        <p className="mt-4 sm:mt-6 text-slate-400 text-base sm:text-lg max-w-2xl">
          A selection of things I've built — from a deployed full-stack
          platform to an AI hackathon submission.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 md:mt-14">
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
