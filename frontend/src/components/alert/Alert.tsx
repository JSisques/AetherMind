'use client';

import React, { useEffect, useState } from 'react';
import { FaCircleInfo, FaXmark } from 'react-icons/fa6';

interface Props {
  type?: 'info' | 'error' | 'success' | 'warning' | 'blank';
  message: string;
}

const Alert = ({ type, message }: Props) => {
  const [divStyle, setDivStyle] = useState<string>('border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-600');
  const [buttonStyle, setButtonStyle] = useState<string>(
    'bg-gray-50 text-gray-500 focus:ring-2 focus:ring-gray-400 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    switch (type) {
      case 'info':
        setDivStyle('text-blue-800 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800');
        setButtonStyle(
          'bg-blue-50 text-blue-500 focus:ring-2 focus:ring-blue-400 hover:bg-blue-200 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700',
        );

        break;

      case 'error':
        setDivStyle('text-red-800 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800');
        setButtonStyle(
          ' bg-red-50 text-red-500 focus:ring-2 focus:ring-red-400 hover:bg-red-200 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700',
        );
        break;

      case 'success':
        setDivStyle('text-green-800 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800');
        setButtonStyle(
          'bg-green-50 text-green-500 focus:ring-2 focus:ring-green-400 hover:bg-green-200 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700',
        );
        break;

      case 'warning':
        setDivStyle('text-yellow-800 border-yellow-300 bg-yellow-50 dark:text-yellow-300 dark:bg-gray-800 dark:border-yellow-800');
        setButtonStyle(
          'bg-yellow-50 text-yellow-500 focus:ring-2 focus:ring-yellow-400 hover:bg-yellow-200 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700',
        );
        break;

      default:
        break;
    }

    setIsVisible(true);
  }, [type]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div id="alert" className={`flex items-center p-4 mb-4 ${divStyle}`} role="alert">
      <FaCircleInfo />
      <div className="ms-3 text-sm font-medium">{message}</div>
      <button
        type="button"
        className={`ms-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8 ${buttonStyle}`}
        data-dismiss-target="#alert"
        aria-label="Close"
        onClick={handleClose}
      >
        <FaXmark />
      </button>
    </div>
  );
};

export default Alert;
