import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Users = () => {
    const [allUsers, setAllUsers] = useState();
    useEffect(() => {
        axios.get('http://localhost:8080/superadmin/getusers', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('sAdminToken')
            }
        })
            .then((res) => setAllUsers(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>

            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                User Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers?.map((user) => (
                            <tr
                                key={user.userId}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {user.userName}
                                </td>
                                <td className="px-6 py-4">{user.role}</td>
                                <td className={`my-element ${user?.isActive ? 'px-6 py-4 text-green-800 font-bold' : 'px-6 py-4 text-red-800 font-bold'}`}>{user.isActive ?'Active':'In Active'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default Users