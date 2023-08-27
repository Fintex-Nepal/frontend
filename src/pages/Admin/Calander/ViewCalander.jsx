import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { getallCalenders } from '../../../utils/Url'
import Loader from '../../../utils/Helper/Loader';
import { Link } from 'react-router-dom';

const ViewCalander = () => {
    const [calander, setCalander] = useState([])
    const [showLoader, setShowLoader] = useState(false)
    useEffect(() => {
        axios.get(getallCalenders, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
            }
        })
            .then((res) => {
                toast.success(res?.data?.message, {
                    position: 'top-right',
                });
                setCalander(res.data)
                setShowLoader(false);
            })
            .catch((err) => {
                setShowLoader(false);
                const errorData = err.response?.data?.errors;
                if (errorData) {
                    Object.values(errorData).forEach((er) => {
                        toast.warning(er[0], {
                            position: 'top-right',
                        });
                    });
                } else {
                    toast.error(err?.message, {
                        position: 'top-right',
                    });
                }
            });

    }, [])

    return (
        <>
            {showLoader && <Loader />}
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                year
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Month
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name Of Month
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total Days
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Running Days
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {calander?.map(calenderData => (
                            <tr class="bg-white border-b">
                                <th
                                    scope="row"
                                    class={`px-6 py-4  whitespace-nowrap ${calenderData?.isActive ? 'text-green-700' : 'text-gray-900'
                                        }`}
                                >
                                    {calenderData.year}
                                </th>

                                <td class="px-6 py-4">
                                    {calenderData.month}
                                </td>
                                <td class="px-6 py-4">
                                    {calenderData?.monthName}
                                </td>
                                <td class="px-6 py-4">
                                    {calenderData.numberOfDay}
                                </td>
                                <td class="px-6 py-4">
                                    {calenderData.runningDay}
                                </td>
                                <td class="px-6 py-4">
                                    <Link to={`/dashboard/updatecalander/${calenderData.id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer />

        </>
    )
}



export default ViewCalander