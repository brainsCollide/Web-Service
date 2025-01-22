import { motion } from "framer-motion";
import { useState } from "react";
import FormModal from '../modal/FormModal'

const packages = [
    {
        name: "Landing Page Design",
        priceOriginal: "Rp 1.000.000",
        priceDiscounted: "Rp 500.000",
        description: "A perfect solution for small businesses and personal use to establish an online presence.",
        features: [
            "Up to 8 Pages",
            "Responsive Design for All Devices",
            "Basic SEO Optimization",
            "2 Rounds of Revisions",
            "Free Copywriting",
            "Priority Support",
        ],
        buttonText: "Order Now",
        recommended: true,
    },
    {
        name: "Standard Package",
        priceOriginal: "Rp 3.000.000",
        priceDiscounted: "Rp 1.000.000",
        description: "Ideal for businesses seeking a well-rounded online presence.",
        features: [
            "Up to 15 Pages",
            "Advanced SEO Optimization",
            "Custom Animations",
            "Unlimited Revisions",
            "Free Copywriting",
            "Premium Support",
        ],
        buttonText: "Order Now",
    },
    {
        name: "Custom Request Package",
        description: "Tailored solutions designed to meet your unique business needs and goals.",
        features: [
            "Fully Custom Features",
            "Unlimited Pages or Specific Needs",
            "Advanced SEO (Optional)",
            "Integration of Custom Tools",
            "Payment Gateway Integration (Optional)",
        ],
        buttonText: "Request a Quote",
    },
];

const ServicePackages = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);

    const openModal = (pkg) => {
        setSelectedPackage(pkg);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPackage(null);
    };

    return (
        <motion.div
            className="py-52 px-6 sm:px-10 md:px-16 lg:px-20 bg-gradient-to-br from-[#281245] via-[#0e1534] to-[#131528]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
        >
            <div className="container text-center mb-16 px-6 lg:px-12">
                {/* Heading */}
                <motion.h2
                    className="text-5xl font-bold text-center bg-gradient-to-r from-[#13FFAA] via-[#1E67C6] to-[#CE84CF] text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    Service Packages
                </motion.h2>
                <p className="text-lg mt-6 lg:mt-8 text-center text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                    Explore our service offerings designed to cater to your needs. Whether you're looking for small-scale solutions with our Standard Package or fully customized projects through our Custom Request Package, we've got you covered.
                </p>
            </div>

            {/* Packages */}
            <div className="flex flex-wrap justify-center gap-10">
                {packages.map((pkg, index) => (
                    <motion.div
                        key={index}
                        className={`relative flex flex-col p-6 bg-gradient-to-br from-white/10 via-[#1E293B]/30 to-[#0F172A]/50 backdrop-blur-lg rounded-xl shadow-lg w-full sm:w-80 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${
                            pkg.recommended ? "border border-[#13FFAA]" : ""
                        }`}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        {/* Recommended Badge */}
                        {pkg.recommended && (
                            <div className="absolute top-0 left-0 bg-gradient-to-r from-[#13FFAA] to-[#1E67C6] text-black text-sm font-bold px-4 py-1 rounded-br-lg shadow-md">
                                Recommended
                            </div>
                        )}

                        {/* Package Name */}
                        <h3 className="text-xl font-bold text-center text-sky-500 mb-4">
                            {pkg.name}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 text-center mb-4">{pkg.description}</p>

                        {/* Prices */}
                        {pkg.priceDiscounted && (
                            <div className="text-center mb-4">
                                <p className="line-through text-gray-500 text-sm">{pkg.priceOriginal}</p>
                                <p className="text-3xl font-extrabold text-[#13FFAA]">
                                    {pkg.priceDiscounted}
                                </p>
                            </div>
                        )}

                        {/* Features */}
                        <ul className="text-sm text-gray-300 mb-6 space-y-2">
                            {pkg.features.map((feature, i) => (
                                <li
                                    key={i}
                                    className="flex items-center space-x-2 text-gray-300"
                                >
                                    <span className="text-[#13FFAA]">✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Action Button */}
                        <button
                            onClick={() => openModal(pkg)}
                            className="w-full px-6 py-3 bg-gradient-to-r from-[#13FFAA] to-[#1E67C6] text-black font-medium rounded-lg hover:from-[#11E19E] hover:to-[#155DA1] transition-all"
                        >
                            {pkg.buttonText}
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Form Modal */}
           <FormModal isOpen={isModalOpen} onClose={closeModal} selectedPackage={selectedPackage} />
        </motion.div>
    );
};

export default ServicePackages;
