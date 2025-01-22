import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { SiWebflow } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

const CallToAction = () => {
    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: {
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                },
                opacity: { duration: 5 },
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
            className="py-52 relative text-white px-8 lg:px-40 group overflow-hidden"
            style={{
                backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
            }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            id="cta"
        >
            {/* Hover Effect Layer */}
            <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    backgroundImage: `radial-gradient(circle, rgba(138, 43, 226, 0.5) 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                }}
            ></div>

            <motion.div
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center z-10"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.1 }}
            >
                {/* Left Content */}
                <div className="space-y-8">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-nunito font-700 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-transparent bg-clip-text"
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
                        className="text-md lg:text-lg text-gray-300 font-quicksand"
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
                    <div className="flex gap-4 mt-4">
                        <motion.a
                            href="https://wa.me/905522704879"
                            className="px-6 py-3 bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-600 transition-transform transform"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 4px 20px rgba(91, 33, 182, 0.5)",
                                duration: 0.5,
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get in Touch
                        </motion.a>
                        <motion.a
                            href="/portfolio"
                            className="px-6 py-3 bg-gray-700 rounded-full text-white font-semibold hover:bg-gray-800 transition-transform transform"
                            whileHover={{
                                scale: 1.05,
                                duration: 0.5,
                                boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)",
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Portfolio
                        </motion.a>
                    </div>
                    <p className="text-zinc-400 text-sm mt-2">
                        Feel free to email us directly. We’ll get back to you as soon as possible.
                    </p>
                    {/* Social Icons */}
                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-400 mb-4">Connect with me:</h3>
                        <div className="flex gap-6">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl text-gray-400 transition-transform transform hover:scale-110 hover:text-yellow-500"
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
                    className="flex justify-center"
                >
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-72 h-72"
                    >
                        <motion.path
                            d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z"
                            stroke="url(#gradient)"
                            strokeWidth="0.5"
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
