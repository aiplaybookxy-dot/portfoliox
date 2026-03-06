import { motion } from 'framer-motion';
import { useTheme } from "../../context/ThemeContext";

const Hero = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    return (
        <section id="hero" className="pt-25 font-display flex items-center justify-center relative overflow-hidden">
            {/* Animated Background Decor - Now using your palette */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full blur-[120px] animate-pulse transition-colors duration-700 ${
                    isLight ? "bg-accent/10" : "bg-primary/10"
                }`} />
                <div className={`absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full blur-[120px] animate-pulse transition-colors duration-700 ${
                    isLight ? "bg-accent/5" : "bg-primary/5"
                }`} />
            </div>

            <motion.div
                className="z-10 max-w-5xl px-6 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl font-black tracking-tighter mb-8 uppercase">
                    Full Stack <br /> 
                    <span className={isLight ? "text-accent" : "text-primary"}>Developer</span>
                </motion.h1>

                <motion.p variants={itemVariants} className="font-bold md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed opacity-90">
                    I build full-stack web applications with <span className={`underline decoration-2 ${isLight ? "decoration-accent/30" : "decoration-primary/30"}`}>Django REST APIs</span> and
                    <span className={`underline decoration-2 ${isLight ? "decoration-accent/30" : "decoration-primary/30"}`}> React frontends</span>.
                </motion.p>

                <motion.p variants={itemVariants} className={`font-bold tracking-[0.2em] text-[10px] md:text-xs mb-10 uppercase ${isLight ? "text-accent/60" : "text-primary/60"}`}>
                    Experience with authentication, role-based access, and backend validation.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
                    <a href="#projects" className={`px-10 py-4 font-black uppercase tracking-widest text-sm rounded-none transition-all hover:scale-105 ${
                        isLight ? "bg-accent text-primary" : "bg-primary text-accent"
                    }`}>
                        Explore Work
                    </a>
                    <a href="#contact" className={`px-10 py-4 font-black uppercase tracking-widest text-sm rounded-none border-2 transition-all hover:opacity-70 ${
                        isLight ? "border-accent text-accent" : "border-primary text-primary"
                    }`}>
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};
export default Hero;