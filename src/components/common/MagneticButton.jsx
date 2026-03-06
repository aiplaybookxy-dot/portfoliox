// import React, { useRef } from 'react';
// import { motion, useSpring, useTransform } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { useMousePosition } from '../../hooks/useMousePosition';

// const MagneticButton = () => {
//     const navigate = useNavigate();
//     const ref = useRef(null);
//     const { x, y } = useMousePosition(ref);

//     // Smooth out the movement using a spring
//     const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
//     const mouseX = useSpring(0, springConfig);
//     const mouseY = useSpring(0, springConfig);

//     // Only move the button if the mouse is within 100px
//     const isNear = Math.sqrt(x * x + y * y) < 100;

//     React.useEffect(() => {
//         mouseX.set(isNear ? x * 0.4 : 0);
//         mouseY.set(isNear ? y * 0.4 : 0);
//     }, [x, y, isNear, mouseX, mouseY]);

//     return (
//         <div className="relative flex justify-center items-center">
//             <motion.button
//                 ref={ref}
//                 style={{ x: mouseX, y: mouseY }}
//                 onClick={() => navigate('/portfolio')}
//                 className="group relative px-12 py-5 bg-white/25 text-black font-display overflow-hidden rounded-3xl transition-colors duration-500 hover:text-black"
//             >
//                 {/* The "Liquid" Background fill */}
//                 <span className="absolute inset-0 backdrop-blur-xl bg-gray-100/20 shadow-lg translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />

//                 {/* The Text */}
//                 <span className="relative z-10 font-bold uppercase tracking-[0.2em] text-sm">
//                     See Portfolio
//                 </span>

//                 {/* Subtle dot that follows mouse inside button */}
//                 <motion.div
//                     className="absolute z-0 w-2 h-2 bg-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-100"
//                     style={{ x: x * 0.1, y: y * 0.1 }}
//                 />
//             </motion.button>
//         </div>
//     );
// };

// export default MagneticButton;