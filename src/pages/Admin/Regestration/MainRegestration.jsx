import React, { useState } from 'react'
import GroupSetup from './GroupSetup'
import LedgerSetup from './LedgerSetup'
import SubLedger from './SubLedger'

export const formType = {
    GROUPSETUP: 'groupsetup',
    LEDGERSETUP: 'ledgersetup',
    SUBLEDGERSETUP: 'subledgersetup'
}

const MainRegestration = () => {
    const [activeForm, setActiveForm] = useState('groupsetup')
    return (
        <>
            <div className="flex items-center justify-center" >
                <div class="xl:w-10/12 w-full px-8">
                    <div class="flex flex-wrap items-center justify-center">
                        <div class="w-52 h-16 relative pl-5">
                            <div onClick={() => setActiveForm(formType.GROUPSETUP)} role='button' class="w-full flex justify-center text-gray-100  transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-600 to-gray-200 rounded-2xl hover:translate-y-px">
                                <span class="font-bold">
                                    Group Setup</span>
                            </div>
                        </div>
                        <div class="w-52 h-16 relative pl-5">
                            <div onClick={() => setActiveForm(formType.LEDGERSETUP)} role='button' class="w-full flex justify-center text-gray-100  transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-600 to-gray-200 rounded-2xl hover:translate-y-px">
                                <span class="font-bold">
                                    Ledger Setup</span>
                            </div>
                        </div>
                        <div class="w-52 h-16 relative   pl-5">
                            <div onClick={() => setActiveForm(formType.SUBLEDGERSETUP)} role='button' class="w-full flex justify-center text-gray-100  transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-600 to-gray-200 rounded-2xl hover:translate-y-px">
                                <span class="font-bold">
                                    Sub Ledger Setup</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {activeForm === formType.GROUPSETUP && <GroupSetup />}
            {activeForm === formType.LEDGERSETUP && <LedgerSetup />}
            {activeForm === formType.SUBLEDGERSETUP && <SubLedger />}
        </>
    )
}

export default MainRegestration