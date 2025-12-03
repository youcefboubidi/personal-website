import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
    const { content } = useLanguage();
    const { projects, sectionTitles } = content;

    return (
        <section id="projects" className="py-20">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-slate-900 dark:text-slate-100"
            >
                {sectionTitles.projects}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-900"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <span className="text-xs text-slate-500 uppercase tracking-wide">{project.event}</span>
                            </div>
                            <span className="text-sm text-slate-500 font-mono whitespace-nowrap ml-4">{project.date}</span>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs rounded-full text-slate-600 dark:text-slate-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                            {Object.entries(project.links).map(([type, url]) => (
                                <a
                                    key={type}
                                    href={url}
                                    className="text-sm font-medium text-slate-900 dark:text-slate-100 hover:underline capitalize"
                                >
                                    {type} &rarr;
                                </a>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
