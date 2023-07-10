import React from 'react'

const CreateDeposit = () => {
  return (
    <section class="max-w-6xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Deposit Account</h2>

      <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" >Deposit Scheme ID</label>
            <input type='number' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md " />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" >Account Number</label>
            <input type='text' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md " />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" >Client ID</label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md " />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200">Opening Date</label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md " />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Period</label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md " />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Period Type</label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md " />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Account Type</label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md " />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Joint Client ID</label>
            <input   class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "/>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Mature Date</label>
            <input   class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "/>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Intrest Date</label>
            <input   class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "/>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Minimum Balance</label>
            <input   class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "/>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Referred By</label>
            <input   class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "/>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Intrest Posting Account Number</label>
            <input   class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "/>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Mature Intrest Posting Account Number</label>
            <input   class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "/>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Description</label>
            <input   class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "/>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Status</label>
            <input   class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "/>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Is SMS Service Active</label>
            <input   class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "/>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Daily Desposit Amount</label>
            <input   class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "/>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Total Deposit Day</label>
            <input   class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "/>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Total Deposit Amount</label>
            <input   class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "/>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Total Return Amount</label>
            <input   class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "/>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200">Total Intrest Amount</label>
            <input   class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "/>
          </div>
        </div>

        <div class="flex justify-end mt-6">
          <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
      </form>
    </section>
  )
}

export default CreateDeposit