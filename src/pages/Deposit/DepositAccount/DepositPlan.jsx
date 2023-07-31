



const DepositPlan = () => {


  return (
    <>
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Deposit Plan</h2>
        <form >
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            

            <div>
              <label class="text-gray-700" >Expected Daily Deposit Amount</label>
              <input  type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='expectedDailyDepositAmount'
              />
            </div>

            <div>
              <label class="text-gray-700" >Expected Total Deposit Day</label>
              <input  type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='expectedTotalDepositDay'
              />
            </div>
            <div>
              <label class="text-gray-700" >Expected Total Deposit Amount</label>
              <input  type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='expectedTotalDepositAmount'
              />
            </div>
            <div>
              <label class="text-gray-700" >Expected Total Return Amount</label>
              <input  type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='expectedTotalReturnAmount'
              />
            </div>
            <div>
              <label class="text-gray-700" >Expected Total Intrest Amount</label>
              <input  type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='expectedTotalInterestAmount'
              />
            </div>
            
          </div>
          <div class="flex justify-end mt-6">
            <button type='submit' class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
          </div>
        </form>
      </section>
     
    </>
  )
}

export default DepositPlan