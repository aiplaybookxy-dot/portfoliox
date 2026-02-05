import { useState, useEffect } from "react"; // Added useEffect
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { useScrollSpy } from "../../hooks/useScrollProgress";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon, AlertCircle } from "lucide-react"; // Added AlertCircle

const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
];

const Navbar = ({ errorMsg }) => { // Can accept errorMsg from a global state
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme, notification } = useTheme();
    const activeSection = useScrollSpy(navLinks.map((l) => l.id));
    const isLight = theme === 'light';

    return (
        <>
            <AnimatePresence>
                {notification && (
                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        exit={{ y: -100 }}
                        className={`fixed top-0 left-0 w-full z-110 py-2 px-6 flex items-center justify-center gap-2 text-[10px] font-display font-black uppercase tracking-[0.2em] shadow-lg 
                            ${notification.type === 'error' ? "bg-red-600 text-white" : "bg-green-600 text-white"
                            }`}
                    >
                        <AlertCircle size={14} />
                        {notification.text}
                    </motion.div>
                )}
            </AnimatePresence>

            <nav
                className={`fixed font-display top-0 w-full z-100 backdrop-blur-md border-b transition-all duration-500 
                    ${notification ? "mt-8" : "mt-0" 
                    } ${isLight ? "bg-primary/80 border-accent/10 text-accent" : "bg-accent/80 border-primary/10 text-primary"}`}
            >
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* LOGO */}
                    <Link to="/">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-2xl uppercase font-black cursor-pointer tracking-tighter"
                        >
                            vidalab<span className={isLight ? "text-black" : "text-white"}>.</span>
                        </motion.div>
                    </Link>

                    <div className="flex items-center gap-4">
                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8 mr-4">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.id;
                                return (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`relative py-1 text-xs font-bold uppercase tracking-[0.2em] transition-colors ${isActive
                                            ? (isLight ? "text-accent" : "text-primary")
                                            : (isLight ? "text-accent/60 hover:text-accent" : "text-primary/60 hover:text-primary")
                                            }`}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-underline"
                                                className={`absolute -bottom-0.5 left-0 w-full h-px ${isLight ? "bg-accent" : "bg-primary"}`}
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </a>
                                );
                            })}
                        </div>

                        {/* MOBILE HAMBURGER */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>

                        {/* THEME TOGGLE */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full border transition-all hover:scale-110 active:scale-90 ${isLight ? "border-accent/10 bg-accent/5" : "border-primary/10 bg-primary/5"
                                }`}
                        >
                            {isLight ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`md:hidden border-b overflow-hidden ${isLight ? "bg-primary border-accent/10" : "bg-accent border-primary/10"}`}
                        >
                            <div className="flex flex-col p-6 gap-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-lg font-bold uppercase tracking-widest ${isLight ? "text-accent" : "text-primary"}`}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;