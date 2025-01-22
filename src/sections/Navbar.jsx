import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaHome, FaBullhorn, FaCogs, FaProjectDiagram } from "react-icons/fa";

const navLinks = [
    { id: "hero", label: "Home", icon: <FaHome /> },
    { id: "cta", label: "CTA", icon: <FaBullhorn /> },
    { id: "services", label: "Services", icon: <FaCogs /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
];

// Sidebar background animation
const sidebarVariants = {
    open: {
        clipPath: "circle(150% at calc(50% + 20px) 40px)", 
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
            duration: 0.8,
        },
    },
    closed: {
        clipPath: "circle(25px at calc(100% - 40px) 40px)", 
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 40,
            duration: 1,
        },
    },
};

// Navigation item animation
const navVariants = {
    open: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const navItemVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2, ease: "easeIn" } },
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="fixed top-0 left-0 w-full z-50"
        >
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between items-center px-6 py-7 bg-[rgba(0,0,0,0.6)] backdrop-blur-md text-white shadow-lg">
            <a
                href="#hero"
                className="text-3xl font-raleway font-400 bg-gradient-to-br from-[#1e3a47] via-[#285e61] to-[#3b8d99] text-transparent bg-clip-text hover:scale-110 transition-transform duration-300"
            >
                CodeNext
            </a>
                <ul className="flex space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.id} className="group">
                            <Link
                                to={link.id}
                                smooth="true"
                                duration={900}
                                offset={-80} // Adjust for fixed navbar height
                                className="flex items-center space-x-2 text-lg font-quicksand hover:text-blue-400 transition cursor-pointer"
                            >
                                <span>{link.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
                {/* Sidebar Background */}
                <motion.div
                    className="fixed top-0 right-0 w-1/2 h-full bg-gradient-to-br from-black via-stone-900 to-orange-900 z-40"
                    variants={sidebarVariants}
                />

                {/* Navigation */}
                <motion.ul
                    className="absolute top-16 right-8 space-y-10 mt-10 text-right text-white z-50"
                    variants={navVariants}
                >
                    {navLinks.map((link) => (
                        <motion.li
                            to={link.id}
                            smooth="true"
                            duration={500}
                            offset={-50}
                            key={link.id}
                            variants={navItemVariants}
                            className="group flex flex-row-reverse items-center space-x-reverse space-x-4 group-hover:text-blue-400 transition-transform"
                        >
                            {/* Icon */}
                            <span className="text-xl duration-300 group-hover:scale-110 group-hover:text-blue-400 transition-transform">
                                {link.icon}
                            </span>

                            {/* Text */}
                            <Link
                                to={link.id}
                                smooth="true"
                                duration={900}
                                offset={-80} // Adjust for fixed navbar height
                                className="text-xl font-quicksand group-hover:scale-110 duration-300 group-hover:text-blue-400 hover:cursor-pointer transition-transform"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute top-7 right-7 z-50 focus:outline-none"
                >
                    <svg width="23" height="23" viewBox="0 0 23 23">
                        <motion.path
                            fill="transparent"
                            strokeWidth="3"
                            stroke="white"
                            strokeLinecap="round"
                            variants={{
                                closed: { d: "M 2 2.5 L 20 2.5" },
                                open: { d: "M 3 16.5 L 17 2.5" },
                            }}
                        />
                        <motion.path
                            fill="transparent"
                            strokeWidth="3"
                            stroke="white"
                            strokeLinecap="round"
                            d="M 2 9.423 L 20 9.423"
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 },
                            }}
                            transition={{ duration: 0.1 }}
                        />
                        <motion.path
                            fill="transparent"
                            strokeWidth="3"
                            stroke="white"
                            strokeLinecap="round"
                            variants={{
                                closed: { d: "M 2 16.346 L 20 16.346" },
                                open: { d: "M 3 2.5 L 17 16.346" },
                            }}
                        />
                    </svg>
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
