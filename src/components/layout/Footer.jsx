import { useTheme } from "../../context/ThemeContext";
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';


const Footer = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const contact = portfolioData.contacts; // Pull the object directly

    return (
        <footer className={`py-12 border-t font-display text-center ${
            isLight ? "border-accent/10 text-accent/40" : "border-primary/10 text-primary/40"
        }`}>
            <div className="flex justify-center gap-6 pb-6">
                <motion.a 
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    href={contact.email}
                    className="transition-opacity"
                >
                    <Mail size={20} />
                </motion.a>
                
                <motion.a 
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    href={contact.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-opacity"
                >
                    <Linkedin size={20} />
                </motion.a>
                
                <motion.a 
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    href={contact.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-opacity"
                >
                    <Github size={20} />
                </motion.a>
            </div>

            <div className="text-[10px] font-black uppercase tracking-[0.4em]">
                © {new Date().getFullYear()} VIDALAB ENGINEERED
            </div>
        </footer>
    );
}

export default Footer;