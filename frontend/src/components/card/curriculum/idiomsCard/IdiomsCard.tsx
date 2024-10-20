import React from 'react';
import CurriculumVitae from '@/interfaces/CurriculumVitae';

interface IdiomsCardProps {
  curriculum?: CurriculumVitae;
}

const IdiomsCard = ({ curriculum }: IdiomsCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 text-start justify-self-start justify-items-start items-start w-full px-4">
      <h2 className="text-3xl">Idiomas</h2>
      {curriculum?.idioms.map(idiom => (
        <div key={idiom._id}>
          <h3>{idiom.idiom}</h3>
          <p>{idiom.listeningComprehension}</p>
          <p>{idiom.readingComprehension}</p>
          <p>{idiom.writtenExpression}</p>
          <p>{idiom.oralProduction}</p>
          <p>{idiom.oralInteraction}</p>
        </div>
      ))}
    </div>
  );
};

export default IdiomsCard;
