import React from 'react'

const OtherInfo = () => {
  return (
    <div className='h-1/2'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <section class="mt-7 max-w-7xl p-6 mx-auto bg-white rounded-md shadow-md w-full overflow-y-scroll max-h-screen/2 ">
          <h2 class="text-lg font-bold text-gray-700 capitalize text-center">Family Details</h2>
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
            <section class="mt-7 max-w-7xl p-6 mx-auto bg-white rounded-md shadow-md w-full">
              <h2 class="text-lg font-bold text-gray-700 capitalize text-left">Family Details</h2>
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
            </section>
            <section class="mt-7 max-w-7xl p-6 mx-auto bg-white rounded-md shadow-md w-full">
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
            </section>
          </form>
        </section >
        <div class=" h-1/2 sm:h-full p-4 overflow-y-scroll max-h-screen/2">
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
    </div>
  )
}

export default OtherInfo