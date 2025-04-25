'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center px-6 md:px-16 lg:px-32 py-12">
                <h1 className="text-3xl font-semibold">About FurnishUp</h1>
                <div className="w-16 h-0.5 bg-orange-600 rounded-full my-4"></div>
                <p className="text-gray-600 text-lg text-center max-w-2xl">
                    At <b>FurnishUp</b>, we bring your dream furniture to life with cutting-edge **AR technology**.
                    Our platform allows you to visualize furniture in your space before making a purchase.
                </p>

                <div className="mt-8 text-left max-w-3xl">
                    <h2 className="text-2xl font-semibold mt-6">🚀 Our Mission</h2>
                    <p className="text-gray-600 mt-2">
                        To revolutionize the way people shop for furniture by integrating **Augmented Reality (AR)**
                        and making online furniture shopping **seamless and interactive**.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">🌟 Why Choose Us?</h2>
                    <ul className="text-gray-600 list-disc pl-6 mt-2">
                        <li>🔹 **Try Before You Buy** – Visualize furniture in your space with AR.</li>
                        <li>🔹 **High-Quality Collections** – Explore a wide range of modern and classic furniture.</li>
                        <li>🔹 **Customer Satisfaction** – Our top priority is to ensure a smooth shopping experience.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
