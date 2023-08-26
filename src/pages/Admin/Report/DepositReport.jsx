import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { AccountStatusEnum } from '../../../utils/Helper/Enums';
import { getAllDepositAccount } from '../../../utils/Url';
import Loader from '../../../utils/Helper/Loader';
const DepositReport = () => {
  const [formData, setformData] = useState();
  const [allDepositAccount, setAllDepositAccount] = useState()
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    axios
      .get(getAllDepositAccount, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
        },
      })
      .then((res) => setAllDepositAccount(res.data))
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

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setformData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setShowLoader(true);
    axios
      .post("createDepositSchemeUrl", formData, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
        },
      })
      .then((res) => {
        if (res?.data?.status) {
          setShowLoader(false);
          toast.success(res?.data?.message, {
            position: 'top-right',
          });
        } else {
          setShowLoader(false);
          toast.error('Error in Creating Sub Ledger', {
            position: 'top-right',
          });
        }
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

  return (
    <>
      {showLoader && <Loader />}
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 class="text-lg font-semibold text-gray-700 capitalize ">Deposit Report</h2>

        <form onSubmit={onSubmitHandler}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 " >Deposit Account</label>

              <select onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                name='DepositAccountId' >
                <option disabled selected>Select</option>
                {allDepositAccount?.map(account => (
                  <option value={account.depositAccount.id}>{account.depositAccount.accountNumber}</option>
                ))}
              </select>
            </div>

            <div>
              <label class="text-gray-700 " >Account Status</label>
              <select onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                name='AccountStatus' >
                <option disabled selected>Select</option>
                {AccountStatusEnum?.map(status => (
                  <option value={status.ID}>{status.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label class="text-gray-700 " >Beginning Date</label>
              <input onChange={onChangeHandler} type='date' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                name='FromDate'
              />
            </div>
            <div>
              <label class="text-gray-700 " >Ending Date</label>
              <input onChange={onChangeHandler} type='date' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                name='ToDate'
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

export default DepositReport