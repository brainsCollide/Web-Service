import React from "react";

const Services = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 text-center" alt="hero">
        <h1 className="text-4xl font-bold text-gray-800">Web Development Services</h1>
        <p className="mt-4 text-gray-600">I design and build responsive, modern, and user-friendly websites.</p>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Contact Me
        </button>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800">What I Offer</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service Card */}
            <div className="p-6 shadow-md rounded-md bg-blue-100">
              <h3 className="text-lg font-semibold text-gray-800">Website Development</h3>
              <p className="mt-2 text-gray-600">Custom websites built with React and Tailwind CSS.</p>
            </div>
            <div className="p-6 shadow-md rounded-md bg-blue-100">
              <h3 className="text-lg font-semibold text-gray-800">Responsive Design</h3>
              <p className="mt-2 text-gray-600">Ensuring your site looks great on any device.</p>
            </div>
            <div className="p-6 shadow-md rounded-md bg-blue-100">
              <h3 className="text-lg font-semibold text-gray-800">Website Redesigns</h3>
              <p className="mt-2 text-gray-600">Update outdated designs to modern and responsive layouts while maintaining the brand identity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Ready to Start?</h2>
        <p className="mt-4 text-gray-600">Let’s work together to bring your vision to life.</p>
        <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default Services;