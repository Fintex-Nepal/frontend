import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { createLedgerUrl, updateLedgerUrl } from '../../../utils/Url';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGroupData } from '../../../Redux/Regestration/LedgerSlice';
import { getLedgerByGroupType, getUniqueGlCode } from '../../../utils/Url'
import { accountTypes } from '../../../utils/Helper/Enums';
import Loader from '../../../utils/Helper/Loader';

const LedgerSetup = () => {
    const [glCode, setGlCode] = useState();
    const [ledgerData, setLedgerData] = useState({})
    const [selectedAccountType, setSelectedAccountType] = useState()
    const [selectedGroupType, setSelectedGroupType] = useState();
    const [showLoader, setShowLoader] = useState(false);
    const [allLedger, setAllLedger] = useState()
    const [selectedLedger, setSelectedLedger] = useState();
    const [selectedId, setSelectedId] = useState()
    const [isUpdate, setIsUpdateLedger] = useState(false)

    const groupTypeData = useSelector((state) => state.ledger?.groupData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGroupData(selectedAccountType))
    }, [dispatch, selectedAccountType])

    useEffect(() => {
        setSelectedLedger(allLedger?.find((data) => data.id === selectedId) || {});
    }, [allLedger, selectedId])
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        let parsedValue = value;

        if (name === 'groupTypeId' || name === 'depreciationRate') {
            parsedValue = parseInt(value);
        } else if (name === 'isSubLedgerActive') {
            parsedValue = value === 'true'; // Convert the selected value to a boolean
        }

        setLedgerData((prevState) => ({
            ...prevState,
            [name]: parsedValue,
        }));
    };

    useEffect(() => {
        axios.get(getUniqueGlCode, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
            }
        })
            .then((response) => setGlCode(response.data))
            .catch((err) => {
                toast.error(err?.response?.data?.errors?.Message[0], {
                    position: 'top-right'
                })
            })
    }, [])
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
    }, [selectedGroupType, showLoader])

    const onEditChangeHandler = (e) => {
        const { name, value } = e.target;
        // Check if the field name is "schedule" and parse the value as a number
        const parsedValue = name === "schedule" ? parseInt(value) : value;

        setSelectedLedger((prevState) => ({
            ...prevState,
            [name]: parsedValue,
        }));
    };

    const EditLedgerHandler = (e) => {
        e.preventDefault();
        setShowLoader(true);
        // const updateGroupDatawithId = { ...updateGroupData, id: selectedId };
        axios.put(updateLedgerUrl, selectedLedger, {
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

    const LedgerSubmitHandler = (e) => {
        e.preventDefault();
        setShowLoader(true)
        const updatedLedgerData = {
            ...ledgerData,
            id: glCode
        };

        axios.post(createLedgerUrl, updatedLedgerData, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
            }
        })
            .then((res) => {
                if (res?.data?.status) {
                    setShowLoader(false)
                    toast.success(res?.data?.message);

                } else {
                    alert(res?.data?.message);
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

    return (
        <>
            {showLoader && <Loader />}
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
                        {isUpdate ? <>
                            <button onClick={() => setIsUpdateLedger(false)} class="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                </svg>
                                Back
                            </button>
                            <form onSubmit={EditLedgerHandler}>
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
                                        <label class="text-gray-700 " >लेजरको नाम</label>
                                        <input value={selectedLedger?.nepaliName} name='nepaliName' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
                                    </div>
                                    <div>
                                        <label class="text-gray-700" >Sub Ledger</label>
                                        <select value={selectedLedger?.isSubLedgerActive} onChange={onEditChangeHandler} required name='isSubLedgerActive' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" >
                                            <option selected disabled>Select</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="text-gray-700" >Depreciation Rate</label>
                                        <input value={selectedLedger?.depreciationRate} type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                            name='depreciationRate'
                                            required
                                            onChange={onEditChangeHandler}
                                        />
                                    </div>
                                    <div>
                                        <label class="text-gray-700" >हिसाब न.</label>
                                        <input value={selectedLedger?.hisabNumber} type='text' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                            name='hisabNumber'
                                            required
                                            onChange={onEditChangeHandler}
                                        />
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
                                                // onChangeHandler(e);
                                            }}

                                                required type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" >
                                                <option selected disabled>Select</option>
                                                {accountTypes?.map(itm => (
                                                    <option value={itm?.Id}>{itm?.Name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label class="text-gray-700" >Group Name</label>
                                            <select onChange={(e) => {
                                                onChangeHandler(e);
                                                setSelectedGroupType(e.target.value)
                                            }} required name='groupTypeId' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" >
                                                <option selected disabled>Select</option>
                                                {groupTypeData?.map(itm => (
                                                    <option value={itm?.id}>{itm?.name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label class="text-gray-700" >Ledger Name</label>
                                            <input req class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   "
                                                required
                                                name='name'
                                                onChange={onChangeHandler}
                                            />
                                        </div>

                                        <div>
                                            <label class="text-gray-700" >लेजरको नाम</label>
                                            <input type='text' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                                name='nepaliName'
                                                onChange={onChangeHandler}
                                            />
                                        </div>

                                        <div>
                                            <label class="text-gray-700" >Entry Date</label>
                                            <input type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                                name='entryDate'
                                                required
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                        <div>
                                            <label class="text-gray-700" >Sub Ledger</label>
                                            <select onChange={onChangeHandler} required name='isSubLedgerActive' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" >
                                                <option selected disabled>Select</option>
                                                <option value={true}>Yes</option>
                                                <option value={false}>No</option>
                                            </select>
                                        </div>
                                        <div>

                                            <label class="text-gray-700" >Depreciation Rate</label>
                                            <input type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                                name='depreciationRate'
                                                required
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                        <div>
                                            <label class="text-gray-700" >हिसाब न.</label>
                                            <input type='text' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                                name='hisabNumber'
                                                required
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
                                                        Ledger ID
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="border-r px-6 py-4 ">
                                                        Ledger Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="border-r px-6 py-4 ">
                                                        लेजरको नाम
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="border-r px-6 py-4 ">
                                                        Group Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="border-r px-6 py-4 ">
                                                        Schedule
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="border-r px-6 py-4 ">
                                                        Action
                                                    </th>
                                                </tr>

                                            </thead>
                                            <tbody>

                                                {allLedger?.map((ledger, index) => (
                                                    <>
                                                        <tr class="border-b" key={ledger.id}></tr>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 font-medium ">
                                                            {index + 1}
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 ">
                                                            {ledger?.id}
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 ">
                                                            {ledger?.name}
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 ">
                                                            {ledger?.nepaliName}
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 ">
                                                            {ledger?.name}
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 ">
                                                            {ledger?.schedule}
                                                        </td>
                                                        <td role='button'
                                                            class="whitespace-nowrap border-r px-6 py-4 ">
                                                            <svg onClick={() => {
                                                                setIsUpdateLedger(true)
                                                                setSelectedId(ledger?.id)
                                                            }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                            </svg>
                                                        </td>
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
            </div>
            <ToastContainer />
        </>
    )
}

export default LedgerSetup








