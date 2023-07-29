import React, { useState, useRef, useEffect } from 'react'

const OtherInfo = ({ onChangeHandler }) => {
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
                <label class="text-gray-700 " >Father Name *</label>
                <input onChange={onChangeHandler} name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 ">बुबा नाम *</label>
                <input onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Mother Name *</label>
                <input onChange={onChangeHandler} name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 ">आमाको नाम *</label>
                <input onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Grand Father Name </label>
                <input onChange={onChangeHandler} name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 ">हजुरबुबा नाम *</label>
                <input onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Spouse Name </label>
                <input onChange={onChangeHandler} name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 ">Spouse Occuption</label>
                <input onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Number of Sons</label>
                <input onChange={onChangeHandler} name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " >Number of Daughters</label>
                <input onChange={onChangeHandler} name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " >Father in Law </label>
                <input onChange={onChangeHandler} name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 ">Mother in Law</label>
                <input onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

            </div>
            <h2 class="text-lg font-bold  text-gray-700 capitalize text-left mt-4">Nominee Details</h2>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " >Nominee Name </label>
                <input onChange={onChangeHandler} name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 ">हाकवालाको नाम</label>
                <input onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " >Relation </label>
                <input onChange={onChangeHandler} name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 ">नाता</label>
                <input onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " >Introduced by </label>
                <input onChange={onChangeHandler} name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "

                />
              </div>
              <div>
                <label class="text-gray-700 " >Nominee Address </label>
                <input onChange={onChangeHandler} name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "

                />
              </div>
              <div>
                <label class="text-gray-700 " >Nominee Citizenship Number </label>
                <input onChange={onChangeHandler} name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                />
              </div>
              <div>
                <label class="text-gray-700 " >Nominee Contact Number </label>
                <input onChange={onChangeHandler} name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                />
              </div>
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
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
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