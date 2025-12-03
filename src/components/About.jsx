import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Section = ({ title, children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="mb-16"
    >
        <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-slate-100 uppercase tracking-wider text-sm">
            {title}
        </h3>
        {children}
    </motion.div>
);

const About = () => {
    const { content } = useLanguage();
    const { education, skills, languages, sectionTitles } = content;

    return (
        <section id="about" className="py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Main Content (Education) */}
                <div className="lg:col-span-2">
                    <Section title={sectionTitles.education}>
                        <div className="space-y-12">
                            {education.map((edu, index) => (
                                <div key={index} className="relative pl-8 border-l border-slate-200 dark:border-slate-800">
                                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800" />
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                                            {edu.degree}
                                        </h4>
                                        <span className="text-sm text-slate-500 font-mono">{edu.period}</span>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 mb-2">{edu.school}</p>
                                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 text-sm">
                                        {edu.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Section>
                </div>

                {/* Sidebar (Skills & Languages) */}
                <div className="space-y-12">
                    <Section title={sectionTitles.skills} delay={0.2}>
                        <div className="space-y-6">
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category}>
                                    <h5 className="font-medium text-slate-900 dark:text-slate-100 mb-3 text-sm">
                                        {category}
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded text-xs text-slate-600 dark:text-slate-400"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section title={sectionTitles.languages} delay={0.3}>
                        <div className="space-y-4">
                            {languages.map((lang, index) => (
                                <div key={index} className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2 last:border-0">
                                    <span className="font-medium text-slate-900 dark:text-slate-100">{lang.name}</span>
                                    <span className="text-sm text-slate-500">{lang.level}</span>
                                </div>
                            ))}
                        </div>
                    </Section>
                </div>

            </div>
        </section>
    );
};

export default About;
