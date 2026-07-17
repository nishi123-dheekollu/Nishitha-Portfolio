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
    <section className="relative min-h-screen flex flex-col justify-center px-24 py-20 overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="absolute top-10 -left-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-2 gap-20 items-start">

        {/* Left: Info */}
        <div>
          <p className="uppercase tracking-[0.45em] text-cyan-300 text-sm">
            Get In Touch
          </p>

          <h2 className="text-white text-6xl font-black mt-5">
            Let's Build
            <br />
            Something
          </h2>

          <p className="mt-6 text-slate-400 text-lg max-w-md">
            Have a role, project, or idea in mind? I'd love to hear
            from you — drop a message and I'll get back to you soon.
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="mailto:nishithadheekollu111@gmail.com"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300"
            >
              <HiMail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/nishitha-dheekollu"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/nishi123-dheekollu"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white/5 border border-white/10 p-8 space-y-5"
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
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-cyan-400/40 transition-all"
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
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-cyan-400/40 transition-all"
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
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-cyan-400/40 transition-all resize-none"
              placeholder="Tell me about the opportunity or idea..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="
              w-full px-8 py-4 rounded-xl
              bg-cyan-400/15 text-cyan-300 border border-cyan-400/30
              uppercase tracking-[0.15em] text-sm font-medium
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

      </div>

    </section>
  );
}

export default ContactHero;
