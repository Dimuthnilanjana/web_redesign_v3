'use client'
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Preloader = () => {
    const pathControls = useAnimation();
    const preloaderControls = useAnimation();
    const textControls = useAnimation();

    useEffect(() => {
        const animateSequence = async () => {
            // Text fade and move up
            await textControls.start({
                y: -100,
                opacity: 0,
                transition: { delay: 1.5, duration: 0.5 },
            });

            // Curve animation
            await pathControls.start({
                d: "M0 502S175 272 500 272s500 230 500 230V0H0Z",
                transition: { duration: 0.5, ease: "easeIn" },
            });

            // Flat animation
            await pathControls.start({
                d: "M0 2S175 1 500 1s500 1 500 1V0H0Z",
                transition: { duration: 0.5, ease: "easeOut" },
            });

            // Slide the preloader out of view
            await preloaderControls.start({
                y: -1500,
                transition: { duration: 0.8, ease: "easeInOut" },
            });

            // Hide the preloader
            await preloaderControls.start({
                zIndex: -1,
                display: "none",
                transition: { duration: 0 },
            });
        };

        animateSequence();
    }, [pathControls, preloaderControls, textControls]);

    return (
        <motion.div
            className="preloader"
            animate={preloaderControls}
            initial={{ y: 0, display: "flex" }}
        >
            <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <motion.path
                    d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
                    animate={pathControls}
                    initial={{
                        d: "M0,1005S175,995,500,995s500,5,500,5V0H0Z",
                    }}
                    style={{ fill: "#000" }}
                />
            </svg>
            <div className="preloader-heading">
                <motion.div
                    className="load-text"
                    initial={{ y: 0, opacity: 1 }}
                    animate={textControls}
                >
                    <motion.span>L</motion.span>
                    <motion.span>o</motion.span>
                    <motion.span>a</motion.span>
                    <motion.span>d</motion.span>
                    <motion.span>i</motion.span>
                    <motion.span>n</motion.span>
                    <motion.span>g</motion.span>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
