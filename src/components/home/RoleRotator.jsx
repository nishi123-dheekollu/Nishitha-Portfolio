import { useState, useEffect } from "react";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "AI Enthusiast",
];

function RoleRotator() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = currentRole.slice(0, text.length + 1);
        setText(next);
        if (next.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        const next = currentRole.slice(0, text.length - 1);
        setText(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <h2 className="mt-5 text-cyan-300 uppercase tracking-[0.34em] font-light text-[23px] min-h-[28px]">
      {text}
      <span className="cursor">|</span>
    </h2>
  );
}

export default RoleRotator;
