'use client';
import React, { useEffect, useState } from 'react';

interface Props {
  color?: 'dark' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink' | 'blue' | 'orange' | 'teal' | 'cyan' | 'lime' | 'random';
  message: string;
}

const Badge = ({ color, message }: Props) => {
  const [style, setStyle] = useState<string>('bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300');

  if (color === 'random') {
    const validColors = ['dark', 'red', 'green', 'yellow', 'indigo', 'purple', 'pink', 'blue', 'orange', 'teal', 'cyan', 'lime'];
    const randomColor = validColors[Math.floor(Math.random() * validColors.length)];
    color = randomColor as 'dark' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink' | 'blue' | 'orange' | 'teal' | 'cyan' | 'lime';
  }

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

      case 'blue':
        setStyle('bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300');
        break;

      case 'orange':
        setStyle('bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300');
        break;

      case 'teal':
        setStyle('bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300');
        break;

      case 'cyan':
        setStyle('bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300');
        break;

      case 'lime':
        setStyle('bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300');
        break;

      default:
        break;
    }
  }, [color]);

  return <span className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded ${style}`}>{message}</span>;
};

export default Badge;
