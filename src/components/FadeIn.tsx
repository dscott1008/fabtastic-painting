import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
    children: ReactNode
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <div style={{overflow: "hidden"}}>
            <div
                ref={ref}
                style={{
                    transition: "opacity 1000ms, transform 1000ms",
                    opacity: inView ? 1 : 0,
                    transform: `translateX(${inView ? 0 : -100}px)`,
                }}
            >
                { children }
            </div>
        </div>
        
    )
}

export default FadeIn
