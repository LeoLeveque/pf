import { portfolioData } from "../data/portfolio";

export const Footer = () => {
    const { title, subtitle, socialLinks, copyright } = portfolioData.footer;

    return (
        <footer className="text-center mt-20 text-gray-700 text-sm border-t border-white/20 pt-8 pb-10">
            <p className="text-2xl font-bold text-gray-900 mb-1">{title}</p>
            <p className="text-gray-700 mb-4">{subtitle}</p>

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

            <hr className="max-w-xs mx-auto border-white/30 my-4" />
            <p className="text-xs text-gray-500">{copyright}</p>
        </footer>
    );
};