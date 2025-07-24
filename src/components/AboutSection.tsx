import { portfolioData } from "../data/portfolio";

export const AboutSection = () => (

    <section id="about" className="text-center">
        <h2 className="text-3xl font-extrabold mb-2, text-gray-800">About Me</h2>
        <p className="text-gray-700 mb-10">{portfolioData.about}</p>
        <div className="grid gap-6 md:grid-cols-2 mb-10">
            <div className="bg-white/10 backdrop-blur-md text-gray-700 rounded-2xl shadow-md p-6 text-left">
                <div className="text-indigo-400 text-4xl mb-3">
                    <i className="fa-solid fa-bullseye"></i>
                </div>
                <h3 className="text-lg font-bold mb-1">{portfolioData.aboutMission.title}</h3>
                <p className="text-sm text-gray-600">{portfolioData.aboutMission.subtitle}</p>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                    {portfolioData.aboutMission.text}
                </p>
            </div>
            <div className="grid gap-6">
                {portfolioData.aboutMission.features.map((feature) => (
                    <div key={feature.title} className="bg-white/10 backdrop-blur-md text-gray-700 rounded-2xl shadow-md p-6">
                        <div className={`${feature.iconColor} text-3xl mb-3`}>
                            <i className={feature.icon}></i>
                        </div>
                        <h4 className="font-bold mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioData.aboutHighlights?.map((highlight) => (
                <div key={highlight.title} className="bg-white/10 backdrop-blur-md text-gray-700 rounded-2xl shadow-md p-6 transition transform hover:scale-[1.02]">
                    <div className="text-4xl mb-3 text-indigo-400">
                        <i className={highlight.icon}></i>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-gray-600">{highlight.description}</p>
                </div>
            ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {portfolioData.aboutStats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-white/30 backdrop-blur-md rounded-2xl p-6 text-center shadow-md"
                >
                    <p className={`text-4xl font-extrabold ${stat.color} mb-2`}>{stat.value}</p>
                    <p className="text-gray-800 font-medium">{stat.label}</p>
                </div>
            ))}
        </div>

    </section>
);
