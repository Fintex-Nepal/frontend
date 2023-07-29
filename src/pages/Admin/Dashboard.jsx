import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import MainRegestration from './Regestration/MainRegestration'
import Content from './Content'
import CreateStaff from './CreateStaff';
import KnowYourMember from '../Admin/UserRegestration/KYM/KnowYourMember'
import CreateStaffLogin from './CreateStaffLogin';
import StaffInfo from './StaffInfo';
import EmployeeDetails from './EmployeeDetails'
import microFinanceLogo from '../../assets/microFinanceLogo.png'
import Dropdown from '../../utils/DropDown'
import CreateDeposit from '../Deposit/CreateDeposit'
import CreateCalender from '../Admin/Calander/CreateCalander'
import Profile from './Profile'
import ViewCalander from './Calander/ViewCalander';
import UpdateCalander from './Calander/UpdateCalander';




const Dashboard = () => {
    var decoded = jwt_decode(localStorage.getItem('adminToken'))
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleUserMenuToggle = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };
    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate()
    const employeeDropdown = [
        'Register Employee',
        'Create Login Credentials',
        'Employee Data',
    ]
    const clientDropdown = [
        'Create Client',
        // 'Users Info'
    ]
    const calenderDropDown = [
        'Create Calander',
        'View Calanders',

    ]
    useEffect(() => {
        if (localStorage.getItem('adminToken')) {
            setIsAuthorized(true)
        }
        else {
            navigate('/');
        }
    }, [navigate])

    const signOutHandler = () => {
        localStorage.removeItem('adminToken')
        navigate('/')
    }
    if (isAuthorized) {
        return (
            <>
                <>
                    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <div className="px-3 py-3 lg:px-5 lg:pl-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-start">
                                    <button

                                        type="button"
                                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        onClick={handleSidebarToggle}
                                    >
                                        <span className="sr-only">Open sidebar</span>
                                        <svg
                                            className="w-6 h-6"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                            ></path>
                                        </svg>
                                    </button>
                                    <Link to={'/'} className="flex ml-2 md:mr-24">
                                        <img
                                            src={microFinanceLogo}
                                            className="h-8 mr-3"
                                            alt="FinTex Logo"
                                        />
                                        <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                            Fintex
                                        </span>
                                    </Link>
                                </div>
                                <div className="flex items-center">
                                    <div className="relative ml-3">
                                        <button
                                            type="button"
                                            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                            aria-expanded={isUserMenuOpen}
                                            onClick={handleUserMenuToggle}
                                        >
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                                alt="userphoto"
                                            />
                                        </button>
                                        {isUserMenuOpen && (
                                            <div className="absolute right-0 mt-2 w-40 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 origin-bottom">
                                                <div className="px-4 py-3">
                                                    <p className="text-sm text-gray-900 dark:text-white">{decoded?.given_name}</p>
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                                                        {decoded?.email}
                                                    </p>
                                                </div>
                                                <ul className="py-1">
                                                    <li>
                                                        <button
                                                            onClick={signOutHandler}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                            role="menuitem"
                                                        >
                                                            Logout
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </nav>

                    <aside
                        id="logo-sidebar"
                        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                            } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
                        aria-label="Sidebar"
                    >

                        {/* Sidebar content */}
                        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                            <ul class="space-y-2 font-medium">
                                <li>
                                    <Link to={'accountsetup'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                        </svg>

                                        <span class="ml-3">Account Setup</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'profile'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
                                        {/* <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'createdeposit'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                        <span class="flex-1 ml-3 whitespace-nowrap">Deposit</span>
                                    </Link>
                                </li>
                                <Dropdown dropDownList={employeeDropdown} heading="Employee" svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                                } />
                                <Dropdown dropDownList={clientDropdown} heading="Client" />
                                <Dropdown dropDownList={calenderDropDown} heading="Calenders" svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>
                                }  />
                                {/* <Dropdown/> */}
                                <li>
                                    <a href="1" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                        </svg>
                                        <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                                    </a>
                                </li>


                            </ul>
                        </div>
                    </aside>

                    <div
                        className={`${isSidebarOpen ? 'ml-64' : 'ml-0'
                            } p-4 transition-all duration-300`}
                    >
                        {/* Main content */}
                        <div class="mx-auto pt-16 lg:px-8  sm:ml-64 ml-0">
                            <Routes>
                                <Route path='/' element={<Content />} />
                                <Route path='/profile' element={<Profile />} />
                                <Route path='/accountsetup' element={<MainRegestration />} />
                                <Route path='/registeremployee' element={<CreateStaff />} />
                                <Route path='/createlogincredentials' element={<CreateStaffLogin />} />
                                <Route path='/employeedata' element={<StaffInfo />} />
                                <Route path='/employeedetails/:id' element={<EmployeeDetails />} />
                                <Route path='/createclient' element={<KnowYourMember />} />




                                {/* Deposit Routes */}
                                <Route path='/createdeposit' element={<CreateDeposit />} />

                                {/* Calander */}
                                <Route path='/createcalander' element={< CreateCalender />} />
                                <Route path='/viewcalanders' element={< ViewCalander />} />
                                <Route path='/updatecalander/:id' element={< UpdateCalander />} />
                            </Routes>
                        </div>
                    </div>
                </>
            </>
        )
    }
    else {
        return null;
    }
}

export default Dashboard
