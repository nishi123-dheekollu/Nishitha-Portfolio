import Sidebar from "../components/home/Sidebar";
import SkillsHero from "../components/skills/SkillsHero";

function SkillsPage() {
  return (
    <div className="w-screen h-screen bg-black flex overflow-hidden">

      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <SkillsHero />
      </main>

    </div>
  );
}

export default SkillsPage;
