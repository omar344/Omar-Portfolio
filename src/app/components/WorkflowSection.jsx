"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const workflowSteps = [
  {
    id: 1,
    step: "01",
    title: "Discovery & Consultation",
    description: "We start with a detailed discussion about your goals, requirements, and vision. I'll ask questions to understand your business needs and propose the best technical approach.",
    icon: "💬"
  },
  {
    id: 2,
    step: "02",
    title: "Proposal & Agreement",
    description: "I provide a comprehensive project proposal including timeline, deliverables, tech stack, and pricing. Once agreed, we formalize the partnership and set milestones.",
    icon: "📝"
  },
  {
    id: 3,
    step: "03",
    title: "Development & Updates",
    description: "I build your solution using industry best practices with regular progress updates. You'll have visibility into the development process and can provide feedback at each milestone.",
    icon: "🛠️"
  },
  {
    id: 4,
    step: "04",
    title: "Testing & Delivery",
    description: "Thorough testing ensures everything works flawlessly. I deliver the complete solution with documentation, source code, and deployment guidance.",
    icon: "✅"
  },
  {
    id: 5,
    step: "05",
    title: "Launch & Support",
    description: "I help deploy your project to production and provide post-launch support. You'll receive training and assistance to ensure smooth operations.",
    icon: "🚀"
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
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-3xl">
                  {item.icon}
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
