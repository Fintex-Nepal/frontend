import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux';
import SuccessModal from '../../../utils/SuccessModal';
import { createGroupUrl, accoutTypeByIdUrl } from '../../../utils/Url';
import ModifyRegestrartionModal from '../../../utils/ModifyRegestrartionModal';
import { fetchAccountType } from '../../../Redux/Regestration/GroupSlice';

const GroupSetup = () => {
    const [groupSetUpData, setGroupSetUpData] = useState({})
    const [existingGroups, setExistingGroups] = useState();
    const [selectedAccountType, setSelectedAccountType] = useState()
    const [showSuccessModal, setshowSuccessModal] = useState(false)
    const [showModifyModal,setShowModifyModal]=useState(false)
    const dispatch = useDispatch();
    const accountTypeData = useSelector((state) => state.group?.accountTypeData);
    const modalText = {
        heading: "Employee Account Successfully Created",
        bodyText: 'The entered username and password can be used by Employee'
    }
     if(!accountTypeData || accountTypeData.length<=0)
     {
        dispatch(fetchAccountType())
     }
    useEffect(() => {
        if (selectedAccountType) {
            axios.get(`${accoutTypeByIdUrl}=${selectedAccountType}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("adminToken")
                }
            })
                .then((res) => setExistingGroups(res.data))
                .catch(err => alert(err))
        }
    }, [selectedAccountType])
   
    const onChanegHandler = (e) => {
        const { name, value } = e.target;

        let parsedValue = value;
        if (name === 'accountTypeId') {
            parsedValue = parseInt(value);
        }

        setGroupSetUpData((prevState) => ({
            ...prevState,
            [name]: parsedValue,
        }));
    };
    const groupSetUpSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(createGroupUrl, groupSetUpData, {
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
    console.log('====================================');
    console.log(accountTypeData,"accountTypeDataaccountTypeData");
    console.log('====================================');
    return (
        <>

            {showSuccessModal && <SuccessModal heading={modalText?.heading} bodyText={modalText?.bodyText} setshowSuccessModal={setshowSuccessModal} showSuccessModal={showSuccessModal} />}
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
                        <h2 class="text-lg font-semibold text-gray-700 capitalize ">Group settings</h2>

                        <form onSubmit={groupSetUpSubmitHandler}>
                            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label class="text-gray-700" >Account Type</label>
                                    <select onChange={(e) => {
                                        setSelectedAccountType(e.target.value);
                                        onChanegHandler(e);
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
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   "
                                        name='name'
                                        required
                                        onChange={onChanegHandler}
                                    />
                                </div>

                                <div>
                                    <label class="text-gray-700" >समुहको नाम</label>
                                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   "
                                        required
                                        name='nepaliName'
                                        onChange={onChanegHandler}
                                    />
                                </div>

                                <div>
                                    <label class="text-gray-700" >Entry Date</label>
                                    <input type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                        name='entryDate'
                                        required
                                        onChange={onChanegHandler}
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700" >Schedule</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                        name='schedule'
                                        required
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
                {showModifyModal &&<ModifyRegestrartionModal setShowUpdateModal={setShowModifyModal}/>}
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
                                                        Group No.
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="border-r px-6 py-4 ">
                                                        Group Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="border-r px-6 py-4 ">
                                                        समुहको नाम
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="border-r px-6 py-4 ">
                                                        Schedule
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="border-r px-6 py-4 ">
                                                        Date
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="border-r px-6 py-4 ">
                                                        Action
                                                    </th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                {existingGroups?.map((itm, index) => (
                                                    <tr class="border-b ">
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 font-medium ">
                                                            {index + 1}
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 font-medium ">
                                                            {itm?.groupType?.id}
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 font-medium ">
                                                            {itm?.groupType?.name}
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 font-medium ">
                                                            {itm?.groupType?.nepaliName}
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 font-medium ">
                                                            {itm?.groupType?.schedule}
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 font-medium ">
                                                            {itm?.groupType?.entryDate.substring(0, 10)}
                                                        </td>

                                                        <td onClick={()=>setShowModifyModal(!showModifyModal)} role='button'
                                                            class="whitespace-nowrap border-r px-6 py-4 ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                            </svg>
                                                        </td>
                                                    </tr>
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
        </>
    )
}

export default GroupSetup