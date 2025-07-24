import { portfolioData } from "../data/portfolio";

export const HeroSection = () => {

    const { socialLinks } = portfolioData.footer;

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] to-[#6366f1] mb-4">
                {portfolioData.name}
                <span className="block text-lg sm:text-4xl font-semibold text-[#6366f1]">
                {portfolioData.title}
            </span>
            </h1>

            <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mb-6">
                {portfolioData.description}
            </p>
            <div className="flex justify-center gap-6 text-2xl text-gray-800 mb-4">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className={link.icon}></i>
                    </a>
                ))}
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-smooth">
                <a className="text-black text-2xl opacity-70 hover:opacity-100">
                    <i className="fa-solid fa-chevron-down"></i>
                </a>
            </div>

        </section>
    )
};