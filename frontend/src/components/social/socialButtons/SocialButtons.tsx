import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import SocialButton from '@/components/social/socialButton/SocialButon';
import { SiMalt } from 'react-icons/si';

interface SocialButtonsProps {
  className?: string;
  children?: React.ReactNode;
}

const SocialButtons = ({ className, children }: SocialButtonsProps) => {
  return (
    <div className={`flex flex-row w-full justify-center gap-8 ${className}`}>
      <SocialButton icon={<FaGithub className="text-black dark:text-white h-full w-full" />} url="https://github.com/javierplazasisques" />
      <SocialButton
        icon={<FaLinkedin className="text-black dark:text-white h-full w-full" />}
        url="https://www.linkedin.com/in/javierplazasisques/"
      />
      <SocialButton icon={<FaInstagram className="text-black dark:text-white h-full w-full" />} url="https://www.instagram.com/javierplazasisques/" />
      <SocialButton icon={<SiMalt className="text-black dark:text-white h-full w-full" />} url="https://www.facebook.com/javierplazasisques" />
    </div>
  );
};

export default SocialButtons;
