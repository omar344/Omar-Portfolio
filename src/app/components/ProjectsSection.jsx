"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Maharaty",
    description: "Master your skills with Maharaty - a gamified focus tracking app. Set custom goals, track progress, and build focus streaks to achieve mastery.",
    image: "/images/Maharaty.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://maharaty-gamma.vercel.app/",
  },
  {
    id: 2,
    title: "RAGify - Graduation Project",
    description: "RAGify, a retrieval-augmented generation (RAG) application that allows users to upload documents and ask questions about their content — including both text and images. Key Features: User registration and login, Upload multiple documents (PDFs, images), Ask questions and receive contextual answers, Seamlessly switch between files during a chat session.",
    image: "/images/projects/multi-model.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/omar344/multi-model-rag-app",
    previewUrl: "https://drive.google.com/file/d/13G52gSP3mTtzxr4PaItFutavKa-EKAyB/view",
  },
  {
    id: 2,
    title: "Hospital Management System",
    description: "This project is a Hospital Management System built using ASP.NET Core MVC with MySQL database. It includes functionality for managing administrators, doctors, and patients.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/omar344/Hospital_Management_System",
    previewUrl: "https://github.com/omar344/Hospital_Management_System/blob/main/Home.png",
  },
  {
    id: 3,
    title: "Mobile Accessories E-commerce",
    description: "Developed an e-commerce platform with seamless user registration and login, comprehensive administrative dashboards, and a user-friendly interface for browsing, shopping, and purchasing products.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/omar344/Mobile_Accessories_Ecommerce",
    previewUrl: "https://github.com/omar344/Mobile_Accessories_Ecommerce",
  },
  {
    id: 4,
    title: "Freelancing Platform",
    description: "Built a comprehensive job management platform allowing users to manage clients and freelancers, create, update, and delete job listings, oversee contracts, submit proposals, and manage freelancer skills.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/omar344/JobQuest",
    previewUrl: "https://github.com/omar344/JobQuest",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />

        {/* <ProjectTag
          onClick={handleTagChange}
          name="Algorithms"
          isSelected={tag === "Algorithms"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
