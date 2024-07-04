"use client"

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import SectionHeading from "./section-heading"; // Ensure this file exists and exports a valid component
import { projectsData } from "@/lib/data"; // Ensure this path is correct
import Project from "./project";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <section id="projects" className="scroll-mt-28">
      <motion.div
        ref={ref}
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
