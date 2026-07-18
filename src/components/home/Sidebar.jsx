import { useState } from "react";
import {
  HiHome,
  HiUser,
  HiCode,
  HiFolder,
  HiBriefcase,
  HiDocumentText,
  HiMail,
  HiMenu,
  HiX,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const activeClass =
  "flex items-center justify-center w-full h-12 px-4 rounded-xl bg-cyan-400/15 text-cyan-300 border border-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.35)] transition";

const inactiveClass =
  "flex items-center justify-center w-full h-12 px-4 rounded-xl text-slate-300 hover:bg-white/5 hover:text-cyan-300 transition";

const itemInner = "flex items-center gap-3 w-[112px]";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setOpen(true)}
        className="
          md:hidden fixed top-4 left-4 z-50
          w-11 h-11 rounded-xl
          bg-black/40 backdrop-blur-xl border border-white/10
          flex items-center justify-center text-white
        "
      >
        <HiMenu size={20} />
      </button>

      {/* Mobile dark overlay behind the drawer */}
      {open && (
        <div
          onClick={close}
          className="md:hidden fixed inset-0 bg-black/60 z-40"
        ></div>
      )}

      <aside
        className={`
          fixed md:relative inset-y-0 left-0 z-50
          w-[220px] md:w-[155px] h-screen
          border-r border-white/10 bg-black/90 md:bg-black/20 backdrop-blur-xl
          flex flex-col justify-start md:justify-evenly
          pt-20 md:pt-0
          gap-10 md:gap-0
          px-3
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Mobile close button */}
        <button
          onClick={close}
          className="md:hidden absolute top-4 right-4 text-white"
        >
          <HiX size={22} />
        </button>

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
        <nav className="px-3 space-y-2 text-sm" onClick={close}>
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
            to="/certificates"
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
        <div className="mt-10 md:mt-0 flex justify-center gap-3 md:pb-0">
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
    </>
  );
}

export default Sidebar;
