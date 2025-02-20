import { motion } from "framer-motion";
import { SiTailwindcss, SiMongodb, SiNodedotjs  } from "react-icons/si";
import { FaReact} from "react-icons/fa";

const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing my skills, projects, and experience.",
        image: "/projects/portfolioWeb/thumbnail.png",
        liveLink: "https://oz-dev.vercel.app",
        codeLink: "https://github.com/brainsCollide/React-Porto",
        techs: [
            <FaReact className="text-[#61DAFB]" />,
            <SiTailwindcss className="text-[#06B6D4]" />,
            
        ],
    },
    {
        title: "Company Website",
        description: "A website for a fictional company to showcase their products and services.",
        image: "/projects/companyWeb/thumbnail.png",
        liveLink: "https://ms-web-five.vercel.app",
        codeLink: "https://github.com/brainsCollide/Mulia-web",
        techs: [
            <FaReact className="text-[#61DAFB]" />,
            <SiTailwindcss className="text-[#06B6D4]" />,
            
        ],
    },
    {
        title: "Finance App",
        description: "Full-stack application for tracking expenses and managing budgets.",
        image: "/projects/trackingApp/thumbnail.png",
        liveLink: "https://dashboard-tracker33.vercel.app",
        codeLink: "https://github.com/brainsCollide/Dashboard",
        techs: [
            <SiNodedotjs className="text-[#339933]" />,
            <SiMongodb className="text-[#47A248]" />,
            <FaReact className="text-[#61DAFB]" />,
            <SiTailwindcss className="text-[#06B6D4]" />,
        ],
    },
];

const Projects = () => {
    return (
        <motion.section
            id="projects"
            className="relative flex flex-col justify-center py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#000000] to-[#33085e]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
        >
            {/* Animated Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/5 opacity-10 animate-shimmer pointer-events-none"></div>

            {/* Section Header */}
            <motion.div
                className="text-center mb-12 sm:mb-16 lg:mb-20 relative z-10"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#13FFAA] via-[#1E67C6] to-[#CE84CF] text-transparent bg-clip-text">
                    My Projects
                </h1>
                <p className="text-base sm:text-lg mt-3 sm:mt-4 text-zinc-400">
                    Check out my latest work and featured projects.
                </p>
            </motion.div>

            {/* Project Grid */}
            <motion.div
                className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 1,
                            staggerChildren: 0.3,
                        },
                    },
                }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="group flex flex-col w-full sm:w-auto p-4 sm:p-5 lg:p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-white/20 border border-white/10"
                        whileHover={{ scale: 1.05 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        {/* Project Image */}
                        <div className="relative overflow-hidden rounded-lg mb-4">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="object-cover w-full h-48 sm:h-52 transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-80 transition-opacity group-hover:opacity-100"></div>
                        </div>

                        {/* Project Title */}
                        <h3 className="text-lg sm:text-xl font-semibold text-white text-center mb-2">
                            {project.title}
                        </h3>

                        {/* Project Description */}
                        <p className="text-gray-300 text-center text-sm sm:text-base mb-4">
                            {project.description}
                        </p>

                        {/* Tech Icons */}
                        <div className="flex flex-wrap justify-center space-x-3 mb-4">
                            {project.techs.map((tech, i) => (
                                <div
                                    key={i}
                                    className="text-2xl flex items-center justify-center w-9 h-9 bg-gray-800/50 rounded-full shadow-md border border-gray-600 transition-all hover:scale-110"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-center space-x-4 mt-auto">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 sm:px-5 py-2 text-sm sm:text-base font-semibold rounded-lg bg-[#1E67C6] hover:bg-[#13FFAA] transition-all text-white"
                            >
                                Live Demo
                            </a>
                            <a
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 sm:px-5 py-2 text-sm sm:text-base font-semibold rounded-lg bg-gray-800 hover:bg-gray-900 transition-all text-white"
                            >
                                Code
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Projects;


