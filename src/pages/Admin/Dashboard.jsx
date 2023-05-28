import React from 'react'
import { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import MainRegestration from './Regestration/MainRegestration'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Content from './Content'
import CreateStaff from './CreateStaff';
import KnowYourMember from '../Admin/UserRegestration/KYM/KnowYourMember'
import CreateStaffLogin from './CreateStaffLogin';
import StaffInfo from './StaffInfo';
import PasswordResetForm from './PasswordResetForm'
import EmployeeDetails from './EmployeeDetails'
import microFinanceLogo from '../../assets/microFinanceLogo.png'
// import DropDownCustom from '../../utils/DropDownCustom'

import Dropdown from '../../utils/DropDownt'
import CreateDeposit from '../Deposit/CreateDeposit'


const Dashboard = () => {


    const [mobileView, setMobileView] = useState(false)
    const [profileMenu, setProfileMenu] = useState(false)
    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate()
    const employeeDropdown = [
        'Create ',
        'Create Login',
        'Data',
    ]
    const clientDropdown = [
        'Create Client',
        // 'Users Info'
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
                <div class="min-h-full">
                    <nav class="bg-gray-800">
                        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div class="flex h-16 items-center justify-between">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <img class="h-8 w-8" src={microFinanceLogo} alt="Your Company" />
                                    </div>
                                    <div class="hidden md:block">
                                        <div class="ml-10 flex items-baseline space-x-4">
                                            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                            <Link to={'profile'} class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Profile</Link>
                                            <Link to={'accountsetup'} class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Account Setup</Link>
                                            <Link to={'createdeposit'} class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Deposit</Link>
                                            {/* <a href="1" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a> */}
                                            <Dropdown dropDownList={clientDropdown} heading="Client" />
                                            <Dropdown dropDownList={employeeDropdown} heading="Employee" />
                                        </div>
                                    </div>
                                </div>
                                <div class="hidden md:block">
                                    <div class="ml-4 flex items-center md:ml-6">
                                        <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span class="sr-only">View notifications</span>
                                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                            </svg>
                                        </button>

                                        {/* <!-- Profile dropdown --> */}
                                        <div class="relative ml-3">
                                            <div onClick={() => setProfileMenu(!profileMenu)}>
                                                <button type="button" class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                                    <span class="sr-only">Open user menu</span>
                                                    <img class="h-8 w-8 rounded-full" src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" alt="" />
                                                </button>
                                            </div>
                                            {profileMenu &&
                                                <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                                    <a href="1" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                                                    <a href="1" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                                                    <div onClick={signOutHandler} class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => setMobileView(!mobileView)} class="-mr-2 flex md:hidden">
                                    {/* <!-- Mobile menu button --> */}
                                    <button type="button" class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                                        <span class="sr-only">Open main menu</span>
                                        {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                                        <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                        {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                                        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                        <div class="md:hidden" id="mobile-menu">
                            {mobileView &&
                                <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <a href="1" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                                    <a href="1" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                                    <Link to={'/createdeposit'} class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Deposit</Link>
                                    <Dropdown dropDownList={clientDropdown} heading="Client" />
                                    <Dropdown dropDownList={employeeDropdown} heading="Employee" />
                                    <a href="1" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Reports</a>
                                </div>
                            }
                            <div class="border-t border-gray-700 pb-3 pt-4">
                                <div class="flex items-center px-5">
                                    <div onClick={() => setProfileMenu(!profileMenu)} class="flex-shrink-0">
                                        <img class="h-10 w-10 rounded-full" src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" alt="" />
                                    </div>
                                    <div class="ml-3">
                                        <div class="text-base font-medium leading-none text-white">Tom Cook</div>
                                        <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                                    </div>
                                    <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span class="sr-only">View notifications</span>
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                        </svg>
                                    </button>
                                </div>
                                {profileMenu && <div class="mt-3 space-y-1 px-2">
                                    <a href="1" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>
                                    <a href="1" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
                                    <div onClick={signOutHandler} class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</div>
                                </div>}
                            </div>
                        </div>
                    </nav>

                    <header class="bg-white shadow">
                        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            <h1 class="text-3xl font-bold tracking-tight text-gray-900">{(jwtDecode(localStorage.getItem('adminToken'))).given_name}</h1>
                        </div>
                    </header>
                    <main>
                        <div class="mx-auto pt-7  lg:px-8">
                            <Routes>
                                <Route path='/' element={<Content />} />
                                <Route path='/profile' element={<PasswordResetForm />} />
                                <Route path='/accountsetup' element={<MainRegestration />} />
                                <Route path='/create' element={<CreateStaff />} />
                                <Route path='/createlogin' element={<CreateStaffLogin />} />
                                <Route path='/data' element={<StaffInfo />} />
                                <Route path='/employeedetails/:id' element={<EmployeeDetails />} />
                                <Route path='/createclient' element={<KnowYourMember />} />


                                {/* Deposit Routes */}
                                <Route path='/createdeposit' element={<CreateDeposit />} />
                            </Routes>
                        </div>
                    </main>
                </div>
            </>
        )
    }
    else {
        return null;
    }
}

export default Dashboard
