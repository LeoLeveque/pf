import { createRoot } from "react-dom/client";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Header } from "./components/header";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Footer} from "./components/Footer";


const App = () => {
    return (
        <main className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen w-full text-white">
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
                <div className="absolute top-3/4 -left-20 w-88 h-88 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
                <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
                <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
            </div>
            <Header />
            <div className="max-w-5xl mx-auto px-4 space-y-20 py-12">
                <HeroSection />
                <ProjectsSection />
                <AboutSection />
                <SkillsSection />
                <ContactSection />
                <Footer />
            </div>
            );
        </main>
    );
};

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);