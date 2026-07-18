import homeBg from "../../assets/textures/homeBg.png";
import RoleRotator from "./RoleRotator";
import { Link } from "react-router-dom";

function HeroContent() {
  return (
    <section className="relative w-full h-screen h-[100dvh] overflow-hidden ">

      {/* Background Image */}
      <img
        src={homeBg}
        alt="Space Background"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center md:object-right
          select-none
          pointer-events-none
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Blue Glow */}
      <div className="absolute left-0 top-0 w-[45%] h-full bg-gradient-to-r from-black via-black/60 to-transparent"></div>

      {/* Status Badge */}
      <div
        className="
          absolute
          top-4 right-4
          sm:top-6 sm:right-8
          md:top-8 md:right-10
          z-20
          flex
          items-center
          gap-1.5 sm:gap-2
          px-3 py-1.5
          sm:px-4 sm:py-2
          rounded-full
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          text-[9px] sm:text-[11px] md:text-[12px]
          tracking-[0.1em] sm:tracking-[0.15em]
          text-slate-300
          uppercase
          whitespace-nowrap
        "
      >
        <span className="text-slate-400 hidden sm:inline">Status</span>
        <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-400"></span>
        </span>
        <span className="text-white normal-case tracking-normal">Available for Work</span>
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          h-full
          flex
          items-center
          px-6
          sm:px-10
          md:pl-16 md:pr-16
        "
      >
        <div className="max-w-[620px] md:ml-16">

          {/* Top Text */}
          <p className="uppercase tracking-[0.25em] sm:tracking-[0.35em] md:tracking-[0.42em] text-cyan-300 text-[11px] sm:text-[12px] md:text-[14px] font-medium mb-3 sm:mb-4 md:mb-5">
            Welcome To My Portfolio
          </p>

          {/* Name */}
          <h1 className="text-white font-black text-[42px] sm:text-[58px] md:text-[70px] lg:text-[86px] leading-[0.95]">
            NISHITHA
          </h1>

         {/* Role */}
          <RoleRotator />

          {/* Description */}
          <p className="mt-5 sm:mt-6 md:mt-8 text-slate-300 text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] leading-[1.6] md:leading-[1.8] max-w-[600px]">
            I build exceptional digital experiences that are fast,
            accessible and visually appealing using modern web
            technologies.
          </p>

          {/* Button */}
          <Link
            to="/projects"
            className="
              mt-7 sm:mt-8 md:mt-10
              inline-block
              px-6 py-3
              sm:px-8 sm:py-4
              rounded-xl
              border
              border-cyan-300/40
              text-white
              text-sm sm:text-base
              uppercase
              tracking-[0.12em] sm:tracking-[0.18em]
              font-medium
              backdrop-blur-xl
              bg-white/5
              hover:bg-cyan-400/10
              hover:border-cyan-300
              hover:shadow-[0_0_35px_rgba(34,211,238,.35)]
              transition-all
              duration-300
            "
          >
            EXPLORE MY WORK →
          </Link>

        </div>

      </div>

    </section>
  );
}

export default HeroContent;
