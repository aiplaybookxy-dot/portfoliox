import Section from '../common/Section';
import { useTheme } from "../../context/ThemeContext";

const StatBox = ({ label, value, isLight }) => (
    <div className={`p-6 sm:p-4  border transition-colors duration-500 ${isLight ? "bg-accent/5 border-accent/10" : "bg-primary/5 border-primary/10"
        }`}>
        <div className={`text-3xl font-black mb-1 ${isLight ? "text-accent" : "text-primary"}`}>{value}</div>
        <div className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isLight ? "text-accent/50" : "text-primary/50"}`}>{label}</div>
    </div>
);

const About = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <Section id="about" className='font-display'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className={`text-4xl md:text-5xl font-black uppercase tracking-tighter ${isLight ? "text-accent" : "text-primary"}`}>
                        Building <br /> Full-Stack Web Apps
                    </h2>

                    <p className="text-lg leading-relaxed opacity-80">
                        I’m a <strong className="font-black">Junior Full-Stack Developer</strong> working with
                        <strong className="font-black"> React and Django</strong>.
                        I build full-stack web applications with REST APIs, authentication, and clean frontend architecture.
                        Currently focused on improving my skills while building real-world projects.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4 sm:gap-3">
                        <StatBox label="Stack" value="React & Django" isLight={isLight} />
                        <StatBox label="Projects" value="5+" isLight={isLight} />
                        <StatBox label="Status" value="Open to Internship" isLight={isLight} />
                    </div>
                </div>

                <div className="relative group">
                    {/* The Glow Effect */}
                    <div className={`absolute -inset-4 rounded-full blur-3xl opacity-20 transition duration-1000 ${isLight ? "bg-accent" : "bg-primary"
                        }`}></div>

                    <div className={`relative aspect-square overflow-hidden border-2 ${isLight ? "bg-accent/10 border-accent/20" : "bg-primary/10 border-primary/20"
                        }`}>
                        <div className="w-full h-full flex items-center justify-center font-mono opacity-40">
                            [Headshot.jpg]
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;