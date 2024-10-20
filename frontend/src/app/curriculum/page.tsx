'use client';

import AwardsCard from '@/components/card/curriculum/awardsCard/AwardsCard';
import CertificatesCard from '@/components/card/curriculum/certificatesCard/CertificatesCard';
import DisabilityCard from '@/components/card/curriculum/disabilityCard/DisabilityCard';
import DriverLicenseCard from '@/components/card/curriculum/driverLicenseCard/DriverLicenseCard';
import HardSkillsCard from '@/components/card/curriculum/hardskillsCard/HardkillsCard';
import IdiomsCard from '@/components/card/curriculum/idiomsCard/IdiomsCard';
import JobsCard from '@/components/card/curriculum/jobsCard/JobsCard';
import PersonalInformationCard from '@/components/card/curriculum/personalInformationCard/PersonalInformationCard';
import SoftskillsCard from '@/components/card/curriculum/softskillsCard/SoftskillsCard';
import StudiesCard from '@/components/card/curriculum/studiesCard/StudiesCard';
import CurriculumVitaeInterface from '@/interfaces/CurriculumVitae';
import fetchManager from '@/util/fetchManager';
import React, { useEffect, useState } from 'react';

const CurriculumVitae = () => {
  const [curriculum, setCurriculum] = useState<CurriculumVitaeInterface[] | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchManager
      .get('/curriculum')
      .then(setCurriculum)
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div>Loading...</div>;
  return (
    <main className="grid grid-cols-1 gap-4 mb-4">
      <PersonalInformationCard curriculum={curriculum?.[0]} />
      <hr className="w-[80%] mx-auto text-center justify-self-center" />
      <JobsCard curriculum={curriculum?.[0]} />
      <hr className="w-[80%] mx-auto text-center justify-self-center" />
      <StudiesCard curriculum={curriculum?.[0]} />
      <hr className="w-[80%] mx-auto text-center justify-self-center" />
      <CertificatesCard curriculum={curriculum?.[0]} />
      <hr className="w-[80%] mx-auto text-center justify-self-center" />
      <IdiomsCard curriculum={curriculum?.[0]} />
      <hr className="w-[80%] mx-auto text-center justify-self-center" />
      <HardSkillsCard curriculum={curriculum?.[0]} />
      <hr className="w-[80%] mx-auto text-center justify-self-center" />
      <SoftskillsCard curriculum={curriculum?.[0]} />
      <hr className="w-[80%] mx-auto text-center justify-self-center" />
      <AwardsCard curriculum={curriculum?.[0]} />
      <hr className="w-[80%] mx-auto text-center justify-self-center" />
      <DriverLicenseCard curriculum={curriculum?.[0]} />
      <hr className="w-[80%] mx-auto text-center justify-self-center" />
      <DisabilityCard curriculum={curriculum?.[0]} />
    </main>
  );
};

export default CurriculumVitae;
