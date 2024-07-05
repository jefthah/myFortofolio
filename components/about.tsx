"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Saya adalah seorang <span className="font-medium">Front-end Developer</span> yang penuh semangat dan masih menjalani studi sebagai mahasiswa. Selain itu, saya adalah seorang <span className="font-medium">desainer</span> kreatif, <span className="font-medium">editor video</span> yang teliti, dan <span className="font-medium">konten kreator gaming</span> yang antusias. Berawal dari kecintaan saya terhadap teknologi dan seni, saya memutuskan untuk mengejar karir di bidang pengembangan web. Saya terpesona oleh kemampuan <span className="italic">React (Next.js)</span> untuk menciptakan pengalaman pengguna yang dinamis dan interaktif. Dalam setiap proyek, saya berusaha menyatukan estetika visual yang memikat dengan fungsionalitas yang efisien.
      </p>
    </motion.section>
  );
}
