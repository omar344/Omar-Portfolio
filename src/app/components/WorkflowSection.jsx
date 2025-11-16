"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ChatIcon = () => (
  <svg
    className="w-10 h-10 text-white"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 5H19C20.1046 5 21 5.89543 21 7V13C21 14.1046 20.1046 15 19 15H9L5 19V7C5 5.89543 5.89543 5 7 5Z"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 9H15M9 12H13"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ProposalIcon = () => (
  <svg
    className="w-10 h-10 text-white"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="5"
      y="3"
      width="14"
      height="18"
      rx="2"
      className="stroke-current"
      strokeWidth="1.5"
    />
    <path
      d="M9 8H15M9 12H15M9 16H13"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const DevelopmentIcon = () => (
  <svg
    className="w-10 h-10 text-white"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 7L5 9L7 11"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 7L19 9L17 11"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 15L14 15"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      className="stroke-current"
      strokeWidth="1.5"
    />
  </svg>
);

const TestingIcon = () => (
  <svg
    className="w-10 h-10 text-white"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="7"
      className="stroke-current"
      strokeWidth="1.5"
    />
    <path
      d="M9 12L11 14L15 10"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LaunchIcon = () => (
  <svg
    className="w-10 h-10 text-white"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 19L9 15M15 9L19 5M9 15L10 19L5 19L9 15ZM15 9L14 5L19 5L15 9Z"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 15L15 9"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const workflowSteps = [
  {
    id: 1,
    step: "01",
    title: "Discovery & Consultation",
    description: "We start with a detailed discussion about your goals, requirements, and vision. I'll ask questions to understand your business needs and propose the best technical approach.",
    icon: ChatIcon
  },
  {
    id: 2,
    step: "02",
    title: "Proposal & Agreement",
    description: "I provide a comprehensive project proposal including timeline, deliverables, tech stack, and pricing. Once agreed, we formalize the partnership and set milestones.",
    icon: ProposalIcon
  },
  {
    id: 3,
    step: "03",
    title: "Development & Updates",
    description: "I build your solution using industry best practices with regular progress updates. You'll have visibility into the development process and can provide feedback at each milestone.",
    icon: DevelopmentIcon
  },
  {
    id: 4,
    step: "04",
    title: "Testing & Delivery",
    description: "Thorough testing ensures everything works flawlessly. I deliver the complete solution with documentation, source code, and deployment guidance.",
    icon: TestingIcon
  },
  {
    id: 5,
    step: "05",
    title: "Launch & Support",
    description: "I help deploy your project to production and provide post-launch support. You'll receive training and assistance to ensure smooth operations.",
    icon: LaunchIcon
  }
];

const WorkflowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <section id="workflow" className="py-16 pt-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          How I Work
        </h2>
        <p className="text-[#ADB7BE] text-lg max-w-2xl mx-auto">
          A transparent, collaborative process from initial inquiry to successful delivery
        </p>
      </div>

      <div ref={ref} className="max-w-4xl mx-auto">
        {workflowSteps.map((item, index) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative mb-8 last:mb-0"
          >
            {/* Connector Line */}
            {index < workflowSteps.length - 1 && (
              <div className="absolute left-10 top-24 w-0.5 h-16 bg-gradient-to-b from-primary-500 to-secondary-500 hidden md:block" />
            )}

            <div className="flex gap-6 items-start">
              {/* Step Number/Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white">
                  <item.icon />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-[#181818] rounded-lg p-6 border border-[#33353F] hover:border-primary-500 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-primary-400 font-bold text-lg">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#ADB7BE] text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-[#ADB7BE] text-lg mb-4">
          Like what you see? Let's discuss your project
        </p>
        <a
          href="/#contact"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white font-medium transition-all"
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
};

export default WorkflowSection;
