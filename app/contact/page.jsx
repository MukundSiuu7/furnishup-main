'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}. We will get back to you soon!`);
        setFormData({ name: "", email: "", message: "" }); // Reset form
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center px-6 md:px-16 lg:px-32 py-12">
                <h1 className="text-3xl font-semibold">Contact Us</h1>
                <div className="w-16 h-0.5 bg-orange-600 rounded-full my-4"></div>
                <p className="text-gray-600 text-lg text-center max-w-2xl">
                    Have questions? Get in touch with us using the form below.
                </p>
                
                <form onSubmit={handleSubmit} className="w-full max-w-lg mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                        <input 
                            type="text" name="name" value={formData.name} onChange={handleChange} 
                            className="w-full p-2 border rounded-md" required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input 
                            type="email" name="email" value={formData.email} onChange={handleChange} 
                            className="w-full p-2 border rounded-md" required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea 
                            name="message" value={formData.message} onChange={handleChange} 
                            className="w-full p-2 border rounded-md" rows="4" required
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
                    >
                        Send Message
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-gray-600">📧 furnishup@gmail.com</p>
                    <p className="text-gray-600">📞 +91 777777777</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
