import React from 'react'
import { useState } from 'react'
const CreateStaff = () => {
    const [formData, setFormData] = useState({});

    const fromChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <div class="-mx-4  flex flex-wrap">
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div class="mb-12">
                            <label class="mb-3 block text-base font-medium text-black">
                                Name
                            </label>
                            <div class="relative">
                                <input type="text" placeholder="Devid Jhon" class="w-full rounded-md border border-form-stroke p-3 pl-12 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                                    name='name'
                                    required
                                    onChange={fromChangeHandler}
                                />
                                <span class="absolute top-1/2 left-4 -translate-y-1/2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.8">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72039 12.8864C4.50179 12.105 5.5616 11.666 6.66667 11.666H13.3333C14.4384 11.666 15.4982 12.105 16.2796 12.8864C17.061 13.6678 17.5 14.7276 17.5 15.8327V17.4993C17.5 17.9596 17.1269 18.3327 16.6667 18.3327C16.2064 18.3327 15.8333 17.9596 15.8333 17.4993V15.8327C15.8333 15.1696 15.5699 14.5338 15.1011 14.0649C14.6323 13.5961 13.9964 13.3327 13.3333 13.3327H6.66667C6.00363 13.3327 5.36774 13.5961 4.8989 14.0649C4.43006 14.5338 4.16667 15.1696 4.16667 15.8327V17.4993C4.16667 17.9596 3.79357 18.3327 3.33333 18.3327C2.8731 18.3327 2.5 17.9596 2.5 17.4993V15.8327C2.5 14.7276 2.93899 13.6678 3.72039 12.8864Z" fill="#637381"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0007 3.33268C8.61994 3.33268 7.50065 4.45197 7.50065 5.83268C7.50065 7.21339 8.61994 8.33268 10.0007 8.33268C11.3814 8.33268 12.5006 7.21339 12.5006 5.83268C12.5006 4.45197 11.3814 3.33268 10.0007 3.33268ZM5.83398 5.83268C5.83398 3.5315 7.69946 1.66602 10.0007 1.66602C12.3018 1.66602 14.1673 3.5315 14.1673 5.83268C14.1673 8.13387 12.3018 9.99935 10.0007 9.99935C7.69946 9.99935 5.83398 8.13387 5.83398 5.83268Z" fill="#637381"></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div class="mb-12">
                            <label class="mb-3 block text-base font-medium text-black">
                                Email
                            </label>
                            <div class="relative">
                                <input type="email" placeholder="info@yourmai.com" class="w-full rounded-md border border-form-stroke p-3 pl-12 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                                    name='email'
                                    required
                                    onChange={fromChangeHandler}
                                />
                                <span class="absolute top-1/2 left-4 -translate-y-1/2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.8">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33398 4.16667C2.87756 4.16667 2.50065 4.54357 2.50065 5V15C2.50065 15.4564 2.87756 15.8333 3.33398 15.8333H16.6673C17.1238 15.8333 17.5007 15.4564 17.5007 15V5C17.5007 4.54357 17.1238 4.16667 16.6673 4.16667H3.33398ZM0.833984 5C0.833984 3.6231 1.95708 2.5 3.33398 2.5H16.6673C18.0442 2.5 19.1673 3.6231 19.1673 5V15C19.1673 16.3769 18.0442 17.5 16.6673 17.5H3.33398C1.95708 17.5 0.833984 16.3769 0.833984 15V5Z" fill="#637381"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.984696 4.52154C1.24862 4.14449 1.76823 4.0528 2.14527 4.31673L10.0007 9.81554L17.8562 4.31673C18.2332 4.0528 18.7528 4.14449 19.0167 4.52154C19.2807 4.89858 19.189 5.41818 18.8119 5.68211L10.4786 11.5154C10.1917 11.7163 9.80977 11.7163 9.52284 11.5154L1.1895 5.68211C0.812463 5.41818 0.720767 4.89858 0.984696 4.52154Z" fill="#637381"></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div class="mb-12">
                            <label class="mb-3 block text-base font-medium text-black">
                                Gender
                            </label>
                            <div class="relative">
                                <input type="text" placeholder="Male / Female" class="w-full rounded-md border border-form-stroke p-3 pl-12 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                                    name='gender'
                                    required
                                    onChange={fromChangeHandler}
                                />
                                <span class="absolute top-1/2 left-4 -translate-y-1/2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.8">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72039 12.8864C4.50179 12.105 5.5616 11.666 6.66667 11.666H13.3333C14.4384 11.666 15.4982 12.105 16.2796 12.8864C17.061 13.6678 17.5 14.7276 17.5 15.8327V17.4993C17.5 17.9596 17.1269 18.3327 16.6667 18.3327C16.2064 18.3327 15.8333 17.9596 15.8333 17.4993V15.8327C15.8333 15.1696 15.5699 14.5338 15.1011 14.0649C14.6323 13.5961 13.9964 13.3327 13.3333 13.3327H6.66667C6.00363 13.3327 5.36774 13.5961 4.8989 14.0649C4.43006 14.5338 4.16667 15.1696 4.16667 15.8327V17.4993C4.16667 17.9596 3.79357 18.3327 3.33333 18.3327C2.8731 18.3327 2.5 17.9596 2.5 17.4993V15.8327C2.5 14.7276 2.93899 13.6678 3.72039 12.8864Z" fill="#637381"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0007 3.33268C8.61994 3.33268 7.50065 4.45197 7.50065 5.83268C7.50065 7.21339 8.61994 8.33268 10.0007 8.33268C11.3814 8.33268 12.5006 7.21339 12.5006 5.83268C12.5006 4.45197 11.3814 3.33268 10.0007 3.33268ZM5.83398 5.83268C5.83398 3.5315 7.69946 1.66602 10.0007 1.66602C12.3018 1.66602 14.1673 3.5315 14.1673 5.83268C14.1673 8.13387 12.3018 9.99935 10.0007 9.99935C7.69946 9.99935 5.83398 8.13387 5.83398 5.83268Z" fill="#637381"></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div class="mb-12">
                            <label class="mb-3 block text-base font-medium text-black">
                                Designation
                            </label>
                            <div class="relative">
                                <input type="text" placeholder="Pimjo Labs" class="w-full rounded-md border border-form-stroke p-3 pl-12 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                                    name='desigantion'
                                    required
                                    onChange={fromChangeHandler}
                                />
                                <span class="absolute top-1/2 left-4 -translate-y-1/2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.8">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33398 6.66667C2.87375 6.66667 2.50065 7.03976 2.50065 7.5V15.8333C2.50065 16.2936 2.87375 16.6667 3.33398 16.6667H16.6673C17.1276 16.6667 17.5007 16.2936 17.5007 15.8333V7.5C17.5007 7.03976 17.1276 6.66667 16.6673 6.66667H3.33398ZM0.833984 7.5C0.833984 6.11929 1.95327 5 3.33398 5H16.6673C18.048 5 19.1673 6.11929 19.1673 7.5V15.8333C19.1673 17.214 18.048 18.3333 16.6673 18.3333H3.33398C1.95327 18.3333 0.833984 17.214 0.833984 15.8333V7.5Z" fill="#637381"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.56622 2.39825C7.03506 1.92941 7.67094 1.66602 8.33398 1.66602H11.6673C12.3304 1.66602 12.9662 1.92941 13.4351 2.39825C13.9039 2.86709 14.1673 3.50297 14.1673 4.16602V17.4993C14.1673 17.9596 13.7942 18.3327 13.334 18.3327C12.8737 18.3327 12.5006 17.9596 12.5006 17.4993V4.16602C12.5006 3.945 12.4129 3.73304 12.2566 3.57676C12.1003 3.42048 11.8883 3.33268 11.6673 3.33268H8.33398C8.11297 3.33268 7.90101 3.42048 7.74473 3.57676C7.58845 3.73304 7.50065 3.945 7.50065 4.16602V17.4993C7.50065 17.9596 7.12755 18.3327 6.66732 18.3327C6.20708 18.3327 5.83398 17.9596 5.83398 17.4993V4.16602C5.83398 3.50297 6.09738 2.86709 6.56622 2.39825Z" fill="#637381"></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div class="mb-12">
                            <label for="" class="mb-3 block text-base font-medium text-black">
                                Date Of Joining
                            </label>
                            <input
                                name='data'
                                required
                                onChange={fromChangeHandler}
                                type='date'
                                placeholder="Default Input"
                                class="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                            />
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div class="mb-12">
                            <label for="" class="mb-3 block text-base font-medium text-black">
                                Branch Name
                            </label>
                            <input
                                type="text"
                                placeholder="Active Input"
                                name='branchName'
                                required
                                onChange={fromChangeHandler}
                                class="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                            />
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div class="mb-12">
                            <label for="" class="mb-3 block text-base font-medium text-black">
                                PF Allowed
                            </label>
                            <select name='pfAllowed' required onChange={fromChangeHandler} className='border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]'>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div class="mb-12">
                            <label for="" class="mb-3 block text-base font-medium text-black">
                                Salary Posting Account
                            </label>
                            <input
                                name='salaryPostingAccount'
                                required
                                onChange={fromChangeHandler}
                                type="text"
                                placeholder="Salary Account Number"
                                class="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                            />
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div class="mb-12">
                            <label for="" class="mb-3 block text-base font-medium text-black">
                                Provident Posting Account
                            </label>
                            <input
                                name='providentPostingAccount'
                                required
                                onChange={fromChangeHandler}
                                type="text"
                                placeholder="Provident Account Number"
                                class="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                            />
                        </div>
                    </div>

                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div class="mb-12">
                            <label class="mb-3 block text-base font-medium text-black">
                                Salary Amount
                            </label>
                            <div class="flex items-center">
                                <span class="h-full rounded-tl-md rounded-bl-md border border-r-0 border-stroke bg-gray-1 py-3 px-4 text-base uppercase text-body-color">
                                    NPR
                                </span>
                                <input type="number" placeholder="Pimjo Labs" class="w-full rounded-br-md rounded-tr-md border border-form-stroke p-3 pl-5 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                                    required
                                    name='salaryAmount'
                                    onChange={fromChangeHandler}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div class="mb-12">
                            <label class="mb-3 block text-base font-medium text-black">
                                Tax
                            </label>
                            <div class="relative">
                                <input type="number" placeholder="Tax percentage" class="w-full rounded-md border border-form-stroke p-3 pl-12 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                                    name='tax'
                                    required
                                    onChange={fromChangeHandler}
                                />
                                <span class="absolute top-1/2 left-4 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div class="mb-12">
                            <label for="" class="mb-3 block text-base font-medium text-black">
                                Facilities
                            </label>
                            <input
                                type="text"
                                name='facilities'
                                required
                                onChange={fromChangeHandler}
                                placeholder="facilities"
                                class="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                            />
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div class="mb-12">
                            <label for="" class="mb-3 block text-base font-medium text-black">
                                Grade
                            </label>
                            <input
                                type="text"
                                name='grade'
                                required
                                onChange={fromChangeHandler}
                                placeholder="facilities"
                                class="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                            />
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div class="mb-12">
                            <label for="" class="mb-3 block text-base font-medium text-black">
                                PAN Number
                            </label>
                            <input
                                name='panNumber'
                                required
                                onChange={fromChangeHandler}
                                type='text'
                                placeholder="PAN Number"
                                class="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                            />
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div class="mb-12">
                            <label for="" class="mb-3 block text-base font-medium text-black">
                                Other Facilities-- Redundent
                            </label>
                            <input
                                type='text'
                                placeholder="PAN Number"
                                class="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                            />
                        </div>
                    </div>
                    
                    <button type='submit'

                        class="bg-blue-600 inline-flex items-center justify-center rounded-md py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                        Create
                    </button>
                </div>
            </form>
        </>
    )
}

export default CreateStaff