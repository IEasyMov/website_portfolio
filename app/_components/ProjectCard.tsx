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
        <div className="aspect-square w-full overflow-hidden">
          <img src={imageUrl} alt={heading} className="w-full h-full object-cover" />
        </div>
      </Link>
      <div>
        <h3 className="text-2xl sm:text-3xl font-semibold text-center">{heading}</h3>
        <div className="mt-8 flex flex-col sm:flex-row justify-between gap-5">
          <ProjectTechnologiesMini techStack={techStack} techStackEngine={techStackEngine} techStackAbout={techStackAbout} techStackSize={techStackSize} techStackAward={techStackAward} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;