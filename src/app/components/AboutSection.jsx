"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-6">
        <div className="bg-[#181818] rounded-lg p-4 border border-[#33353F]">
          <h3 className="text-xl font-bold text-white mb-2">🎓 Asyut University</h3>
          <p className="text-primary-400 font-semibold mb-2">Bachelor of Computer Science</p>
          <p className="text-[#ADB7BE] text-sm mb-3">Expected Graduation: 2025</p>
          <p className="text-[#ADB7BE]">
            Comprehensive study in computer science fundamentals, software engineering, 
            algorithms, data structures, and modern development practices.
          </p>
        </div>

        <div className="bg-[#181818] rounded-lg p-4 border border-[#33353F]">
          <h3 className="text-lg font-bold text-white mb-3">💼 Professional Training & Internships</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-primary-500 pl-4">
              <h4 className="text-white font-semibold mb-1">Data Analysis Internship</h4>
              <p className="text-primary-400 text-sm mb-2">2024</p>
              <ul className="text-[#ADB7BE] text-sm space-y-1">
                <li>• Specialized in data analysis using Python, SQL, and Excel</li>
                <li>• Developed data visualizations with Power BI and Tableau</li>
                <li>• Conducted statistical analyses to identify trends and patterns</li>
                <li>• Delivered data-driven solutions to business requirements</li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary-500 pl-4">
              <h4 className="text-white font-semibold mb-1">Backend Development Internship</h4>
              <p className="text-primary-400 text-sm mb-2">2023</p>
              <ul className="text-[#ADB7BE] text-sm space-y-1">
                <li>• Developed backend solutions with PHP and MySQL</li>
                <li>• Optimized server-side logic for performance and scalability</li>
                <li>• Implemented best practices in database management</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary-500 pl-4">
              <h4 className="text-white font-semibold mb-1">Frontend Development Internship</h4>
              <p className="text-primary-400 text-sm mb-2">2023</p>
              <ul className="text-[#ADB7BE] text-sm space-y-1">
                <li>• Specialized in HTML, CSS, and JavaScript development</li>
                <li>• Built and optimized user interfaces for better UX</li>
                <li>• Improved application responsiveness and performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
        <Image src="/images/omar_.png" width={500} height={500} />
        <div className="mt-4 md:mt-7 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 mt-1">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full‑stack software engineer who builds polished, production-ready web
            applications for clients. I combine React and Next.js for fast, user-focused
            frontends with ASP.NET Core and C# on the server to create end-to-end
            solutions — from responsive UIs and SEO-friendly server rendering to
            robust APIs, database design, and deployment. I focus on clean, maintainable
            code, measurable business value, and fast time-to-market so clients get
            reliable products that delight users and drive results.
          </p>
          <div className="flex flex-row justify-start mt-8">
          <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education & Experience{" "}
            </TabButton>

          </div>
          <div className="mt-8 h-96 overflow-y-auto">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
