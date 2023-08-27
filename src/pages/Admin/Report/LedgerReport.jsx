import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getAllLedgers, getLedgerReport } from '../../../utils/Url'
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../../../utils/Helper/Loader';
const LedgerReport = () => {
  const [allLedger, setAllLedger] = useState()
  const [formData, setFormData] = useState();
  const [showLoader, setShowLoader] = useState(false)
  const [allLedgerRecord, setAllLedgerRecord] = useState()
  const [showRecord, setShowRecord] = useState(false)

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'LedgerId') {
      newValue = Number(value); // Convert value to a number for LedgerId
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };


  useEffect(() => {
    axios.get(getAllLedgers, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
      }
    })
      .then((res) => {
        toast.success(res?.data?.message, {
          position: 'top-right',
        });
        setAllLedger(res.data)

      })
      .catch((err) => {

        const errorData = err.response?.data?.errors;
        if (errorData) {
          Object.values(errorData).forEach((er) => {
            toast.warning(er[0], {
              position: 'top-right',
            });
          });
        } else {
          toast.error(err?.message, {
            position: 'top-right',
          });
        }
      });

  }, [])


  const onSubmitHandler = (e) => {
    e.preventDefault();
    setShowLoader(true);
    axios
      .get(`${getLedgerReport}LedgerId=${formData?.LedgerId}&FromDate=${formData.fromDate}&ToDate=${formData.toDate}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
        },
      })
      .then((res) => {
        setShowLoader(false);
        setShowRecord(true)
        setAllLedgerRecord(res.data)
        toast.success(res?.data, {
          position: 'top-right',
        });
      })
      .catch((err) => {
        setShowLoader(false);
        const errorData = err.response?.data?.errors;
        if (errorData) {
          Object.values(errorData).forEach((er) => {
            toast.warning(er[0], {
              position: 'top-right',
            });
          });
        } else {
          toast.error(err?.message, {
            position: 'top-right',
          });
        }
      });
  }

  if (showRecord) {
    return (
      <>
        <button onClick={() => setShowRecord(false)} class="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
          Back
        </button>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  S.No.
                </th>
                <th scope="col" class="px-6 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  VCH No.
                </th>
                <th scope="col" class="px-6 py-3">
                  Particular
                </th>
                <th scope="col" class="px-6 py-3">
                  Withdraw
                </th>
                <th scope="col" class="px-6 py-3">
                  Deposit
                </th>
                <th scope="col" class="px-6 py-3">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  1
                </th>
                <td class="px-6 py-4">

                </td>
                <td class="px-6 py-4">

                </td>
                <td class="px-6 py-4">
                  Opening Balance
                </td>
                <td class="px-6 py-4">
                  0
                </td>
                <td class="px-6 py-4">
                  0
                </td>
                <td class="px-6 py-4">
                  0
                </td>
              </tr>

              {allLedgerRecord?.ledgerTransactionReportDtos?.map((record,index) => (
                <>
                  <tr class="bg-white border-b">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {index+1}
                    </th>
                    <td class="px-6 py-4">
                      {record.nepaliCreationDate}
                    </td>
                    <td class="px-6 py-4">
                      {record.voucherNumber}
                    </td>
                    <td class="px-6 py-4">
                     {record.transactionRemarks}
                    </td>
                    <td class="px-6 py-4">
                      0
                    </td>
                    <td class="px-6 py-4">
                      {record.transactionAmount}
                    </td>
                    <td class="px-6 py-4">
                      {record.balanceAfterTransaction}
                    </td>
                  </tr>
                </>
              ))}
              <tr class="bg-white border-b">
                    <td class="px-6 py-4"/>
                    <td class="px-6 py-4"/>
                    <td class="px-6 py-4"/>
                    <td class="px-6 py-4"/>
                    <td class="px-6 py-4"/>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Total
                    </th>
                   
                    <td class="px-6 py-4">
                      {allLedgerRecord.debitSum}
                    </td>
                  </tr>
            </tbody>
          </table>
        </div>

      </>
    )
  }
  else {
    return (
      <>

        {showLoader && <Loader />}
        <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
          <h2 class="text-lg font-semibold text-gray-700 capitalize ">Ledegr Report</h2>
          <form onSubmit={onSubmitHandler}>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " >Ledger ID</label>
                <select onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                  name='LedgerId'>
                  <option disabled selected>Select</option>
                  {allLedger?.map(ledger => (
                    <option value={ledger.id}>{ledger.name}</option>
                  ))}
                </select>

              </div>
              <div>
                <label class="text-gray-700 " >Beginning Date</label>
                <input onChange={onChangeHandler} type='text' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                  name='fromDate'
                />
              </div>
              <div>
                <label class="text-gray-700 " >Ending Date</label>
                <input onChange={onChangeHandler} type='text' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                  name='toDate'
                />
              </div>
            </div>
            <div class="flex justify-end mt-6">
              <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
          </form>
        </section>
        <ToastContainer />
      </>
    )
  }

}

export default LedgerReport