import React, { useState, useEffect, useRef } from 'react';
import {
    ArrowRight,
    ExternalLink,
    Github,
    Linkedin,
    Maximize2,
    Code,
    Layers,
    Zap,
    Globe,
    Cpu,
    Terminal,
    Database,
    Wifi,
    BookOpen
} from 'lucide-react';

/**
 * CONTENT DATA
 */
const content = {
    en: {
        profile: {
            name: "Youcef Boubidi",
            title: "Automation Engineer | Embedded Systems Specialist",
            location: "Boumerdes, Algeria",
            email: "me@youcefboubidi.com",
            phone: "+213540583515",
            website: "youcefboubidi.com",
            summary: "I am an Automation Engineering Master's student passionate about bridging the gap between hardware and software. With strong expertise in C++, Object-Oriented Programming, and MicroPython, I build efficient embedded systems and robotic solutions.",
            social: {
                github: "https://github.com/youcefboubidi",
                linkedin: "https://linkedin.com/in/youcefboubidi",
            },
            contactBtn: "Get in Touch",
        },
        sectionTitles: {
            projects: "Selected Projects",
            education: "Education Log",
            skills: "Technical Arsenal",
            languages: "Languages",
            contact: "Initialize Protocol",
        },
        education: [
            {
                school: "University M'hamed Bougara Boumerdes",
                degree: "Master 2 in Automation",
                period: "Sep 2025 - Present",
                details: [
                    "Thesis: \"Automatic Optimization of a Green Hydrogen Powerplant via ETAP-based Digital Twin.\"",
                    "Focus: Modeling complex industrial processes and real-time simulation.",
                ],
            },
            {
                school: "University M'hamed Bougara Boumerdes",
                degree: "Master 1 in Automation",
                period: "Sep 2024 - Jun 2025",
                details: [
                    "Key Modules: OOP, Industrial Computing, Embedded Systems Architectures.",
                ],
            },
            {
                school: "University M'hamed Bougara Boumerdes",
                degree: "Bachelor in Automation",
                period: "Sep 2021 - Jun 2024",
                details: [
                    "Final Project (20/20): \"PID Line Follower\" (RP2040 Implementation).",
                ],
            },
        ],
        projects: [
            {
                title: "PID Line Follower",
                event: "Personal Project",
                date: "Dec 2024",
                description: "High-performance line follower robot powered by ESP32 Mini, featuring custom PCB and advanced PID control algorithm.",
                tags: ["ESP32", "C++", "PID Control", "PCB Design"],
                links: { source: "https://github.com/youcefboubidi/pid-line-follower-esp32-mini" },
                color: "from-red-500 to-orange-600"
            },
            {
                title: "AI Medical Chatbot",
                event: "DevFest Constantine",
                date: "Dec 2023",
                description: "Award-winning project (1st Place). Designed an intelligent interface for medical Q&A using the LLAMA API.",
                tags: ["AI", "LLAMA API", "Hackathon Winner"],
                links: { source: "#", demo: "#" },
                color: "from-blue-500 to-purple-600"
            },
            {
                title: "IoT Warehouse Robot",
                event: "Hackathon NEST",
                date: "Apr 2024",
                description: "Logistics robot using ESP32 & RFID for real-time tracking. WebSocket-based web dashboard for live telemetry.",
                tags: ["IoT", "ESP32", "RFID", "WebSocket"],
                links: { source: "#", schematics: "#" },
                color: "from-emerald-500 to-cyan-600"
            },
            {
                title: "ElectroClub Website",
                event: "electroclub.cc",
                date: "Mar 2025",
                description: "Interactive web showcase for the club's projects and events, featuring modern design and smooth animations.",
                tags: ["Web", "React", "Interactive"],
                links: { demo: "https://electroclub.cc" },
                color: "from-pink-500 to-rose-600"
            },
            {
                title: "RP2040 Game Console",
                event: "Personal Project",
                date: "May 2025",
                description: "Custom-built game console based on Raspberry Pi Pico. Features a MicroPython game engine.",
                tags: ["MicroPython", "RP2040", "Hardware", "Game Dev"],
                links: { source: "https://github.com/youcefboubidi/rp2040-game-console" },
                color: "from-amber-500 to-orange-600"
            },
        ],
        skills: {
            "Embedded Systems": ["ARM Cortex-M", "ESP32", "I2C/SPI/UART", "MQTT"],
            "Dev Tools": ["Git/GitHub", "Linux Terminal", "VS Code", "STM32Cube"],
            "Engineering": ["C/C++ (OOP)", "Siemens TIA", "PID Control", "Digital Twin"],
            "Web & Dev": ["Python", "HTML/CSS/JS", "WebSockets", "Vercel"],
        },
        languages: [
            { name: "French", level: "B2 - 490" },
            { name: "English", level: "IELTS 7.0 (C1)" },
            { name: "Arabic", level: "Native" },
        ],
    },
    fr: {
        profile: {
            name: "Youcef Boubidi",
            title: "Ingénieur en Automatique | Spécialiste Systèmes Embarqués",
            location: "Boumerdes, Algérie",
            email: "me@youcefboubidi.com",
            phone: "+213540583515",
            website: "youcefboubidi.com",
            summary: "Étudiant en Master 2 Automatique avec une forte aptitude pour l'informatique et les systèmes embarqués. Passionné par le rapprochement entre le Hardware et le Software, avec des compétences en C++, POO et MicroPython.",
            social: {
                github: "https://github.com/youcefboubidi",
                linkedin: "https://linkedin.com/in/youcefboubidi",
            },
            contactBtn: "Me Contacter",
        },
        sectionTitles: {
            projects: "Projets Sélectionnés",
            education: "Formation Académique",
            skills: "Arsenal Technique",
            languages: "Langues",
            contact: "Initier Protocole",
        },
        education: [
            {
                school: "Université M'hamed Bougara Boumerdes",
                degree: "Master 2 en Automatique",
                period: "Sep 2025 - Présent",
                details: [
                    "PFE: \"Optimisation Automatique d'une Centrale Hydrogène Vert via Jumeau Numérique ETAP.\"",
                    "Focus: Modélisation et simulation temps réel.",
                ],
            },
            {
                school: "Université M'hamed Bougara Boumerdes",
                degree: "Master 1 en Automatique",
                period: "Sep 2024 - Juin 2025",
                details: [
                    "Modules Clés: POO, Informatique Industrielle, Architectures Embarquées.",
                ],
            },
            {
                school: "Université M'hamed Bougara Boumerdes",
                degree: "Licence en Automatique",
                period: "Sep 2021 - Juin 2024",
                details: [
                    "PFC (20/20): \"Suiveur de Ligne PID\" (Implémentation RP2040).",
                ],
            },
        ],
        projects: [
            {
                title: "Suiveur de Ligne PID",
                event: "Projet Personnel",
                date: "Déc 2024",
                description: "Robot suiveur de ligne haute performance propulsé par ESP32 Mini, avec PCB personnalisé et algorithme de contrôle PID avancé.",
                tags: ["ESP32", "C++", "Contrôle PID", "Conception PCB"],
                links: { source: "https://github.com/youcefboubidi/pid-line-follower-esp32-mini" },
                color: "from-red-500 to-orange-600"
            },
            {
                title: "Chatbot Médical IA",
                event: "DevFest Constantine",
                date: "Déc 2023",
                description: "1ère Place. Conception d'une interface d'IA pour les questions-réponses médicales utilisant l'API LLAMA.",
                tags: ["IA", "LLAMA API", "Hackathon"],
                links: { source: "#", demo: "#" },
                color: "from-blue-500 to-purple-600"
            },
            {
                title: "Robot Entrepôt IoT",
                event: "Hackathon NEST",
                date: "Avr 2024",
                description: "Robot logistique (ESP32/RFID) pour suivi temps réel. Dashboard WebSocket pour télémétrie.",
                tags: ["IoT", "ESP32", "RFID", "WebSocket"],
                links: { source: "#", schematics: "#" },
                color: "from-emerald-500 to-cyan-600"
            },
            {
                title: "Site ElectroClub",
                event: "electroclub.cc",
                date: "Mar 2025",
                description: "Vitrine web interactive présentant les projets et événements du club.",
                tags: ["Web", "Interactive"],
                links: { demo: "https://electroclub.cc" },
                color: "from-pink-500 to-rose-600"
            },
            {
                title: "Console Jeu RP2040",
                event: "Projet Personnel",
                date: "Mai 2025",
                description: "Console de jeu personnalisée (RP2040). Moteur de jeu basé sur MicroPython.",
                tags: ["MicroPython", "RP2040", "Hardware", "Dev Jeu"],
                links: { source: "https://github.com/youcefboubidi/rp2040-game-console" },
                color: "from-amber-500 to-orange-600"
            },
        ],
        skills: {
            "Systèmes Embarqués": ["ARM Cortex-M", "ESP32", "I2C/SPI/UART", "MQTT"],
            "Outils Dev": ["Git/GitHub", "Linux Terminal", "VS Code", "STM32Cube"],
            "Ingénierie": ["C/C++ (POO)", "API Siemens", "PID", "Jumeau Numérique"],
            "Web & Dev": ["Python", "HTML/CSS/JS", "WebSockets", "Vercel"],
        },
        languages: [
            { name: "Français", level: "B2 - 490" },
            { name: "Anglais", level: "IELTS 7.0 (C1)" },
            { name: "Arabe", level: "Langue maternelle" },
        ],
    },
};

/**
 * UTILITIES
 */
const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);
    return mousePosition;
};

const useScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return scrollProgress;
};

/**
 * COMPONENTS
 */

// Custom Cursor
const CustomCursor = () => {
    const { x, y } = useMousePosition();
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).closest('.interactive')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };
        document.addEventListener('mouseover', handleMouseOver);
        return () => document.removeEventListener('mouseover', handleMouseOver);
    }, []);

    return (
        <>
            <div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out hidden md:block"
                style={{
                    transform: `translate(${x - 16}px, ${y - 16}px) scale(${isHovering ? 2.5 : 1})`,
                    backgroundColor: '#ccff00'
                }}
            />
            <div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{
                    transform: `translate(${x - 4}px, ${y - 4}px)`
                }}
            />
        </>
    );
};

// 3D Tilt Card
const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -15; // Max rotation deg
        const rotateY = ((x - centerX) / centerX) * 15;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            className={`perspective-1000 ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={cardRef}
                className="transition-all duration-100 ease-out transform-style-3d w-full h-full"
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.05 : 1})`,
                }}
            >
                {children}
            </div>
        </div>
    );
};

// Glitch Text Effect
const GlitchText = ({ text, as: Component = 'h1', className = "" }: { text: string, as?: any, className?: string }) => {
    return (
        <div className={`relative inline-block group ${className}`}>
            <Component className="relative z-10">{text}</Component>
            <Component className="absolute top-0 left-0 -z-10 text-[#ccff00] opacity-0 group-hover:opacity-100 group-hover:translate-x-[2px] transition-all duration-75 select-none">{text}</Component>
            <Component className="absolute top-0 left-0 -z-10 text-[#ff0055] opacity-0 group-hover:opacity-100 group-hover:-translate-x-[2px] transition-all duration-75 select-none">{text}</Component>
        </div>
    );
};

// Marquee
const Marquee = ({ text, repeat = 4 }: { text: string, repeat?: number }) => {
    return (
        <div className="w-full overflow-hidden bg-[#ccff00] py-4 border-y-2 border-black rotate-1 my-12 relative z-20">
            <div className="animate-marquee whitespace-nowrap flex">
                {[...Array(repeat)].map((_, i) => (
                    <span key={i} className="text-4xl md:text-6xl font-black text-black uppercase mx-8 italic">
                        {text} •
                    </span>
                ))}
            </div>
        </div>
    );
};

// Navigation
const Navigation = ({ lang, setLang }: { lang: 'en' | 'fr', setLang: (l: 'en' | 'fr') => void }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="fixed top-8 right-8 z-[100] flex gap-4">
                {/* Language Toggle */}
                <button
                    onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
                    className="w-16 h-16 bg-black border border-[#333] flex items-center justify-center interactive group hover:border-[#ccff00] hover:text-[#ccff00] text-white font-mono font-bold transition-colors"
                >
                    {lang === 'en' ? 'FR' : 'EN'}
                </button>

                {/* Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-16 h-16 bg-black border border-[#333] flex flex-col items-center justify-center gap-1.5 interactive group hover:border-[#ccff00] transition-colors"
                >
                    <span className={`w-8 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''} group-hover:bg-[#ccff00]`} />
                    <span className={`w-8 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''} group-hover:bg-[#ccff00]`} />
                    <span className={`w-8 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''} group-hover:bg-[#ccff00]`} />
                </button>
            </div>

            <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[90] transition-transform duration-500 ease-in-out flex items-center justify-center ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="flex flex-col gap-8 text-center">
                    {['Work', 'Skills', 'Education', 'Contact'].map((item, i) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 hover:from-[#ccff00] hover:to-[#00ff99] transition-all transform hover:scale-110 uppercase italic"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
};

const Hero = ({ data }: { data: any }) => {
    const scrollProgress = useScrollProgress();

    return (
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black px-4 pt-20">
            {/* 3D Background Grid - Simulated */}
            <div className="absolute inset-0 perspective-500 opacity-20 pointer-events-none">
                <div
                    className="absolute inset-0 border-t border-b border-[#333]"
                    style={{
                        backgroundSize: '100px 100px',
                        backgroundImage: 'linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)',
                        transform: `rotateX(60deg) translateY(${scrollProgress * 200}px) scale(2)`,
                        transformOrigin: 'center top'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl w-full">
                <div className="mb-4 flex items-center gap-4 text-[#ccff00] font-mono text-sm tracking-widest animate-pulse">
                    <span className="w-2 h-2 bg-[#ccff00] rounded-full" />
                    SYSTEM STATUS: ONLINE
                    <span className="w-2 h-2 bg-[#ccff00] rounded-full" />
                </div>

                <GlitchText
                    text={data.profile.name.split(' ')[0].toUpperCase()}
                    className="text-[12vw] leading-[0.8] font-black tracking-tighter text-white mix-blend-exclusion"
                />
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                    <GlitchText
                        text={data.profile.name.split(' ')[1].toUpperCase()}
                        className="text-[12vw] leading-[0.8] font-black tracking-tighter text-white/50 hover:text-white transition-colors"
                    />
                    <div className="hidden md:block w-32 h-1 bg-[#ccff00] animate-pulse" />
                    <p className="max-w-xs text-gray-400 font-mono text-sm md:text-base">
                        {data.profile.title}
                    </p>
                </div>

                <p className="mt-8 text-xl text-gray-400 max-w-2xl leading-relaxed">
                    {data.profile.summary}
                </p>

                <div className="mt-12 flex gap-4">
                    <a href="#work" className="interactive px-8 py-4 bg-[#ccff00] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] active:shadow-none active:translate-x-1 active:translate-y-1">
                        View Works
                    </a>
                    <a href="#contact" className="interactive px-8 py-4 border border-[#333] text-white font-bold uppercase tracking-wider hover:border-[#ccff00] hover:text-[#ccff00] transition-colors backdrop-blur-sm">
                        {data.profile.contactBtn}
                    </a>
                </div>
            </div>

            <div className="absolute bottom-12 right-12 w-32 h-32 border border-[#333] rounded-full animate-spin-slow flex items-center justify-center opacity-50 hidden md:flex">
                <span className="font-mono text-xs text-white">SCROLL DOWN</span>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    return (
        <TiltCard className="w-full h-[60vh] md:h-[70vh] sticky top-24 mb-24 group">
            <div className="relative w-full h-full bg-[#0a0a0a] border border-[#333] overflow-hidden rounded-xl shadow-2xl">
                {/* Background Image Placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <span className="font-mono text-[#666] text-xl">0{index + 1} / 04</span>
                        <div className="flex gap-2">
                            {project.links.source && (
                                <a href={project.links.source} target="_blank" rel="noreferrer" className="p-4 bg-black/50 backdrop-blur border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors z-20">
                                    <Github className="w-6 h-6" />
                                </a>
                            )}
                            {project.links.demo && (
                                <a href={project.links.demo} target="_blank" rel="noreferrer" className="p-4 bg-[#ccff00] text-black rounded-full hover:scale-110 transition-transform z-20">
                                    <ExternalLink className="w-6 h-6" />
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="relative z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag: string, i: number) => (
                                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-[#ccff00] text-xs font-mono uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-4xl md:text-7xl font-black text-white mb-4 mix-blend-overlay leading-none">{project.title}</h3>
                        <p className="text-gray-400 max-w-xl text-lg opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute right-0 bottom-0 p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-12 group-hover:translate-x-0">
                    <ArrowRight className="w-24 h-24 text-white/20" />
                </div>
            </div>
        </TiltCard>
    );
};

const Projects = ({ data }: { data: any }) => {
    return (
        <section id="work" className="relative bg-black px-4 py-32 z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-[#ccff00] font-mono mb-4 text-xl">/// {data.sectionTitles.projects}</h2>
                    <p className="text-white text-4xl md:text-6xl font-bold max-w-3xl">
                        Building digital monuments for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-white">next generation.</span>
                    </p>
                </div>

                <div className="flex flex-col gap-0">
                    {data.projects.map((p: any, i: number) => (
                        <ProjectCard key={i} project={p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Education = ({ data }: { data: any }) => {
    return (
        <section id="education" className="bg-[#050505] py-32 relative overflow-hidden text-white">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <h2 className="text-[#ccff00] font-mono mb-12 text-xl">/// {data.sectionTitles.education}</h2>

                <div className="relative border-l border-[#333] ml-4 md:ml-12 space-y-12">
                    {data.education.map((edu: any, i: number) => (
                        <div key={i} className="relative pl-8 md:pl-12 group">
                            {/* Dot */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-[#333] group-hover:bg-[#ccff00] transition-colors rounded-full" />

                            <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-2">
                                <h3 className="text-3xl font-bold text-white group-hover:text-[#ccff00] transition-colors">{edu.degree}</h3>
                                <span className="font-mono text-[#666]">{edu.period}</span>
                            </div>
                            <h4 className="text-xl text-gray-400 mb-4">{edu.school}</h4>
                            <ul className="list-none space-y-2">
                                {edu.details.map((detail: string, j: number) => (
                                    <li key={j} className="text-gray-500 flex gap-2">
                                        <span className="text-[#ccff00]">{'>'}</span> {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TechStack = ({ data }: { data: any }) => {
    const icons: any = {
        "Embedded Systems": <Cpu />,
        "Systèmes Embarqués": <Cpu />,
        "Development Tools": <Terminal />,
        "Outils Dev": <Terminal />,
        "Engineering & Control": <Layers />,
        "Ingénierie": <Layers />,
        "Web & Dev": <Globe />,
    };

    return (
        <section id="skills" className="bg-white py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50 mix-blend-multiply" />
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <h2 className="text-black text-[12vw] leading-[0.8] font-black mb-12 tracking-tighter opacity-10 uppercase">
                    {data.sectionTitles.skills}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(data.skills).map(([category, items]: [string, any], i) => (
                        <div key={i} className="group border-t-4 border-black pt-8 hover:bg-black hover:text-white transition-colors p-6 transition-all duration-300">
                            <div className="mb-6 text-4xl group-hover:text-[#ccff00] transition-colors">
                                {icons[category] || <Code />}
                            </div>
                            <h3 className="text-2xl font-black mb-4 uppercase">{category}</h3>
                            <ul className="space-y-2 font-mono text-sm opacity-80">
                                {items.map((skill: string, j: number) => (
                                    <li key={j} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#ccff00] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Languages Section Inline */}
                <div className="mt-20 border-t-2 border-black pt-12">
                    <h3 className="text-3xl font-black mb-8 uppercase flex items-center gap-4">
                        <BookOpen className="w-8 h-8" />
                        {data.sectionTitles.languages}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.languages.map((lang: any, i: number) => (
                            <div key={i} className="bg-gray-100 p-6 border-l-4 border-black">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="font-bold text-xl">{lang.name}</span>
                                </div>
                                <span className="font-mono text-sm text-gray-600">{lang.level}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Contact = ({ data }: { data: any }) => {
    return (
        <section id="contact" className="min-h-screen bg-black text-white px-4 py-32 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[#ccff00] opacity-10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <p className="text-[#ccff00] font-mono mb-8">/// {data.sectionTitles.contact}</p>
                <h2 className="text-[10vw] font-black leading-none mb-12 hover:text-[#ccff00] transition-colors cursor-default">
                    LET'S<br />BUILD
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <form className="flex flex-col gap-8">
                            <div className="group">
                                <input type="text" placeholder="NAME / NOM" className="w-full bg-transparent border-b border-[#333] py-4 text-2xl focus:outline-none focus:border-[#ccff00] transition-colors placeholder:text-[#333]" />
                            </div>
                            <div className="group">
                                <input type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-[#333] py-4 text-2xl focus:outline-none focus:border-[#ccff00] transition-colors placeholder:text-[#333]" />
                            </div>
                            <div className="group">
                                <textarea placeholder="MESSAGE" rows={4} className="w-full bg-transparent border-b border-[#333] py-4 text-2xl focus:outline-none focus:border-[#ccff00] transition-colors placeholder:text-[#333] resize-none" />
                            </div>
                            <button className="self-start px-12 py-6 bg-white text-black font-black text-xl hover:bg-[#ccff00] transition-colors flex items-center gap-4 group">
                                SEND
                                <Zap className="group-hover:fill-black" />
                            </button>
                        </form>
                    </div>

                    <div className="flex flex-col justify-end gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-[#666] font-mono text-sm">CONTACT INFO</span>
                            <a href={`mailto:${data.profile.email}`} className="text-2xl hover:text-[#ccff00] transition-colors">{data.profile.email}</a>
                            <span className="text-xl text-[#666]">{data.profile.phone}</span>
                            <span className="text-xl text-[#666]">{data.profile.location}</span>
                        </div>

                        <div className="flex gap-4">
                            <a href={data.profile.social.github} target="_blank" rel="noreferrer" className="w-16 h-16 border border-[#333] flex items-center justify-center rounded-full hover:bg-[#ccff00] hover:border-[#ccff00] hover:text-black transition-all">
                                <Github size={24} />
                            </a>
                            <a href={data.profile.social.linkedin} target="_blank" rel="noreferrer" className="w-16 h-16 border border-[#333] flex items-center justify-center rounded-full hover:bg-[#ccff00] hover:border-[#ccff00] hover:text-black transition-all">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full text-center mt-32 border-t border-[#333] pt-8">
                <p className="font-mono text-[#666] text-xs">© 2025 YOUCEF BOUBIDI • SYSTEM ONLINE</p>
            </div>
        </section>
    );
};

// Main App Component
const App = () => {
    const [lang, setLang] = useState<'en' | 'fr'>('en');
    const data = content[lang];

    return (
        <div className="bg-black min-h-screen cursor-none selection:bg-[#ccff00] selection:text-black overflow-x-hidden font-sans">
            <CustomCursor />
            <Navigation lang={lang} setLang={setLang} />

            {/* Decorative Fixed Elements */}
            <div className="fixed left-8 bottom-8 z-50 hidden md:flex flex-col gap-4 mix-blend-difference pointer-events-none">
                <div className="w-[1px] h-24 bg-white/50" />
                <span className="writing-vertical-rl font-mono text-xs text-white/50 tracking-widest">SCROLL TO EXPLORE</span>
            </div>

            <main>
                <Hero data={data} />
                <Marquee text="Embedded • Automation • Robotics • Innovation" />
                <Projects data={data} />
                <Marquee text="Control • Simulation • Optimization • Design" repeat={4} />
                <Education data={data} />
                <TechStack data={data} />
                <Contact data={data} />
            </main>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .writing-vertical-rl {
          writing-mode: vertical-rl;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin 15s linear infinite reverse;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #111;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #ccff00;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
        </div>
    );
};

export default App;
