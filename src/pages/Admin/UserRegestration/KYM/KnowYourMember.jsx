import React, { useState } from 'react'
import BasicInfo from '../BasicInfo'
import Address from './Address'
import OtherInfo from './OtherInfo'
import PhotoSign from './PhotoSign'
const KnowYourMember = () => {
    const [activeSteps, setActiveSteps] = useState(1)
    const prevStep = () => {

        if (activeSteps > 1) setActiveSteps(activeSteps - 1)
    }
    const nextStep = () => {
        if (activeSteps < 4) setActiveSteps(activeSteps + 1);
    }
    return (
        <>

            <div class="">
                <h2 class="text-lg font-semibold text-gray-700 capitalize">User Regestration</h2>
                <div class="mx-4 p-4">
                    <div class="flex items-center ">
                        <div class="flex items-center text-white relative">
                            <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  border-teal-600 bg-teal-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark ">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <div class="hidden sm:block absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Basic Information</div>
                        </div>
                        <div class={`flex-auto border-t-2 transition duration-500 ease-in-out ${activeSteps > 1 ? 'border-teal-600' : ''}`}></div>
                        <div class="flex items-center text-white relative">
                            <div class={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${activeSteps > 1 ? 'bg-teal-600 border-teal-600' : 'bg-gray-600'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </div>
                            <div class="hidden sm:block absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600 ">Address Information</div>
                        </div>
                        <div class={`flex-auto border-t-2 transition duration-500 ease-in-out ${activeSteps > 2 ? 'border-teal-600' : 'border-gray-300'}`}></div>
                        <div class="flex items-center text-white relative">
                            <div class={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  ${activeSteps > 2 ? 'bg-teal-600 border-teal-600' : 'bg-gray-600'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail ">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div class="hidden sm:block absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Other Information</div>
                        </div>
                        <div class={`flex-auto border-t-2 transition duration-500 ease-in-out  ${activeSteps > 3 ? 'border-teal-600' : 'border-gray-300'}`}></div>
                        <div class="flex items-center text-white relative">
                            <div class={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${activeSteps > 3 ? 'bg-teal-600 border-teal-600' : 'bg-gray-600'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>

                            </div>
                            <div class="hidden sm:block absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Photo & Sign</div>
                        </div>
                    </div>
                </div>
            </div>
            {activeSteps === 1 && <BasicInfo />}
            {activeSteps === 2 && <Address />}
            {activeSteps === 3 && <OtherInfo />}
            {activeSteps === 4 && <PhotoSign />}
            <div class="flex p-2">
                <button onClick={prevStep} class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition">Previous</button>
                <div class="flex-auto flex flex-row-reverse">
                    <button onClick={nextStep} class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-600  
        bg-teal-600 
        text-teal-100 
        border duration-200 ease-in-out 
        border-teal-600 transition">Next</button>
                    <button onClick={nextStep} class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-200  
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition">Skip</button>
                </div>
            </div>
        </>
    )
}

export default KnowYourMember