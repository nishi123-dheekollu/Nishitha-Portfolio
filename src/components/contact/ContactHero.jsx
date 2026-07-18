import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { HiMail, HiUser, HiAnnotation } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SERVICE_ID = "service_h5rpgpd";
const TEMPLATE_ID = "template_nwa6c8r";
const PUBLIC_KEY = "n7a5MtoFDEun51XQH";

function ContactHero() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  // Auto-dismiss the success/error message after a few seconds
  useEffect(() => {
    if (status === "sent" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-16 sm:px-10 md:px-16 lg:px-24 md:py-20 overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="absolute top-10 -left-20 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-cyan-500/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-indigo-500/10 rounded-full blur-[110px] md:blur-[130px] pointer-events-none"></div>

      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">

        {/* Left: Info */}
        <div className="order-1">
          <p className="uppercase tracking-[0.3em] sm:tracking-[0.45em] text-cyan-300 text-xs sm:text-sm">
            Get In Touch
          </p>

          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-black mt-4 sm:mt-5">
            Let's Build
            <br />
            Something
          </h2>

          <p className="mt-4 sm:mt-6 text-slate-400 text-base sm:text-lg max-w-md">
            Have a role, project, or idea in mind? I'd love to hear
            from you — drop a message and I'll get back to you soon.
          </p>

          <div className="hidden md:flex gap-3 sm:gap-4 mt-8 sm:mt-10">
            <a
              href="mailto:nishithadheekollu111@gmail.com"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300"
            >
              <HiMail size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nishitha-dheekollu"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300"
            >
              <FaLinkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            <a
              href="https://github.com/nishi123-dheekollu"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300"
            >
              <FaGithub size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <form
          onSubmit={handleSubmit}
          className="order-2 w-full rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5"
        >
          <div>
            <label className="text-slate-400 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
              <HiUser size={14} /> Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-white placeholder-slate-500 outline-none focus:border-cyan-400/40 transition-all text-sm sm:text-base"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-slate-400 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
              <HiMail size={14} /> Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-white placeholder-slate-500 outline-none focus:border-cyan-400/40 transition-all text-sm sm:text-base"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-slate-400 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
              <HiAnnotation size={14} /> Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-white placeholder-slate-500 outline-none focus:border-cyan-400/40 transition-all resize-none text-sm sm:text-base"
              placeholder="Tell me about the opportunity or idea..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="
              w-full px-6 py-3 sm:px-8 sm:py-4 rounded-xl
              bg-cyan-400/15 text-cyan-300 border border-cyan-400/30
              uppercase tracking-[0.12em] sm:tracking-[0.15em] text-xs sm:text-sm font-medium
              hover:bg-cyan-400/25 hover:shadow-[0_0_35px_rgba(34,211,238,.35)]
              transition-all duration-300
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-green-400 text-sm text-center">
              Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong — please try again or email me directly.
            </p>
          )}
        </form>

        {/* Mobile-only: social icons shown after the form, as an alternative way to reach out */}
        <div className="order-3 md:hidden">
          <p className="text-slate-500 text-xs uppercase tracking-wider mb-3 text-center">
            Or reach out directly
          </p>
          <div className="flex justify-center gap-3">
            <a
              href="mailto:nishithadheekollu111@gmail.com"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300"
            >
              <HiMail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/nishitha-dheekollu"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://github.com/nishi123-dheekollu"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300"
            >
              <FaGithub size={16} />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default ContactHero;
