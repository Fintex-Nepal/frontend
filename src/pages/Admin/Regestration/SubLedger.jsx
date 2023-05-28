import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { createSubLedgerUrl } from '../../../utils/Url';
import { useSelector, useDispatch } from 'react-redux';
import SuccessModal from '../../../utils/SuccessModal';
import { fetchGroupData } from '../../../Redux/Regestration/LedgerSlice';
import { fetchAccountType } from '../../../Redux/Regestration/GroupSlice';
import { fetchLedgerData } from '../../../Redux/Regestration/SubLedgerSlice';
import { getallSubLedger } from '../../../utils/Url'

const SubLedger = () => {
    const [subLedgerData, setSubLedgerData] = useState({})
    const [selectedAccountType, setSelectedAccountType] = useState()
    const [selectedGroupType, setSelectedGroupType] = useState()
    const [showSuccessModal, setshowSuccessModal] = useState(false)
    const [allSubLedger, setAllSubLedger] = useState()
    const dispatch = useDispatch()
    const accountTypeData = useSelector((state) => state.group?.accountTypeData);
    const groupTypeData = useSelector((state) => state.ledger?.groupData);
    const ledgerData = useSelector((state) => state.subLedger?.ledgerData);
    if (!accountTypeData || accountTypeData.length <= 0) {
        dispatch(fetchAccountType());

    }
    useEffect(() => {
        dispatch(fetchGroupData(selectedAccountType))
    }, [dispatch, selectedAccountType])


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
        axios.get(getallSubLedger, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("adminToken")
            }
        })
            .then((res) => setAllSubLedger(res.data))
            .catch(err => alert(err))
    }, [])
    useEffect(() => {
        if (selectedAccountType) {
            dispatch(fetchLedgerData(selectedGroupType))
        }
    }, [dispatch, selectedAccountType, selectedGroupType])
    const LedgerSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(createSubLedgerUrl, subLedgerData, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
            }
        })
            .then((res) => {
                if (res?.data?.status) {
                    setshowSuccessModal(true)
                }
                else {
                    alert(res?.data?.message)
                }
            })
            .catch(err => alert(err))
    }
    const modalText = {
        heading: "Sub Ledger Successfully Created",
        // bodyText: 'The entered username and password can be used by Employee'
    }


    return (
        <>
            {showSuccessModal && <SuccessModal heading={modalText?.heading} bodyText={modalText?.bodyText} setshowSuccessModal={setshowSuccessModal} showSuccessModal={showSuccessModal} />}
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
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
                                        {accountTypeData?.map(itm => (
                                            <option value={itm?.id}>{itm?.name}</option>
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
                                            <option value={itm?.groupType?.id}>{itm?.groupType?.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label class="text-gray-700" >Ledger Name</label>
                                    <select onChange={onChangeHandler} className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  ' name='ledgerId'>
                                        <option disabled selected>Select</option>
                                        {ledgerData?.map(itm => (
                                            <option value={itm?.ledger?.id}>{itm?.ledger?.name}</option>
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
                            </div>
                            <div class="flex justify-end mt-6">
                                <button type='submit' class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
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
                                                <tr class="border-b ">
                                                    {allSubLedger?.map((subLedger,index) => (
                                                        <>
                                                            <td
                                                                class="whitespace-nowrap border-r px-6 py-4 font-medium ">
                                                                {index+1}
                                                            </td>
                                                            <td
                                                                class="whitespace-nowrap border-r px-6 py-4 ">
                                                               {subLedger?.subLedger?.id}
                                                            </td>
                                                            <td
                                                                class="whitespace-nowrap border-r px-6 py-4 ">
                                                                {subLedger?.subLedger?.name}
                                                            </td>
                                                            <td
                                                                class="whitespace-nowrap border-r px-6 py-4 ">
                                                                {subLedger?.ledger?.name}
                                                            </td>
                                                            <td
                                                                class="whitespace-nowrap border-r px-6 py-4 ">
                                                                {subLedger?.groupType?.name}
                                                            </td>
                                                            <td
                                                                class="whitespace-nowrap border-r px-6 py-4 ">
                                                                 {subLedger?.accountType?.name}
                                                            </td>
                                                            <td role='button'
                                                                class="whitespace-nowrap border-r px-6 py-4 ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                </svg>

                                                            </td>
                                                        </>
                                                    ))}

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
        </>
    )
}

export default SubLedger


