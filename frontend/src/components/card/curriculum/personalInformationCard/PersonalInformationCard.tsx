'use client';
import React from 'react';
import Image from 'next/image';
import SocialButtons from '@/components/social/socialButtons/SocialButtons';
import CurriculumVitae from '@/interfaces/CurriculumVitae';

interface PersonalInformationCardProps {
  className?: string;
  children?: React.ReactNode;
  curriculum?: CurriculumVitae;
}

const PersonalInformationCard = ({ className, curriculum }: PersonalInformationCardProps) => {
  return (
    <div className="grid grid-cols-1 text-center justify-self-center justify-items-center items-center w-full">
      <Image src={'/images/profile.jpg'} alt="/images/profile.jpg" width={0} height={0} sizes="100vw" className="w-full" />
      <h2 className="text-4xl my-4">{curriculum?.personalInformation.name}</h2>
      <p className="text-2xl mb-2">
        <i>{curriculum?.personalInformation.profession}</i>
      </p>
      <span className="w-full mb-4">
        📍 {curriculum?.personalInformation.population}, {curriculum?.personalInformation.country}
      </span>
      <SocialButtons className="w-full" />
    </div>
  );
};

export default PersonalInformationCard;
