import { motion } from "framer-motion";
import { Briefcase, Package, Cpu, UserCheck, TrendingUp, LayoutGrid } from "lucide-react";

const ChooseUsData = [
  { title: "Expertise in Small Projects", description: "From landing pages to CV portfolios, we deliver with precision.", icon: Briefcase },
  { title: "Tailored Service Packages", description: "Choose from our reliable Standard Package or customize solutions.", icon: Package },
  { title: "Cutting-Edge Technology", description: "We use Vite, React, and TailwindCSS for speed and efficiency.", icon: Cpu },
  { title: "Personalized Brand Experience", description: "At Oz.dev, we combine personal connection with technical skill.", icon: UserCheck },
  { title: "Future-Ready Solutions", description: "Scalable designs that grow with your evolving needs.", icon: TrendingUp },
  { title: "Reusable UI Components", description: "Widgets ensure faster updates and consistent styling.", icon: LayoutGrid },
];

const ChooseUs = () => {
  return (
    <motion.section
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-t from-[#1a012c] to-[#000000]" 
      id="choose-us"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut"}}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
            Why Choose Us?
          </h2>
          <p className="mt-2 sm:mt-3 text-zinc-400 text-sm sm:text-base">
            Experience tailored solutions, modern tech, and a personal touch.
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {ChooseUsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                className="p-6 sm:p-8 w-full max-w-[350px] sm:max-w-[400px] h-auto mx-auto bg-[#161924] rounded-2xl shadow-lg group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-500 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-2 text-center group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                
                {/* Card Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-center">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ChooseUs;
