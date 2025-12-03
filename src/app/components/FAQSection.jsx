"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "How long does a typical project take?",
    answer: "For simple applications, the typical timeline is around 5 days. If you need delivery in less than 5 days, there will be a 20% rush fee added to the project cost. For professional applications, the timeline ranges from 10 to 15 days depending on the complexity and specific requirements of your project."
  },
  {
    id: 2,
    question: "What technologies do you work with?",
    answer: "I specialize in full-stack development with ASP.NET Core, C#, React, and Next.js. I also work with MySQL, MSSQL, Entity Framework, and modern cloud deployment tools."
  },
  {
    id: 3,
    question: "What's your payment structure?",
    answer: "I typically work with milestone-based payments: 30% upfront to begin work, 40% at mid-project milestone, and 30% upon final delivery. For larger projects, we can discuss custom payment schedules that work for both parties."
  },
  {
    id: 4,
    question: "Do you offer support after project delivery?",
    answer: "Yes! All projects include post-launch support ranging from 1-6 months depending on the package. This covers bug fixes, minor adjustments, and technical assistance. Extended support and maintenance packages are also available."
  },
  {
    id: 5,
    question: "Can you work with my existing team or codebase?",
    answer: "Absolutely! I'm experienced in collaborating with existing teams and can integrate seamlessly into your workflow. I can also review, refactor, or enhance existing codebases while maintaining best practices and documentation."
  },
  {
    id: 6,
    question: "Do you provide project documentation?",
    answer: "Yes, comprehensive documentation is included with every project. This includes technical documentation, API references, user guides, and deployment instructions to ensure you can maintain and scale the solution."
  },
  {
    id: 7,
    question: "What if I need revisions or changes?",
    answer: "Each package includes a set number of revision rounds. Minor adjustments during development are normal and expected. For significant scope changes, we'll discuss timeline and budget adjustments transparently."
  },
  {
    id: 8,
    question: "How do you ensure code quality?",
    answer: "I follow industry best practices including SOLID principles, design patterns, comprehensive testing, code reviews, and version control. All code is clean, well-commented, and scalable for future growth."
  }
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="faq" className="py-16 pt-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-[#ADB7BE] text-lg max-w-2xl mx-auto">
          Got questions? I've got answers. Here's everything you need to know about working with me.
        </p>
      </div>

      <div ref={ref} className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={faq.id}
            variants={itemVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className="bg-[#181818] rounded-lg border border-[#33353F] overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#1f1f1f] transition-colors"
            >
              <h3 className="text-lg font-semibold text-white pr-8">
                {faq.question}
              </h3>
              <svg
                className={`w-6 h-6 text-primary-500 flex-shrink-0 transition-transform duration-300 ${openId === faq.id ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? "max-h-96" : "max-h-0"
                }`}
            >
              <div className="px-6 pb-5">
                <p className="text-[#ADB7BE] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-[#ADB7BE] text-lg mb-4">
          Still have questions?
        </p>
        <a
          href="/#contact"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white font-medium transition-all"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default FAQSection;
