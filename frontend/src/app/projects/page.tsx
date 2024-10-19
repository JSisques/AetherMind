import ProjectCard from '@/components/card/project/ProjectCard';
import React from 'react';

import projects from '@/config/constants/projects.json';

const Projects = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(40rem,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(40rem,1fr))] gap-4 p-8">
      {projects.map(project => {
        return (
          <ProjectCard
            key={project.title}
            image="https://flowbite.com/docs/images/logo.svg"
            title={project.title}
            text={project.description}
            className="h-full w-full"
          />
        );
      })}
    </main>
  );
};

export default Projects;
