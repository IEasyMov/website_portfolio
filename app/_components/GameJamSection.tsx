import Link from "next/link";
"use client";

import { portfolioGameJam } from "../_lib/constants";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import ShinyButton from "./ui/ShinyButton";
import { ChevronRight } from "lucide-react";

const GameJamSection = () => {
  return (
    <div className="py-32 scale-105" id="work">
      <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between">
        
        <motion.h1
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
        >
          My Game Jams -
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
                {portfolioGameJam.length} in total
              </motion.p>
            </div>

      <div className="grid lg:grid-cols-3 gap-4 mt-8">
        {portfolioGameJam.map((GameJam) => (
          <ProjectCard key={GameJam.id} project={GameJam} />
        ))}
      </div>
      
    </div>
    
  );
};

export default GameJamSection;
