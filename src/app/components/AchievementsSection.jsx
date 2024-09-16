"use client";
import React from "react";
import { useSpring, animated } from "@react-spring/web";

const achievementsList = [
  {
    metric: "Projects",
    value: 100,
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: 100000,
  },
  {
    metric: "Awards",
    value: 7,
  },
  {
    metric: "Years",
    value: 5,
  },
];

const AnimatedNumber = ({ value }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    config: { mass: 1, tension: 140, friction: 100 },
  });

  return (
    <animated.span>
      {number.to((n) => Math.floor(n).toLocaleString("en-US"))}
    </animated.span>
  );
};

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumber value={achievement.value} />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
