import homeBg from "../../assets/textures/homeBg.png";
import RoleRotator from "./RoleRotator";
import { Link } from "react-router-dom";

function HeroContent() {
  return (
    <section className="relative w-full h-screen overflow-hidden ">

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
          object-right
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
          top-8
          right-10
          z-20
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          text-[12px]
          tracking-[0.15em]
          text-slate-300
          uppercase
        "
      >
        <span className="text-slate-400">Status</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
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
          pl-16
          pr-16
        "
      >
        <div className="max-w-[620px] ml-16">

          {/* Top Text */}
          <p className="uppercase tracking-[0.42em] text-cyan-300 text-[14px] font-medium mb-5">
            Welcome To My Portfolio
          </p>

          {/* Name */}
          <h1 className="text-white font-black text-[86px] leading-[0.95]">
            NISHITHA
          </h1>

         {/* Role */}
          <RoleRotator />

          {/* Description */}
          <p className="mt-8 text-slate-300 text-[21px] leading-[1.8] max-w-[600px]">
            I build exceptional digital experiences that are fast,
            accessible and visually appealing using modern web
            technologies.
          </p>

          {/* Button */}
          <Link
            to="/projects"
            className="
              mt-10
              inline-block
              px-8
              py-4
              rounded-xl
              border
              border-cyan-300/40
              text-white
              uppercase
              tracking-[0.18em]
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
