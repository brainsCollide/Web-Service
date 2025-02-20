import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { SiWebflow } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { Link } from "react-scroll";

const CallToAction = () => {
    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: {
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                },
            },
        },
    };

    const socialLinks = [
        {
            name: "GitHub",
            icon: <FaGithub />,
            url: "https://github.com/brainsCollide",
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/fauzan-asyraf/",
        },
        {
            name: "Fiverr",
            icon: <TbBrandFiverr />,
            url: "https://www.fiverr.com/s/o8PKYKX",
        },
        {
            name: "Webflow",
            icon: <SiWebflow />,
            url: "https://webflow.com/brainsCollide",
        },
    ];

    return (
        <motion.section
    className="min-h-screen flex justify-center pt-20 text-white px-4 sm:px-8 lg:px-16 xl:px-56 group overflow-hidden"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1 }}
    id="cta"
>
    <motion.div
        className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.1 }}
    >
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8">
            <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-nunito font-700 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-transparent bg-clip-text"
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                    duration: 1,
                    delay: 0.1,
                    ease: "easeOut",
                }}
            >
                Let’s Build Something Amazing Together!
            </motion.h2>
            <motion.p
                className="text-sm sm:text-md lg:text-lg text-gray-300 font-quicksand"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: "easeOut",
                }}
            >
                Whether you're looking to create a seamless user experience or a lightning-fast website, I’m here to make it happen. Let’s collaborate to turn your vision into reality.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">
                <motion.a
                    href="https://wa.me/905522704879"
                    className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-600 transition-transform transform text-center"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 4px 20px rgba(91, 33, 182, 0.5)",
                        duration: 0.5,
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get in Touch
                </motion.a>
                <Link
                    to="projects" // ID of the section to scroll to
                    smooth={true} // Enable smooth scrolling
                    duration={500} // Duration of the scroll animation
                    offset={-50} 
                    className="w-full cursor-pointer sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gray-700 rounded-full text-white font-semibold hover:bg-gray-800 transition-transform transform text-center"
                    whileHover={{
                        scale: 1.05,
                        duration: 0.5,
                        boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    Check Our Products
                </Link>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
                Feel free to email us directly. We’ll get back to you as soon as possible.
            </p>
            {/* Social Icons */}
            <div className="mt-6 lg:mt-8">
                <h3 className="text-base sm:text-lg font-medium text-gray-400 mb-4">Connect with me:</h3>
                <div className="flex gap-4 sm:gap-6">
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl sm:text-2xl text-gray-400 transition-transform transform hover:scale-110 hover:text-yellow-500"
                            whileHover={{
                                scale: 1.2,
                                rotate: 10,
                                boxShadow: "0px 4px 20px rgba(91, 33, 182, 0.5)",
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>

        {/* Right Content */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
                duration: 1,
                delay: 0.3,
                ease: "easeOut",
            }}
            className="flex justify-center mt-8 lg:mt-0"
        >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-40 h-40 sm:w-56 sm:h-56"
            >
                <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                    stroke="url(#gradient)"
                    strokeWidth="1.5"
                    fill="none"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                </defs>
            </motion.svg>
        </motion.div>
    </motion.div>
</motion.section>
    );
};

export default CallToAction;
