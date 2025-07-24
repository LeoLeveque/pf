
import { portfolioData } from "../data/portfolio";

export const Header = () => (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-sm py-4 px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">Portfolio</h1>
        <nav className="hidden sm:flex gap-6 text-sm text-gray-800">
            <a href="#home" className="hover:text-indigo-500">Home</a>
            <a href="#projects" className="hover:text-indigo-500">Projects</a>
            <a href="#about" className="hover:text-indigo-500">About</a>
            <a href="#skills" className="hover:text-indigo-500">Skills</a>
            <a href="#contact" className="hover:text-indigo-500">Contact</a>
        </nav>
        <a
            href={portfolioData.contact.cv}
            download
            className="hidden sm:inline-block px-4 py-2 border border-gray-400 text-black rounded-md text-sm font-medium hover:bg-gray-100"
        >
            Download CV
        </a>
    </header>
);
