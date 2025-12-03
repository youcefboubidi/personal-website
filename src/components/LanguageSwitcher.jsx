import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group"
        >
            <span className={`text-sm font-medium ${language === 'en' ? 'text-slate-900 dark:text-slate-100' : 'text-slate-400'}`}>EN</span>
            <div className="w-8 h-4 bg-slate-200 dark:bg-slate-700 rounded-full relative">
                <motion.div
                    className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full shadow-sm"
                    animate={{ x: language === 'en' ? 0 : 16 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            </div>
            <span className={`text-sm font-medium ${language === 'fr' ? 'text-slate-900 dark:text-slate-100' : 'text-slate-400'}`}>FR</span>
        </button>
    );
};

export default LanguageSwitcher;
