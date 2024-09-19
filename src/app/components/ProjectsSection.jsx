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
    previewUrl: "https://github.com/omar344/Hospital_Management_System/blob/main/Home.png",
  },
  {
    id: 2,
    title: "Mobile Accessories E-commerce",
    description: "Developed an e-commerce platform with seamless user registration and login, comprehensive administrative dashboards, and a user-friendly interface for browsing, shopping, and purchasing products.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/omar344/Mobile_Accessories_Ecommerce",
    previewUrl: "https://github.com/omar344/Mobile_Accessories_Ecommerce",
  },
  {
    id: 3,
    title: "Freelancing Platform",
    description: "Built a comprehensive job management platform allowing users to manage clients and freelancers, create, update, and delete job listings, oversee contracts, submit proposals, and manage freelancer skills.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/omar344/JobQuest",
    previewUrl: "https://github.com/omar344/JobQuest",
  },
  {
    id: 4,
    title: "Startup Expansion",
    description: "This dashboard provides a comprehensive visualization of sales and marketing metrics to assist with decision-making for a startup's expansion.",
    image: "/images/projects/4.png",
    tag: ["All", "Data Analysis"],
    gitUrl: "https://github.com/omar344/Startup-Expansion",
    previewUrl: "https://private-user-images.githubusercontent.com/104761640/365323431-e54e71c9-3b18-4a65-a55f-4abdc2509a72.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY3ODkwNzMsIm5iZiI6MTcyNjc4ODc3MywicGF0aCI6Ii8xMDQ3NjE2NDAvMzY1MzIzNDMxLWU1NGU3MWM5LTNiMTgtNGE2NS1hNTVmLTRhYmRjMjUwOWE3Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkxOVQyMzMyNTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zNDVmZDJiZjM5N2Q0MWI2Y2I2OThlOGEwMWFlZDBlMzllNjQ0MmQ4MzY5ZGYxNTE0YjQ0ZDZkOWY5M2UzNjMwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.o3atWaMoPY6jzPW48qWsKfv6_WEHLgHteZgyup06Q8k",
  },
  {
    id: 6,
    title: "Telecom Company Reports",
    description: "The Telecom Company Reports Dashboard delivers key insights into network performance, revenue, and customer retention. It helps telecom businesses optimize operations, reduce churn, and enhance marketing strategies. This dashboard ultimately drives improved decision-making and business growth.",
    image: "/images/projects/2.png",
    tag: ["All", "Data Analysis"],
    gitUrl: "https://github.com/omar344/Telecom_Company_Rs",
    previewUrl: "https://github.com/omar344/Telecom_Company_Rs/blob/main/Power%20Bi%20Overview.png",
  }
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
