import React from 'react'
import { useState } from 'react'
import ModifyRegestrartionModal from '../../utils/ModifyRegestrartionModal';
const MainRegestration = () => {
    const [mainLedgerData, setMainLedgerData] = useState({});
    const [showGroupDropDown, setShowGroupDropDown] = useState(true);
    const [showUpdateModal,setShowUpdateModal]=useState(false)
    const [showSubAccount, setShowSubAccount] = useState('No')
    const mainLedgerChangeHandler = (event) => {
        const { name, value } = event.target;
        setMainLedgerData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const mainLedgerSubmitHandler = (e) => {
        console.log('mainLedgerSubmitHandler');
        e.preventDefault();
        console.log(mainLedgerData);
    }

    return (
        <>
            {showUpdateModal &&<ModifyRegestrartionModal setShowUpdateModal={setShowUpdateModal} showUpdateModal={showUpdateModal} />}
            <div class="grid grid-cols-1  sm:grid-cols-2 h-full">
                <div class="  h-1/2 sm:h-full p-4">
                    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">

                        <form onSubmit={mainLedgerSubmitHandler}>
                            <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Ledger Setup</h2>

                            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="username">Account Type</label>
                                    <select name='accountType' required onChange={mainLedgerChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                        <option value="none" selected disabled hidden>Select Account Type</option>
                                        <option>Assets</option>
                                        <option>Expense</option>
                                        <option>Income</option>
                                        <option>Liability</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Group Name</label>
                                    <div class="flex h-12">
                                        {showGroupDropDown ? (
                                            <select required name='groupName' onChange={mainLedgerChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                            </select>
                                        ) : (
                                            <input required name='groupName' onChange={mainLedgerChangeHandler}
                                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            />
                                        )}
                                        <button type='button' onClick={() => setShowGroupDropDown(!showGroupDropDown)} class="flex items-center px-4 py-2 mt-2 ml-2 font-medium tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                            <span class="mx-1">{showGroupDropDown ? ("Add") : ("Select")}</span>
                                        </button>
                                    </div>

                                </div>
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="emailAddress">समुहको नाम</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        name='समुहको नाम'
                                        required
                                        onChange={mainLedgerChangeHandler}
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="password">Ledger Name</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        name='ledgerName'
                                        required
                                        onChange={mainLedgerChangeHandler}
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">लेजरको नाम</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        name='लेजरको नाम'
                                        required
                                        onChange={mainLedgerChangeHandler}
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Entry Date</label>
                                    <input type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        name='entryData'
                                        required
                                        onChange={mainLedgerChangeHandler}
                                    />

                                </div>


                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Sub Account</label>
                                    <select name='subAccount' required onChange={(e) => setShowSubAccount(e.target.value)} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                        <option>No</option>
                                        <option>Yes</option>
                                    </select>
                                </div>
                                {showSubAccount === 'Yes' && <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="password">Sub Ledger Name</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        name='subLederName'
                                        required
                                        onChange={mainLedgerChangeHandler}
                                    />
                                </div>}
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="password">Deprection Rate</label>
                                    <input type='number' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        name='deprectionRate'
                                        required
                                        onChange={mainLedgerChangeHandler}
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="password">हिसाब न</label>
                                    <input type='number' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        name='हिसाब न'
                                        required
                                        onChange={mainLedgerChangeHandler}
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
                    <div class=" text-black bg-white px-4 py-2 rounded w-full">
                        <div class="flex flex-col">
                            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">

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
                                                        Ledger Name
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
                                                <tr class="border-b ">
                                                    <td
                                                        class="whitespace-nowrap border-r px-6 py-4 font-medium ">
                                                        1
                                                    </td>
                                                    <td
                                                        class="whitespace-nowrap border-r px-6 py-4 ">
                                                        demo
                                                    </td>
                                                    <td
                                                        class="whitespace-nowrap border-r px-6 py-4 ">
                                                        demo
                                                    </td>
                                                    <td
                                                        class="whitespace-nowrap border-r px-6 py-4 ">
                                                        demo
                                                    </td>
                                                    <td
                                                        class="whitespace-nowrap border-r px-6 py-4 ">
                                                        demo
                                                    </td>
                                                    <td
                                                        class="whitespace-nowrap border-r px-6 py-4 ">
                                                        demo
                                                    </td>
                                                    <td role='button' onClick={()=>setShowUpdateModal(true)}
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


        </>
    )
}

export default MainRegestration




