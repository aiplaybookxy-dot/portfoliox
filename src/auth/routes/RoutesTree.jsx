import React, { memo, lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// 1. NON-LAZY IMPORTS
import { ThemeProvider, useTheme } from '../../context/ThemeContext'; // Import useTheme here
import Welcome from '../../welcome';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

// 2. LAZY IMPORTS
const Hero = lazy(() => import('../../components/sections/Hero'));
const About = lazy(() => import('../../components/sections/About'));
const Projects = lazy(() => import('../../components/sections/Projects'));
const Skills = lazy(() => import('../../components/sections/Skills'));
const Experience = lazy(() => import('../../components/sections/Experience'));
const Contact = lazy(() => import('../../components/sections/Contact'));

const MemoizedAbout = memo(About);
const MemoizedSkills = memo(Skills);
const MemoizedExperience = memo(Experience);

// 4. UPDATED LOADING SCREEN (Linked to Theme)
const LoadingScreen = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    return (
        <div className={`h-screen w-full flex items-center justify-center transition-colors duration-500 ${
            isLight ? "bg-primary" : "bg-accent"
        }`}>
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className={`w-12 h-12 border-4 border-t-transparent rounded-full ${
                    isLight ? "border-accent" : "border-primary"
                }`}
            />
        </div>
    );
};

// 5. UPDATED PORTFOLIO LAYOUT (Linked to Theme)
const PortfolioLayout = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            // REMOVED: bg-slate-50 dark:bg-slate-900
            // ADDED: Transparent so it uses ThemeProvider's background
            className="min-h-screen transition-colors duration-500"
        >
            <Navbar />
            <Suspense fallback={<LoadingScreen />}>
                <main className="container mx-auto px-4">
                    <Hero />
                    <MemoizedAbout />
                    <Projects />
                    <MemoizedSkills />
                    <MemoizedExperience />
                    <Contact />
                </main>
            </Suspense>
            <Footer />
        </motion.div>
    );
};

function RoutesTree() {
    const location = useLocation();

    return (
        <ThemeProvider>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={
                        <motion.div exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
                            <Welcome />
                        </motion.div>
                    } />
                    <Route path="/portfolio" element={<PortfolioLayout />} />
                </Routes>
            </AnimatePresence>
        </ThemeProvider>
    );
}

export default RoutesTree;