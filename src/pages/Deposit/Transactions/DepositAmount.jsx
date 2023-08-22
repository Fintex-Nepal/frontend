import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { getAllBanks, getAllEmployeesByBranch, getAllNonClosedDepostAccount, makeDepositUrl } from '../../../utils/Url';
import Loader from '../../../utils/Helper/Loader';
import { paymentTypeEnum } from '../../../utils/Helper/Enums';

const DepositAmount = () => {
    const [allNonClosedDepositAccount, setAllNonClosedDepositAccount] = useState()
    const [allBanks, setAllBanks] = useState();
    const [allEmployeeOnBranch, setAllEmployeeOnBranch] = useState()
    const [showLoader, setShowLoader] = useState(false)
    const [depositData, setDepositData] = useState();
    const [isCashPayment, setIscashPayemnt] = useState()
    useEffect(() => {
        axios
            .get(getAllNonClosedDepostAccount, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
                },
            })
            .then((res) => setAllNonClosedDepositAccount(res.data))
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
        axios
            .get(getAllBanks, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
                },
            })
            .then((res) => setAllBanks(res.data))
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
        axios
            .get(getAllEmployeesByBranch, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
                },
            })
            .then((res) => setAllEmployeeOnBranch(res.data))
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
    }, []);
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        let newValue;
        newValue =
            name === 'transactionAmount' ||
                name === 'depositAccountId' ||
                name === 'paymentType' ||
                name === 'collectedByEmployeeId' ||
                name === 'bankDetailId'
                ? Number(value)
                : value;


        setDepositData((prevState) => ({
            ...prevState,
            [name]: newValue,
        }));
    };
    const submitHandler = (event) => {
        event.preventDefault();
        setShowLoader(true);
        axios
            .post(makeDepositUrl, depositData, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
                },
            })
            .then((res) => {
                
                if (res) {
                    setShowLoader(false);
                    toast.success(res?.data, {
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
            <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
                <h2 class="text-lg font-semibold text-gray-700 capitalize">Deposit Amount</h2>

                <form onSubmit={submitHandler}>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-gray-700 " >Amount in Number</label>
                            <input onChange={onChangeHandler} type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                name='transactionAmount'
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Amount in Words</label>
                            <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                name='amountInWords'
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Deposit Account</label>
                            <select onChange={onChangeHandler} name='depositAccountId' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md">
                                <option>Select</option>
                                {allNonClosedDepositAccount?.map(account => (
                                    <option value={account.depositAccount.id}>{`${account?.client?.clientFirstName} ${account?.client?.clientLastName}  ${account?.client?.clientId}`}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label class="text-gray-700 " >Payment Type</label>
                            <select onChange={(e) => {
                                onChangeHandler(e)
                                setIscashPayemnt(e.target.value)
                            }} name='paymentType' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md">
                                <option>Select</option>
                                {paymentTypeEnum?.map(payemnt => (
                                    <option value={payemnt.ID}>{payemnt.Name}</option>
                                ))}
                            </select>

                        </div>
                        {isCashPayment === '2' && <div>
                            <label class="text-gray-700 " >Bank Detail</label>
                            <select onChange={onChangeHandler} name='bankDetailId' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md">
                                <option>Select</option>
                                {allBanks?.map(bank => (
                                    <option value={bank.id}>{bank.name}</option>
                                ))}
                            </select>
                        </div>}

                        {isCashPayment === '2' && <div>
                            <label class="text-gray-700 " >Bank Check Number</label>
                            <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                name='bankChequeNumber'
                            />
                        </div>}

                        <div>
                            <label class="text-gray-700 " >Collected By</label>
                            <select onChange={onChangeHandler} name='collectedByEmployeeId' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md">
                                <option>Select</option>
                                {allEmployeeOnBranch?.map(employee => (
                                    <option value={employee.id}>{employee.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label class="text-gray-700 " >Narration</label>
                            <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                name='narration'
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Source</label>
                            <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                name='source'
                            />
                        </div>
                    </div>

                    <div class="flex justify-end mt-6">
                        <button type='submit' class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Deposit</button>
                    </div>
                </form>
            </section>
            <ToastContainer />
        </>
    )
}

export default DepositAmount