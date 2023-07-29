import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { getCompanyProfile } from '../../../utils/Url'
import Loader from '../../../utils/Helper/Loader';
import { fetchBranchData } from '../../../Redux/companyprofile/BranchSlice';
import { STATUS } from '../../../Redux/Regestration/SubLedgerSlice';
const CompanyProfile = () => {
    const [profileData, setProfileData] = useState()
    const [showLoader, setShowLoader] = useState(false)
    const dispatch = useDispatch()
    const branches = useSelector((state) => state.branches.branches)
    const branchFetchStatus = useSelector((state) => state.branches.branchFetchStatus)
    useEffect(() => {
        dispatch(fetchBranchData())
    }, [dispatch])
    if (branchFetchStatus === STATUS.ERROR) {
        toast.error('Error in Fetching data', {
            position: toast.POSITION.TOP_RIGHT
        })
    }
    useEffect(() => {
        setShowLoader(true);
        axios
            .get(getCompanyProfile, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('sAdminToken')
                }
            })
            .then((res) => {
                toast.success(res?.data?.message, {
                    position: 'top-right'
                })
                setShowLoader(false);
                setProfileData(res.data)
            })
            .catch((err) => {
                setShowLoader(false);
                const errorData = err.response?.data?.errors;
                if (errorData) {
                    Object.values(errorData).forEach((er) => {
                        toast.warning(er[0], {
                            position: 'top-right'
                        });
                    });
                } else {
                    toast.error(err?.message, {
                        position: 'top-right'
                    });
                }
            });
    }, [])

    return (
        <>
            {showLoader && <Loader />}
            <Link to="/sadmindashboard/createcompanyprofile">
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700">Create Company Profile</button>
            </Link>
            {profileData &&
                <main class="profile-page mt-80">
                    <section class="relative block h-500-px">
                        <div class="absolute top-0 w-full h-full bg-center bg-cover ">
                            <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
                        </div>
                        <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
                            <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                                <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                            </svg>
                        </div>
                    </section>
                    <section class="relative py-16 bg-blueGray-200 ">
                        <div class="container mx-auto px-4">
                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                                <div class="px-6">
                                    <div class="flex flex-wrap justify-center">
                                        <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                            <div class=" pr-24">
                                                <img
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4ONejT8KtT_m8KruG6px8rKb_HYrOcQLJuzGf-gBKXlCptzHGg0DR1Fyvd4YEy2eFRU&usqp=CAU"
                                                    alt="profile"
                                                    class="shadow-xl rounded-xl  align-middle border-none absolute -m-16  lg:-ml-16 max-w-150-px h-48"
                                                    onError={(e) => console.log('Image Load Error:', e)}
                                                />

                                            </div>
                                        </div>
                                        <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                            <div class="py-6 px-3 mt-32 sm:mt-0">
                                                <Link to={'/sadmindashboard/allbranches'}>
                                                    <button class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                                        Branch
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div class="w-full lg:w-4/12 px-4 lg:order-1">
                                            <div class="flex justify-center py-4 lg:pt-4 pt-8">
                                                <div class="mr-4 p-3 text-center">
                                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{branches && branches.length}</span><span class="text-sm text-blueGray-400">Branches</span>
                                                </div>
                                                <div class="mr-4 p-3 text-center">
                                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span class="text-sm text-blueGray-400">Photos</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center mt-12">
                                        <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                                            {profileData?.companyName}
                                        </h3>
                                        <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                            <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                            {profileData?.companyNameNepali && profileData?.companyNameNepali}
                                        </div>
                                    </div>

                                    <div class="mt-10 py-10 border-t border-blueGray-200 text-center ">
                                        <div class="flex justify-center">
                                            <table class="text-base my-3">
                                                <tbody>
                                                    <tr>
                                                        <td class="text-left py-2 text-gray-500 font-semibold">Address</td>
                                                        <td class="text-left px-10  py-2">{profileData?.companyAddress ? profileData.companyAddress : 'No Address Provided'}</td>
                                                        <td class="text-left px-10  py-2 text-gray-500 font-semibold">ठेगाना</td>
                                                        <td class="text-left px-10  py-2">{profileData?.companyAddressNepali ? profileData.companyAddressNepali : 'No Address Provided'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-left py-2 text-gray-500 font-semibold">Phone</td>
                                                        <td class="text-left px-10  py-2">{profileData?.phoneNo ? profileData.phoneNo : 'Phone Number Not Provided'}</td>
                                                        <td class="text-left px-10  py-2 text-gray-500 font-semibold">Email</td>
                                                        <td class="text-left px-10  py-2">{profileData?.companyEmailAddress ? profileData.companyEmailAddress : 'Email Not Provided'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-left py-2 text-gray-500 font-semibold">Established Date</td>
                                                        <td class="text-left px-10  py-2">{profileData?.establishedDate ? profileData.establishedDate.split("T")[0] : 'Established Date Not Provided'}</td>
                                                        <td class="text-left px-10  py-2 text-gray-500 font-semibold">Start Date</td>
                                                        <td class="text-left px-10  py-2">{profileData?.fromDate ? profileData.fromDate.split("T")[0] : 'Staet Date Not Provided'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-left py-2 text-gray-500 font-semibold">Pan Number</td>
                                                        <td class="text-left px-10  py-2">{profileData?.panNo ? profileData.panNo : 'PAN Not Provided'}</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                    <div class="float-right">
                                        <Link to={`/sadmindashboard/updatecompanyprofile/${profileData?.id}`}>
                                            <button class="text-base  rounded-l-none rounded-r-none border-l-0 border-r-0  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
    hover:bg-teal-700 hover:text-teal-100 
    bg-teal-100 
    text-teal-700 
    border duration-200 ease-in-out 
    border-teal-600 transition">
                                                <div class="flex leading-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit w-5 h-5 mr-1">
                                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                                    </svg>
                                                    Edit</div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer class="relative bg-blueGray-200 pt-8 pb-6 mt-8">
                            <div class="container mx-auto px-4">
                                <div class="flex flex-wrap items-center md:justify-between justify-center">
                                    <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                                        <div class="text-sm text-blueGray-500 font-semibold py-1">
                                            Made with <a href="1" class="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="1" class="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </section>
                </main>

            }


            <ToastContainer />

        </>
    )
}

export default CompanyProfile