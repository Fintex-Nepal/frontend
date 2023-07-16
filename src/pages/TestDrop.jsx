import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="hs-accordion" id="bu-account-accordion">
      <a
        className={`hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white ${
          isOpen ? 'active' : ''
        }`}
        href="javascript:;"
        onClick={toggleDropdown}
      >
        <svg
          className="w-3.5 h-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          {/* SVG paths */}
        </svg>
        Account

        <svg
          className={`hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400 ${
            isOpen ? 'active' : ''
          }`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG path */}
        </svg>

        <svg
          className={`hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400 ${
            isOpen ? 'active' : ''
          }`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG path */}
        </svg>
      </a>

      <div
        id="bu-account-accordion"
        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="pt-2 pl-2">
          <li>
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
              href="javascript:;"
            >
              Link 1
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
              href="javascript:;"
            >
              Link 2
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
              href="javascript:;"
            >
              Link 3
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default Dropdown;
