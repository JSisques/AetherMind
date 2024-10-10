'use client';
import React, { useEffect, useState } from 'react';

interface Props {
  color?: 'dark' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink';
  message: string;
}

const Badge = ({ color, message }: Props) => {
  const [style, setStyle] = useState<string>('bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300');

  useEffect(() => {
    switch (color) {
      case 'dark':
        setStyle('bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300');
        break;

      case 'red':
        setStyle('bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300');
        break;

      case 'green':
        setStyle('bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300');
        break;

      case 'yellow':
        setStyle('bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300');
        break;

      case 'indigo':
        setStyle('bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300');
        break;

      case 'purple':
        setStyle('bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300');
        break;

      case 'pink':
        setStyle('bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300');
        break;

      default:
        break;
    }
  }, [color]);

  return <span className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded ${style}`}>Default</span>;
};

export default Badge;
