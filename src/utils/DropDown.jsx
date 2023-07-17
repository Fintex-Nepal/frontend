import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const DropDown = ({ heading, dropDownList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="hs-accordion">
      <div
        className={`hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 ${isOpen ? 'hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent' : 'text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300'
          }`}
        href="1"
        onClick={toggleAccordion}
      >
        <svg
          className="w-3.5 h-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
        <span className="text-current">{heading}</span>

        <svg
          className={`ml-auto ${isOpen ? 'block' : 'hidden'}`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </svg>

        <svg
          className={`ml-auto ${isOpen ? 'hidden' : 'block'}`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>

      <div
        id="account-accordion"
        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${isOpen ? '' : 'hidden'
          }`}
      >
        <ul className="pt-2 pl-2">
          {dropDownList?.map(item => (
            <li>
              <Link
                to={`${item.replace(/\s/g, '').toLowerCase()}`}
                className="block z-50 px-4 py-2 text-sm hover:bg-gray-300"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                {item}
              </Link>
            </li>
          ))}

        </ul>
      </div>
    </li>
  );
};

export default DropDown;
