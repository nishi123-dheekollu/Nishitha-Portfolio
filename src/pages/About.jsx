import Sidebar from "../components/home/Sidebar";
import AboutStats from "../components/about/AboutStats";
import AboutCard from "../components/about/AboutCard";
import WhatIDo from "../components/about/WhatIDo";
import AboutCTA from "../components/about/AboutCTA";
import ProfileImage from "../components/about/ProfileImage";

function About() {
  return (
    <div className="w-screen h-screen bg-black flex overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main scrollable content area */}
      <main className="flex-1 overflow-y-auto px-24 py-20">

        {/* Top: Text + Photo */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 gap-20 items-center min-h-[80vh]">

          <div>
            <p className="uppercase tracking-[0.45em] text-cyan-300 text-sm">
              ABOUT ME
            </p>

            <h2 className="text-white text-6xl font-black mt-5">
              Passionate
              <br />
              AI Developer
            </h2>

            <AboutCard />
            <AboutStats />
            <AboutCTA />
          </div>

          <ProfileImage />

        </div>

        {/* Below: What I Do — full width */}
        <div className="w-full max-w-7xl mx-auto pb-20">
          <WhatIDo />
        </div>

      </main>

    </div>
  );
}

export default About;
