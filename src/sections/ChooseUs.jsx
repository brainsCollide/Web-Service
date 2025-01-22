import { motion } from 'framer-motion';

const ChooseUsData = [
    {
      title: "Expertise in Small-Scale Projects",
      description:
        "From landing pages to CV portfolios, we craft bespoke solutions with meticulous attention to detail.",
    },
    {
      title: "Tailored Service Packages",
      description:
        "Choose from our reliable Standard Package or customize solutions to meet your unique needs.",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "We use Vite, React, and TailwindCSS to deliver fast, responsive, and stunning websites.",
    },
    {
      title: "Brand with a Personal Touch",
      description:
        "At Oz.dev, we combine personal connection with technical expertise to bring your vision to life.",
    },
    {
      title: "Future-Focused Vision",
      description:
        "Scalable solutions designed to grow with you and adapt to your evolving needs.",
    },
    {
      title: "Reusable Design Components",
      description:
        "With reusable Widgets, we ensure faster updates and consistent designs for your projects.",
    },
  ];
  

const ChooseUse = () => {
  return (
    <section 
      className="py-52 bg-gradient-to-tl from-[#0e1534] via-[#281245] to-[#0e1534]"
      id='choose-us'
      >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
            Why Choose Us?
          </h1>
          <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
            Experience the difference with tailored solutions, modern
            technologies, and a personal touch.
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {ChooseUsData.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 bg-[#161924] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Card Title */}
              <h3 className="text-2xl font-bold text-gray-200 mb-4 group-hover:text-green-400 transition-colors">
                {item.title}
              </h3>
              {/* Card Description */}
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUse;
