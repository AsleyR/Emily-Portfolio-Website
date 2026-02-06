"use client"

import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";

interface FadeInContainerProps {
    children: ReactNode;
    className?: string;
}

const FadeInContainer = ({ children, className }: FadeInContainerProps) => {
    const animatedRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const checkVisibility = () => {
        if (animatedRef.current) {
            const rect = animatedRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Trigger animation when the component is fully in view
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                setIsVisible(true);
            }
        }
    };

    const handleScroll = () => {
        checkVisibility();
    };

    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        // Check visibility on mount
        checkVisibility();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Execute only once on mount

    return (
        <div 
            ref={animatedRef}
            className={`${className} 
            animate__animated ${isVisible ? "animate__fadeInUp block" : "hidden"}`}
        >
            {children}
        </div>
    );
}
 
export default FadeInContainer;