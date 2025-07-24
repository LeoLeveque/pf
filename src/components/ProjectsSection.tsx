// ProjectsSection.tsx
import { portfolioData } from "../data/portfolio";

export const ProjectsSection = () => (
    <section id="projects" className="text-center">
        <h2 className="text-3xl font-extrabold mb-2, text-gray-800">Recent Projects</h2>
        <p className="text-gray-700 mb-10">Discover some of my recent work and the technical challenges tackled.</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioData.projects.map((project) => (
                <div
                    key={project.title}
                    className="rounded-2xl shadow-md overflow-hidden bg-white text-left transition transform hover:scale-[1.02]"
                >
                    {project.image && (
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                    )}
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-[#0f172a]">{project.title}</h3>
                        <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech) => (
                                <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 text-xs rounded-full">
                  {tech}
                </span>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <a
                                href={project.github}
                                target="_blank"
                                className="flex items-center gap-2 text-sm text-gray-700 px-4 py-2 border rounded-md hover:bg-gray-100"
                            >
                                <i className="fa-solid fa-code"></i> Code
                            </a>
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    className="flex items-center gap-2 text-sm bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                                >
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);