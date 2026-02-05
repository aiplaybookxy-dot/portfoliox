import { useState, useEffect, useCallback } from 'react';

export const useScrollSpy = (ids, offset = 100) => {
    const [activeId, setActiveId] = useState('');

    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY + offset;

        const selected = ids.find((id) => {
            const element = document.getElementById(id);
            if (!element) return false;
            return (
                scrollPosition >= element.offsetTop &&
                scrollPosition < element.offsetTop + element.offsetHeight
            );
        });

        if (selected !== activeId) {
            setActiveId(selected || '');
        }
    }, [ids, offset, activeId]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return activeId;
};