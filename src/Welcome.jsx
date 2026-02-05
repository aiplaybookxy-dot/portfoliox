import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MagneticButton from './components/common/MagneticButton';

const Welcome = () => {
    const navigate = useNavigate();

    const handleEnter = () => {
        navigate('/portfolio');
    };

    const message = "Engineering the future of the web. Focused on high-performance React applications and seamless user interactions. Ready to build the next big thing?";

    // Split the message into words for a staggered animation
    const words = message.split(" ");

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white">

            {/* The Bordered Box with "Breathing" Background */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="
                    shadow-2xl bg-gray-300 shadow-black p-5 md:p-16 
                    flex flex-col items-center justify-center gap-5 md:gap-8 
                    max-w-xl mx-4
                    
                "
            >
                {/* THE BREATHING LOGIC */}
                {/* animate-gradient bg-linear-to-r from-red-400 via-green-400 to-blue-400 */}

                <div className='flex items-center justify-start gap-6'>
                    {/* 1. THE IMAGE: Circular, bordered, and fading in from the left */}
                    <motion.img
                        src="/headshotxx.jpeg" // Replace with your actual path
                        alt="VDG"
                        initial={{ opacity: 0, x: -100, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{
                            duration: 1.50,
                            ease: "easeOut"
                        }}
                        className="w-16 h-16 ml-5 md:ml-0 md:w-24 md:h-24 rounded-full border-2 border-black object-cover"
                    />

                    {/* 2. THE NAME: Sliding in behind the image */}
                    <motion.h1
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1.5,
                            ease: [0.19, 1, 0.22, 1] // Custom "Power 4" ease for a more luxury feel
                        }}
                        className=" ml-3 md:ml-0 font-bold md:text-3xl font-display text-blue-500 tracking-tighter"
                    >
                        Asoegwu Emmanuel Chibuike.
                    </motion.h1>
                </div>


                {/* <div className="text-center max-w-lg"> */}
                <div className="flex flex-wrap justify-center gap-x-2">
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1, // Each word appears 0.1s after the last
                                ease: "easeOut"
                            }}
                            className="text-2xl md:text-2xl font-display font-medium text-blue-500"
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>
                {/* </div> */}
                {/* <MagneticButton /> */}

                <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                        // duration: 1.5, // 1.5 seconds (long and slow)
                        delay: 0.2
                    }}
                    onClick={handleEnter}
                    className="px-8 py-2 border-2 text-blue-500 font-display font-bold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                    See Portfolio
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Welcome;