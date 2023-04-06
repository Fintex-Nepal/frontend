import React, { useState } from 'react';
const MainRegestration = () => {
    const [groupSetUpData, setGroupSetUpData] = useState({});
    const [form2Data, setForm2Data] = useState({

    });
    const [activeForm, setActiveForm] = useState(1);
    const handleForm1Submit = (event) => {
        event.preventDefault();
        // handle form 1 submission logic
    }

    const GroupDataChangeHandler = (event) => {
        const { name, value } = event.target;
        setGroupSetUpData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleGroupTypeSubmit = (event) => {
        event.preventDefault();
        console.log(groupSetUpData, 'groupSetUpDatagroupSetUpDatagroupSetUpData');
    }

    return (
        <>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <div class="flex space-x-4">

                        <button class={` hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${activeForm === 1 ? 'bg-blue-700' : 'bg-blue-400'} `} onClick={() => setActiveForm(1)}>Group Setup</button>
                        <button class={` hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${activeForm === 2 ? 'bg-blue-700' : 'bg-blue-400'} `} onClick={() => setActiveForm(2)}>Main Ledger Setup</button>
                    </div>

                    {activeForm === 1 &&
                        <form onSubmit={handleGroupTypeSubmit}>
                            <div class="space-y-12">
                                <div class="border-b border-gray-900/10 pb-12">
                                    {/* <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2> */}
                                    <div class=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div class=" mt-2 sm:col-span-3">
                                            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Account Type</label>
                                            <div class="mt-2">
                                                <select onChange={GroupDataChangeHandler} id="accountType" name="accountType" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                    <option value="" selected disabled>Select Account</option>
                                                    <option>Assets</option>
                                                    <option>Liability</option>
                                                    <option>Mexico</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="sm:col-span-4">
                                            <label class="block text-sm font-medium leading-6 text-gray-900">Group Name</label>
                                            <div class="">
                                                <input onChange={GroupDataChangeHandler} id="groupName" name="groupName" type='text' class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                        <div class="sm:col-span-4">
                                            <label class="block text-sm font-medium leading-6 text-gray-900">समूहको नाम</label>
                                            <div class="">
                                                <input onChange={GroupDataChangeHandler} name="samuhnaam" type='text' class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-4">
                                            <label class="block text-sm font-medium leading-6 text-gray-900">Entry Date</label>
                                            <div class="">

                                                <input onChange={GroupDataChangeHandler} id="data" name="data" type='date' class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>

                                        <div class="col-span-full">
                                            <label class="block text-sm font-medium leading-6 text-gray-900">GI Code</label>
                                            <div class="mt-2">
                                                <input onChange={GroupDataChangeHandler} type="text" name="giCode" class="block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>

                                        <div class="col-span-full">
                                            <label class="block text-sm font-medium leading-6 text-gray-900">Schedule</label>
                                            <div class="mt-2">
                                                <input onChange={GroupDataChangeHandler} type="text" name="schedule" class="block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-3 flex items-center justify-end gap-x-6">
                                <button type='submit' className="group relative inline-flex items-center px-2.5 py-1.5 rounded shadow-lg outline-none bg-pink-500 text-sm text-white font-medium transition-all duration-200 ease-out hover:text-pink-500 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none">

                                    {/* span::before */}
                                    <span className="absolute h-0 w-0.5 right-0 top-0 bg-pink-500 transition-all duration-500 ease-out group-hover:h-full" aria-hidden="true" />
                                    <span className="absolute left-0 bottom-0 bg-pink-500 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full" aria-hidden="true" />

                                    Save

                                    {/* span::after */}
                                    <span className="absolute left-0 bottom-0 bg-pink-500 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full" aria-hidden="true" />
                                    <span className="absolute w-0 h-0.5 right-0 top-0 bg-pink-500 transition-all duration-500 ease-out group-hover:w-full" aria-hidden="true" />

                                </button>
                            </div>
                        </form>

                    }

                    {activeForm === 2 &&
                        <form class="w-full max-w-lg">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        First Name
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                    <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Last Name
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        Password
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                                    <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                        City
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                        State
                                    </label>
                                    <div class="relative">
                                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                            <option>New Mexico</option>
                                            <option>Missouri</option>
                                            <option>Texas</option>
                                        </select>
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                        Zip
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                                </div>
                            </div>
                        </form>
                    }
                </div>

                <div>
                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table
                                        class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                                        <thead class="border-b font-medium dark:border-neutral-500">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    class="border-r px-6 py-4 dark:border-neutral-500">
                                                    #
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="border-r px-6 py-4 dark:border-neutral-500">
                                                    First
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="border-r px-6 py-4 dark:border-neutral-500">
                                                    Last
                                                </th>
                                                <th scope="col" class="px-6 py-4">Handle</th>
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
                                                <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                                            </tr>
                                            <tr class="border-b dark:border-neutral-500">
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                    2
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                    Jacob
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                    Thornton
                                                </td>
                                                <td class="whitespace-nowrap px-6 py-4">@fat</td>
                                            </tr>
                                            <tr class="border-b dark:border-neutral-500">
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                    3
                                                </td>
                                                <td
                                                    colSpan="2"
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                    Larry the Bird
                                                </td>
                                                <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
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