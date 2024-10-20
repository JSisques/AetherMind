import React from 'react';
import CurriculumVitae from '@/interfaces/CurriculumVitae';
import Badge from '@/components/badge/Badge';

interface SoftskillsCardProps {
  curriculum?: CurriculumVitae;
}

const SoftskillsCard = ({ curriculum }: SoftskillsCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 text-start justify-self-start justify-items-start items-start w-full px-4">
      <h2 className="text-3xl">Soft Skills</h2>
      {curriculum?.softskills.map(skill => (
        <Badge key={skill} color="random" message={skill} />
      ))}
    </div>
  );
};

export default SoftskillsCard;
