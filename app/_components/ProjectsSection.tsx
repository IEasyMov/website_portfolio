"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { portfolioProjects } from "../_lib/constants";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import ShinyButton from "./ui/ShinyButton";
import { ChevronRight, Search } from "lucide-react";

const ProjectsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects based on search term
  const filteredProjects = useMemo(() => {
    if (!searchTerm) return portfolioProjects;
    
    const lowerCaseSearch = searchTerm.toLowerCase();
    
    return portfolioProjects.filter(project => {
      // Search in title, description, and tech stack
      return (
        project.heading.toLowerCase().includes(lowerCaseSearch) ||
        project.techStackEngine.some(tech => tech.toLowerCase().includes(lowerCaseSearch)) ||
        project.techStackAbout.some(tech => tech.toLowerCase().includes(lowerCaseSearch)) ||
        project.techStackSize.some(tech => tech.toLowerCase().includes(lowerCaseSearch)) ||
        project.techStackAward.some(tech => tech.toLowerCase().includes(lowerCaseSearch))
        );
      });
    }, [searchTerm, portfolioProjects]);

  return (
    <div className="py-32 scale-105" id="work">
      <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between Flex alignItems=center">
        
        <motion.h1
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200 "
        >
          My Works and Projects 
        </motion.h1>
      </div>
      <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between Flex alignItems=center">
      <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-primary/80 dark:text-primary/90 mt-1 font-bold dark:text-stone-200 text-lg"
        >
          {portfolioProjects.length} in total
        </motion.p>
      </div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="mt-8 mb-12 relative max-w-2xl mx-0"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects by title, description or tech..."
            className="w-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              ✕
            </button>
          )}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid lg:grid-cols-3 gap-4 mt-8"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-gray-500 dark:text-gray-400"
        >
          No projects found matching your search.
        </motion.div>
      )}
    </div>
  );
};

export default ProjectsSection;
