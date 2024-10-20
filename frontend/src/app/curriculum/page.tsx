'use client';

import PersonalInformationCard from '@/components/card/curriculum/personalInformationCard/PersonalInformationCard';
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
    <main className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(40rem,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(40rem,1fr))] gap-4 p-8">
      <PersonalInformationCard />
      <StudiesCard />
    </main>
  );
};

export default CurriculumVitae;
