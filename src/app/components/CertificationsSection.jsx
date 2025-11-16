"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DataStructureIcon = () => (
  <svg
    className="w-10 h-10 text-white"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="4"
      rx="1"
      className="stroke-current"
      strokeWidth="1.5"
    />
    <rect
      x="3"
      y="10"
      width="12"
      height="4"
      rx="1"
      className="stroke-current"
      strokeWidth="1.5"
    />
    <rect
      x="3"
      y="16"
      width="8"
      height="4"
      rx="1"
      className="stroke-current"
      strokeWidth="1.5"
    />
    <path
      d="M17 12H21M19 10V14"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FrontendIcon = () => (
  <svg
    className="w-10 h-10 text-white"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="14"
      rx="2"
      className="stroke-current"
      strokeWidth="1.5"
    />
    <path
      d="M9 9L7 11L9 13"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 9L17 11L15 13"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 15H13"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const BackendIcon = () => (
  <svg
    className="w-10 h-10 text-white"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="8"
      cy="8"
      r="3"
      className="stroke-current"
      strokeWidth="1.5"
    />
    <circle
      cx="16"
      cy="16"
      r="3"
      className="stroke-current"
      strokeWidth="1.5"
    />
    <path
      d="M10.5 10.5L13.5 13.5"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M5 16H7M17 8H19"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const AnalyticsCertIcon = () => (
  <svg
    className="w-10 h-10 text-white"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="14"
      rx="2"
      className="stroke-current"
      strokeWidth="1.5"
    />
    <path
      d="M7 14L10 11L13 13L17 9"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="8"
      cy="9"
      r="0.75"
      className="fill-current"
    />
    <circle
      cx="11"
      cy="12"
      r="0.75"
      className="fill-current"
    />
    <circle
      cx="14"
      cy="10"
      r="0.75"
      className="fill-current"
    />
    <circle
      cx="17"
      cy="8"
      r="0.75"
      className="fill-current"
    />
  </svg>
);

const certificatesData = [
  {
    id: 1,
    title: "Data Structures & Algorithms (DSA)",
    issuer: "Professional Certification",
    date: "2024",
    credentialUrl: "https://drive.google.com/file/d/1qf8xi9bxmShAJVUnDa2TRiv9OeK1R4H8/view?usp=drive_link",
    icon: DataStructureIcon,
    skills: ["Algorithms", "Data Structures", "Problem Solving"]
  },
  {
    id: 2,
    title: "Frontend Development",
    issuer: "Ministry of Communications & Information Technology (MCIT)",
    date: "2023",
    credentialUrl: "https://drive.google.com/file/d/16OGDYWzdcI5YzWa10Fsf-DxTosMZ-Yzj/view?usp=sharing",
    icon: FrontendIcon,
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    id: 3,
    title: "Backend Development (PHP)",
    issuer: "Ministry of Communications & Information Technology (MCIT)",
    date: "2023",
    credentialUrl: "https://drive.google.com/file/d/1If_DvB77FyRm4_2QVBPCMIjp38pEvhQb/view?usp=sharing",
    icon: BackendIcon,
    skills: ["PHP", "MySQL", "Server-Side Logic", "APIs"]
  },
  {
    id: 4,
    title: "Data Analysis",
    issuer: "Ministry of Communications & Information Technology (MCIT)",
    date: "2024",
    credentialUrl: "https://drive.google.com/file/d/1OcFDFrHT_gAsydTwug81Ab1XSEAwzVpw/view?usp=sharing",
    icon: AnalyticsCertIcon,
    skills: ["Python", "SQL", "Power BI", "Tableau"]
  }
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="certifications" className="py-16 pt-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Certifications & Credentials
        </h2>
        <p className="text-[#ADB7BE] text-lg max-w-2xl mx-auto">
          Professional certifications validating my expertise in software development and data analysis
        </p>
      </div>

      <ul ref={ref} className="grid md:grid-cols-2 gap-6 md:gap-8">
        {certificatesData.map((cert, index) => (
          <motion.li
            key={cert.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-[#181818] rounded-lg p-6 border border-[#33353F] hover:border-primary-500 transition-all duration-300 group"
          >
            {/* Icon and Title */}
            <div className="flex items-start gap-4 mb-4">
              <div>
                <cert.icon />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[#ADB7BE] text-sm mb-1">
                  {cert.issuer}
                </p>
                <p className="text-[#ADB7BE] text-sm">
                  {cert.date}
                </p>
              </div>
            </div>

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {cert.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium bg-[#121212] text-primary-400 rounded-full border border-[#33353F]"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* View Certificate Button */}
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium group-hover:gap-3 transition-all"
            >
              <span>View Certificate</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Optional Badge/Trust Signal */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#181818] rounded-full border border-[#33353F]">
          <svg
            className="w-6 h-6 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-white font-medium">
            All certifications verified and credential links provided
          </span>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
