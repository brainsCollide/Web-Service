import { motion, useMotionTemplate } from "framer-motion";

const Hero = ({ color }) => {
    const boxShadows = useMotionTemplate`0px 4px 24px ${color}`; // Dynamic color

    const logos = {
        react: "/logos/technologies/react-2.svg",
        nodejs: "/logos/technologies/nodejs-icon.svg",
        mongodb: "/logos/technologies/mongodb-icon-1.svg",
        tailwind: "/logos/technologies/tailwindcss.svg",
    };

    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center px-6"
            id="hero"
        >
            {/* Headline */}
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-raleway font-700  leading-tight text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            >
                Your Vision, Our Code
            </motion.h1>

            {/* Subheadline */}
            <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                className="mt-16 text-xl md:text-xl max-w-2xl mx-auto text-center font-quicksand text-gray-300"
            >
                Blending creativity and technology, we design innovative, responsive websites that reflect your brand's essence and keep you ahead in today’s digital landscape.
            </motion.p>

            {/* Tech Stack Logos */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.8 }}
                className="mt-20 w-full"
            >
                <div className="flex flex-row justify-center gap-x-20">
                    {Object.keys(logos).map((key, index) => (
                        <motion.img
                            key={key}
                            src={logos[key]}
                            alt={`${key} logo`}
                            className="h-12 md:h-16 w-auto"
                            animate={{
                                y: ["0%", "-20%", "0%"], // Floating effect
                                opacity: [1, 0.9, 1], // Slight pulsing
                            }}
                            transition={{
                                duration: 3, // Smooth floating animation
                                repeat: Infinity, // Infinite loop
                                repeatType: "reverse", // Reverse for seamless looping
                                ease: "easeInOut", // Smooth easing
                                delay: index * 0.5, // Staggered start
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
