import React from 'react';
import CurriculumVitae from '@/interfaces/CurriculumVitae';
import Badge from '@/components/badge/Badge';

interface CertificatesCardProps {
  curriculum?: CurriculumVitae;
}
const CertificatesCard = ({ curriculum }: CertificatesCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 text-start justify-self-start justify-items-start items-start w-full">
      <h2 className="text-3xl">Certificados</h2>
      {curriculum?.certificates.map(certificate => (
        <div className="grid grid-cols-1 gap-4 text-start justify-self-start justify-items-start items-start w-full" key={certificate._id}>
          <h3 className="text-2xl">{certificate.name}</h3>
          <p className="text-lg">🏫{certificate.center}</p>
          <p className="text-lg">📅 {certificate.date}</p>
          <div className="flex flex-wrap gap-2">
            {certificate.skills.map(skill => (
              <Badge key={skill} color="dark" message={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificatesCard;
