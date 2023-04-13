import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from "@heroicons/react/solid";
import  { useState } from "react";
function DropdownMenu({ staffSubOption, heading }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700  rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{heading}</span>
                <ChevronDownIcon
                    className={`${isOpen ? "transform rotate-180" : ""} w-5 h-5 text-gray-500`}
                    aria-hidden="true"
                />
            </button>
            <div
                className={`${isOpen ? "block" : "hidden"
                    } absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg`}
            >
                <ul className="py-1">
                    <li className="relative px-4 pt-2">
                        {/* <button
                            type="button"
                            className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            onClick={() => console.log("First-level item clicked!")}
                        >
                            <span>First-level item</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button> */}
                        <ul className="absolute top-0 left-full w-full  bg-white rounded-md shadow-lg">
                            {staffSubOption?.map((itm) => (
                                <Link
                                    to={`${itm.replace(/\s/g, "").toLowerCase()}`}
                                    className="relative px-4 ">
                                    <button
                                        type="button"
                                        className="flex rounded items-center justify-between w-full text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none  pl-6"
                                        onClick={() => console.log("Second-level item clicked!")}
                                    >
                                        <span>{itm}</span>

                                    </button>
                                </Link>
                            ))}

                            {/* <li className="relative px-4 py-2">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                    onClick={() => console.log("Second-level item clicked!")}
                                >
                                    <span>Second-level item</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </li> */}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DropdownMenu;
