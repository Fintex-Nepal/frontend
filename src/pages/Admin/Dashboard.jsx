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
import Logo from '../../assets/logo.png'
import DropDownCustom from '../../utils/DropDownCustom'
import './style.css'


const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate()
    const employeeDropdown = [
        'Create ',
        'Create Login',
        'Data',
    ]
    const clientDropdown = [
        'Create Client',
        'Users Info'
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
                <button onClick={toggleSidebar} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   ">
                    <span class="sr-only">Open sidebar</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>


                <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
                    } sm:w-48 sm:h-full`} aria-label="Sidebar">

                    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
                        <div class="flex items-center pl-2.5 mb-5">
                            <img src={Logo} class="h-10 mr-3 sm:h-11" alt="Fintex Logo" />
                            <button onClick={toggleSidebar} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class=" inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                            </button>
                        </div>
                        <ul class="space-y-2 font-medium">

                            <li>
                                <Link to={'/dashboard/profile'} class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-400 ">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span class="ml-3">Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/dashboard/accountsetup'} class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">Account Setup</span>

                                </Link>
                            </li>
                            {jwtDecode((localStorage.getItem('adminToken'))).role === 'Officer' && (
                                <>
                                    <DropDownCustom dropDownList={employeeDropdown} heading="Employee" />
                                    <DropDownCustom dropDownList={clientDropdown} heading="Clinet" />
                                </>
                            )}

                            <li>
                                <a href="1" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 ">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                                    <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ">3</span>
                                </a>
                            </li>
                            <li>
                                <a href="1" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 ">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                                </a>
                            </li>
                            <li>
                                <a href="1" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 ">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
                                </a>
                            </li>

                            <li>
                                <a href="1" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 ">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                                </a>
                            </li>
                            <li>
                                <div onClick={signOutHandler} role='button' class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>

                <div class="p-4 mt-10 sm:ml-64">
                    <Routes>
                        <Route path='/' element={<Content />} />
                        <Route path='/profile' element={<PasswordResetForm />} />
                        <Route path='/accountsetup' element={<MainRegestration />} />
                        <Route path='/create' element={<CreateStaff />} />
                        <Route path='/createlogin' element={<CreateStaffLogin />} />
                        <Route path='/data' element={<StaffInfo />} />
                        <Route path='/employeedetails/:id' element={<EmployeeDetails />} />
                        <Route path='/createclient' element={<KnowYourMember />} />
                    </Routes>
                </div>
            </>
        )
    }
    else {
        return null;
    }
}

export default Dashboard
