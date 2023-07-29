import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { createSubLedgerUrl, getSubLedgerByLedger, updateSubLedger } from '../../../utils/Url';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGroupData } from '../../../Redux/Regestration/LedgerSlice';
import { fetchLedgerData } from '../../../Redux/Regestration/SubLedgerSlice';
import { getLedgerByGroupType } from '../../../utils/Url'
import { accountTypes } from '../../../utils/Helper/Enums';
import Loader from '../../../utils/Helper/Loader';

const SubLedger = () => {
    const [subLedgerData, setSubLedgerData] = useState({})
    const [selectedAccountType, setSelectedAccountType] = useState()
    const [allLedger, setAllLedger] = useState()
    const [selectedGroupType, setSelectedGroupType] = useState()
    const [selectedLedger, setSelectedLedger] = useState()
    const [allSubLedger, setAllSubLedger] = useState()
    const [showLoader, setShowLoader] = useState();
    const [isUpdate, setIsUpdate] = useState(false)
    const [selectedId,setSelectedId]=useState();
    const dispatch = useDispatch()
    const groupTypeData = useSelector((state) => state.ledger?.groupData);

    useEffect(() => {
        dispatch(fetchGroupData(selectedAccountType))
    }, [dispatch, selectedAccountType])

    useEffect(() => {
        axios.get(`${getLedgerByGroupType}?groupTypeId=${selectedGroupType}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("adminToken")
            }
        })
            .then((res) => {
                setAllLedger(res.data)
            })
            .catch(err => console.log(err))
    }, [selectedGroupType])


    const onEditChangeHandler = (e) => {
        const { name, value } = e.target;
        setSelectedLedger((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        let parsedValue = value;

        if (name === 'ledgerId' || name === 'depreciationRate') {
            parsedValue = parseInt(value);
        } else if (name === 'isSubLedgerActive') {
            parsedValue = value === 'true'; // Convert the selected value to a boolean
        }
        setSubLedgerData((prevState) => ({
            ...prevState,
            [name]: parsedValue,
        }));
    };

    useEffect(() => {
        if (selectedAccountType) {
            dispatch(fetchLedgerData(selectedGroupType))
        }
    }, [dispatch, selectedAccountType, selectedGroupType])

    useEffect(() => {
        axios.get(`${getSubLedgerByLedger}${selectedLedger}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("adminToken")
            }
        })
            .then((res) => setAllSubLedger(res.data))
            .catch(err => console.log(err))
    }, [selectedLedger,showLoader])

    const EditSubLedgerHandler = (e) => {
        e.preventDefault();
        setShowLoader(true);
        axios.put(updateSubLedger, selectedLedger, {
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
    useEffect(() => {
        setSelectedLedger(allSubLedger?.find((data) => data.id === selectedId) || {});
    }, [allSubLedger, selectedId])
    const LedgerSubmitHandler = (e) => {
        e.preventDefault();
        setShowLoader(true)
        axios.post(createSubLedgerUrl, subLedgerData, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
            }
        })
            .then((res) => {
                if (res?.data?.status) {
                    setShowLoader(false)
                    toast.success(res?.data?.message, {
                        position: 'top-right'
                    })
                }
                else {
                    setShowLoader(false)
                    toast.error("Error in Creating Sub Ledger", {
                        position: 'top-right'
                    })
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
    }

    return (
        <>
            {showLoader && <Loader />}
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
                        {isUpdate ? <>
                            <button onClick={() => setIsUpdate(false)} class="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                </svg>
                                Back
                            </button>
                            <form onSubmit={EditSubLedgerHandler}>
                                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                    <div>
                                        <label class="text-gray-700 " >ID</label>
                                        <input readOnly value={selectedLedger?.id} name='id' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
                                    </div>
                                    <div>
                                        <label class="text-gray-700 " >Name</label>
                                        <input value={selectedLedger?.name} onChange={onEditChangeHandler} name='name' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
                                    </div>
                                    <div>
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description message</label>
                                        <textarea onChange={onEditChangeHandler} name='description' rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="Your message..."/>
                                    </div>
                                </div>
                                <div class="flex justify-end mt-6">
                                    <button type='submit' class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                                </div>
                            </form>
                        </> : (
                            <>
                                <h2 class="text-lg font-semibold text-gray-700 capitalize ">Main Ledger</h2>
                                <form onSubmit={LedgerSubmitHandler}>
                                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                        <div>
                                            <label class="text-gray-700" >Account Type</label>
                                            <select onChange={(e) => {
                                                setSelectedAccountType(e.target.value);
                                                onChangeHandler(e);
                                            }}

                                                required type="number" name='accountTypeId' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" >
                                                <option selected disabled>Select</option>
                                                {accountTypes?.map(itm => (
                                                    <option value={itm?.Id}>{itm?.Name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label class="text-gray-700" >Group Name</label>
                                            <select onChange={(e) => {
                                                setSelectedGroupType(e.target.value);
                                                onChangeHandler(e);
                                            }} required name='groupTypeId' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" >
                                                <option selected disabled>Select</option>
                                                {groupTypeData?.map(itm => (
                                                    <option value={itm?.id}>{itm?.name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label class="text-gray-700" >Ledger Name</label>
                                            <select onChange={(e) => {
                                                onChangeHandler(e)
                                                setSelectedLedger(e.target.value)
                                            }} className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  ' name='ledgerId'>
                                                <option disabled selected>Select</option>
                                                {allLedger?.map(itm => (
                                                    <option value={itm?.id}>{itm?.name}</option>
                                                ))}
                                            </select>

                                        </div>
                                        <div>
                                            <label class="text-gray-700" >Sub Ledger</label>
                                            <input type='text' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                                name='name'
                                                required
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                        <div>
                                            <label class="text-gray-700" >Description</label>
                                            <textarea   rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="Your message..."
                                                name='description'
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div class="flex justify-end mt-6">
                                        <button type='submit' class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                                    </div>
                                </form>

                            </>
                        )}
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
                                                        Sub Ledger Id
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="border-r px-6 py-4 ">
                                                        Sub Ledger Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="border-r px-6 py-4 ">
                                                        Ledger Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="border-r px-6 py-4 ">
                                                        Group Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="border-r px-6 py-4 ">
                                                        Account Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="border-r px-6 py-4 ">
                                                        Action
                                                    </th>
                                                </tr>

                                            </thead>
                                            <tbody>

                                                {allSubLedger?.map((subLedger, index) => (
                                                    <>
                                                        <tr class="border-b ">
                                                            <td
                                                                class="whitespace-nowrap border-r px-6 py-4 font-medium ">
                                                                {index + 1}
                                                            </td>
                                                            <td
                                                                class="whitespace-nowrap border-r px-6 py-4 ">
                                                                {subLedger?.id}
                                                            </td>
                                                            <td
                                                                class="whitespace-nowrap border-r px-6 py-4 ">
                                                                {subLedger?.name}
                                                            </td>
                                                            <td
                                                                class="whitespace-nowrap border-r px-6 py-4 ">
                                                                {subLedger?.ledgerName}
                                                            </td>
                                                            <td
                                                                class="whitespace-nowrap border-r px-6 py-4 ">
                                                                {subLedger?.groupTypeName}
                                                            </td>
                                                            <td
                                                                class="whitespace-nowrap border-r px-6 py-4 ">
                                                                {subLedger?.name}
                                                            </td>
                                                            <td role='button'
                                                                class="whitespace-nowrap border-r px-6 py-4 ">
                                                                <svg onClick={() => {
                                                                    setIsUpdate(true)
                                                                    setSelectedId(subLedger?.id)
                                                                }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                </svg>

                                                            </td>
                                                        </tr>
                                                    </>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <ToastContainer />
        </>
    )
}

export default SubLedger


