"use client";
import { useEffect, useState } from "react";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import { Homemade_Apple } from "next/font/google";
import { motion } from "framer-motion";
import Portrait from "@/components/Portrait";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { ArrowDownIcon } from "@heroicons/react/16/solid";

const cursive_script = Homemade_Apple({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export const HeroSection = () => {
  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const subtitle = "Design Develop Deliver".split(" ");

  const [href, setHref] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHref(window.location.href);
    }
  }, []);

  return (
    <section id="home" className="py-32 lg:py-40">
      <div className="container">
        <div className="flex flex-col items-center">
          <Portrait />
          <div className="max-w-2xl mx-auto">
            <motion.h1 className="font-serif text-3xl text-center mt-8">
              Hi I&apos;m{" "}
              <a href={href} className="gradient-underline">
                Michael Leung
              </a>
              , Front End Developer
            </motion.h1>

            <p className="mt-5 text-center text-white/85 md:text-md">
              I specialize in converting innovative designs into dynamic,
              high-performance web applications that deliver exceptional user
              experiences.
            </p>

            <div className="mt-5 text-center text-white/85 md:text-2xl flex justify-center items-center">
              <p className={cursive_script.className}>
                {subtitle.map((element, index) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index / 2,
                    }}
                    key={index}
                  >
                    {element}{" "}
                    {index != subtitle.length - 1 && (
                      <span className="mx-2">
                        <ArrowRight className="w-10 h-10 inline mr-2" />
                      </span>
                    )}
                  </motion.span>
                ))}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row justify-center mt-5">
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 border-white/10 px-6 h-12 rounded-xl"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-semibold">Explore My Work</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="hover:cursor-pointer relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br gradient "
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="flex px-5 py-1 transition-colors ease-in duration-200 bg-gray-800 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:text-black">
                Get in touch <ArrowDownIcon className="w-4 h-4 stroke-2 text-white mt-0.5 ml-1 group-hover:text-black transition-colors ease-in duration-200" />
              </span>
            </motion.a>

            {/* <HoverButton /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
