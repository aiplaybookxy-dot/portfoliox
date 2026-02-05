import { motion } from 'framer-motion';
import Section from '../common/Section';
import { useTheme } from "../../context/ThemeContext";
import { portfolioData } from '../../data/portfolioData';


const Skills = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <Section id="skills" className='font-display py-24'>
            <h2 className={`text-4xl md:text-5xl font-black mb-16 uppercase tracking-tighter ${isLight ? "text-accent" : "text-primary"
                }`}>
                Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {portfolioData.skills.map((category, idx) => (
                    <div key={idx} className="space-y-6">
                        <h3 className={`text-xs font-black uppercase tracking-[0.3em] pb-4 border-b ${isLight ? "border-accent/20 text-accent/50" : "border-primary/20 text-primary/50"
                            }`}>
                            {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {/* CHANGE: Mapping category.items instead of category.skills */}
                            {category.items.map((skill, sIdx) => (
                                <motion.div
                                    key={sIdx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (idx * 0.1) + (sIdx * 0.05) }}
                                    className={`px-4 py-2 text-sm font-bold border transition-all hover:scale-105 ${isLight
                                            ? "bg-accent/5 border-accent/10 text-accent"
                                            : "bg-primary/5 border-primary/10 text-primary"
                                        }`}
                                >
                                    {/* CHANGE: accessing skill.name */}
                                    {skill.name}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;