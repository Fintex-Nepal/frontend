import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { updateCalander } from '../../../utils/Url';
import Loader from '../../../utils/Helper/Loader';
const UpdateCalander = () => {
    const { id } = useParams()
    const [calander, setCalander] = useState({
        id: Number(id),
    })
    const [showLoader, setShowLoader] = useState(false)
    const navigate = useNavigate()
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        const newvalue = name === "year" || name === "month" || name === "numberOfDay" || name === "runningDay" ? parseInt(value) : value
        setCalander((prevState) => ({
            ...prevState,
            [name]: newvalue,
        }));
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setShowLoader(true);

        axios.put(updateCalander, calander, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
            }
        })
            .then((res) => {
                toast.success(res?.data?.message, {
                    position: 'top-right'
                });
                setShowLoader(false);
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
    }

    return (
        <>
            {showLoader && <Loader />}
            <button onClick={()=>navigate(-1)} class="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
                Back
            </button>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <form onSubmit={onSubmitHandler}>
                    <table class="w-full text-sm text-left text-gray-500 0">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Year
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Month
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Name Of Month
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    TOTAL DAYS
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    RUNNING DAYS
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Update
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Year"
                                        required
                                        name="year"
                                        onChange={onChangeHandler}
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Month"
                                        required
                                        name="month"
                                        onChange={onChangeHandler}
                                    />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Month Name"
                                        required
                                        name="monthName"
                                        onChange={onChangeHandler}
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Month"
                                        required
                                        name="numberOfDay"
                                        onChange={onChangeHandler}
                                    />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Year"
                                        required
                                        name="runningDay"
                                        onChange={onChangeHandler}

                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <button type='submit'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default UpdateCalander