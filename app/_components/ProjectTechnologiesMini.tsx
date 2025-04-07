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
        techStack.filter(tech => tech.trim() !== "").map((tech, index) => (
          <div className="flex items-start" key={tech}>
            {index===0 && (
              <div className="relative w-6 h-6 -mt-2 -mr-3 rounded-full bg-[#064a19] border-black z-10 flex items-center justify-center">
                <img 
                  src="/imgs/TechCardsLogo/EngineLogo.png" 
                  alt="Tech logo"
                  className="w-5 h-5 object-contain"
                />
              </div>
            )}
            {/* Your existing box */}
            <p 
              key={tech} 
              className="text-xs text-[#d9d9d9] dark:text-[#d9d9d9] hover:text-[#9f9f9f] border border-[#053713] dark:hover:text-[#ffffff] font-medium bg-[#064a19] dark:bg-[#064a19] hover:bg-[#096623] dark:hover:bg-[#096623] border border-[#053713] dark:border-[#053713] transition-colors duration-200 w-fit rounded-md py-2 px-4"
            >
              {tech}
            </p>
          </div>
        ))
      )}
      {techStackEngine.length > 0 && (
        techStackEngine.filter(tech => tech.trim() !== "").map((tech, index) => (
          <div className="relative inline-block group" key={tech}>
            {index===0 && (
              <div className="absolute -left-2 -top-2 w-6 h-6 rounded-full bg-[#0d8d31] border border-[#053713] z-10 flex items-center justify-center">
                <img 
                  src="/imgs/TechCardsLogo/EngineLogo.png" 
                  alt="Tech logo"
                  className="w-5 h-5 object-contain"
                />
              </div>
            )}
            {/* Your existing box */}
            <p key={tech} className="text-xs text-[#d9d9d9] dark:text-[#d9d9d9] hover:text-[#9f9f9f] dark:hover:text-[#ffffff] font-medium  bg-[#0d8d31] dark:bg-[#0d8d31] hover:bg-[#13c645] dark:hover:bg-[#13c645] border border-[#096623] dark:border-[#096623] transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
          </div>
        ))
      )}
      {techStackAbout.length > 0 && (
        techStackAbout.filter(tech => tech.trim() !== "").map((tech, index) => (
          <div className="relative inline-block group" key={tech}>
            {index===0 && (
              <div className="absolute -left-2 -top-2 w-6 h-6 rounded-full bg-[#096623] border border-[#053713] z-10 flex items-center justify-center">
                <img 
                  src="/imgs/TechCardsLogo/LightBulbLogo.png" 
                  alt="About logo"
                  className="w-5 h-5 object-contain"
                />
              </div>
            )}
            {/* Your existing box */}
            <p key={tech} className="text-xs text-[#d9d9d9] dark:text-[#d9d9d9] hover:text-[#9f9f9f] dark:hover:text-[#ffffff] font-medium  bg-[#096623] dark:bg-[#096623] hover:bg-[#0d8d31] dark:hover:bg-[#0d8d31] border border-[#064a19] dark:border-[#064a19] transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
          </div>
        ))
      )}
      {techStackSize.length > 0 && (
        techStackSize.filter(tech => tech.trim() !== "").map((tech, index) => (
          <div className="relative inline-block group" key={tech}>
            {index===0 && (
              <div className="absolute -left-2 -top-2 w-6 h-6 rounded-full bg-[#064a19] border border-[#053713] z-10 flex items-center justify-center">
                <img 
                  src="/imgs/TechCardsLogo/TeamLogo.png" 
                  alt="About logo"
                  className="w-4 h-4 object-contain"
                />
              </div>
            )}
            {/* Your existing box */}
            <p key={tech} className="text-xs text-[#d9d9d9] dark:text-[#d9d9d9] hover:text-[#9f9f9f] dark:hover:text-[#ffffff] font-medium  bg-[#064a19] dark:bg-[#064a19] hover:bg-[#096623] dark:hover:bg-[#096623] border border-[#053713] dark:border-[#053713] transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
          </div>
        ))
      )}
      {techStackAward.length > 0 && (
        techStackAward.filter(tech => tech.trim() !== "").map((tech, index) => (
          <div className="relative inline-block group" key={tech}>
            {index===0 && (
              <div className="absolute -left-2 -top-2 w-6 h-6 rounded-full bg-[#053713] border border-[#053713] z-10 flex items-center justify-center">
                <img 
                  src="/imgs/TechCardsLogo/AwardLogo.png" 
                  alt="About logo"
                  className="w-4 h-4 object-contain"
                />
              </div>
            )}
            {/* Your existing box */}
            <p key={tech} className="text-xs text-[#d9d9d9] dark:text-[#d9d9d9] hover:text-[#9f9f9f] dark:hover:text-[#ffffff] font-medium  bg-[#053713] dark:bg-[#053713] hover:bg-[#064a19] dark:hover:bg-[#064a19] border border-[#021106] dark:border-[#021106] transition-colors duration-200 w-fit rounded-md py-2 px-4">{tech}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectTechnologiesMini;
