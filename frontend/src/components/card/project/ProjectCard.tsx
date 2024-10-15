"use client";

import React from "react";

interface Props {
  image?: string;
  title?: string;
  text: string;
  className?: string;
  href?: string;
}

const HorizontalCard = ({
  image,
  title,
  text,
  className,
  href = "#",
}: Props) => {
  return (
    <a
      href={href}
      className={`flex flex-col grow items-center p-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ${className}`}
    >
      {image && (
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg mr-4"
          src={image}
          alt=""
        />
      )}
      <div className="flex flex-col justify-between leading-normal">
        {title && (
          <h5 className="mt-2 md:mt-0 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        )}
        <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
      </div>
    </a>
  );
};

export default HorizontalCard;
