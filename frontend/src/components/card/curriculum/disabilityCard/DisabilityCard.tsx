import React from 'react';
import CurriculumVitae from '@/interfaces/CurriculumVitae';

interface DisabilityCardProps {
  curriculum?: CurriculumVitae;
}

const DisabilityCard = ({ curriculum }: DisabilityCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 text-start justify-self-start justify-items-start items-start w-full px-4">
      <h2 className="text-3xl">Disability</h2>
      <p>{curriculum?.disability?.type}</p>
      <p>{curriculum?.disability?.description}</p>
      <p>📅 {curriculum?.disability?.date}</p>
    </div>
  );
};

export default DisabilityCard;
