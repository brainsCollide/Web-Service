import { motion } from "framer-motion";

const services = [
    { title: "Web Development", description: "Build modern, responsive websites tailored to your business needs." },
    { title: "Performance Optimization", description: "Enhance website speed and efficiency for a better user experience." },
    { title: "SEO Services", description: "Boost your website's visibility to attract more organic traffic." },
    { title: "Website Rebranding", description: "Revamp your outdated website with a modern and high-performing design." },
];

const ServiceList = () => {
    return (
        <motion.div
            className="py-52 px-6 sm:px-10 md:px-16 lg:px-20 bg-gradient-to-br from-[#061d45] to-[#33085e]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            id="services"
        >
            {/* Heading */}
            <div className="container text-center mb-16 px-6 lg:px-12">
                <motion.h2
                    className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#13FFAA] via-[#1E67C6] to-[#CE84CF] text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    Our Services
                </motion.h2>
                <p className="text-lg mt-8 text-center text-gray-400 leading-relaxed max-w-3xl mx-auto">
                    We offer a range of services to help you achieve your digital goals, from creating stunning websites and optimizing their performance to enhancing visibility with SEO and rebranding for a modern look. Let us bring your ideas to life.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="group relative flex flex-col items-center p-6 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl shadow-lg transition-transform duration-300 w-full sm:w-80 hover:scale-105 hover:shadow-[0_4px_20px_rgba(19,255,170,0.5)]"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        {/* Decorative Background */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tl from-[#13FFAA]/10 via-[#1E67C6]/10 to-[#CE84CF]/10 blur-xl opacity-30 -z-10"></div>

                        {/* Icon */}
                        <div
                            className="h-16 w-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg text-white text-2xl font-bold mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
                        >
                            {service.title[0]}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-center mb-2 group-hover:text-[#13FFAA] transition-colors duration-300">
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-300 text-center group-hover:opacity-80 transition-opacity duration-300">
                            {service.description}
                        </p>

                        {/* Badge */}
                        <span className="absolute top-4 right-4 px-3 py-1 bg-[#13FFAA] text-xs font-semibold text-black rounded-full shadow-md group-hover:scale-110 transition-transform">
                            New
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ServiceList;
