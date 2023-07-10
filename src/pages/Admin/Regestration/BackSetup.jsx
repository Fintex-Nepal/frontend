import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { createBankUrl } from '../../../utils/Url'
import Loader from '../../../utils/Helper/Loader';
const typesOfBanks = [
    {
        "id": 1,
        "name": "Commercial"
    },
    {
        "id": 2,
        "name": "Development"
    },
    {
        "id": 3,
        "name": "Finance"
    }
]
const BackSetup = () => {
    const [bankSetupData, setBankSetupData] = useState({})
    const [showLoader, setShowLoader] = useState(false)
    const onChanegHandler = (event) => {
        const { name, value } = event.target;
        const updatedValue = name === 'interestRate' || name === "bankTypeId" ? Number(value) : value;
        setBankSetupData((prevState) => ({
            ...prevState,
            [name]: updatedValue,
        }));
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        setShowLoader(true)
        axios.post(createBankUrl, bankSetupData, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
            }
        })
            .then((res) => {
                if (res?.data?.status) {
                    setShowLoader(false)
                    toast.success(res?.data?.message)
                }
                else {
                    alert(res?.data?.message)
                }
            })
            .catch(err => {
                setShowLoader(false)
                toast.error(err?.response?.data?.errors?.Message[0], {
                    position: 'top-right'
                })
            })
    }
    return (
        <>
           {showLoader && <Loader/>}
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
                        <h2 class="text-lg font-semibold text-gray-700 capitalize ">Bank Setup</h2>

                        <form onSubmit={formSubmitHandler} >
                            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                                <div>
                                    <label class="text-gray-700" >Bank Name</label>
                                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   "
                                        required
                                        name='name'
                                        onChange={onChanegHandler}
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700" >बैंकको नाम</label>
                                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   "

                                        name='nepaliName'
                                        onChange={onChanegHandler}
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700" >Branch Name</label>
                                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   "
                                        required
                                        name='bankBranch'
                                        onChange={onChanegHandler}
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700" >Branch Code</label>
                                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   "
                                        required
                                        name='branchCode'
                                        onChange={onChanegHandler}
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700" >Account Number</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                        name='accountNumber'
                                        required
                                        onChange={onChanegHandler}
                                    />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                                <div>
                                    <label class="text-gray-700" >Bank Type</label>
                                    <select onChange={(e) => {
                                        onChanegHandler(e);
                                    }}
                                        required type="number" name='bankTypeId' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" >
                                        <option selected disabled>Select</option>
                                        {typesOfBanks?.map(itm => (
                                            <option value={itm.id}>{itm.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label class="text-gray-700" >Int Rate</label>
                                    <input type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                        name='interestRate'
                                        required
                                        defaultValue={"0.00"}
                                        onChange={onChanegHandler}
                                    />
                                </div>
                            </div>
                            <div class="flex justify-end mt-6">
                                <button type='submit' class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none hover:animate-pulse focus:bg-gray-600">Save</button>
                            </div>
                        </form>
                    </section>
                </div>
                <div class=" h-1/2 sm:h-full p-4">
                    <div class=" text-black bg-white  py-2 rounded w-full">
                        <div class="flex flex-col">
                            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div class="overflow-y-auto overflow-x-hidden h-96 w-full">
                                        <table
                                            class="min-w-full border text-center text-sm font-light ">
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
                                                        Bank Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="border-r px-6 py-4 ">
                                                        Accounnt Number
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="border-r px-6 py-4 ">
                                                        Action
                                                    </th>
                                                </tr>

                                            </thead>
                                            <tbody>

                                                <tr class="border-b ">
                                                    <td
                                                        class="whitespace-nowrap border-r px-6 py-4 font-medium ">
                                                        Test
                                                    </td>
                                                    <td
                                                        class="whitespace-nowrap border-r px-6 py-4 font-medium ">
                                                        Test
                                                    </td>
                                                    <td
                                                        class="whitespace-nowrap border-r px-6 py-4 font-medium ">
                                                        Test
                                                    </td>
                                                    <td role='button'
                                                        class="whitespace-nowrap border-r px-6 py-4 ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                        </svg>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default BackSetup