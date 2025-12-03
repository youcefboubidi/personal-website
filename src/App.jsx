import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <LanguageSwitcher />
        <Hero />
        <Projects />
        <About />
      </Layout>
    </LanguageProvider>
  );
}

export default App;
