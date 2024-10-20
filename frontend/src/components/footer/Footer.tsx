import getCurrentYear from '@/util/timeManager';
import Image from 'next/image';
import React from 'react';

import constants from '@/config/constants/constants.json';
import routes from '@/config/constants/footerRoutes.json';

const Footer = () => {
  return (
    <>
      <footer className=" bg-blue-700 dark:bg-blue-950">
        <div className="w-full p-8 mx-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{constants.portfolioName}</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              {routes.map(route => {
                return (
                  <li key={route.name}>
                    <a href={route.path} className="hover:underline me-4 md:me-6">
                      {route.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-zinc-50 text-center dark:text-gray-400">
            © {getCurrentYear()}{' '}
            <a href={constants.authorUrl} className="hover:underline">
              Made with 🖤 by {constants.authorName}
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
