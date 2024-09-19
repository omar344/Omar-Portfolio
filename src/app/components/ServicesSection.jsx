"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const ServicesData = [
  {
    id: 1,
    title: "Get Service Now !",
    image: "/images/projects/analysis.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    whatsappUrl: "https://wa.me/01015642330" // Replace with actual WhatsApp number
  },
  {
    id: 2,
    title: "Get Service Now !",
    image: "/images/projects/soft.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    whatsappUrl: "https://wa.me/01015642330" // Replace with actual WhatsApp number
  },
];

const ServicesSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ServicesData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="services" className="py-24 ">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        Offered Services
      </h2>
      <h2 className="text-center text-lg text-gray-400 mb-12">
        Boost your business with my web application and data analysis services. I deliver powerful web solutions and data insights to enhance your success.
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* Add tags filter if needed */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            className="flex flex-col bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <div className="flex flex-col flex-grow">
              {index === 0 && ( // For the first item (Data Analytics Services)
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4">Data Analytics Services</h3>
                  <p className="text-lg text-gray-300 mb-4">
                    Unlock the value in your data. Convert data to information, information to insights, and insights to better business outcomes.
                  </p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li className="mb-2"><span className="font-semibold text-white">Data-Driven Decision Making:</span> Make informed decisions based on comprehensive data analysis.</li>
                    <li className="mb-2"><span className="font-semibold text-white">Risk Management Solutions:</span> Identify and mitigate risks with advanced analytics.</li>
                    <li className="mb-2"><span className="font-semibold text-white">Personalized Customer Experience:</span> Enhance customer satisfaction through tailored data insights.</li>
                  </ul>
                </div>
              )}
              {index === 1 && ( // For the second item (Custom Software Development)
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4">Custom Software Development</h3>
                  <p className="text-lg text-gray-300 mb-4">
                    Tailored software solutions designed to meet your unique business needs, ensuring seamless integration and enhanced performance across web applications.
                  </p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li className="mb-2"><span className="font-semibold text-white">Tailored Software Solutions:</span> Get software designed specifically for your business requirements.</li>
                    <li className="mb-2"><span className="font-semibold text-white">Cloud-Based Software Services:</span> Utilize cloud technology for flexible and scalable solutions.</li>
                    <li className="mb-2"><span className="font-semibold text-white">Web Apps Development:</span> Develop robust and interactive web applications to engage users.</li>
                  </ul>
                </div>
              )}
              <div className="flex gap-4 mt-4">
                {project.whatsappUrl && (
                  <Link href={project.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                      Get Service
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesSection;
