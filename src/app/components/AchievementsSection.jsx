"use client";
import React from "react";
import { animated, useSpring } from "@react-spring/web";

const achievementsList = [
  {
    metric: "Projects",
    value: 6,
    postfix: "+",
  },
  {
    metric: "Technologies",
    value: 15,
    postfix: "+",
  },
  {
    metric: "Certifications",
    value: 4,
  },
  {
    metric: "Years Experience",
    value: 1,
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          const props = useSpring({ number: achievement.value, from: { number: 0 } });
          
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <animated.span className="text-white text-4xl font-bold">
                  {props.number.to(n => Math.floor(n))}
                </animated.span>
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
