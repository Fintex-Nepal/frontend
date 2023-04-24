import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";
const DropdownMenu=({ staffSubOption, heading }) =>{
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700  rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>

                <span class="group-hover:text-gray-700 dark:group-hover:text-white">{heading}</span>
                <ChevronDownIcon
                    className={`${isOpen ? "transform rotate-180" : ""} w-5 h-5 text-gray-500`}
                    aria-hidden="true"
                />
            </button>
            <div
                className={`${isOpen ? "block" : "hidden"
                    } absolute z-10 w-full bg-white rounded-md shadow-lg`}
            >
                <ul className="">
                    <li className="relative  ">
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
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button> */}
                        <ul className="absolute top-0  w-full  bg-white rounded-md shadow-lg">
                            {staffSubOption?.map((itm) => (
                                <Link
                                    to={`${itm.replace(/\s/g, "").toLowerCase()}`}
                                    className="relative px-4 ">
                                    <button style={{ height: '3rem' }}
                                        type="button"
                                        className="flex rounded items-center justify-between w-full text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none  pl-6"
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
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
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
