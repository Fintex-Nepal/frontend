import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserDataByUserName } from '../../Redux/User/UserProfileSlice';
import PasswordRestForm from './PasswordResetForm'
import { STATUS } from '../../Redux/Regestration/SubLedgerSlice';
import Loader from '../../utils/Helper/Loader'
const Profile = () => {
    const [showPasswordRest, setShowPasswordRest] = useState(false);
    const [showFullINfo, setShowFullInfo] = useState(false)
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userProfile.userData)
    const userDataFetchStatus = useSelector((state) => state.userProfile.userDataFetchStatus)

    useEffect(() => {
        dispatch(fetchUserDataByUserName((jwt_decode(localStorage.getItem('adminToken'))).given_name))
    }, [dispatch])

    const showAdditionalInfoHandler = () => {
        setShowFullInfo(!showFullINfo)
        setShowPasswordRest(false)
    }
    const passWordChangeHandler = () => {
        setShowPasswordRest(!showPasswordRest)
        setShowFullInfo(false)
    }
    console.log(userData, "userDatauserDatauserDatauserData");
    if (userDataFetchStatus === STATUS.IDLE) {
        return (
            <>
                <div class="">
                    <div class="container mx-auto my-5 p-5">
                        <div class="md:flex no-wrap md:-mx-2 ">

                            <div class="w-full md:w-3/12 md:mx-2">
                                <div class="bg-white p-3 hover:shadow">
                                    <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                        <span>Profile</span>
                                    </div>
                                    <div class="grid grid-cols-3">
                                        <div class="text-center my-2">
                                            <img class="h-16 w-16 rounded-full mx-auto"
                                                 src={`data:image/${userData?.employeeData?.profilePicFileName};base64,${userData?.employeeData?.profilePicFileData}`}
                                                alt="" />
                                            <a href="1" class="text-main-color">{userData?.employeeData?.name}</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-white p-3 border-t-4 border-green-400">
                                    <div class="image overflow-hidden">
                                        <img class="h-auto w-full mx-auto"
                                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                            alt="" />
                                    </div>
                                    <ul
                                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                        <li class="flex items-center py-3">
                                            <span>Status</span>
                                            <span class="ml-auto"><span
                                                class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                                        </li>
                                        <li class="flex items-center py-3">
                                            <span>Member since</span>
                                            <span class="ml-auto">{userData?.employeeData?.dateOfJoining ? (userData?.employeeData?.dateOfJoining.split('T')[0]) : 'Not Specified'}</span>
                                        </li>
                                    </ul>
                                    <button onClick={passWordChangeHandler} class="rounded-lg px-4 py-2 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300">Change Password</button>

                                </div>
                                <div class="my-4"></div>
                            </div>
                            <div class="w-full md:w-9/12 mx-2 h-64">
                                <div class="bg-white p-3 shadow-sm rounded-sm">
                                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                        <span clas="text-green-500">
                                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </span>
                                        <span class="tracking-wide">About</span>
                                    </div>
                                    <div class="text-gray-700">
                                        <div class="grid md:grid-cols-2 text-sm">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Name</div>
                                                <div class="px-4 py-2">{userData?.employeeData?.name}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Role</div>
                                                <div class="px-4 py-2">{userData?.userData?.role ? (userData?.userData?.role) : 'Not Specified'}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Contact No.</div>
                                                <div class="px-4 py-2">{userData?.employeeData?.phoneNumber}</div>
                                            </div>

                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">User Name</div>
                                                <div class="px-4 py-2">{userData?.userData?.userName}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Email.</div>
                                                <div className="px-4 py-2">
                                                    <p className="" >
                                                        {userData?.employeeData?.email}
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Company Name</div>
                                                <div class="px-4 py-2">{userData?.employeeData?.companyName ? (userData?.employeeData?.companyName) : 'Not Specified'}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={showAdditionalInfoHandler}
                                        class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                                        {showFullINfo ? "Hide Full Information" : 'Show Full Information'}</button>
                                </div>

                                <div class="my-4"></div>
                                {showPasswordRest && <PasswordRestForm />}
                                {showFullINfo &&
                                    <div class="bg-white p-3 shadow-sm rounded-sm">
                                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                            <span clas="text-green-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                                </svg>

                                            </span>
                                            <span class="tracking-wide">Addition Information</span>
                                        </div>
                                        <div class="text-gray-700">

                                            <div class="grid md:grid-cols-2 text-sm">

                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Branch Code</div>
                                                    <div class="px-4 py-2">{userData?.employeeData?.branchCode ? (userData?.employeeData?.branchCode) : 'Not Specified'}</div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Gender</div>
                                                    <div class="px-4 py-2">{userData?.employeeData?.gender ? (userData?.employeeData?.gender) : 'Not Specified'}</div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Grade</div>
                                                    <div class="px-4 py-2">{userData?.employeeData?.grade ? (userData?.employeeData?.grade) : 'Not Specified'}</div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Designation</div>
                                                    <div class="px-4 py-2">{userData?.employeeData?.designation ? (userData?.employeeData?.designation) : 'Not Specified'}</div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Pan Number</div>
                                                    <div class="px-4 py-2">{userData?.employeeData?.panNumber ? (userData?.employeeData?.panNumber) : 'Not Specified'}</div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Salary Amount</div>
                                                    <div class="px-4 py-2">{userData?.employeeData?.salaryAmount ? (userData?.employeeData?.salaryAmount) : 'Not Specified'}</div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Salary Posting Account</div>
                                                    <div class="px-4 py-2">{userData?.employeeData?.salaryPostingAccount ? (userData?.employeeData?.salaryPostingAccount) : 'Not Specified'}</div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Provident Posting Account</div>
                                                    <div class="px-4 py-2">{userData?.employeeData?.providentPostingAccount ? (userData?.employeeData?.providentPostingAccount) : 'Not Specified'}</div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">PF Allowed</div>
                                                    <div class="px-4 py-2">{userData?.employeeData?.pfAllowed ? ('Yes') : 'Not Specified'}</div>
                                                </div>

                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Tax</div>
                                                    <div class="px-4 py-2">{userData?.employeeData?.tax ? (userData?.employeeData?.tax) : 'Not Specified'}</div>
                                                </div>



                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Facilities</div>
                                                    <div class="px-4 py-2">{userData?.employeeData?.facilities ? (userData?.employeeData?.facilities) : 'Not Specified'}</div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Other Facilities</div>
                                                    <div class="px-4 py-2">{userData?.employeeData?.otherFacilities ? (userData?.employeeData?.otherFacilities) : 'Not Specified'}</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    else if (userDataFetchStatus === STATUS.LOADING) {
        return (
            <Loader />
        )
    }
    else if (userDataFetchStatus === STATUS.ERROR) {
        return (
            <>
              
                <div class="mx-auto px-4 py-8 max-w-xl my-20">
                    <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" >
                        <div class="md:flex-shrink-0">
                            <img src="https://img.freepik.com/premium-vector/cute-sad-kid-boy-sitting-alone-scared_97632-1236.jpg?w=826" alt="Error" class="w-full h-64 rounded-lg rounded-b-none"/>
                        </div>
                        <div class="px-4 py-2 mt-2">
                            <h2 class="font-bold text-center text-2xl text-gray-800 tracking-normal">Please Contant The Adminstration</h2>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Profile