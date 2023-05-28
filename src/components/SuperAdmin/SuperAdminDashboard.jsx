import React from 'react'
import { Routes, Route, Link,useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import PasswordResetForm from './PasswordResetForm'
import CreateAdmin from './CreateAdmin';
import Content from '../../pages/Admin/Content';
import Users from './Users';
import logo from '../../assets/logo.png'
const SuperAdminDashboard = () => {
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);
    const [isValidUser, setIsValidUser] = useState(false);
    const navigate=useNavigate();
    useEffect(() => {
        if (localStorage.getItem('sAdminToken')) {
            setIsValidUser(true)
        }
        else {
            navigate('/sadminlogin')
        }
    }, [navigate])
    const logOutHandler=()=>{
        localStorage.removeItem('sAdminToken')
        navigate('/sadminlogin')
    }
    const userName=jwtDecode(localStorage.getItem("sAdminToken"))
    if (isValidUser) {
        return (
            <>
                <div className="w-full h-full ">
                    <div className="flex flex-no-wrap">
                        {/* Sidebar starts */}
                        <div className="absolute lg:relative w-64 h-screen shadow bg-gray-100 hidden lg:block">
                            <div className="h-16 w-full flex items-center px-8">
                                <img src={logo} width={144} height={30} alt='logo'></img>
                            </div>
                            <ul className=" py-6">
                                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to={'/sadmindashboard/users'}>
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg"  width={20} height={20} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                            </svg>


                                            <span className="ml-2">Users</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to={'/sadmindashboard/profile'}>
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                            </svg>

                                            <span className="ml-2">Profile</span>
                                        </div>
                                    </Link>
                                </li>
                                {/* <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                            <circle cx={12} cy={12} r={9} />
                                        </svg>
                                        <span className="ml-2">Performance</span>
                                    </div>
                                </li> */}
                                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to={'/sadmindashboard/createadmin'}>
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                            </svg>
                                            <span className="ml-2">Create Admin</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/*Mobile responsive sidebar*/}
                        <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"} id="mobile-nav">
                            <div className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden" onClick={() => setShow(!show)} />
                            <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
                                <div className="flex flex-col justify-between h-full w-full">
                                    <div>
                                        <div className="flex items-center justify-between px-8">
                                            <div className="h-16 w-full flex items-center">
                                                <img src={logo} width={144} height={30} alt='logo'></img>
                                            </div>
                                            <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={() => setShow(!show)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <line x1={18} y1={6} x2={6} y2={18} />
                                                    <line x1={6} y1={6} x2={18} y2={18} />
                                                </svg>
                                            </div>
                                        </div>
                                        <ul className=" py-6">
                                            <li className="pl-6 cursor-pointer  text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <Link to={'/sadmindashboard/users'} className="flex items-center">
                                                    <div className="w-6 h-6 md:w-8 md:h-8">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <rect x={4} y={4} width={6} height={6} rx={1} />
                                                            <rect x={14} y={4} width={6} height={6} rx={1} />
                                                            <rect x={4} y={14} width={6} height={6} rx={1} />
                                                            <rect x={14} y={14} width={6} height={6} rx={1} />
                                                        </svg>
                                                    </div>
                                                    <span className="ml-2 xl:text-base md:text-2xl text-base">Users</span>
                                                </Link>
                                            </li>
                                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <Link to={'/sadmindashboard/profile'}>
                                                    <div className="flex items-center">
                                                        <div className="w-6 h-6 md:w-8 md:h-8">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                                                <path strokeLinecap="round" strokeLinejoin='round' d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                            </svg>

                                                        </div>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Profile</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <Link to={'/sadmindashboard/createadmin'}>
                                                    <div className="flex items-center">
                                                        <div className="w-6 h-6 md:w-8 md:h-8">
                                                            {/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                                <circle cx={12} cy={12} r={9} />
                                                            </svg> */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoind="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                                            </svg>

                                                        </div>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Create Admin</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <div className="flex items-center">
                                                    <div className="w-6 h-6 md:w-8 md:h-8">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="7 8 3 12 7 16" />
                                                            <polyline points="17 8 21 12 17 16" />
                                                            <line x1={14} y1={4} x2={10} y2={20} />
                                                        </svg>
                                                    </div>
                                                    <span className="ml-2 xl:text-base md:text-2xl text-base">Deliverables</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full">
                                        <div className="flex justify-center mb-4 w-full px-6">
                                            <div className="relative w-full">
                                                <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <circle cx={10} cy={10} r={7} />
                                                        <line x1={21} y1={21} x2={15} y2={15} />
                                                    </svg>
                                                </div>
                                                <input className="bg-gray-200 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2" type="text" placeholder="Search" />
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-300">
                                            <div className="w-full flex items-center justify-between px-6 pt-1">
                                                <div className="flex items-center">
                                                    <img alt="profile-pic" src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" className="w-8 h-8 rounded-md" />
                                                    <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">{userName && userName?.given_name}</p>
                                                </div>
                                                <ul className="flex">
                                                    <li className="cursor-pointer text-white pt-5 pb-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                            <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                                        </svg>
                                                    </li>
                                                    <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                        </svg>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Mobile responsive sidebar*/}
                        {/* Sidebar ends */}
                        <div className="w-full">
                            {/* Navigation starts */}
                            <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
                                <div className="hidden lg:flex w-full pr-6">
                                    <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                                        <div className="relative w-full">
                                            <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <circle cx={10} cy={10} r={7} />
                                                    <line x1={21} y1={21} x2={15} y2={15} />
                                                </svg>
                                            </div>
                                            <input className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2" type="text" placeholder="Search" />
                                        </div>
                                    </div>
                                    <div className="w-1/2 hidden lg:flex">
                                        <div className="w-full flex items-center pl-8 justify-end">
                                            <div className="h-full w-20 flex items-center justify-center border-r border-l">
                                                <div className="relative cursor-pointer text-gray-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                    </svg>
                                                    <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto" />
                                                </div>
                                            </div>
                                            <div className="h-full w-20 flex items-center justify-center border-r mr-4 cursor-pointer text-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                    <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center relative cursor-pointer" onClick={() => setProfile(!profile)}>
                                                <div className="rounded-full">
                                                    {profile ? (
                                                        <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                                                            <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                                                                <div className="flex items-center">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                                        <circle cx={12} cy={7} r={4} />
                                                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                                    </svg>
                                                                    <span className="text-sm ml-2">My Profile</span>
                                                                </div>
                                                            </li>
                                                            <li  onClick={logOutHandler} className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                                                                <div className="flex items-center">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                                                        <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                                                    </svg>
                                                                    <span className="text-sm ml-2">Sign out</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    ) : (
                                                        ""
                                                    )}
                                                    <div className="relative">
                                                        <img className="rounded-full h-10 w-10 object-cover" src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" alt="avatar" />
                                                        <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                                                    </div>
                                                </div>
                                                <p className="text-gray-800 text-sm mx-3">{userName && userName?.given_name}</p>
                                                <div className="cursor-pointer text-gray-600">
                                                    <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-gray-600 mr-8 visible lg:hidden relative" onClick={() => setShow(!show)}>
                                    {show ? (
                                        " "
                                    ) : (
                                        <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={4} y1={8} x2={20} y2={8} />
                                            <line x1={4} y1={16} x2={20} y2={16} />
                                        </svg>
                                    )}
                                </div>
                            </nav>
                            {/* Navigation ends */}
                            {/* Remove class [ h-64 ] when adding a card block */}
                            <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                                <div className="w-full h-full rounded   border-gray-300">
                                    <Routes>
                                        <Route path='/' element={<Content />} />
                                        <Route path='/profile' element={<PasswordResetForm />} />
                                        <Route path='/createadmin' element={<CreateAdmin />} />
                                        <Route path='/users' element={<Users />} />
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         </>
        )
    }
    else{
        return null
    }
    
}

export default SuperAdminDashboard