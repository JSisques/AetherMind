import React from 'react';
import CurriculumVitae from '@/interfaces/CurriculumVitae';

interface DriverLicenseCardProps {
  curriculum?: CurriculumVitae;
}

const DriverLicenseCard = ({ curriculum }: DriverLicenseCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 text-start justify-self-start justify-items-start items-start w-full px-4">
      <h2 className="text-3xl">Driver License</h2>
      <p>{curriculum?.driverLicense?.type}</p>
      <p>📅 {curriculum?.driverLicense?.date}</p>
    </div>
  );
};

export default DriverLicenseCard;
