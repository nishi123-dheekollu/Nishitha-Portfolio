import Sidebar from "../components/home/Sidebar";
import ContactHero from "../components/contact/ContactHero";

function Contact() {
  return (
    <div className="w-screen h-screen bg-black flex overflow-hidden">

      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <ContactHero />
      </main>

    </div>
  );
}

export default Contact;
