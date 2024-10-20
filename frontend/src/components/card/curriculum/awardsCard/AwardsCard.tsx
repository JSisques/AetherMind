import React from 'react';
import CurriculumVitae from '@/interfaces/CurriculumVitae';

interface AwardsCardProps {
  curriculum?: CurriculumVitae;
}

const AwardsCard = ({ curriculum }: AwardsCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 text-start justify-self-start justify-items-start items-start w-full px-4">
      <h2 className="text-3xl">Awards</h2>
      {curriculum?.awards.map(award => (
        <div key={award._id}>
          <h3>{award.name}</h3>
          <p>{award.description}</p>
          <p>🏫 {award.center}</p>
          <p>📅 {award.date}</p>
        </div>
      ))}
    </div>
  );
};

export default AwardsCard;
