import React from 'react'

const LedgerReport = () => {
  return (
    <>
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 class="text-lg font-semibold text-gray-700 capitalize ">Ledegr Report</h2>

        <form>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 " >Ledger ID</label>
              <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                name='LedgerId'
              />
            </div>
            <div>
              <label class="text-gray-700 " >Beginning Date</label>
              <input type='date' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                name='FromDate'
              />
            </div>
            <div>
              <label class="text-gray-700 " >Ending Date</label>
              <input type='date' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                name='ToDate'
              />
            </div>
          </div>
          <div class="flex justify-end mt-6">
            <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default LedgerReport