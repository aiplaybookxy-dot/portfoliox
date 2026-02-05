import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../common/Section';
import { useTheme } from "../../context/ThemeContext";
import { portfolioData } from "../../data/portfolioData"; // Adjust path as needed

const Projects = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [filter, setFilter] = useState('All');
    
    // We use the curated data from your file
    const projects = portfolioData.projectsData;

    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <Section id="projects" className="bg-transparent font-display">
            <h2 className={`text-4xl md:text-5xl font-black mb-12 text-center uppercase tracking-tighter ${
                isLight ? "text-accent" : "text-primary"
            }`}>
                Featured Work
            </h2>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
                {['All', 'Web App', 'FinTech', 'AI'].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 text-xs font-black uppercase tracking-widest transition-all border-2 ${
                            filter === cat
                                ? (isLight ? 'bg-accent text-primary border-accent' : 'bg-primary text-accent border-primary')
                                : (isLight ? 'border-accent/10 text-accent/60 hover:border-accent' : 'border-primary/10 text-primary/60 hover:border-primary')
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className={`group relative border transition-all duration-500 ${
                                isLight ? "bg-accent/5 border-accent/10" : "bg-primary/5 border-primary/10"
                            }`}
                        >
                            {/* Project Image */}
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="block">
                                <div className={`h-52 overflow-hidden relative border-b ${
                                    isLight ? "bg-accent/10 border-accent/10" : "bg-primary/10 border-primary/10"
                                }`}>
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center font-mono text-xs opacity-20 uppercase tracking-widest">
                                            [ No_Image_{project.id} ]
                                        </div>
                                    )}
                                    
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${
                                        isLight ? "bg-accent/90" : "bg-primary/90"
                                    }`}>
                                        <span className={`text-xs font-black uppercase tracking-widest ${isLight ? "text-primary" : "text-accent"}`}>
                                            View Code
                                        </span>
                                    </div>
                                </div>
                            </a>

                            <div className="p-8">
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-black uppercase tracking-tight mb-4">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className={`text-[10px] font-bold uppercase tracking-tighter px-2 py-1 border ${
                                            isLight ? "border-accent/20 text-accent/80" : "border-primary/20 text-primary/80"
                                        }`}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </Section>
    );
};

export default Projects;