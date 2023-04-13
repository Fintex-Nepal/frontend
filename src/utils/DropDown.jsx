import React from 'react';
import { Link } from 'react-router-dom';

function DropdownMenu({ staffSubOption ,heading}) {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="left-0 inline-block text-left">
            <li>
                <div onClick={toggleDropdown}
                    // to={'/dashboard/createstaff'}
                    class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            class="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                            fillRule="evenodd"
                            d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                            clipRule="evenodd"
                        />
                        <path
                            class="fill-current text-gray-300 group-hover:text-cyan-300"
                            d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                        />
                    </svg>
                    <span class="group-hover:text-gray-700 dark:group-hover:text-gray-50">{heading}</span>
                </div>
            </li>

            {isOpen && <>

                <div className="absolute left-0 z-10 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    {/* <div className="py-1" role="none"> */}
                    {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                    {/* <a href="1" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Edit</a>
                        <a href="1" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Duplicate</a> */}
                    {/* </div> */}
                    {/* <div className="py-1" role="none">
                        <a href="1" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Archive</a>
                        <a href="1" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Move</a>
                    </div> */}
                    <div className="py-1" role="none">
                        {staffSubOption?.map((itm) => (
                            <Link to={`${itm.replace(/\s/g, "").toLowerCase()}`} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">{itm}</Link>
                        ))}
                    </div>
                </div>
            </>}
        </div>
    );
}

export default DropdownMenu;
