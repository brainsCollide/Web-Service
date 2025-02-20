import { Navbar, Hero, ServiceList, ServicePackage, Projects, Footer, ChooseUs } from '../sections';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { useEffect } from 'react';

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C", "#FFAA33", "#7E57C2"];

const ServicePage = () => {
    const color = useMotionValue(COLORS[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(150% 100% at 50% 50%, #020617 50%, ${color})`;

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror',
        });
    }, []);

    return (
        <motion.section
            style={{
                backgroundImage,
            }}
            className="relative grid overflow-hidden text-white"
        >
            {/* Content Sections */}
            <div className="relative z-10">
                <Navbar />
                <Hero/>
                <ServiceList />
                <ServicePackage />
                <ChooseUs />
                <Projects />
                <Footer />
            </div>
        </motion.section>
    );
};

export default ServicePage;
