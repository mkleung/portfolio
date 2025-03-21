"use client";
import React, { useRef } from "react";
import StarIcon from "@/assets/icons/star.svg";
import { motion } from "framer-motion";
import { CardHeader } from "@/components/CardHeader";

const hobbies = [


  {
    title: "Foreign Languages",
    emoji: "🌍",
  },
  {
    title: "Watching Movies",
    emoji: "📺",
  },

  {
    title: "Improv",
    emoji: "🎭",
  },
  {
    title: "Art",
    emoji: "🎨",
  },
  {
    title: "Photography",
    emoji: "📷",
  },
  {
    title: "Cycling",
    emoji: "🚵‍♂️",
  },
  {
    title: "Cooking",
    emoji: "🍕",
  },

];

export const AboutCard = () => {
  const constraintRef = useRef(null);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{
        once: true,
        margin: "-50px",
      }}
      className="card h-full md:col-span-2 md:h-[400px] lg:h-[340px]"
      ref={constraintRef}
    >
      <CardHeader title="About Me" className="" />

      <div className="flex flex-col p-6 md:py-8 md:px-10 md:pt-0 gap-4">
        <p className="text-white/85 ">
          Hello! I&apos;m a dedicated front-end developer with a passion for
          delivering user-friendly websites that captivates audiences. I also
          love to help the local community with technology solutions that
          enhance people&apos;s lives.
        </p>

        <div className="inline-flex items-center gap-2">
          <StarIcon className="size-8 text-emerald-400"></StarIcon>
          <h3 className="font-serif text-xl gradient-underline">Hobbies</h3>
        </div>

        <div className=" mt-1">
          {hobbies.map((hobby) => (
            <motion.div
              key={hobby.title}
              className="hover:pointer relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-sky-400  to-emerald-400  me-2 mb-2 hover:cursor-grab active:cursor-grabbing"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
              <span className="relative inline-flex items-center px-5 py-1 transition-colors ease-in duration-200 bg-gray-700 dark:bg-gray-700 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:text-black">
                {hobby.title}
                <span className="ml-2">{hobby.emoji}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
