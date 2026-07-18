import CertificateCard from "./CertificateCard";

const certificates = [
  {
    title: "Build Your Own Responsive Website",
    issuer: "NxtWave Intensive",
    date: "Aug 14, 2024",
    tech: ["Bootstrap", "Flexbox"],
    link: "https://certificates.ccbp.in/intensive/responsive-website?id=ECBWURYFUB",
  },
  {
    title: "Build Your Own Static Website",
    issuer: "NxtWave Intensive",
    date: "Jul 30, 2024",
    tech: ["HTML", "CSS", "Bootstrap"],
    link: "https://certificates.ccbp.in/intensive/static-website?id=TDHWJRJFNNY",
  },
  {
    title: "Introduction to Databases",
    issuer: "NxtWave Intensive",
    date: "Sep 28, 2024",
    tech: ["SQL"],
    link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=BQPOGUFROE",
  },
];

function Certificates() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-16 sm:px-10 md:px-16 lg:px-24 md:py-20 overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="absolute top-10 -left-20 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-cyan-500/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-indigo-500/10 rounded-full blur-[110px] md:blur-[130px] pointer-events-none"></div>

      <div className="relative w-full max-w-6xl mx-auto">

        <p className="uppercase tracking-[0.3em] sm:tracking-[0.45em] text-cyan-300 text-xs sm:text-sm">
          Certifications
        </p>

        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-black mt-4 sm:mt-5">
          Verified
          <br />
          Achievements
        </h2>

        <p className="mt-4 sm:mt-6 text-slate-400 text-base sm:text-lg max-w-2xl">
          Courses I've completed and verified — building a strong
          foundation alongside hands-on project work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 md:mt-14">
          {certificates.map((cert, i) => (
            <CertificateCard key={cert.title} {...cert} delay={i * 120} />
          ))}
        </div>

      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}

export default Certificates;
