import { useState, useEffect } from "react";

export const useMousePosition = (ref) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!ref.current) return;

            const { clientX, clientY } = e;
            const { left, top, width, height } = ref.current.getBoundingClientRect();

            // Calculate center of the button
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            // Distance from center
            const x = clientX - centerX;
            const y = clientY - centerY;

            setPosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [ref]);

    return position;
};