import { useState } from 'react'; // ADD THIS
import { useForm } from '../../hooks/useForm';
import Section from '../common/Section';
import { useTheme } from "../../context/ThemeContext";
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const { theme, showNotification } = useTheme();
    const isLight = theme === 'light';

    const validate = (values) => {
        let errors = {};
        if (!values.name) errors.name = "Name is required";
        if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = "Invalid email";
        if (values.message.length < 10) errors.message = "Message too short";
        return errors;
    };

    const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm(
        { name: '', email: '', message: '' },
        validate
    );

    const sendMessage = async (data) => {
        // RUTHLESS CHECK: Are these actually defined in your .env?
        const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
        const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

        const text = `🚀 *New Lead from Vidalab*\n\n` +
            `👤 *Name:* ${data.name}\n` +
            `📧 *Email:* ${data.email}\n` +
            `📝 *Message:* ${data.message}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                    parse_mode: 'Markdown'
                })
            });

            if (!response.ok) throw new Error('API Error');

            showNotification("✓ Message sent success");
        } catch (err) {
            showNotification("✕ Message Failed");
        }
    };

    const inputClasses = `w-full px-4 py-4 bg-transparent border-b-2 transition-all outline-none rounded-none font-bold ${isLight ? "border-accent/20 focus:border-accent text-accent" : "border-primary/20 focus:border-primary text-primary"
        }`;

    return (
        <Section id="contact" className="max-w-4xl mx-auto font-display py-24">
            <h2 className={`text-4xl md:text-6xl font-black mb-16 uppercase tracking-tighter ${isLight ? "text-accent" : "text-primary"}`}>
                Start a <br /> Conversation
            </h2>

            <form onSubmit={(e) => handleSubmit(e, sendMessage)} className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
                <div className="space-y-10">
                    <div>
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Your Name</label>
                        <input name="name" value={values.name} onChange={handleChange} className={inputClasses} placeholder="JOHN DOE" />
                        {errors.name && <p className="text-red-500 text-[10px] mt-2 font-black uppercase">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Email Address</label>
                        <input name="email" value={values.email} onChange={handleChange} className={inputClasses} placeholder="EMAIL@EXAMPLE.COM" />
                        {errors.email && <p className="text-red-500 text-[10px] mt-2 font-black uppercase">{errors.email}</p>}
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Project Details</label>
                    <textarea name="message" rows="5" value={values.message} onChange={handleChange} className={`${inputClasses} grow`} placeholder="WHAT ARE WE BUILDING?"></textarea>
                    {errors.message && <p className="text-red-500 text-[10px] mt-2 font-black uppercase">{errors.message}</p>}

                    <button
                        disabled={isSubmitting}
                        className={`mt-8 py-5 px-10 font-black uppercase tracking-widest text-sm transition-all active:scale-95 ${isLight ? "bg-accent text-primary" : "bg-primary text-accent"
                            } disabled:opacity-50`}
                    >
                        {isSubmitting ? "TRANSMITTING..." : "SEND INQUIRY"}
                    </button>
                </div>
            </form>
        </Section>
    );
};

export default Contact;