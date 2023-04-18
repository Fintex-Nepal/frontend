import React from 'react'
import { useState } from 'react'
const MainRegestration = () => {
    const [activeButton, setActiveButton] = useState('')
    const [mainLedgerData, setMainLedgerData] = useState({});
    const [groupData, setGroupData] = useState({})

    const mainLedgerChangeHandler = (event) => {
        const { name, value } = event.target;
        setMainLedgerData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const groupDataChangeHandler = (event) => {
        const { name, value } = event.target;
        setGroupData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }
    const mainLedgerSubmitHandler = (e) => {
        console.log('mainLedgerSubmitHandler');
        e.preventDefault();
        console.log(mainLedgerData);
    }
    const groupSubmitHandler = (e) => {
        e.preventDefault();
        console.log(groupData);
    }
    return (
        <>
            <div class="bg-gray-100  flex flex-wrap items-center justify-center">
                <div onClick={() => setActiveButton('mainledger')} class="w-52 h-16 relative md:mt-0 mt-4 ">
                    <img src="https://i.ibb.co/DwNs7zG/Steps.png" alt="step1" class="w-full h-full" />
                    <div class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                        <p class="w-full text-sm font-medium leading-4 text-white">Main Ledger</p>
                        <p class="w-full text-xs mt-1 leading-none text-white">Main Ledger Setup</p>
                    </div>
                </div>
                <div onClick={() => setActiveButton('groupsetup')} class="w-52 h-16 relative md:mt-0 mt-4 ">
                    <img src="https://i.ibb.co/wNZ4nzy/Steps2.png" alt="step2" class="w-full h-full" />
                    <div class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                        <p class="w-full text-sm font-medium leading-4 text-indigo-800">Group Setup</p>
                        <p class="w-full text-xs mt-1 leading-none text-indigo-800">Fill Data</p>
                    </div>
                </div>

            </div>
            {/* <div class="flex flex-wrap justify-center">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2">Button 1</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">Button 2</button>
            </div> */}

            <div class="grid grid-cols-1  sm:grid-cols-2 h-full">
                <div class="  h-1/2 sm:h-full p-4">
                    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                        {activeButton === 'mainledger' ? (
                            <form onSubmit={mainLedgerSubmitHandler}>
                                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Main Ledger</h2>

                                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="username">Account Type</label>
                                        <select name='accountType' required onChange={mainLedgerChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                            <option value="none" selected disabled hidden>Select Account Type</option>
                                            <option>Assets</option>
                                            <option>Liabilities</option>
                                        </select>
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
                                        <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Group Name</label>
                                        <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            name='groupName'
                                            required
                                            onChange={mainLedgerChangeHandler}
                                        />
                                    </div>
                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Entry Date</label>
                                        <input type='date' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            name='entryData'
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
                                        <label class="text-gray-700 dark:text-gray-200" for="password">GI Code</label>
                                        <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            name='giCode'
                                            required
                                            onChange={mainLedgerChangeHandler}
                                        />
                                    </div>
                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Sub Account</label>

                                        <select name='subAccount' required onChange={mainLedgerChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="password">Deprection Rate</label>
                                        <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            name='deprectionRate'
                                            required
                                            onChange={mainLedgerChangeHandler}
                                        />
                                    </div>
                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="password">हिसाब न</label>
                                        <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                        ) : (
                            <form onSubmit={groupSubmitHandler}>
                                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Group Setup</h2>
                                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="username">Account Type</label>
                                        <select name='accountName' required onChange={groupDataChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                            <option value="none" selected disabled hidden>Select Account Type</option>
                                            <option>Assets</option>
                                            <option>Liabilities</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Group Name</label>
                                        <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            name='groupName'
                                            required
                                            onChange={groupDataChangeHandler}
                                        />
                                    </div>

                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="password">समुहको नाम</label>
                                        <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            name='समुहको नाम'
                                            required
                                            onChange={groupDataChangeHandler}
                                        />
                                    </div>
                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Entry Date</label>
                                        <input type='date' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            name='entryDate'
                                            required
                                            onChange={groupDataChangeHandler}
                                        />
                                    </div>

                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="password">GI Code</label>
                                        <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            name='giCode'
                                            required
                                            onChange={groupDataChangeHandler}
                                        />
                                    </div>
                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="password">Schedule</label>
                                        <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            name='schedule'
                                            required
                                            onChange={groupDataChangeHandler}
                                        />
                                    </div>

                                </div>

                                <div class="flex justify-end mt-6">
                                    <button type='submit' class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                                </div>
                            </form>
                        )}
                    </section>
                </div>
                <div class=" h-1/2 sm:h-full p-4">
                    <div class=" text-black bg-white px-4 py-2 rounded w-full">
                        <div class="flex flex-col">
                            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                        {activeButton === 'mainledger' ? (
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
                                                            GI No.
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            class="border-r px-6 py-4 dark:border-neutral-500">
                                                            Ledger Name
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            class="border-r px-6 py-4 dark:border-neutral-500">
                                                            समुहको नाम
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            class="border-r px-6 py-4 dark:border-neutral-500">
                                                            Schedule
                                                        </th>
                                                    </tr>

                                                </thead>
                                                <tbody>
                                                    <tr class="border-b dark:border-neutral-500">
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                            1
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                            Mark
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                            Otto
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                            Otto
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                            Otto
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        ) : (
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
                                                            Group No.
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            class="border-r px-6 py-4 dark:border-neutral-500">
                                                            Group Name
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            class="border-r px-6 py-4 dark:border-neutral-500">
                                                            लेजरको नाम
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            class="border-r px-6 py-4 dark:border-neutral-500">
                                                            Schedule
                                                        </th>
                                                    </tr>

                                                </thead>
                                                <tbody>
                                                    <tr class="border-b dark:border-neutral-500">
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                            1
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                            Mark
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                            Otto
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                            Otto
                                                        </td>
                                                        <td
                                                            class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                            Otto
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        )}
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




