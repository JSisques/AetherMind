import HorizontalCard from '@/components/card/horizontalCard/HorizontalCard';
import React from 'react';

import projects from '@/config/constants/projects.json';

const Projects = () => {
  return (
    <main className="flex flex-row flex-wrap flex-auto justify-center items-center justify-items-center p-8 gap-4 grow">
      {projects.map(project => {
        return (
          <HorizontalCard
            key={project.title}
            image="https://flowbite.com/docs/images/logo.svg"
            title={project.title}
            text={project.description}
            className="md:basis-1/4"
          />
        );
      })}
    </main>
  );
};

export default Projects;
