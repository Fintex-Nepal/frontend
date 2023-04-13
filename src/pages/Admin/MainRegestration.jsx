import React from 'react'

const MainRegestration = () => {
    return (
        <>
            <div class="grid grid-cols-1 sm:grid-cols-2 h-screen">
                <div class="  h-1/2 sm:h-full p-4">
                    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

                        <form>
                            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="username">Account Type</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Group Name</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="password">Ledger Name</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">लेजरको नाम</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Entry Date</label>
                                    <input type='date' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Entry Date</label>

                                    <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="password">GI Code</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="password">Deprection Rate</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="password">हिसाब न</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                            </div>

                            <div class="flex justify-end mt-6">
                                <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                            </div>
                        </form>
                    </section>
                </div>
                <div class=" h-1/2 sm:h-full p-4">
                    <div class="bg-gray-800 text-white px-4 py-2 rounded w-full">
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




