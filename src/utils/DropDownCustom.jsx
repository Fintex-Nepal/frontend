import React, { useState } from 'react'
import EmployeeLogo from '../assets/employee.png'
import { Link } from 'react-router-dom';
const DropDownCustom = ({ dropDownList, heading }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <li>
                <button
                    type="button"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-example"
                    onClick={toggleDropdown}
                >
                    
                    <img class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" src={EmployeeLogo} alt='employee' />
                    <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>
                        {heading}
                    </span>
                    <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>
                <ul

                    className={`py-2 space-y-2 ${isOpen ? '' : 'hidden'}`}
                >
                    {dropDownList?.map(itm => (
                        <li>
                            <Link
                                 to={`${itm.replace(/\s/g, "").toLowerCase()}`}
                                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                                {itm}
                            </Link>
                        </li>
                    ))}



                </ul>
            </li>
        </>
    )
}

export default DropDownCustom