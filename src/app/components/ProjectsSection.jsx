"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Hospital Management System",
    description: "This project is a Hospital Management System built using ASP.NET Core MVC with MySQL database. It includes functionality for managing administrators, doctors, and patients.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/omar344/Hospital_Management_System",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Mobile Accessories E-commerce",
    description: "Developed an e-commerce platform with seamless user registration and login, comprehensive administrative dashboards, and a user-friendly interface for browsing, shopping, and purchasing products.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/omar344/Mobile_Accessories_Ecommerce",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Freelancing Platform",
    description: "Built a comprehensive job management platform allowing users to manage clients and freelancers, create, update, and delete job listings, oversee contracts, submit proposals, and manage freelancer skills.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/omar344/JobQuest",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Startup Expansion",
    description: "This dashboard provides a comprehensive visualization of sales and marketing metrics to assist with decision-making for a startup's expansion.",
    image: "/images/projects/4.png",
    tag: ["All", "Data Analysis"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Data Analysis 2",
    description: "Project 5 description",
    image: "/images/projects/7.png",
    tag: ["All", "Data Analysis"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Data Analysis 3",
    description: "Project 5 description",
    image: "/images/projects/8.png",
    tag: ["All", "Data Analysis"],
    gitUrl: "/",
    previewUrl: "/",
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
        <ProjectTag
          onClick={handleTagChange}
          name="Analytics"
          isSelected={tag === "Data Analysis"}
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
