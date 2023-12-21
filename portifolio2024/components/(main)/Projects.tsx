import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/DiscordClone.png"
          title="Discord Clone - Under development"
          description="
          A Discord Clone made with Typescript, where the objective is to improve memory consumption on weaker machines."
        />
        <ProjectCard
          src="/HypeCompanion.jpeg"
          title="HypeCompanion(AI Chat) - Under development"
          description="This Chat uses artificial intelligence for conversation, getting as close as possible to the personality of several celebrity minds, both from the tech world and other areas."
        />
        <ProjectCard
          src="/SoundFy.jpg"
          title="Music App"
          description="Music app inspired by Spotify, Typescript, React, PostgreSQL e Tailwind"
        />
      </div>
    </div>
  );
};

export default Projects;