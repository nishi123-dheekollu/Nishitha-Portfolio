import Sidebar from "../components/home/Sidebar";
import CertificatesHero from "../components/certificates/CertificatesHero";

function Certificates() {
  return (
    <div className="w-screen h-screen h-[100dvh] bg-black flex overflow-hidden">

      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <CertificatesHero />
      </main>

    </div>
  );
}

export default Certificates;
