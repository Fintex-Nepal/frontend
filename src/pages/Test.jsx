import { useState } from 'react';

const SideNav=()=> {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <li className="relative">
            <a href="1" onClick={handleClick} className="flex items-center px-8 py-4 text-gray-700 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100">
                <span>Profile</span>
                <span className="inline-block ml-auto sidenav-arrow"></span>
            </a>
            {isOpen && (
                <div className="pl-3 ml-3 transition border-gray-500 dropdown-section nested-menu">
                    <ul className="text-sm">
                        <li>
                            <a href="1" className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100">
                                <span className="text-gray-700 dark:text-gray-400">Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="1" className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100">
                                <span className="text-gray-700 dark:text-gray-400">Leave</span>
                            </a>
                        </li>
                        <li>
                            <a href="1" className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100">
                                <span className="text-gray-700 dark:text-gray-400">Assets</span>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </li>
    );
}
export default SideNav;