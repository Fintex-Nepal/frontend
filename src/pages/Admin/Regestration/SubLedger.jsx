import React, { useState } from 'react'
const SubLedger = () => {
  const [subLedgerData, setSubLedgerdata] = useState({})
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const newValue = name === "subAccount" ? value === 'true' : value
    setSubLedgerdata(prevState => ({
      ...prevState,
      [name]: newValue,
    }))
  }
  const ledgerSubmitHandler = (e) => {
    e.preventDefault();
    console.log(subLedgerData);
  }
  return (
    <div>
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 class="text-lg font-semibold text-gray-700 capitalize ">Sub Ledger</h2>

        <form onSubmit={ledgerSubmitHandler}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700" >Account Type</label>
              <select onChange={onChangeHandler} required name='accountType' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" >
                <option>Assets</option>
                <option>Expense</option>
                <option>Income</option>
                <option>Liability</option>
              </select>
            </div>

            <div>
              <label class="text-gray-700" >Group Name</label>
              <select onChange={onChangeHandler}  required name='groupName' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" >
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
              </select>
            </div>
            <div>
              <label class="text-gray-700" >Ledger Name</label>
              <select onChange={onChangeHandler} required name='ledgerName' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" >
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
              </select>
            </div>

            <div>
              <label class="text-gray-700" >Sub Ledger Name</label>
              <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   "
                name='subLedgerName'
                required
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div class="flex justify-end mt-6">
            <button type='submit' class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default SubLedger