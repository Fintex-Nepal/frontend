import React, { useState } from 'react'

const ComTest = () => {
   
        const [isOpen, setIsOpen] = useState(false);

        function toggleDropdown() {
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
                    <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>
                        E-commerce
                    </span>
                    <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>
                <ul
                    id="dropdown-example"
                    className={`py-2 space-y-2 ${isOpen ? '' : 'hidden'}`}
                >
                    <li>
                        <a
                            href="1"
                            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                            Products
                        </a>
                    </li>
                    <li>
                        <a
                            href="1"
                            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                            Billing
                        </a>
                    </li>
                </ul>
            </li>
        </>
    )
}

export default ComTest