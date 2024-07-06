import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wordanalyticsImg from "@/public/wordanalytics.png";
import myListAnimeImg from "@/public/mylistanime.png";
import upnSehatImg from "@/public/UPN SEHAT.png";
import bookPortfolioImg from "@/public/bookFortfolio.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "My List Anime",
    description:
      "A website for tracking watched anime, writing reviews, andrating series. Users can view ratings and reviews asreferences from others.",
    tags: ["HTML", "Tailwind CSS", "Postgresql ", "Express JS", "Prisma"],
    imageUrl: myListAnimeImg,
  },
  {
    title: "UPN Sehat",
    description:
      "UPN Sehat is a health app designed to simplify access to various healthcare services.",
    tags: ["Java", "Firebase", "Figma", "Android Studio"],
    imageUrl: upnSehatImg,
  },
  {
    title: "Book Portfolio Design",
    description:
      "A public web book portfolio design",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: bookPortfolioImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Java"
] as const;