import React from 'react';

interface SocialButtonProps {
  icon: React.ReactNode;
  url: string;
}

const SocialButon = ({ icon, url }: SocialButtonProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex justify-center items-center">
      {icon}
    </a>
  );
};

export default SocialButon;
