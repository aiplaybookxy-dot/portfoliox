export const portfolioData = {
    skills: [
        {
            title: "Frontend",
            items: [
                { name: "HTML5", level: "Advanced" },
                { name: "CSS", level: "Advanced" },
                { name: "JavaScript", level: "Advanced" },
                { name: "React", level: "Expert" },
                { name: "Tailwind CSS", level: "Expert" },
                { name: "Framer Motion", level: "Intermediate" }
            ]
        },
        {
            title: "Backend",
            items: [
                { name: "Django", level: "Expert" },
                { name: "Python", level: "Expert" },
                { name: "REST APIs", level: "Advanced" },
                // { name: "PostgreSQL", level: "Intermediate" }
            ]
        },
        {
            title: "Tools & DevOps",
            items: [
                { name: "Git", level: "Expert" },
                // { name: "Docker", level: "Intermediate" },
                // { name: "AWS", level: "Basic" },
                { name: "Vercel", level: "Advanced" }
            ]
        }
    ],

    milestones: [
        {
            period: "2023 - 2024",
            title: "Frontend Engineering",
            focus: "UI/UX & Performance",
            description: "Mastered Framer Motion and Tailwind CSS for high-end, responsive interfaces. Optimized Core Web Vitals for various personal projects."
        },
        {
            period: "2024 - Present",
            title: "Full-Stack Specialization",
            focus: "Django & React Integration",
            description: "Architecting scalable REST APIs and complex state management systems. Focused on secure authentication and role-based access."
        },
    ],


    projectsData: [
        {
            id: 1,
            title: 'E-Commerce Dashboard',
            tech: ['React', 'Redux', 'Tailwind'],
            category: 'Web App',
            github: '', // Link to code
            image: '' // Put images in your /public folder
        },
        // ... add more
    ],


    // Add your other data here to keep it centralized
    contact: {
        email: "your@email.com",
        linkedin: "linkedin.com/in/yourname",
        github: "github.com/yourname"
    }
};