interface ProjectTechnologiesMiniProps {
  techStack: string[];
  techStackEngine: string[];
  techStackAbout: string[];
  techStackSize: string[];
  techStackAward: string[];
}

const ProjectTechnologiesMini = ({
  techStack,
  techStackEngine,
  techStackAbout,
  techStackSize,
  techStackAward,
}: ProjectTechnologiesMiniProps) => {  return (
    <div className="flex flex-wrap items-center gap-2.5 max-w-sm">
      {techStack.length > 0 && (
        techStack.filter(tech => tech.trim() !== "").map((tech) => (
          <p key={tech} className="text-xs text-[#d9d9d9] dark:text-[#d9d9d9] hover:text-[#9f9f9f] dark:hover:text-[#ffffff] font-medium  bg-[#bd671b] dark:bg-[#753f0f] hover:bg-[#753f0f] dark:hover:bg-[#ff8112] border border-[#d16403] dark:border-[#d16403] transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
        ))
      )}
      {techStackEngine.length > 0 && (
        techStackEngine.filter(tech => tech.trim() !== "").map((tech) => (
          <p key={tech} className="text-xs text-dark-200/60 hover:text-dark-200 dark:text-white/60 dark:hover:text-white font-medium bg-[#ECEEEC] dark:bg-dark-300 hover:bg-dark-300/10 dark:hover:bg-dark-400 border dark:border-dark-400 transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
        ))
      )}
      {techStackAbout.length > 0 && (
        techStackAbout.filter(tech => tech.trim() !== "").map((tech) => (
          <p key={tech} className="text-xs text-dark-200/60 hover:text-dark-200 dark:text-white/60 dark:hover:text-white font-medium bg-[#ECEEEC] dark:bg-dark-300 hover:bg-dark-300/10 dark:hover:bg-dark-400 border dark:border-dark-400 transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
        ))
      )}
      {techStackSize.length > 0 && (
        techStackSize.filter(tech => tech.trim() !== "").map((tech) => (
          <p key={tech} className="text-xs text-dark-200/60 hover:text-dark-200 dark:text-white/60 dark:hover:text-white font-medium bg-[#ECEEEC] dark:bg-dark-300 hover:bg-dark-300/10 dark:hover:bg-dark-400 border dark:border-dark-400 transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
        ))
      )}
      {techStackAward.length > 0 && (
        techStackAward.filter(tech => tech.trim() !== "").map((tech) => (
          <p key={tech} className="text-xs text-dark-200/60 hover:text-dark-200 dark:text-white/60 dark:hover:text-white font-medium bg-[#ECEEEC] dark:bg-dark-300 hover:bg-dark-300/10 dark:hover:bg-dark-400 border dark:border-dark-400 transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
        ))
      )}
    </div>
  );
};

export default ProjectTechnologiesMini;
