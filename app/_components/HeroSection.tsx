"use client";

import { ChevronRight, Download, ChevronLeft, ChevronRight as RightIcon } from "lucide-react";
import ShinyButton from "./ui/ShinyButton";
import { AnimatedTooltip } from "./ui/Tooltip";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { TextGenerateEffectColored } from "./ui/TextGenerateColored";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [currentGame, setCurrentGame] = useState(0);
  const [isExpertiseVisible, setIsExpertiseVisible] = useState(false);
  
  const toggleExpertise = () => {
    setIsExpertiseVisible(!isExpertiseVisible);
  };
  
  // Tableau des panels (tu peux en ajouter d'autres plus tard)
  const panels = [
    {
      id: 0,
      title: "Game Design",
      icon: "/imgs/Panels/ScreenGD1.PNG",
      icon2: "/imgs/Panels/ScreenGD2.PNG",
      icon3: "/imgs/Panels/ScreenGD3.PNG",
      description: "- Design the core gameplay adapting the project ideas",
      description2: "- Prototype, test, and iterate features & mechanics on my own",
      description3: "- Game Design Documents clear and well structured",
      description4: "- Always looking to improve systems and gameplay feelings",
      description5: "- Implement gameplay features and mechanics directly",
      description6: "- Analyze and listen to feedbacks to polish features",
      skills: ["Design Mechanics", "GDD Documents", "Progression systems", "Schematization & Prototyping", "Iterating & Testing", "Iterating & Testing"]
    },
    {
      id: 1,
      title: "Economic Design",
      icon: "/imgs/Panels/ScreenED2.png",
      icon2: "/imgs/Panels/ScreenED3.png",
      icon3: "/imgs/Panels/ScreenED4.png",
      description: "- Design and manage the currencies, resources, and rewards",
      description2: "- Balance progression, costs and rewards across gameplay systems",
      description3: "- Analyze player behavior and data to adjust economic balance",
      description4: "- Support implementation of Economic Systems",
      description5: "- Tweak reward loops to maintain engagement and fairness",
      description6: "- Polis levels to smooth the navigation, clarity and experience",
      skills: ["Game Economy", "Progression balance", "Reward systems", "Ressource management", "Data analysis"]
    },
    {
      id: 2,
      title: "Level Design",
      icon: "/imgs/Panels/ScreenLD1.PNG",
      icon2: "/imgs/Panels/ScreenLD3.PNG",
      icon3: "/imgs/Panels/ScreenLD5.PNG",
      description: "- Conception of Blockout for quick and basic iterations",
      description2: "- Logical positionnement of encounters, objectives and interactive elements to maximize the flow",
      description4: "- Balancing the readability and difficulty of the pacing",
      description5: "- Collaborating with Artists and Tech Teams to construct levels",
      description6: "- Playtest and feedback levels to smooth the navigation, clarity and experience",
      skills: ["Level Blockout", "Encounter Design", "Smooth Pacing", "Navigation clarity", "Iteration & Playtesting", "Flow of difficulty"]
    }
  ];

  // Tableau des jeux publiés
  const publishedGames = [
    {
      id: 0,
      title: "Flashback 2",
      mainImage: "/imgs/Published/Flashback/Logo.png",
      videoUrl: "https://www.youtube.com/embed/3Qze73xgXn4?autoplay=1&mute=1&controls=1",
      videoImage: "/imgs/Published/Flashback/Banner.png",
      priceImage: "/imgs/Published/Flashback/Price.png",
      storeUrl: "https://store.steampowered.com/app/2008420/Flashback_2/", // ← AJOUTE ICI

      contributions: [
        "Documentation of Game Features and new changes",
        "Detailed writing of the gameplay understanding",
        "Played & Analyzed playthrough with fresh perspective to clarify and orientate the production",
        "Documented features, progress and fixes for internal stakeholders",
        "Produced dev log for updates"
      ],
      developer: "Microids Studio Paris",
      publisher: "Microids",
      platform: "Pc & Console",
      tags: ["Action", "Adventure", "Arcade", "2.5D", "Futuristic", "Retro"],
      steamDescription: "Immerse yourself in an action-packed cyberpunk universe where the fate of humanity itself hangs in the balance. The Morphs are preparing their final attack, determined to enslave every civilization in the Solar System — and it's your mission to fight back!"
    },
    {
      id: 1,
      title: "L'Amerzone",
      mainImage: "/imgs/Published/Amerzone/Logo2.png",
      videoUrl: "https://www.youtube.com/embed/I-Ch7cODZ14?autoplay=1&mute=1&controls=1",
      videoImage: "/imgs/Published/Amerzone/Banner.png",
      priceImage: "/imgs/Published/Flashback/Price.png",
      storeUrl: "https://store.steampowered.com/app/2429190/LAmerzone__Le_Testament_de_lExplorateur/", // ← AJOUTE ICI

      contributions: [
        "Documentation and listing of the game objects and interactibles",
        "Redaction of documents for game narrative coherence",
        "Playtesting and reporting bugs during the playthrough",
        "Assistance of the Lead Game Designer during a part of the production",
        "Writting feedback documents showing how players feels the game"
      ],
      developer: "Microids Studio Paris",
      publisher: "Microids",
      platform: "Pc & Console",
      tags: ["Adventure", "Puzzle", "Fictive Interaction", "Atmospheric", "Investigation"],
      steamDescription: "Set off on a quest for the Great White Birds in a mysterious land full of secrets! Answer the call of exploration as you travel to Amerzone, a forgotten Latin American country, to fulfill the last wishes of a late explorer."
    }
  ];

  // Fonctions pour le carrousel d'expertises
  const goToPrevPanel = () => {
    setCurrentPanel((prev) => (prev === 0 ? panels.length - 1 : prev - 1));
  };

  const goToNextPanel = () => {
    setCurrentPanel((prev) => (prev === panels.length - 1 ? 0 : prev + 1));
  };

  const goToPanel = (index: number) => {
    setCurrentPanel(index);
  };

  // Fonctions pour le carrousel des jeux publiés
  const goToPrevGame = () => {
    setCurrentGame((prev) => (prev === 0 ? publishedGames.length - 1 : prev - 1));
  };

  const goToNextGame = () => {
    setCurrentGame((prev) => (prev === publishedGames.length - 1 ? 0 : prev + 1));
  };

  const goToGame = (index: number) => {
    setCurrentGame(index);
  };

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(goToNextPanel, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background and radial gradient */}
      <div className="h-screen w-full dark:bg-dark-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.06] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main content */}
      <div
        className="pb-20 sm:pb-0 pt-20 sm:pt-36 min-h-screen flex flex-col items-center justify-center relative"
        id="#home"
      >
        {/* Centered content */}
        <div className="flex flex-col justify-center items-center relative text-center px-6 sm:px-0">
          {/* Profile Picture */}
          <div
            className="max-w-[20vw] max-h-[20vw] sm:max-w-[15vw] sm:max-h-[15vw] w-full h-full rounded-full overflow-hidden mb-10 sm:mb-16"
            style={{ aspectRatio: "1 / 1" }}
          >
            <img
              src="/imgs/avatars/ProfilePicture.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <TextGenerateEffect
            words="Alexandre Foussat"
            className="text-[28px] sm:text-[36px] md:text-6xl lg:text-7xl font-bold max-w-5xl leading-snug tracking-wide block"
          />
          <TextGenerateEffectColored
            words="Game Designer"
            className="text-[28px] text-[#33ba23] sm:text-[36px] md:text-6xl lg:text-7xl font-bold max-w-5xl leading-snug tracking-wide block"
          />

          {/* Subtitle */}
          <p className="pt-6 sm:pt-7 pb-8 sm:pb-10 text-base sm:text-lg md:text-xl text-dark-200 dark:text-stone-200/70 max-w-xl">
            I imagine, design and create strange and fun video games.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-8 -mb-32">
            {/* <ShinyButton icon={<ChevronRight />}>
              <Link href="/#work">See My Work</Link>
            </ShinyButton> */}
            <a
              href="/resume/Resume_FOUSSAT_Alexandre.pdf"
              download
              className="flex items-center gap-3 group"
            >
              <Download className="text-primary" />
              <span className="group-hover:text-white/70 transition-colors duration-200 font-semibold">
                Download my Resume
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Published Games Carousel */}
      <section className="w-90 py-16 md:py-24 bg-gradient-to-b from-transparent to-dark-100/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-white"  id="published">
            Published Games Worked on
          </h2>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevGame}
              className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-dark-200/30 hover:bg-dark-200/50 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary/50"
              aria-label="Previous game"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={goToNextGame}
              className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-dark-200/30 hover:bg-dark-200/50 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary/50"
              aria-label="Next game"
            >
              <RightIcon className="w-6 h-6 text-white" />
            </button>
            
            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-dark-200/20 to-dark-300/20 backdrop-blur-xl border border-white/10 shadow-2xl">
            <img src="/imgs/Published/Background.PNG"
      alt="Background"
      className="w-full h-full object-cover absolute">
            
            </img>
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentGame * 100}%)` }}
              >
                {publishedGames.map((game) => (
                  <div 
                    key={game.id}
                    className="w-full flex-shrink-0 p-6 md:p-8"
                  >
                    {/* Two Columns Layout */}
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
                      
                      {/* First Column */}
                      <div className="flex-1">
                        {/* Image */}
                        <div className="mb-16 rounded-xl overflow-hidden">
                          <img 
                            src={game.mainImage}
                            alt={`${game.title} Screenshot`}
                            className="w-auto h-40 md:h-24 object-fill"
                          />
                        </div>
                        
                        {/* Text 1 */}
                        <p className="text-gray-300 mb-8 font-bold text-3xl md:text-2xl">
                          My realization on the project
                        </p>
                        
                        {/* Text 2 (List) */}
                        <ul className="text-gray-300 mb-4 space-y-2">
                          {game.contributions.map((contribution, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-primary mr-2 mt-2">•</span>
                              <span className="mt-2">{contribution}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* Text 3 */}
                        <div className="mb-6">
                          <p className="text-gray-400 text-sm mb-4 mt-8 font-bold">
                            Developer: <span className="text-primary">{game.developer}</span>
                          </p>
                          <p className="text-gray-400 text-sm mb-4 font-bold">
                            Publisher: <span className="text-primary">{game.publisher}</span>
                          </p>
                          <p className="text-gray-400 text-sm font-bold">
                            Platform: <span className="text-primary">{game.platform}</span>
                          </p>
                          
                          <p className="text-gray-300 mt-8 -mb-5">
                            Popular user-defined tags for this product -
                          </p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 -mb-10 mt-8">
                            {game.tags.map((tag, index) => (
                              <span 
                                key={index}
                                className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Second Column */}
                      <div className="flex-1">
                        {/* Video */}
                        <div className="mb-6 rounded-xl overflow-hidden">
                          <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                            <iframe
                              src={game.videoUrl}
                              title={`${game.title} Trailer`}
                              className="absolute top-0 left-0 w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                        
                        {/* Image below video */}
                        <div className="mb-4 mt-10 rounded-xl overflow-hidden">
                          <img 
                            src={game.videoImage}
                            alt={`${game.title} Gameplay`}
                            className="w-full h-38 md:h-40 object-cover object-top"
                          />
                        </div>
                        
                        {/* Text */}
                        <div className="-mb-2">
                          <p className="text-gray-300">
                            {game.steamDescription}
                          </p>
                        </div>
                        
                        {/* Bottom Image */}
                        <a 
                            href={game.storeUrl || "#"} // Ajoute storeUrl dans tes données
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-xl overflow-hidden hover:opacity-90 transition-opacity duration-300"
                          >
                            <img 
                              src={game.priceImage}
                              alt={`Buy ${game.title} on Steam`}
                              className="w-48 h-20 md:h-10 object-cover rounded-lg"
                              style={{ marginLeft: '20rem', marginTop: "1rem"}}
                            />
                          </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-8 md:mt-12">
              {publishedGames.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToGame(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentGame 
                      ? 'bg-primary w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to game ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Game Counter */}
            <div className="text-center mt-6 text-gray-400 text-sm md:text-base">
              <span className="text-primary font-semibold">{currentGame + 1}</span>
              <span className="mx-2">/</span>
              <span>{publishedGames.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery/Carousel Section - Ici */}
<section className="w-full py-16 md:py-24 bg-gradient-to-b from-transparent to-dark-100/50 relative">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Titre avec flèche toggle */}
    <div className=" justify-center items-center gap-4 mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white -mt-32">
        Domains of Expertise
      </h2>
      <h2 className="text-3xl md:text-xl lg:text-x1 text-center text-white ">
        Game Design, Economic Design & Level Design
        </h2>
      <button
      style={{ marginLeft: '48%', marginTop: "1rem", marginBottom: "-2.5rem"}}
        onClick={toggleExpertise}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-dark-200/30 hover:bg-dark-200/50 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary/50 group"
        aria-label={isExpertiseVisible ? "Hide expertise" : "Show expertise"}
      >
        <ChevronRight className={`w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-300 ${isExpertiseVisible ? 'rotate-90' : ''}`} />
      </button>
    </div>
    
    {/* Carousel (conditionnel) */}
    {isExpertiseVisible && (
      <div className="relative max-w-5xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevPanel}
          className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-dark-200/30 hover:bg-dark-200/50 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary/50"
          aria-label="Previous panel"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={goToNextPanel}
          className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-dark-200/30 hover:bg-dark-200/50 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary/50"
          aria-label="Next panel"
        >
          <RightIcon className="w-6 h-6 text-white" />
        </button>
        
        {/* Carousel Container */}
        <div className="-mb-8 relative w-full overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-dark-200/20 to-dark-300/20 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentPanel * 100}%)` }}
          >
            {panels.map((panel) => (
              <div 
                key={panel.id}
                className="w-full flex-shrink-0 p-16 md:p-14 -ml-4 mr-4 -mb-6"
              >
                <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-8">
                  {/* Content Section */}
                  <div className="flex-1 text-left">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white -mt-20 ml-36">
                      {panel.title}
                    </h3>
                    <div className="my-14 mt-14">
                      <p className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl">
                        {panel.description}
                      </p>
                      <p className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl">
                        {panel.description2}
                      </p>
                      <p className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl">
                        {panel.description3}
                      </p>
                      <p className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl">
                        {panel.description4}
                      </p>
                      <p className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl">
                        {panel.description5}
                      </p>
                      <p className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl">
                        {panel.description6}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 -mt-6">
                      {panel.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="mt-16 -mb-14 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium backdrop-blur-sm hover:bg-primary/20 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0 space-y-5 -mr-8">
                    {/* Première image avec cadre */}
                    <div className="p-2 -mt-6 bg-primary/30 border border-primary rounded-2xl backdrop-blur-sm">
                      <div className="w-54 h-46 md:w-80 md:h-55 rounded-xl overflow-hidden">
                        <img 
                          src={panel.icon} 
                          alt={`${panel.title} illustration`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="p-2 -mt-2 bg-primary/30 border border-primary rounded-2xl backdrop-blur-sm">
                      <div className="w-54 h-46 md:w-80 md:h-55 rounded-xl overflow-hidden">
                        <img 
                          src={panel.icon2} 
                          alt={`${panel.title} illustration`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="p-2 -mb-6 bg-primary/30 border border-primary rounded-2xl backdrop-blur-sm">
                      <div className="w-54 h-46 md:w-80 md:h-55 rounded-xl overflow-hidden">
                        <img 
                          src={panel.icon3} 
                          alt={`${panel.title} illustration`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8 md:mt-12">
          {panels.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPanel(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPanel 
                  ? 'bg-primary w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to panel ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Panel Counter */}
        <div className="text-center mt-6 -mb-16 text-gray-400 text-sm md:text-base">
          <span className="text-primary font-semibold">{currentPanel + 1}</span>
          <span className="mx-2">/</span>
          <span>{panels.length}</span>
        </div>
      </div>
    )}
  </div>
</section>
    </>
  );
};


export default HeroSection;