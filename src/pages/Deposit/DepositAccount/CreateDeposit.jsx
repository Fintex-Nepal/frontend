import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import BasicInfo from './BasicInfo'
import SmsSetting from './SmsSetting'
import DepositPlan from './DepositPlan'
import axios from 'axios'
import { createDepositAccountUrl, getAllDepositSchemeUrl, getAllNonClosedDepostAccount } from '../../../utils/Url';
import Loader from '../../../utils/Helper/Loader'

const CreateDeposit = () => {
  const [steps, setSteps] = useState(1)
  const [depositData, setDepositData] = useState();
  const [showLoader, setShowLoader] = useState(false)
  const [allNonClosedDepositAccount, setAllNonClosedDepositAccount] = useState()
  const [allDepositAccount, setAllDepositAccount] = useState();
  useEffect(() => {
    axios
      .get(getAllDepositSchemeUrl, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
        },
      })
      .then((res) => setAllDepositAccount(res.data))
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
  }, []);

  useEffect(() => {
    axios
      .get(getAllNonClosedDepostAccount, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
        },
      })
      .then((res) => setAllNonClosedDepositAccount(res.data))
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
  }, [showLoader]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    let newValue;

    if (name === 'isSMSServiceActive') {
      newValue = value === 'true';
    } else {
      newValue =
        name === 'depositSchemeId' ||
          name === 'clientId' ||
          name === 'period' ||
          name === 'periodType' ||
          name === 'accountType' ||
          name === 'interestRate' ||
          name === 'referredByEmployeeId' ||
          name === 'relation' ||
          name === 'interestPostingAccountId' ||
          name === 'matureInterestPostingAccountId' ||
          name === 'status' ||
          name === 'expectedDailyDepositAmount' ||
          name === 'expectedTotalDepositDay' ||
          name === 'expectedTotalDepositAmount' ||
          name === 'expectedTotalReturnAmount' ||
          name === 'expectedTotalInterestAmount' ||
          name === "status"
          ? Number(value)
          : value;
    }

    setDepositData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setShowLoader(true);
    const formDataToSend = new FormData();
    for (const key in depositData) {
      formDataToSend.append(key, depositData[key]);
    }
    axios
      .post(createDepositAccountUrl, formDataToSend, {
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

  console.log(allDepositAccount, "allDepositAccountallDepositAccountallDepositAccount");
  return (
    <>
      {showLoader && <Loader />}
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          onClick={() => setSteps(1)}
          type="button"
          className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-l-lg ${steps === 1 ? 'bg-blue-700 text-white' : 'bg-gray-100 text-blue-700'
            }`}
        >
          <svg className="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <svg class="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </svg>
          Basic Info
        </button>
        <button
          onClick={() => setSteps(2)}
          type="button"
          className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 border-t border-b border-gray-200 ${steps === 2 ? 'bg-blue-700 text-white' : 'bg-gray-100 text-blue-700'
            }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </svg>
          SMS Setting
        </button>
        <button
          onClick={() => setSteps(3)}
          type="button"
          className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-r-md ${steps === 3 ? 'bg-blue-700 text-white' : 'bg-gray-100 text-blue-700'
            }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </svg>
          Deposit Plan
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          {steps === 1 && <BasicInfo onChangeHandler={onChangeHandler} allNonClosedDepositAccount={allNonClosedDepositAccount} />}
          {steps === 2 && <SmsSetting onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />}
          {steps === 3 && <DepositPlan onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />}
        </div>
        <div className="h-96 p-4 overflow-hidden bg-white border rounded-md shadow-md">
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full">
                <div className="overflow-y-auto">
                  <table className="min-w-full border text-center text-sm font-light">
                    <thead className="border-b font-medium">
                      <tr>
                        <th className="border-r px-2 py-1">S.No.</th>
                        <th className="border-r px-2 py-1">Account Number</th>
                        <th className="border-r px-2 py-1">Client ID</th>
                        <th className="border-r px-2 py-1">Client Name</th>
                        <th className="border-r px-2 py-1">Deposit Scheme</th>
                        <th className="border-r px-2 py-1">Mature Date</th>
                        <th className="border-r px-2 py-1">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allNonClosedDepositAccount?.map((account, index) => (
                        <tr className="border-b">
                          <td className="whitespace-nowrap border-r px-2 py-1 font-medium">
                            {index + 1}
                          </td>
                          <td className="whitespace-nowrap border-r px-2 py-1 font-medium">
                            {account?.depositAccount?.accountNumber}
                          </td>
                          <td className="whitespace-nowrap border-r px-2 py-1 font-medium">
                            {account?.client?.clientId}
                          </td>
                          <td className="whitespace-nowrap border-r px-2 py-1 font-medium">
                            {`${account?.client?.clientFirstName} ${account?.client?.clientLastName}`}
                          </td>
                          <td className="whitespace-nowrap border-r px-2 py-1 font-medium">
                            {account?.depositScheme?.schemeName}
                          </td>
                          <td className="whitespace-nowrap border-r px-2 py-1 font-medium">
                            {account?.depositAccount?.matureDate}
                          </td>
                          <td role="button" className="whitespace-nowrap border-r px-2 py-1">
                            <svg
                              onClick={() => {

                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6 cursor-pointer"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default CreateDeposit