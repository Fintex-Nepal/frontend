import React, { useState, useRef, useEffect } from 'react'

const OtherInfo = () => {
  const [hasOverflow, setHasOverflow] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (el.scrollHeight > el.clientHeight) {
      setHasOverflow(true);
    }
  }, []);
  const maxHeight = hasOverflow ? 'max-h-[60vh]' : '';

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-max:h-[60vh] gap-5 mt-8'>
      <div className={`h-[60vh] overflow-y-auto ${maxHeight}`} ref={ref}>
        <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800  border-b-2">
          <h2 class="text-lg font-semibold text-gray-700 capitalize ">Family Details</h2>
          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " for="username">Mother Name *</label>
                <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " for="emailAddress">आमाको नाम *</label>
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " for="username">Spouse Name </label>
                <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " for="emailAddress">Spouse Occuption</label>
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " for="username">Sons Name </label>
                <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " for="emailAddress">Daughters Name</label>
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " for="username">Father in Law </label>
                <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " for="emailAddress">Mother in Law</label>
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
            </div>
            <h2 class="text-lg font-bold  text-gray-700 capitalize text-left mt-4">Nominee Details</h2>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " for="username">Nominee Name </label>
                <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " for="emailAddress">हाकवालाको नाम</label>
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " for="username">Relation </label>
                <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " for="emailAddress">नाता</label>
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " for="username">Introduced by </label>
                <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
            </div>
            <h2 class="text-lg font-bold text-gray-700 capitalize text-left">Extra Details</h2>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " for="username">Educational Status </label>
                <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " for="emailAddress">Marital Status</label>
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " for="username">Nationality Id Status </label>
                <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " for="emailAddress">Voting Id</label>
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " for="username">Other Info </label>
                <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " for="username">Income Source </label>
                <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " for="username">सहकारीमा सदस्य बन्नुको उदाश्य </label>
                <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " for="username">आफै आर्को सहकारीमा सदस्य भएमा </label>
                <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
            </div>
            <div class="flex justify-end mt-6">
              <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
          </form>
        </section>
      </div>
      {/* Table */}
      <div className={`h-[60vh] overflow-y-auto ${maxHeight}`} ref={ref}>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div class="flex items-center justify-between pb-4">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
            </div>
          </div>
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Color
                </th>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                  White
                </td>
                <td class="px-6 py-4">
                  Laptop PC
                </td>
                <td class="px-6 py-4">
                  $1999
                </td>
                <td class="px-6 py-4">
                  <a href="1" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
              <tr class="bg-white hover:bg-gray-50 dark:hover:bg-gray-600">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Apple iMac 27"
                </th>
                <td class="px-6 py-4">
                  Silver
                </td>
                <td class="px-6 py-4">
                  PC Desktop
                </td>
                <td class="px-6 py-4">
                  $3999
                </td>
                <td class="px-6 py-4">
                  <a href="1" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OtherInfo