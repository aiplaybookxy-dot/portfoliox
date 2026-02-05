import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

// ... keep imports
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('portfolio-theme');
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    // ADD THIS: Global Notification State
    const [notification, setNotification] = useState(null);

    const showNotification = (text, type = 'success') => {
        setNotification({ text, type });
        setTimeout(() => setNotification(null), 5000);
    };

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, notification, showNotification }}>
            <div className={`min-h-screen transition-colors duration-500 
            ${theme === 'light' ? 'bg-primary text-accent' : 'bg-accent text-primary'}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};