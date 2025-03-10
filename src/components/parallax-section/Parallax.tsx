"use client";
import Picture1 from "@/assets/images/1.jpg";
import Picture2 from "@/assets/images/2.jpg";
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import { useRef, useEffect } from "react";
import Slide from "./Slide";

const Parallax = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const container = useRef<HTMLDivElement>(null); 
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <div className="overflow-hidden">
      <div className="h-full" />

      <Slide
        imgUrl={Picture1.src}
        direction={"left"}
        left={"-10%"}
        progress={scrollYProgress}
      />
      <Slide
        imgUrl={Picture2.src}
        direction={"right"}
        left={"-100%"}
        progress={scrollYProgress}
      />
      <div className="h-full" />
    </div>
  );
};

export default Parallax;
