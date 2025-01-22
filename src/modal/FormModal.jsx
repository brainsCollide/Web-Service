import React, { useState } from "react";

const FormModal = ({ isOpen, onClose, selectedPackage }) => {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const scriptURL = 
    "https://script.google.com/macros/s/AKfycbwpbeG3FgWyVGh0TSjv0MS0GQ9Eo3P0r8JgQJ6i30fmU_4VR_blCLhHPF7do_Ovwl03BA/exec"
    ;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        console.log("Submitting to script:", scriptURL);
        console.log("Form Data:", formData);
        console.log("Selected Package:", selectedPackage);
    
        const submissionData = new URLSearchParams({
            name: formData.name || "Anonymous",
            email: formData.email || "No email provided",
            package: selectedPackage?.name || "Unknown Package",
        });
    
        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', // Set the content type
                },
                body: submissionData,
            });
    
            console.log("Response Status:", response.status);
            console.log("Response Headers:", response.headers);
    
            // Check if the response is OK (status in the range 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const result = await response.json();
            console.log("Response Body:", result);
    
            if (result.success) {
                setResponseMessage("Form submitted successfully!");
                setFormData({ name: "", email: "" }); // Reset the form
                setTimeout(() => {
                    setResponseMessage("");
                    onClose();
                }, 2000); // Close the modal after 2 seconds
            } else {
                setResponseMessage("Submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResponseMessage("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };
    

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    ✖
                </button>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    {selectedPackage?.name || "Submit Your Details"}
                </h2>
                <p className="text-gray-600 mb-4">
                    {selectedPackage?.description || "Fill out the form below."}
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </form>

                {responseMessage && (
                    <p className="mt-4 text-sm text-center text-gray-600">
                        {responseMessage}
                    </p>
                )}
            </div>
        </div>
    );
};

export default FormModal;
