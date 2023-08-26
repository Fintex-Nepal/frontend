import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { ShareTransactionTypeEnum, sharePaymentTypeEnum } from '../../../utils/Helper/Enums'
import { getAllClients, getAllDepositAccount, getAllShareByClientId, shareTransaction } from '../../../utils/Url';
import Loader from '../../../utils/Helper/Loader';

const Share = () => {
  const [allClients, setAllClients] = useState();
  const [allDepositAccount, setAllDepositAccount] = useState();
  const [allShare, setAllShare] = useState();
  const [shareData, setShareData] = useState();
  const [selectedClientId, setSelectedClientId] = useState()
  const [showLoader, setShowLoader] = useState(false);
  const [selectedPaymentType, setSelectedPaymentType] = useState(false)
  const [transactionType, setTansactionType] = useState();
  useEffect(() => {
    axios
      .get(getAllClients, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
        },
      })
      .then((res) => setAllClients(res.data))
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
  }, [allClients])
  useEffect(() => {
    if (selectedClientId) {
      axios
        .get(`${getAllShareByClientId}${selectedClientId}`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
          },
        })
        .then((res) => setAllShare(res.data))
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
    }
  }, [selectedClientId])


  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    let newValue;

    if (name === 'transactionAmount' ||
      name === 'shareAccountId' ||
      name === 'clientId' ||
      name === 'shareTransactionType' ||
      name === 'transferToDepositAccountId' ||
      name === 'paymentType' ||
      name === 'bankDetailId' ||
      name === 'paymentDepositAccountId') {
      newValue = Number(value); // Convert value to a number
    }

    setShareData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };


  const onSubmitHandler = (e) => {
    e.preventDefault();
    let shareDataSend;
    if(shareData && selectedPaymentType !=='3')
    {
      shareDataSend = Object.assign(shareData, { "shareAccountId": allShare?.id });
    }
    
    setShowLoader(true);
    axios
      .post(shareTransaction, shareDataSend, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
        },
      })
      .then((res) => {
        setShowLoader(false);
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

  return (
    <>
      {showLoader && <Loader />}
      <section class="max-w-5xl p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 class="text-lg font-semibold text-gray-700 capitalize ">Share Transaction</h2>
        <form onSubmit={onSubmitHandler}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
            <div>
              <label class="text-gray-700 " >Transaction Amount</label>
              <input type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='transactionAmount'
                onChange={onChangeHandler}
              />
            </div>

            <div>
              <label class="text-gray-700 " >Amount in Words</label>
              <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='amountInWords'
                onChange={onChangeHandler}
              />
            </div>

            <div>
              <label class="text-gray-700 " >Share Certificate Number</label>
              <input type='number' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='shareCertificateNumber'
                onChange={onChangeHandler}
              />
            </div>


            <div>
              <label class="text-gray-700 ">Share Transaction Type</label>
              <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='shareTransactionType'
                onChange={(e) => {
                  onChangeHandler(e);
                  setTansactionType(e.target.value)
                }}
              >
                <option disabled selected>Select</option>
                {ShareTransactionTypeEnum?.map(shareTransaction => (
                  <option value={shareTransaction.ID}>{shareTransaction.Name}</option>
                ))}
              </select>
            </div>
            {transactionType !== '3' && <div>
              <label class="text-gray-700 ">Payment Type</label>
              <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='paymentType'
                onChange={(e) => {
                  onChangeHandler(e);
                  setSelectedPaymentType(e.target.value)
                }}
              >
                <option disabled selected>Select</option>
                {sharePaymentTypeEnum?.map(paymentType => (
                  <option value={paymentType.ID}>{paymentType.Name}</option>
                ))}
              </select>

            </div>}
            <div>
              <label class="text-gray-700 ">Client ID</label>
              <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='clientId'
                onChange={(e) => {
                  onChangeHandler(e);
                  setSelectedClientId(e.target.value)
                }}
              >
                <option disabled selected>Select</option>
                {allClients?.map(client => (
                  <option value={client.clientId} >{`${client.clientFirstName}${client.clientLastName}---${client.clientId}`}</option>
                ))}
              </select>
            </div>
            <div>
              <label class="text-gray-700 ">Share Account ID</label>
              <input type='number' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='shareAccountId'
                onChange={onChangeHandler}
                value={allShare?.id}
              />
            </div>

            {transactionType === '3' && <div>
              <label class="text-gray-700 ">Transfer Deposit Account</label>
              <select type='number' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='transferToDepositAccountId'
                onChange={onChangeHandler}
              >
                <option disabled selected>Select</option>
                {allDepositAccount?.map(account => (
                  <option value={account.depositAccount.id}>{account.depositAccount.accountNumber}</option>
                ))}
              </select>

            </div>}


            {selectedPaymentType === '2' &&
              <>
                <div>
                  <label class="text-gray-700 ">Bank Detail ID</label>
                  <input type='number' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                    name='bankDetailId'
                    onChange={onChangeHandler}
                  />
                </div>


                <div>
                  <label class="text-gray-700 ">Bank Cheque Number</label>
                  <input type='number' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                    name='bankChequeNumber'
                    onChange={onChangeHandler}
                  />
                </div>
              </>
            }

            {(transactionType !== '3' && selectedPaymentType === '3') && <div>
              <label class="text-gray-700 ">Payment Deposit Account</label>
              <input type='number' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='paymentDepositAccountId'
                onChange={onChangeHandler}
              />
            </div>}
            <div>
              <label class="text-gray-700 ">Narration</label>
              <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='narration'
                onChange={onChangeHandler}
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

export default Share