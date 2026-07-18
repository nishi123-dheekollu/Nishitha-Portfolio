import Sidebar from "../components/home/Sidebar";
import AboutStats from "../components/about/AboutStats";
import AboutCard from "../components/about/AboutCard";
import WhatIDo from "../components/about/WhatIDo";
import AboutCTA from "../components/about/AboutCTA";
import ProfileImage from "../components/about/ProfileImage";

function AboutHeading() {
  return (
    <div>
      <p className="uppercase tracking-[0.3em] sm:tracking-[0.45em] text-cyan-300 text-xs sm:text-sm">
        ABOUT ME
      </p>

      <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-black mt-4 sm:mt-5">
        Passionate
        <br />
        AI Developer
      </h2>
    </div>
  );
}

function About() {
  return (
    <div className="w-screen h-screen h-[100dvh] bg-black flex overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main scrollable content area */}
      <main className="flex-1 overflow-y-auto px-6 py-16 sm:px-10 md:px-16 lg:px-24 md:py-20">

        <div className="w-full max-w-7xl mx-auto">

          {/* Mobile / tablet layout (single column, photo right after heading) */}
          <div className="md:hidden">
            <AboutHeading />
            <div className="flex justify-center mt-8">
              <ProfileImage />
            </div>
            <AboutCard />
            <AboutStats />
            <AboutCTA />
          </div>

          {/* Desktop layout (two columns, text left / photo right) */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-20 items-start">
            <div>
              <AboutHeading />
              <AboutCard />
              <AboutStats />
              <AboutCTA />
            </div>
            <div className="flex justify-center">
              <ProfileImage />
            </div>
          </div>

        </div>

        {/* Below: What I Do — full width */}
        <div className="w-full max-w-7xl mx-auto pb-16 md:pb-20 mt-8 md:mt-16">
          <WhatIDo />
        </div>

      </main>

    </div>
  );
}

export default About;
