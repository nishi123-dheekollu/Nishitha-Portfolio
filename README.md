Nishitha Dheekollu — Portfolio

A personal portfolio website with an immersive space theme — featuring a 3D animated Earth intro, a mouse-reactive floating satellite scene, and smooth page-to-page navigation.

Live Demo: [Add your deployed link here]


✨ Features


Cinematic Intro — Animated intro sequence with a rotating 3D Earth (React Three Fiber), camera zoom, and smooth fade transition into the site.
Interactive Home Page — Typewriter-style role rotator (Full Stack Developer / MERN Stack Developer / AI Enthusiast, etc.) and a mouse-reactive floating satellite scene.
About — Profile, bio, quick stats, and a "What I Do" breakdown.
Skills — Categorized tech stack (Frontend, Backend & Database, AI & Data, Tools & Deployment).
Projects — Showcases real, deployed work with GitHub and live demo links.
Certificates — Verified course completions with direct verification links.
Contact — Working contact form powered by EmailJS, plus direct social links.
Consistent Design System — Dark, glassmorphism UI with cyan accent glow throughout every page.



🛠️ Tech Stack

CategoryToolsFrontendReact, React Router DOM, Tailwind CSS3D / AnimationReact Three Fiber, Three.jsForms / EmailEmailJSIconsreact-iconsBuild ToolVite


📂 Project Structure

src/
├── pages/                # Route-level pages (Home, About, Skills, Projects, Certificates, Contact, Intro)
├── components/
│   ├── home/              # Sidebar, HeroContent, FloatingScene, RoleRotator
│   ├── introduction/       # Earth, Clouds, SatelliteRing, CameraAnimation, IntroText, FadeTransition
│   ├── about/              # ProfileImage, AboutCard, AboutStats, AboutCTA
│   ├── skills/              # Skills
│   ├── projects/            # Projects, ProjectCard
│   ├── certificates/         # Certificates, CertificateCard
│   └── contact/               # ContactHero
├── styles/                # Global CSS, theme variables, typography, animations
└── AppRoutes.jsx           # Route definitions


🚀 Getting Started

Clone the repository and install dependencies:

bashgit clone https://github.com/nishi123-dheekollu/Nishitha-Portfolio
cd nishi-os
npm install

Run the development server:

bashnpm run dev

Open http://localhost:5173 to view it in the browser.

Environment Setup

This project uses EmailJS for the contact form. Create a free account and update the following in src/components/contact/ContactHero.jsx:

SERVICE_ID = "service_h5rpgpd";
TEMPLATE_ID = "template_nwa6c8r";
PUBLIC_KEY = "n7a5MtoFDEun51XQH";


📄 Resume

The "Download Resume" button on the About page expects a resume.pdf file placed in the public/ folder.


📬 Contact


Email: nishithadheekollu111@gmail.com
LinkedIn: linkedin.com/in/nishitha-dheekollu
GitHub: github.com/nishi123-dheekollu



📝 License

This project is open source and available for reference. Please don't copy the content/resume as your own.