'use client';
import React from 'react';
import CurriculumVitae from '@/interfaces/CurriculumVitae';

interface StudiesCardProps {
  curriculum?: CurriculumVitae;
}
const StudiesCard = ({ curriculum }: StudiesCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 text-start justify-self-start justify-items-start items-start w-full px-4">
      <h2 className="text-3xl">Estudios</h2>
      {curriculum?.studies.map(study => (
        <div className="grid grid-cols-1 gap-4 justify-self-start justify-items-start items-start w-full" key={study._id}>
          <h3 className="text-2xl">{study.name}</h3>
          <p className="text-lg">{study.center}</p>
          <p className="text-lg">
            {study.from} - {study.to}
          </p>
          <p className="text-lg">
            📍 {study.population}, {study.country}
          </p>
          <a href={study.webUrl} target="_blank" rel="noopener noreferrer">
            {study.webUrl}
          </a>
        </div>
      ))}
    </div>
  );
};

export default StudiesCard;
