"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonialsData = [
  {
    id: 1,
    name: "Adel Kazaz",
    title: "Business Owner",
    company: "Kazaz Business Solutions",
    quote: "Omar developed a comprehensive website for my business along with detailed data analysis that transformed how we understand our operations. His technical skills are exceptional, and he delivered everything on time. The insights from the analysis helped us make better decisions and the website perfectly represents our brand. Highly recommended!",
    rating: 5,
    avatar: "AK"
  },
  {
    id: 2,
    name: "Mohamed Gomaa",
    title: "Project Manager",
    company: "Tech Innovations",
    quote: "I needed a robust to-do app and Omar delivered beyond expectations. The application is clean, fast, and exactly what I needed to organize my projects. His attention to detail and ability to understand requirements made the entire process smooth. The app has become an essential tool for my daily work!",
    rating: 5,
    avatar: "MG"
  },
  {
    id: 3,
    name: "Ahmed Essam",
    title: "Shop Owner",
    company: "Essam Retail",
    quote: "Omar built an excellent e-commerce website for my shop and provided invaluable data analysis of our sales patterns. The website is professional, user-friendly, and our online sales have increased significantly. The data insights helped us understand customer behavior and optimize our inventory. Outstanding work!",
    rating: 5,
    avatar: "AE"
  },
  {
    id: 4,
    name: "Mohamed Baker",
    title: "Entrepreneur",
    company: "Private Client",
    quote: "Working with Omar on my private project was a fantastic experience. He's professional, responsive, and delivers high-quality work. The solution he built was exactly what I envisioned, with clean code and excellent performance. I appreciate his dedication and technical expertise. Will definitely work with him again!",
    rating: 5,
    avatar: "MB"
  }
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="testimonials" className="py-16 pt-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Client Testimonials
        </h2>
        <p className="text-[#ADB7BE] text-lg max-w-2xl mx-auto">
          Don't just take my word for it — hear what clients say about working with me
        </p>
      </div>

      <ul ref={ref} className="grid md:grid-cols-2 gap-6 md:gap-8">
        {testimonialsData.map((testimonial, index) => (
          <motion.li
            key={testimonial.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-[#181818] rounded-lg p-6 border border-[#33353F] hover:border-primary-500 transition-all duration-300"
          >
            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-[#ADB7BE] text-base italic mb-6">
              "{testimonial.quote}"
            </p>

            {/* Client Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg">
                {testimonial.avatar}
              </div>
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-[#ADB7BE] text-sm">
                  {testimonial.title}
                  {testimonial.company && ` • ${testimonial.company}`}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>

      {/* Optional: Add a CTA */}
      <div className="text-center mt-12">
        <p className="text-[#ADB7BE] text-lg mb-4">
          Ready to start your project?
        </p>
        <a
          href="/#contact"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white font-medium transition-all"
        >
          Let's Work Together
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
