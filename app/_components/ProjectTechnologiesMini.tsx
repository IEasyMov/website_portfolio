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
          <p key={tech} className="text-xs text-[#d9d9d9] dark:text-[#d9d9d9] hover:text-[#9f9f9f] dark:hover:text-[#ffffff] font-medium  bg-[#bd671b] dark:bg-[#753f0f] hover:bg-[#753f0f] dark:hover:bg-[#ff8112] border border-[#d16403] dark:border-[#d16403] transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
        ))
      )}
      {techStackAbout.length > 0 && (
        techStackAbout.filter(tech => tech.trim() !== "").map((tech) => (
          <p key={tech} className="text-xs text-[#d9d9d9] dark:text-[#d9d9d9] hover:text-[#9f9f9f] dark:hover:text-[#ffffff] font-medium  bg-[#0ea037] dark:bg-[#096623] hover:bg-[#096623] dark:hover:bg-[#0ea037] border border-[#209e44] dark:border-[#209e44] transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
        ))
      )}
      {techStackSize.length > 0 && (
        techStackSize.filter(tech => tech.trim() !== "").map((tech) => (
          <p key={tech} className="text-xs text-[#d9d9d9] dark:text-[#d9d9d9] hover:text-[#9f9f9f] dark:hover:text-[#ffffff] font-medium  bg-[#395c43] dark:bg-[#226234] hover:bg-[#4aac65] dark:hover:bg-[#5c966d] border border-[#3d5343] dark:border-[#3d5343] transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
        ))
      )}
      {techStackAward.length > 0 && (
        techStackAward.filter(tech => tech.trim() !== "").map((tech) => (
          <p key={tech} className="text-xs text-[#d9d9d9] dark:text-[#d9d9d9] hover:text-[#9f9f9f] dark:hover:text-[#ffffff] font-medium  bg-[#0ea037] dark:bg-[#096623] hover:bg-[#096623] dark:hover:bg-[#0ea037] border border-[#209e44] dark:border-[#209e44] transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
        ))
      )}
    </div>
  );
};

export default ProjectTechnologiesMini;
