import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { content } = useLanguage();
    const { profile } = content;

    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-6xl font-bold mb-4 tracking-tight text-slate-900 dark:text-slate-100">
                    {profile.name}
                </h1>
                <h2 className="text-2xl text-slate-600 dark:text-slate-400 mb-6 font-light">
                    {profile.title}
                </h2>
                <p className="max-w-2xl text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                    {profile.summary}
                </p>

                <div className="flex gap-4">
                    {Object.entries(profile.social).map(([platform, url]) => (
                        <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 border border-slate-900 dark:border-slate-100 rounded-full hover:bg-slate-900 hover:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900 transition-colors duration-300 capitalize"
                        >
                            {platform}
                        </a>
                    ))}
                    <a
                        href={`mailto:${profile.email}`}
                        className="px-6 py-2 border border-slate-900 dark:border-slate-100 rounded-full hover:bg-slate-900 hover:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900 transition-colors duration-300"
                    >
                        {profile.contactBtn}
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
