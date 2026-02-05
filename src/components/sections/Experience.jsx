import { motion } from 'framer-motion';
import Section from '../common/Section';
import { useTheme } from "../../context/ThemeContext";
import { portfolioData } from '../../data/portfolioData';


const Experience = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <Section id="experience" className="bg-transparent font-display py-24">
            <h2 className={`text-4xl md:text-5xl font-black mb-16 uppercase tracking-tighter ${
                isLight ? "text-accent" : "text-primary"
            }`}>
                Build Path
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
                {/* The Central Line */}
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px ${
                    isLight ? "bg-accent/10" : "bg-primary/10"
                }`} />

                {portfolioData.milestones.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`mb-16 flex justify-between items-center w-full ${
                            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                        }`}
                    >
                        {/* Spacer for Desktop */}
                        <div className="hidden md:block w-5/12" />

                        {/* The Indicator Dot */}
                        <div className={`z-10 absolute -left-4px md:left-1/2 md:-translate-x-1/2 w-2 h-2 rounded-none rotate-45 ${
                            isLight ? "bg-accent" : "bg-primary"
                        }`} />

                        {/* Content Card */}
                        <div className={`w-full md:w-5/12 ml-8 md:ml-0 p-8 border transition-all ${
                            isLight ? "bg-accent/5 border-accent/10" : "bg-primary/5 border-primary/10"
                        }`}>
                            <span className={`text-[10px] font-black tracking-[0.2em] uppercase opacity-50 ${
                                isLight ? "text-accent" : "text-primary"
                            }`}>
                                {item.period}
                            </span>
                            <h3 className="text-xl font-black uppercase mt-2">{item.title}</h3>
                            <p className={`text-xs font-bold uppercase mb-4 ${
                                isLight ? "text-accent/70" : "text-primary/70"
                            }`}>
                                {item.focus}
                            </p>
                            <p className="text-sm leading-relaxed opacity-80">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;