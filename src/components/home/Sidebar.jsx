import {
  HiHome,
  HiUser,
  HiCode,
  HiFolder,
  HiDocumentText,
  HiMail,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const activeClass =
  "flex items-center justify-center w-full h-12 px-4 rounded-xl bg-cyan-400/15 text-cyan-300 border border-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.35)] transition";

const inactiveClass =
  "flex items-center justify-center w-full h-12 px-4 rounded-xl text-slate-300 hover:bg-white/5 hover:text-cyan-300 transition";

const itemInner = "flex items-center gap-3 w-[112px]";

function Sidebar() {
  return (
    <aside className="w-[155px] h-screen border-r border-white/10 bg-black/20 backdrop-blur-xl flex flex-col justify-evenly px-3">
      {/* Logo */}
      <div className="text-center">
        <h1 className="text-[58px] font-black text-cyan-300 tracking-tight leading-none drop-shadow-[0_0_18px_rgba(34,211,238,0.55)]">
          NH
        </h1>
        <p className="mt-2 text-[11px] tracking-[0.35em] text-slate-400 uppercase">
          Nishitha
        </p>
      </div>

      {/* Navigation */}
      <nav className="px-3 space-y-2 text-sm">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          <span className={itemInner}>
            <HiHome size={18} />
            <span>Home</span>
          </span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          <span className={itemInner}>
            <HiUser size={18} />
            <span>About</span>
          </span>
        </NavLink>

         <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          <span className={itemInner}>
            <HiCode size={18} />
            <span>Skills</span>
          </span>
        </NavLink>

        <NavLink
          to="/Projects"
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          <span className={itemInner}>
            <HiFolder size={18} />
            <span>Projects</span>
          </span>
        </NavLink>

         <NavLink
          to="/Certificates"
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          <span className={itemInner}>
            <HiDocumentText size={18} />
            <span>Certificates</span>
          </span>
        </NavLink>

        <NavLink
          to="/Contact"
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          <span className={itemInner}>
            <HiMail size={18} />
            <span>Contact</span>
          </span>
        </NavLink>

      </nav>

      {/* Social */}
      <div className="flex justify-center gap-3">
        <a
          href="https://www.linkedin.com/in/nishitha-dheekollu"
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-cyan-400/20 hover:text-cyan-300 text-white transition"
        >
          <FaLinkedin size={16} />
        </a>
        <a
          href="https://github.com/nishi123-dheekollu"
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-cyan-400/20 hover:text-cyan-300 text-white transition"
        >
          <FaGithub size={16} />
        </a>
        <a
          href="mailto:nishithadheekollu111@gmail.com"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-cyan-400/20 hover:text-cyan-300 text-white transition"
        >
          <FaEnvelope size={16} />
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
