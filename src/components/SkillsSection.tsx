import { portfolioData } from "../data/portfolio";

export const SkillsSection = () => (
    <section id="skills" className="text-center">
        <h2 className="text-3xl font-extrabold mb-2 text-gray-900">Technical Skills</h2>
        <p className="text-gray-700 mb-10">Technologies and tools I use to build robust and scalable solutions.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {portfolioData.skillsGrouped?.map((category) => (
                <div key={category.title} className="bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-md p-6 transition transform hover:scale-[1.02]">
                    <h3 className="text-lg font-bold text-indigo-600 mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {category.items.map((skill) => (
                            <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full">
                {skill}
              </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);