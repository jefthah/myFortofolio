"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <section id="projects" className="scroll-mt-28 min-h-screen" ref={inViewRef}>
      <motion.div
        ref={scrollRef}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
      >
        <SectionHeading>My PROJECT</SectionHeading>
      </motion.div>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
