import { motion } from "framer-motion";
import { SiTailwindcss, SiJavascript, SiMongodb, SiNodedotjs  } from "react-icons/si";
import { FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa";

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
            className="relative flex flex-col justify-center py-52 px-6 bg-gradient-to-br from-[#020617] via-[#0e1534] to-[#131528]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
        >
            {/* Animated Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/5 opacity-10 animate-shimmer pointer-events-none"></div>
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    className="text-center mb-16 relative z-10"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-[#13FFAA] via-[#1E67C6] to-[#CE84CF] text-transparent bg-clip-text">
                        Projects
                    </h1>
                    <p className="text-lg mt-4 text-zinc-400">
                        Explore my latest and most exciting projects below.
                    </p>
                </motion.div>
            </div>
            {/* Section Title */}

            {/* Project Grid */}
            <motion.div
                className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
                            staggerChildren: 0.5,
                        },
                    },
                }}
            >
                {projects.map((project, index) => (
                    <motion.div
                    key={index}
                    className="flex flex-col p-4 sm:p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    {/* Project Image */}
                    <div className="flex overflow-hidden rounded-lg mb-4 justify-center">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-98 sm:h-52 transition-transform duration-500"
                        />
                    </div>
                
                    {/* Project Title */}
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-white text-center">
                        {project.title}
                    </h3>
                
                    {/* Project Description */}
                    <p className="text-gray-300 mb-4 text-sm sm:text-base text-center">
                        {project.description}
                    </p>
                
                    {/* Tech Icons */}
                    <div className="flex flex-wrap justify-center space-x-2 mb-4">
                        {project.techs.map((tech, i) => (
                            <div
                                key={i}
                                className="text-3xl flex items-center justify-center w-10 h-10 rounded-full shadow-lg"
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
                            className="px-4 py-2 text-sm sm:text-base font-semibold rounded-lg bg-indigo-950 hover:bg-gray-900 transition-all"
                        >
                            View Live
                        </a>
                        <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm sm:text-base font-semibold rounded-lg bg-indigo-950 hover:bg-gray-900 transition-all"
                        >
                            View Code
                        </a>
                    </div>
                </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Projects;

