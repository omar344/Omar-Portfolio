"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        
        <li>Asyut University | Computer Science|2025 </li>
         <br />

         <li>Front-end Internship | 2023</li>
              <p>Specialized in front-end development, refining practical skills in HTML, CSS, and JavaScript.</p>
              <p>Developed and optimized user interfaces to improve user experience and responsiveness.</p>
          <br/>

          <li>Backend Internship | 2023</li>
              <p>Developed back-end solutions utilizing PHP and MySQL.</p>
              <p>Implemented and optimized server-side logic to enhance performance and scalability. </p>
              <p>Implemented best practices in database and server management and server configuration.</p>
              <br/>
          <li>Data Analysis Internship | 2024</li>
              <p>Specialized in data analysis, utilizing tools such as Python, SQL, and Excel to extract, clean, and analyze data.</p>
              <p>Developed and implemented data visualizations using Power BI and Tableau to present actionable insights and support decision-making.</p>
              <p>Conducted statistical analyses to identify trends, patterns, and correlations within datasets.</p>
              <p>Collaborated with cross-functional teams to understand business requirements and deliver data-driven solutions.</p>

      </ul>
    ),
  },
  {
    title: "Courses & Training",
    id: "ct",
    content: (
      <ul className="list-disc pl-2">
        
        
          <h6>Front-end Internship | 2023</h6><br/>
              <li>Specialized in front-end development, refining practical skills in HTML, CSS, and JavaScript.</li>
              <li>Developed and optimized user interfaces to improve user experience and responsiveness.</li>
              
          <br/>
          <h6 >Backend Internship | 2023</h6><br/>
              <li>Developed back-end solutions utilizing PHP and MySQL.</li>
              <li>Implemented and optimized server-side logic to enhance performance and scalability. </li>
              <li>Implemented best practices in database and server management and server configuration.</li>
              <br/>
          <h6>Data Analysis Internship | 2024</h6><br/>
              <li>Specialized in data analysis, utilizing tools such as Python, SQL, and Excel to extract, clean, and analyze data.</li>
              <li>Developed and implemented data visualizations using Power BI and Tableau to present actionable insights and support decision-making.</li>
              <li>Conducted statistical analyses to identify trends, patterns, and correlations within datasets.</li>
              <li>Collaborated with cross-functional teams to understand business requirements and deliver data-driven solutions.</li>

      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
<li>ASP.NET Core (MVC, Web API)</li>
<li>JavaScript</li>
<li>Python</li>
<li>CSS</li>
<li>HTML</li>
<li>Power BI</li>
<li>Tableau</li>
<li>Excel</li>
<li>Statistics</li>
<li>C++</li>
<li>SQL</li>
<li>Entity Framework</li>
<li>LINQ</li>
<li>MSSQL</li>
<li>MySQL</li>
<li>Unit Testing</li>
<li>Design Patterns</li>
<li>SOLID Principles</li>
<li>Object-Oriented Programming</li>


      </ul>
    ),
  },

  {
    title: "Courses & Training",
    id: "ct",
    content: (
      <ul className="list-disc pl-2">
        
        
          <h6>Front-end Internship | 2023</h6><br/>
              <li>Specialized in front-end development, refining practical skills in HTML, CSS, and JavaScript.</li>
              <li>Developed and optimized user interfaces to improve user experience and responsiveness.</li>
              
          <br/>
          <h6 >Backend Internship | 2023</h6><br/>
              <li>Developed back-end solutions utilizing PHP and MySQL.</li>
              <li>Implemented and optimized server-side logic to enhance performance and scalability. </li>
              <li>Implemented best practices in database and server management and server configuration.</li>
              <br/>
          <h6>Data Analysis Internship | 2024</h6><br/>
              <li>Specialized in data analysis, utilizing tools such as Python, SQL, and Excel to extract, clean, and analyze data.</li>
              <li>Developed and implemented data visualizations using Power BI and Tableau to present actionable insights and support decision-making.</li>
              <li>Conducted statistical analyses to identify trends, patterns, and correlations within datasets.</li>
              <li>Collaborated with cross-functional teams to understand business requirements and deliver data-driven solutions.</li>

      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">

        <li>Frontend Development from the Ministry of Communications & Information Technology (MCIT)</li>
        <li>Backend Development from MCIT</li>
        <li>Data Analysis from MCIT</li>

      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/omar_.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-7 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 mt-1">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a software engineer specializing in 
          ASP.NET and C#, with over a year of 
          experience in backend development. 
          My expertise includes designing and 
          implementing robust server-side logic, database
           management, API development, 
           and ensuring high performance and scalability
            of web applications. 

          </p>
          <div className="flex flex-row justify-start mt-8">
          <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("ct")}
              active={tab === "ct"}
            >
              {" "}
              Courses & Training{" "}
            </TabButton> */}
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>

          </div>
          <div className="mt-8 h-64 overflow-y-auto">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
