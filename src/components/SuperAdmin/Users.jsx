import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { userActivateDeactivateUrl } from '../../utils/Url'
const Users = () => {
    const [allUsers, setAllUsers] = useState();
    const [selectedUsers, setSelectedUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/superadmin/getusers', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('sAdminToken')
            }
        })
            .then((res) => setAllUsers(res.data))
            .catch(err => console.log(err))
    }, [allUsers])

    const handleUpdate = () => {
        axios.put(userActivateDeactivateUrl, selectedUsers, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('sAdminToken')
            }
        })
            .then(res => {
                // update isActive property in allUsers
                const updatedAllUsers = allUsers.map(user => {
                    const selectedUser = selectedUsers.find(selected => selected.username === user.username);
                    if (selectedUser && selectedUser.isActive !== user.isActive) {
                        return {
                            ...user,
                            isActive: selectedUser.isActive
                        }
                    }
                    return user;
                });
                setAllUsers(updatedAllUsers);
                
            })
            .catch(err => console.log(err));
    }
    const handleCheckboxChange = (event, user) => {

        if (event.target.checked) {

            setSelectedUsers([...selectedUsers, { username: user.userName, isActive: !user.isActive }]);
        }
    }
    return (
        <>
            <div class=" text-black bg-white px-4 py-2 rounded w-full">
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div class="overflow-hidden"></div>
                            <table
                                class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                                <thead class="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="border-r px-6 py-4 dark:border-neutral-500">
                                            S.No.
                                        </th>
                                        <th
                                            scope="col"
                                            class="border-r px-6 py-4 dark:border-neutral-500">
                                            User Name
                                        </th>
                                        {/* <th
                            scope="col"
                            class="border-r px-6 py-4 dark:border-neutral-500">
                            Email
                        </th> */}
                                        <th
                                            scope="col"
                                            class="border-r px-6 py-4 dark:border-neutral-500">
                                            Role
                                        </th>

                                        <th
                                            scope="col"
                                            class="border-r px-6 py-4 dark:border-neutral-500">
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            class="border-r px-6 py-4 dark:border-neutral-500">
                                            Action
                                        </th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {allUsers?.map((itm, index) => (
                                        <tr class="border-b dark:border-neutral-500">
                                            <td
                                                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                {index + 1}
                                            </td>
                                            <td
                                                class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                {itm.userName}
                                            </td>
                                            <td
                                                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                {itm.role}
                                            </td>
                                            <td
                                                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                {itm.isActive ? 'Active' : ('In Active')}
                                            </td>

                                            <td role='button'
                                                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                <label>
                                                    <input type="checkbox" onChange={(event) => handleCheckboxChange(event, itm)} /> {itm.isActive ? 'In Active' : 'Active'}
                                                </label>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button onClick={handleUpdate} class="float-right inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users