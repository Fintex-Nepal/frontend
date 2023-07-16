import { useState } from 'react';

const Test = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-[#f1f5fb] xl:h-screen dark:bg-gray-800`}>
      <div className="body-content" x-data="{ open: true }">
        <div className="relative lg:block navbar-menu">
          <nav
            className={`fixed top-0 transition-all lg:mt-0 z-0 mt-16 left-0 dark:bg-gray-900 bottom-0 flex flex-col ${
              isOpen ? 'w-[280px]' : 'w-0'
            } lg:border-none border-r border-gray-200 dark:border-gray-800 bg-gray-50 overflow-hidden`}
            id="sidenav"
          >
            <div className="flex items-center w-full px-4 pt-4 pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
              <a href="#">
                <div className="flex items-center ml-2">
                  <h2 className="ml-3 text-lg font-bold text-gray-700 dark:text-gray-400 whitespace-nowrap">
                    Your Logo
                  </h2>
                </div>
              </a>
            </div>
            <div className="flex flex-wrap items-center px-4">
              <div className="px-2">
                <img
                  src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&amp;dl=pexels-thorn-yang-139829.jpg&amp;fm=jpg"
                  className="object-cover object-right w-10 h-10 rounded-full"
                  alt="person"
                />
              </div>
              <div className="px-2">
                <span className="text-sm text-gray-500 dark:text-gray-400 ">Welcome,</span>
                <h2 className="text-lg font-medium dark:text-gray-300 ">John Doe</h2>
              </div>
            </div>
            <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">
              <ul className="mb-8 text-sm">
                <li>
                  <a
                    href="#"
                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100"
                  >
                    <span className="inline-block mr-3">
                      <svg
                        className="w-5 h-5 group-"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-config-id="auto-svg-2-1"
                      >
                        <path
                          d="M14.9066 3.12873C14.9005 3.12223 14.8987 3.11358 14.8923 3.10722C14.8859 3.10086 14.8771 3.09893 14.8706 3.09278C13.3119 1.53907 11.2008 0.666626 8.99996 0.666626C6.79914 0.666626 4.68807 1.53907 3.12935 3.09278C3.12279 3.09893 3.11404 3.10081 3.10763 3.10722C3.10122 3.11363 3.09944 3.12222 3.09334 3.12873C1.93189 4.29575 1.14217 5.78067 0.823851 7.39609C0.505534 9.01151 0.672885 10.685 1.30478 12.2054C1.93668 13.7258 3.00481 15.025 4.37435 15.9389C5.7439 16.8528 7.35348 17.3405 8.99996 17.3405C10.6464 17.3405 12.256 16.8528 13.6256 15.9389C14.9951 15.025 16.0632 13.7258 16.6951 12.2054C17.327 10.685 17.4944 9.01151 17.1761 7.39609C16.8578 5.78067 16.068 4.29575 14.9066 3.12873ZM8.99992 14.0062C6.9497 14.0062 5.14295 12.2101 5.14295 10.0861C5.14295 7.96204 6.9497 6.1659 8.99992 6.1659C11.0501 6.1659 12.8569 7.96204 12.8569 10.0861C12.8569 12.2101 11.0501 14.0062 8.99992 14.0062Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M8.99992 7.66626C7.84699 7.66626 6.90442 8.61091 6.90442 9.74808C6.90442 10.8853 7.84699 11.8299 8.99992 11.8299C10.1528 11.8299 11.0954 10.8853 11.0954 9.74808C11.0954 8.61091 10.1528 7.66626 8.99992 7.66626Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-6 py-4 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <span className="inline-block mr-3">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM15.8536 9.85355C16.0488 9.65829 16.0488 9.34171 15.8536 9.14645L10.8536 4.14645C10.6583 3.95118 10.3417 3.95118 10.1464 4.14645L4.14645 10.1464C3.95118 10.3417 3.95118 10.6583 4.14645 10.8536L10.1464 16.8536C10.3417 17.0488 10.6583 17.0488 10.8536 16.8536L15.8536 11.8536C16.0488 11.6583 16.0488 11.3417 15.8536 11.1464C15.6583 10.9512 15.3417 10.9512 15.1464 11.1464L10.1464 16.1464C9.95118 16.3417 9.65829 16.3417 9.46301 16.1464L4.46301 11.1464C4.26775 10.9512 4.26775 10.6583 4.46301 10.463L9.46301 5.46301C9.65829 5.26775 9.95118 5.26775 10.1464 5.46301L15.1464 10.463C15.3417 10.6583 15.3417 10.9512 15.1464 11.1464C14.9512 11.3417 14.9512 11.6583 15.1464 11.8536L15.8536 11.8536Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-6 py-4 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <span className="inline-block mr-3">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1ZM5.66995 10.4439C5.34027 9.93716 5.50047 9.21826 6.00722 8.88858L10.0072 6.88858C10.2786 6.71272 10.6214 6.71272 10.8928 6.88858L14.8928 8.88858C15.3995 9.21826 15.5597 9.93716 15.23 10.4439L13.23 13.4439C13.0434 13.7431 12.7709 13.9664 12.4667 14.079C12.1625 14.1915 11.8351 14.1852 11.5368 14.0619L10 13.621L8.46319 14.0619C8.16494 14.1852 7.83747 14.1915 7.53333 14.079C7.22919 13.9664 6.95667 13.7431 6.77 13.4439L4.77 10.4439C4.44032 9.93716 4.60052 9.21826 5.10727 8.88858L9.10727 6.88858C9.37864 6.71272 9.72136 6.71272 9.99273 6.88858L13.9927 8.88858C14.4995 9.21826 14.6597 9.93716 14.33 10.4439L12.33 13.4439C12.1434 13.7431 11.8709 13.9664 11.5667 14.079C11.2625 14.1915 10.9351 14.1852 10.6368 14.0619L9.10001 13.621L7.56319 14.0619C7.26494 14.1852 6.93747 14.1915 6.63333 14.079C6.32919 13.9664 6.05667 13.7431 5.87 13.4439L3.87 10.4439C3.54032 9.93716 3.70052 9.21826 4.20727 8.88858L5.66995 10.4439Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.14077 10C6.14077 11.5913 7.40805 12.8586 9 12.8586C10.5913 12.8586 11.8586 11.5913 11.8586 10C11.8586 8.40871 10.5913 7.14143 9 7.14143C7.40871 7.14143 6.14077 8.40871 6.14077 10ZM7.14077 10C7.14077 9.26629 7.86906 8.63799 8.70378 8.63799C9.53849 8.63799 10.2668 9.26629 10.2668 10C10.2668 10.7337 9.53849 11.362 8.70378 11.362C7.86906 11.362 7.14077 10.7337 7.14077 10Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.8592 10C13.8592 11.5913 12.5919 12.8586 11.0006 12.8586C9.40931 12.8586 8.14203 11.5913 8.14203 10C8.14203 8.40871 9.40931 7.14143 11.0006 7.14143C12.5919 7.14143 13.8592 8.40871 13.8592 10ZM12.8592 10C12.8592 9.26629 12.1309 8.63799 11.2962 8.63799C10.4615 8.63799 9.73319 9.26629 9.73319 10C9.73319 10.7337 10.4615 11.362 11.2962 11.362C12.1309 11.362 12.8592 10.7337 12.8592 10Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Tasks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-6 py-4 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <span className="inline-block mr-3">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM13.4923 13.1216C12.7826 13.6483 11.9197 14 10 14C6.13401 14 3 10.866 3 7C3 3.13401 6.13401 0 10 0C13.866 0 17 3.13401 17 7C17 9.03482 16.2671 10.951 14.9238 12.2604L15.5844 13.1967C17.137 11.7959 18 9.99603 18 8C18 4.13401 14.866 1 11 1C7.13401 1 4 4.13401 4 8C4 11.866 7.13401 15 11 15C12.6244 15 14.1235 14.3315 15.324 13.2423L16.1355 14.0577L17.4365 12.6895L13.4923 13.1216Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Messages
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-6 py-4 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <span className="inline-block mr-3">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13 2C13.5523 2 14 2.44772 14 3V10C14 10.5523 13.5523 11 13 11H6C5.44772 11 5 10.5523 5 10V3C5 2.44772 5.44772 2 6 2H13ZM15 4V9C15 10.6569 13.6569 12 12 12H7C5.34315 12 4 10.6569 4 9V4H15ZM12 13C10.3431 13 9 14.3431 9 16C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16C15 14.3431 13.6569 13 12 13Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="fixed top-0 right-0 mt-16 mr-4">
          <button
            className={`z-50 p-2 rounded-md focus:outline-none ${
              isOpen ? 'bg-white dark:bg-gray-900' : 'bg-blue-500 dark:bg-gray-800'
            }`}
            onClick={toggleSidebar}
          >
            {isOpen ? (
              <svg
                className="w-5 h-5 text-gray-700 dark:text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 6L5 18M5 6L19 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
