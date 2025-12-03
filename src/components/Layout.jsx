const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
                {children}
            </main>

            <footer className="py-8 text-center text-slate-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Youcef Boubidi. Built with React & Tailwind.</p>
            </footer>
        </div>
    );
};

export default Layout;
