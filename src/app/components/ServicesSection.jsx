"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const LaptopCodeIcon = () => (
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
      height="12"
      rx="2"
      className="stroke-current"
      strokeWidth="1.5"
    />
    <path
      d="M2 18H22V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V18Z"
      className="stroke-current"
      strokeWidth="1.5"
    />
    <path
      d="M10 9L8.5 10.5L10 12"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 9L15.5 10.5L14 12"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const servicesData = [
  {
    id: 1,
    icon: LaptopCodeIcon,
    title: "Full-Stack Web Development",
    tagline: "Building Modern, Scalable Web Applications",
    description: "I create end-to-end web solutions that combine powerful backends with beautiful, responsive frontends. From concept to deployment, I deliver production-ready applications that drive real business results.",
    features: [
      {
        name: "Custom Web Applications",
        detail: "Tailored solutions using React, Next.js, and ASP.NET Core"
      },
      {
        name: "E-Commerce Platforms",
        detail: "Full-featured online stores with secure payment integration"
      },
      {
        name: "API Development",
        detail: "RESTful APIs with proper authentication and documentation"
      },
      {
        name: "Database Design",
        detail: "Optimized MySQL/MSSQL database architecture"
      },
      {
        name: "Cloud Deployment",
        detail: "Seamless deployment and hosting setup"
      }
    ],
    technologies: ["React", "Next.js", "ASP.NET Core", "C#", "MySQL", "MSSQL"],
    whatsappUrl: "https://wa.me/+201015642330?text=Hi%20Omar!%20I'm%20interested%20in%20your%20web%20development%20services"
  },

];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="services" className="py-16 pt-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Services I Offer
        </h2>
        <p className="text-[#ADB7BE] text-lg max-w-3xl mx-auto">
          Comprehensive web development solutions designed to help your business grow.
          I combine technical expertise with business understanding to deliver results that matter.
        </p>
      </div>

      <ul ref={ref} className="max-w-2xl mx-auto">
        {servicesData.map((service, index) => (
          <motion.li
            key={service.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="bg-[#181818] rounded-lg border border-[#33353F] hover:border-primary-500 transition-all duration-300 overflow-hidden group"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-6">
              <div className="mb-4">
                <service.icon />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/90 text-sm font-medium">
                {service.tagline}
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-[#ADB7BE] mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  What I Deliver
                </h4>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary-400 text-lg mt-0.5">•</span>
                      <div>
                        <p className="text-white font-medium">{feature.name}</p>
                        <p className="text-[#ADB7BE] text-sm">{feature.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 text-sm">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-[#121212] text-primary-400 rounded-full border border-[#33353F]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href={service.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-br from-primary-500 to-secondary-500 hover:opacity-90 text-white font-medium rounded-lg transition-all group-hover:gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Get Started on WhatsApp</span>
              </Link>
            </div>
          </motion.li>
        ))}
      </ul>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <p className="text-[#ADB7BE] text-lg mb-4">
          Not sure which service you need? Let's discuss your project!
        </p>
        <Link
          href="/#contact"
          className="inline-block px-8 py-3 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-medium transition-all"
        >
          Schedule a Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;

