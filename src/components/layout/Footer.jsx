import { useTheme } from "../../context/ThemeContext";


const Footer = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <footer className={`py-12 border-t font-display text-center ${
            isLight ? "border-accent/10 text-accent/40" : "border-primary/10 text-primary/40"
        }`}>
            <div className="text-[10px] font-black uppercase tracking-[0.4em]">
                © {new Date().getFullYear()} VIDALAB ENGINEERED 
            </div>
        </footer>
    );
}

export default Footer;