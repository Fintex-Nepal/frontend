import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { CalculationTypeEnum, DepositSchemeEnum, PostingSchemeEnum } from '../../../utils/Helper/Enums';
import { createDepositSchemeUrl, getAllDepositSchemeUrl, updatedepositSchemeUrl } from '../../../utils/Url';
import Loader from '../../../utils/Helper/Loader';

const CreateDepositScheme = () => {
    const [formData, setFormData] = useState();
    const [showLoader, setShowLoader] = useState(false);
    const [allDepositScheme, setAllDepositScheme] = useState([]);
    const [isUpdate, setIsUpdate] = useState();
    const [selectedId, setSelectedId] = useState()

    const [selectedScheme, setSelectedScheme] = useState()


    useEffect(() => {
        setSelectedScheme(allDepositScheme?.find((data) => data.id === selectedId) || {});
    }, [allDepositScheme, selectedId])
    useEffect(() => {
        axios
            .get(getAllDepositSchemeUrl, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
                },
            })
            .then((res) => setAllDepositScheme(res.data))
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

        if (name === 'isActive') {
            newValue = value === 'true';
        } else {
            newValue =
                name === 'schemeType' ||
                    name === 'calculation' ||
                    name === 'postingScheme' ||
                    name === 'minimumBalance' ||
                    name === 'interestRateOnMinimumBalance' ||
                    name === 'interestRate' ||
                    name === 'minimumInterestRate' ||
                    name === 'maximumInterestRate' ||
                    name === 'schemeType'
                    ? Number(value)
                    : value;
        }

        setFormData((prevState) => ({
            ...prevState,
            [name]: newValue,
        }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setShowLoader(true);
        axios
            .post(createDepositSchemeUrl, formData, {
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
    };
    const onEditChangeHandler = (e) => {
        const { name, value } = e.target;
        let newValue;

        if (name === 'isActive') {
            newValue = value === 'true';
        } else {
            newValue =
                name === 'interestRateOnMinimumBalance' ||
                    name === 'interestRate' ||
                    name === 'minimumInterestRate' ||
                    name === 'maximumInterestRate'
                    ? Number(value)
                    : value;
        }
        setSelectedScheme((prevState) => ({
            ...prevState,
            [name]: newValue,
        }));
    }

    const EditSchemeHandler = (e) => {
        e.preventDefault();
        setShowLoader(true);
        axios.put(updatedepositSchemeUrl, selectedScheme, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
            }
        })
            .then((res) => {
                toast.success(res?.data?.message, {
                    position: 'top-right'
                });
                setShowLoader(false);
            })
            .catch((err) => {
                setShowLoader(false);
                const errorData = err.response?.data?.errors;
                if (errorData) {
                    Object.values(errorData).forEach((er) => {
                        toast.warning(er[0], {
                            position: 'top-right'
                        });
                    });
                } else {
                    toast.error(err?.message, {
                        position: 'top-right'
                    });
                }
            });
    }
    const getPostingSchemeName = (id) => {
        const scheme = PostingSchemeEnum.find((item) => item.Id === id);
        return scheme ? scheme.Name : '';
    };
    return (
        <>
            {showLoader && <Loader />}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {isUpdate ? <>
                    
                    <section className="max-w-5xl p-6 bg-white rounded-md shadow-md">
                    <button onClick={() => setIsUpdate(false)} class="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                        </svg>
                        Back
                    </button>
                       
                        <form onSubmit={EditSchemeHandler}>
                            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label class="text-gray-700">ID</label>
                                    <input readOnly value={selectedId} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                        name='id'
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700">Int on Min Balance</label>
                                    <input value={selectedScheme.interestRateOnMinimumBalance} onChange={onEditChangeHandler}
                                        type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                        name='interestRateOnMinimumBalance'

                                        inputMode="decimal"

                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700">Intrest Rate</label>
                                    <input value={selectedScheme.interestRate} onChange={onEditChangeHandler} type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                        name='interestRate'
                                        step="0.01"
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700">Min Intrest Rate</label>
                                    <input value={selectedScheme.minimumInterestRate} onChange={onEditChangeHandler} type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                        name='minimumInterestRate'
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700">Max Int Rate</label>
                                    <input value={selectedScheme.maximumInterestRate} onChange={onEditChangeHandler} type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                        name='maximumInterestRate'
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700" >Status</label>
                                    <select value={selectedScheme.isActive} onChange={onEditChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                        name='isActive'>
                                        <option selected disabled>Select</option>
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end mt-6">
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-sm text-white transition-colors duration-300 bg-gray-700 rounded-md hover:bg-gray-600"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </section>
                </> :
                    (
                        <section className="max-w-5xl p-6 bg-white rounded-md shadow-md">
                            <h2 className="text-sm font-semibold text-gray-700 capitalize">Create Scheme</h2>
                            <form onSubmit={onSubmitHandler}>
                                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                    <div>
                                        <label class="text-gray-700" >Scheme Name</label>
                                        <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                            name='schemeName'
                                        />
                                    </div>
                                    <div>
                                        <label class="text-gray-700" >योजना नाम</label>
                                        <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                            name='schemeNameNepali'
                                        />
                                    </div>
                                    <div>
                                        <label class="text-gray-700" >Deposit Scheme Type</label>
                                        <select onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                            name='schemeType'
                                        >
                                            <option selected disabled>Select</option>
                                            {DepositSchemeEnum?.map(scheme => (
                                                <option value={scheme.Id}>{scheme.Name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label class="text-gray-700" >Calculation</label>
                                        <select onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                            name='calculation'>
                                            <option selected disabled>Select</option>
                                            {CalculationTypeEnum?.map(scheme => (
                                                <option value={scheme.Id}>{scheme.Name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label class="text-gray-700" >Posting Type</label>
                                        <select onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                            name='postingScheme'>
                                            <option selected disabled>Select</option>
                                            {PostingSchemeEnum?.map(scheme => (
                                                <option value={scheme.Id}>{scheme.Name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label class="text-gray-700">Symbol</label>
                                        <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                            name='symbol'
                                        />
                                    </div>
                                    <div>
                                        <label class="text-gray-700">Minimum Balance</label>
                                        <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                            name='minimumBalance'
                                        />
                                    </div>
                                    <div>
                                        <label class="text-gray-700">Int on Min Balance</label>
                                        <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                            name='interestRateOnMinimumBalance'
                                        />
                                    </div>
                                    <div>
                                        <label class="text-gray-700">Intrest Rate</label>
                                        <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                            name='interestRate'
                                        />
                                    </div>
                                    <div>
                                        <label class="text-gray-700">Min Intrest Rate</label>
                                        <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                            name='minimumInterestRate'
                                        />
                                    </div>
                                    <div>
                                        <label class="text-gray-700">Max Int Rate</label>
                                        <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                            name='maximumInterestRate'
                                        />
                                    </div>

                                    <div>
                                        <label class="text-gray-700">Deposit Sub Ledger</label>
                                        <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                            name='depositSubledger'
                                        />
                                    </div>

                                </div>

                                <section className="max-w-4xl p-6 mt-4 bg-white rounded-md shadow-md">
                                    <h2 className="text-sm font-semibold text-gray-700 capitalize">Create Scheme</h2>
                                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                                        <div>
                                            <label class="text-gray-700">Intrest Sub Ledger</label>
                                            <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                                name='interestSubledger'
                                            />
                                        </div>
                                        <div>
                                            <label class="text-gray-700">Tax Sub Ledger</label>
                                            <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                                name='taxSubledger'
                                            />
                                        </div>
                                        <div>
                                            <label class="text-gray-700" >Status</label>
                                            <select onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                                                name='isActive'>
                                                <option selected disabled>Select</option>
                                                <option value={true}>Yes</option>
                                                <option value={false}>No</option>
                                            </select>
                                        </div>
                                    </div>
                                </section>
                                <div className="flex justify-end mt-6">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 text-sm text-white transition-colors duration-300 bg-gray-700 rounded-md hover:bg-gray-600"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </section>
                    )}

                <div className="h-96 p-4 overflow-hidden bg-white border rounded-md shadow-md">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto">
                            <div className="inline-block min-w-full">
                                <div className="overflow-y-auto">
                                    <table className="min-w-full border text-center text-sm font-light">
                                        <thead className="border-b font-medium">
                                            <tr>
                                                <th className="border-r px-2 py-1">S.No.</th>
                                                <th className="border-r px-2 py-1">Scheme Name</th>
                                                <th className="border-r px-2 py-1">Int Rate</th>
                                                <th className="border-r px-2 py-1">Symbol</th>
                                                <th className="border-r px-2 py-1">Posting</th>
                                                <th className="border-r px-2 py-1">Schema Type</th>
                                                <th className="border-r px-2 py-1">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {allDepositScheme?.map((scheme, index) => (
                                                <tr key={index} className="border-b">
                                                    <td className="whitespace-nowrap border-r px-2 py-1 font-medium">
                                                        {index + 1}
                                                    </td>
                                                    <td className="whitespace-nowrap border-r px-2 py-1 font-medium">
                                                        {scheme?.schemeName}
                                                    </td>
                                                    <td className="whitespace-nowrap border-r px-2 py-1 font-medium">
                                                        {scheme?.interestRate}
                                                    </td>
                                                    <td className="whitespace-nowrap border-r px-2 py-1 font-medium">
                                                        {scheme?.symbol}
                                                    </td>
                                                    <td className="whitespace-nowrap border-r px-2 py-1 font-medium">
                                                        {getPostingSchemeName(scheme?.postingScheme)}
                                                    </td>
                                                    <td className="whitespace-nowrap border-r px-2 py-1 font-medium">
                                                        {scheme?.schemeType}
                                                    </td>
                                                    <td role="button" className="whitespace-nowrap border-r px-2 py-1">
                                                        <svg
                                                            onClick={() => {
                                                                setIsUpdate(true)
                                                                setSelectedId(scheme?.id)
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
    );
};

export default CreateDepositScheme;
