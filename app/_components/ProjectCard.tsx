"use client";

import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import ProjectTechnologiesMini from "./ProjectTechnologiesMini";

import { motion } from "framer-motion";

export interface ProjectProps {
  id: string;
  heading: string;
  subheading?: string;
  imageUrl?: string;
  videoUrl?: string; // Video URL for hover effect
  videoGameplayUrl?: string; // Video URL for hover effect
  techStack: string[];
  techStackEngine: string[];
  techStackAbout: string[];
  techStackSize: string[];
  techStackAward: string[];
  liveDemoUrl?: string;
  contentPath: string; // New optional property
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const { id, heading, imageUrl, techStack, techStackEngine, techStackAbout, techStackSize, techStackAward} = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="bg-[#F3F4F3] dark:bg-dark-200 rounded-lg p-4 sm:p-8 space-y-8 flex flex-col h-full"
    >
      <Link
        href={`/work/${id}`}
        className="rounded-lg overflow-hidden block relative group"
      >
        {/* Fallback image */}
        <img
          src={imageUrl}
          alt={heading}
          className="w-full h-auto"
        />
      </Link>
      <div>
        <h3 className="text-2xl sm:text-3xl font-semibold text-center">{heading}</h3>
        <div className="mt-8 flex flex-col sm:flex-row justify-between gap-5">
          <ProjectTechnologiesMini techStack={techStack} techStackEngine={techStackEngine} techStackAbout={techStackAbout} techStackSize={techStackSize} techStackAward={techStackAward} />
          {/* <Link
            href={`/work/${id}`}
            className="p-3 bg-primary hover:bg-primary/80 transition-colors duration-200 rounded-lg self-start sm:self-end"
          >
            <MoveUpRight className="size-5 sm:size-8 text-[#F3F4F3] dark:text-dark-200" />
          </Link> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;