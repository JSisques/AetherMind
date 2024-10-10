'use client';

import React, { useEffect, useState } from 'react';

interface Props {
  isChecked?: boolean;
  isDisabled?: boolean;
  text: string;
}

const Checkbox = ({ isChecked = false, isDisabled = false, text }: Props) => {
  const [disabledStyle, setDisabledStyle] = useState<string>('text-gray-900 dark:text-gray-300');
  const [isChboxChecked, setIsChboxChecked] = useState<boolean>(isChecked);

  useEffect(() => {
    isDisabled ? setDisabledStyle('text-gray-400 dark:text-gray-500') : setDisabledStyle('text-gray-900 dark:text-gray-300');
  }, [isDisabled]);

  const handleOnChange = () => {
    setIsChboxChecked(!isChboxChecked);
  };

  return (
    <>
      <div className="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          disabled={isDisabled}
          checked={isChboxChecked}
          onChange={handleOnChange}
        />
        <label htmlFor="default-checkbox" className={`ms-2 text-sm font-medium ${disabledStyle}`}>
          {text}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
