import Sidebar from "../components/home/Sidebar";
import HeroContent from "../components/home/HeroContent";

function Home() {
  return (
    <div className="w-screen h-screen h-[100dvh] bg-black flex overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Hero Section */}
      <main className="flex-1">
        <HeroContent />
      </main>

    </div>
  );
}

export default Home;
