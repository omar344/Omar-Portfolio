"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const BriefcaseIcon = () => (
  <svg
    className="w-10 h-10 text-white"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="7"
      width="18"
      height="12"
      rx="2"
      className="stroke-current"
      strokeWidth="1.5"
    />
    <path
      d="M9 7V6C9 4.89543 9.89543 4 11 4H13C14.1046 4 15 4.89543 15 6V7"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M3 12H21"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const RocketIcon = () => (
  <svg
    className="w-10 h-10 text-white"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 19L9 15M9 15C9.5 12.5 11 7 16 3C17.5 4.5 18.5 6 19 9C15 14 10.5 15.5 9 15Z"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 9.5C12.8284 9.5 13.5 8.82843 13.5 8C13.5 7.17157 12.8284 6.5 12 6.5C11.1716 6.5 10.5 7.17157 10.5 8C10.5 8.82843 11.1716 9.5 12 9.5Z"
      className="stroke-current"
      strokeWidth="1.5"
    />
  </svg>
);

const pricingTiers = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for small projects and MVPs",
    price: "Contact for Quote",
    features: [
      "Single-page web applications",
      "Responsive design",
      "Basic database integration",
      "Up to 5 pages/features",
      "1 month support",
      "Source code included",
      "Documentation"
    ],
    recommended: false,
    icon: BriefcaseIcon
  },
  {
    id: 2,
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "Contact for Quote",
    features: [
      "Full-stack web applications",
      "Custom UI/UX design",
      "Advanced database architecture",
      "API development & integration",
      "Admin dashboard",
      "3 months support",
      "Deployment assistance",
      "Performance optimization"
    ],
    recommended: true,
    icon: RocketIcon
  }
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="pricing" className="py-16 pt-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Pricing & Packages
        </h2>
        <p className="text-[#ADB7BE] text-lg max-w-2xl mx-auto">
          Flexible pricing options to match your project scope and budget
        </p>
      </div>

      <ul ref={ref} className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {pricingTiers.map((tier, index) => (
          <motion.li
            key={tier.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.15 }}
            className={`bg-[#181818] rounded-lg p-8 border-2 ${
              tier.recommended
                ? "border-primary-500 relative"
                : "border-[#33353F]"
            } hover:border-primary-500 transition-all duration-300 flex flex-col`}
          >
            {/* Recommended Badge */}
            {tier.recommended && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
            )}

            {/* Icon */}
            <div className="mb-4 text-center flex justify-center">
              <tier.icon />
            </div>

            {/* Tier Name */}
            <h3 className="text-2xl font-bold text-white text-center mb-2">
              {tier.name}
            </h3>

            {/* Description */}
            <p className="text-[#ADB7BE] text-center mb-6">
              {tier.description}
            </p>

            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-3xl font-bold text-white">
                {tier.price}
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-grow">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#ADB7BE] text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href="/#contact"
              className={`block text-center px-6 py-3 rounded-full font-medium transition-all ${
                tier.recommended
                  ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white hover:opacity-90"
                  : "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white"
              }`}
            >
              Get Started
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Additional Info */}
      <div className="text-center mt-12">
        <p className="text-[#ADB7BE] text-base mb-4">
          All packages include clean code, documentation, and deployment guidance.
        </p>
        <p className="text-white text-lg font-semibold">
          Need a custom solution? 
          <Link href="/#contact" className="text-primary-500 hover:underline ml-2">
            Contact me for a personalized quote
          </Link>
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
