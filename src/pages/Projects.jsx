import Sidebar from "../components/home/Sidebar";
import ProjectsHero from "../components/projects/ProjectsHero";

function ProjectsPage() {
  return (
    <div className="w-screen h-screen h-[100dvh] bg-black flex overflow-hidden">

      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <ProjectsHero />
      </main>

    </div>
  );
}

export default ProjectsPage;
