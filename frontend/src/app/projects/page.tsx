'use client';

import ProjectCard from '@/components/card/project/ProjectCard';
import React, { useEffect, useState } from 'react';
import fetchManager from '@/util/fetchManager';
import { Project } from '@/interfaces/Project';

const Projects = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchManager
      .get('/projects')
      .then(setProjects)
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div>Loading...</div>;
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
