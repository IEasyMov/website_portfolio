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
          <p key={tech} className="text-xs text-[#d9d9d9] dark:text-[#d9d9d9] hover:text-[#9f9f9f] dark:hover:text-[#ffffff] font-medium  bg-[#13c645] dark:bg-[#13c645] hover:bg-[#096623] dark:hover:bg-[#096623] border border-[#0d8d31] dark:border-[#0d8d31] transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
        ))
      )}
      {techStackEngine.length > 0 && (
        techStackEngine.filter(tech => tech.trim() !== "").map((tech) => (
          <p key={tech} className="text-xs text-[#d9d9d9] dark:text-[#d9d9d9] hover:text-[#9f9f9f] dark:hover:text-[#ffffff] font-medium  bg-[#0d8d31] dark:bg-[#0d8d31] hover:bg-[#13c645] dark:hover:bg-[#13c645] border border-[#096623] dark:border-[#096623] transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
        ))
      )}
      {techStackAbout.length > 0 && (
        techStackAbout.filter(tech => tech.trim() !== "").map((tech) => (
          <p key={tech} className="text-xs text-[#d9d9d9] dark:text-[#d9d9d9] hover:text-[#9f9f9f] dark:hover:text-[#ffffff] font-medium  bg-[#096623] dark:bg-[#096623] hover:bg-[#0d8d31] dark:hover:bg-[#0d8d31] border border-[#064a19] dark:border-[#064a19] transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
        ))
      )}
      {techStackSize.length > 0 && (
        techStackSize.filter(tech => tech.trim() !== "").map((tech) => (
          <p key={tech} className="text-xs text-[#d9d9d9] dark:text-[#d9d9d9] hover:text-[#9f9f9f] dark:hover:text-[#ffffff] font-medium  bg-[#064a19] dark:bg-[#064a19] hover:bg-[#096623] dark:hover:bg-[#096623] border border-[#053713] dark:border-[#053713] transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
        ))
      )}
      {techStackAward.length > 0 && (
        techStackAward.filter(tech => tech.trim() !== "").map((tech) => (
          <p key={tech} className="text-xs text-[#d9d9d9] dark:text-[#d9d9d9] hover:text-[#9f9f9f] dark:hover:text-[#ffffff] font-medium  bg-[#053713] dark:bg-[#053713] hover:bg-[#064a19] dark:hover:bg-[#064a19] border border-[#021106] dark:border-[#021106] transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
        ))
      )}
    </div>
  );
};

export default ProjectTechnologiesMini;
