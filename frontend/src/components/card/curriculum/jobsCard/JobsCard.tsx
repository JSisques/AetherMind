import React from 'react';
import CurriculumVitae from '@/interfaces/CurriculumVitae';

interface JobsCardProps {
  curriculum?: CurriculumVitae;
}
const JobsCard = ({ curriculum }: JobsCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 text-start justify-self-start justify-items-start items-center w-full px-4">
      <h2 className="text-xl">Experiencia Laboral</h2>
      {curriculum?.jobs.map(job => (
        <div className="grid grid-cols-1 gap-4 text-start justify-self-start justify-items-start items-center w-full" key={job._id}>
          <h3 className="text-lg">{job.company}</h3>
          <p className="text-base">{job.position}</p>
          <p className="text-base">
            {job.from} - {job.to}
          </p>
          <p className="text-base">
            📍 {job.population}, {job.country}
          </p>
          <p className="text-base">{job.sector}</p>
          <ul className="list-disc list-inside">
            {job.tasks.map(task => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default JobsCard;
