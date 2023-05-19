import React from 'react'
import { useState } from 'react';
const ModifyRegestrartionModal = ({ setShowUpdateModal }) => {
    const [mainLedgerData, setMainLedgerData] = useState({});
    const [showGroupDropDown, setShowGroupDropDown] = useState(true);
    const [showSubAccount, setShowSubAccount] = useState('No')
    const mainLedgerChangeHandler = (event) => {
        const { name, value } = event.target;
        setMainLedgerData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const mainLedgerSubmitHandler = (e) => {
        console.log('mainLedgerSubmitHandler');
        e.preventDefault();
        console.log(mainLedgerData);
    }

    return (
        <>
            <div className="py-12 md:w-2/5 md:ml-60 sm:w-full  md:h-auto ml-0 h-fit  transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                        <form onSubmit={mainLedgerSubmitHandler}>
                            <h2 class="text-lg font-semibold text-gray-700 capitalize te">Ledger Setup</h2>

                            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label class="text-gray-700 " for="username">Account Type</label>
                                    <select name='accountType' required onChange={mainLedgerChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                                        <option value="none" selected disabled hidden>Select Account Type</option>
                                        <option>Assets</option>
                                        <option>Expense</option>
                                        <option>Income</option>
                                        <option>Liability</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="text-gray-700 " for="passwordConfirmation">Group Name</label>
                                    <div class="flex h-12">
                                        {showGroupDropDown ? (
                                            <select required name='groupName' onChange={mainLedgerChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                            </select>
                                        ) : (
                                            <input required name='groupName' onChange={mainLedgerChangeHandler}
                                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                            />
                                        )}
                                        <button type='button' onClick={() => setShowGroupDropDown(!showGroupDropDown)} class="flex items-center px-4 py-2 mt-2 ml-2 font-medium tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                            <span class="mx-1">{showGroupDropDown ? ("Add") : ("Select")}</span>
                                        </button>
                                    </div>

                                </div>
                                <div>
                                    <label class="text-gray-700 " for="emailAddress">समुहको नाम</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                        name='समुहको नाम'
                                        required
                                        onChange={mainLedgerChangeHandler}
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700 " for="password">Ledger Name</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                        name='ledgerName'
                                        required
                                        onChange={mainLedgerChangeHandler}
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700 " for="passwordConfirmation">लेजरको नाम</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                        name='लेजरको नाम'
                                        required
                                        onChange={mainLedgerChangeHandler}
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700 " for="passwordConfirmation">Entry Date</label>
                                    <input type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                        name='entryData'
                                        required
                                        onChange={mainLedgerChangeHandler}
                                    />

                                </div>


                                <div>
                                    <label class="text-gray-700 " for="passwordConfirmation">Sub Ledger</label>
                                    <select name='subAccount' required onChange={(e) => setShowSubAccount(e.target.value)} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                                        <option>No</option>
                                        <option>Yes</option>
                                    </select>
                                </div>
                                {showSubAccount === 'Yes' && <div>
                                    <label class="text-gray-700 " for="password">Sub Ledger Name</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                        name='subLederName'
                                        required
                                        onChange={mainLedgerChangeHandler}
                                    />
                                </div>}
                                <div>
                                    <label class="text-gray-700 " for="password">Deprection Rate</label>
                                    <input type='number' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                        name='deprectionRate'
                                        required
                                        onChange={mainLedgerChangeHandler}
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700 " for="password">हिसाब न</label>
                                    <input type='number' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                        name='हिसाब न'
                                        required
                                        onChange={mainLedgerChangeHandler}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between w-full mt-2">
                                <button type='submit' className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                                <button type='button' onClick={() => setShowUpdateModal(false)} className="focus:outline-none ml-3 bg-red-500 transition duration-150 text-white ease-in-out hover:border-gray-400 hover:bg-red-400 border rounded px-8 py-2 text-sm" onclick="modalHandler()">
                                    Cancel
                                </button>
                            </div>
                        </form>
                        <div onClick={() => setShowUpdateModal(false)} className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onclick="modalHandler()">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModifyRegestrartionModal