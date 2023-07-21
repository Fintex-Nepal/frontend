import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { getUsersUrl, userActivateDeactivateUrl } from '../../utils/Url'
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../utils/Helper/Loader';



const Users = () => {
    const [allUsers, setAllUsers] = useState();
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [updatedUsers, setUpdatedUsers] = useState([]);
    const [showLoader, setShowLoader] = useState(false)

    useEffect(() => {
        axios.get(getUsersUrl, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('sAdminToken')
            }
        })
            .then((res) => setAllUsers(res.data))
            .catch(err => {
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
            })
    }, [updatedUsers])
    const handleUpdate = () => {
        setShowLoader(true);
        axios.put(userActivateDeactivateUrl, selectedUsers, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('sAdminToken')
            }
        })
            .then(res => {
                if (res.status) {
                    setUpdatedUsers(res.data);
                    setShowLoader(false);
                    setAllUsers(allUsers.map(user => {
                        const updatedUser = updatedUsers.find(u => u.userId === user.userId);
                        if (updatedUser) {
                            toast.success(res?.data?.message, {
                                position: 'top-right'
                            });
                            return { ...user, isActive: updatedUser.isActive };
                        }
                        return user;
                    }));
                }
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
    };

    const handleSwitchChange = (event, user) => {
        const updatedUser = { ...{ userName: user.userName }, isActive: event.target.checked };
        setSelectedUsers([...selectedUsers, updatedUser])
    };

    return (
        <>
            {showLoader && <Loader />}
            <div class=" text-black bg-white px-4 py-2 rounded w-full">
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8" style={{ minHeight: '2rem' }}>
                            <div class="overflow-hidden"></div>
                            <table
                                class="min-w-full border text-center text-sm font-light h-96  overflow-y-auto">
                                <thead class="border-b font-medium ">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="border-r px-6 py-4 ">
                                            S.No.
                                        </th>
                                        <th
                                            scope="col"
                                            class="border-r px-6 py-4 ">
                                            User Name
                                        </th>
                                        <th
                                            scope="col"
                                            class="border-r px-6 py-4 ">
                                            Role
                                        </th>

                                        <th
                                            scope="col"
                                            class="border-r px-6 py-4 ">
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            class="border-r px-6 py-4 ">
                                            Action
                                        </th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {allUsers?.map((itm, index) => (
                                        <tr class="border-b ">
                                            <td
                                                class="whitespace-nowrap border-r px-6 py-4 ">
                                                {index + 1}
                                            </td>
                                            <td
                                                class="whitespace-nowrap border-r px-6 py-4 font-medium ">
                                                {itm.userName}
                                            </td>
                                            <td
                                                class="whitespace-nowrap border-r px-6 py-4 ">
                                                {itm.role}
                                            </td>
                                            <td
                                                class={`${itm.isActive ? 'whitespace-nowrap border-r px-6 py-4 text-green-800 font-extrabold' : 'whitespace-nowrap border-r px-6 py-4 text-red-800 font-extrabold'}`}>
                                                {itm.isActive ? 'Active' : ('In Active')}
                                            </td>

                                            <td role='button'>

                                                <label class="relative inline-flex items-center cursor-pointer">
                                                    <input defaultChecked={itm.isActive} onChange={(event) => handleSwitchChange(event, itm)} type="checkbox" value="checked" class="sr-only peer" />
                                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-700"></div>
                                                    <span class="ml-3 text-sm font-medium text-gray-900 ">{itm.isActive ? 'Active' : 'In Active'}</span>
                                                </label>
                                                {/* <FormControlLabel
                                                    control={<IOSSwitch sx={{ m: 1 }}   />}
                                                   
                                                    role="button"
                                                    className="whitespace-nowrap border-r px-6 py-4"
                                                /> */}


                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {allUsers?.length > 0 && <button onClick={handleUpdate} class="float-right inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                                Update
                            </button>}

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Users