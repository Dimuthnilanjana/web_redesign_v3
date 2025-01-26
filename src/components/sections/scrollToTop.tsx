'use client'
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.clientHeight;
            const scrollableHeight = documentHeight - windowHeight;
            const scrollPercentage = (scrollPosition / scrollableHeight) * 100;
            setScrollPercentage(scrollPercentage);
            setShowBackToTop(scrollPosition > 350);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <div onClick={scrollToTop} className={`${showBackToTop ? "active-progress" : ""} progress-wrap cursor-pointer`}>
            <i className="ri-arrow-up-s-line"></i>
            <svg
                className="w-11 h-11"
                width="100%"
                height="100%"
                viewBox="-1 -1 102 102"
                stroke="#ff4f01"
                strokeWidth={5}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={{
                        strokeDasharray: "307.919, 307.919",
                        strokeDashoffset: 307.919 - (scrollPercentage * 307.919) / 100,
                    }}
                ></path>
            </svg>
        </div>
    );
}

export default ScrollToTop