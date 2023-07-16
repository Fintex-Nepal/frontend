import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { superAdminLoginUrl } from '../../utils/Url';
import Loader from '../../utils/Helper/Loader';
import { STATUS } from '../../Redux/Regestration/SubLedgerSlice';
import { ToastContainer, toast } from 'react-toastify';
const SuperAdminLogin = () => {
    const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useState(STATUS.IDLE)
    const [userData, setUserDate] = useState({
        userName: '',
        password: '',
    })
    const onChangeHandle = (event) => {
        const { name, value } = event.target;
        setUserDate(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        setLoginStatus(STATUS.LOADING);
        axios.post(superAdminLoginUrl, userData)
            .then((res) => {
                localStorage.setItem('sAdminToken', res.data.token);
                setLoginStatus(STATUS.IDLE);
                navigate('/sadmindashboard');
            })
            .catch((err) => {
                setLoginStatus(false);
                const errorData = err.response?.data?.errors;
                if (errorData) {
                    Object.values(errorData).forEach((er) => {
                        toast.warning(er[0], {
                            position: 'top-right'
                        });
                    });
                } else {
                    toast.error(err?.message,{
                        position:'top-right'
                    });
                }
            });

    }
    return (
        <>
            {loginStatus === STATUS.LOADING && <Loader />}
            <section class="flex items-center justify-center h-screen font-poppins  bg-slate-300">
                <div class="flex-1">
                    <div class="px-2 mx-auto max-w-7xl lg:px-4">
                        <div class="relative ">
                            <div class="relative px-4  bg-slate-200 shadow-md  md:py-11 sm:px-8">
                                <div class="max-w-lg mx-auto text-center">
                                    <a href="1" class="inline-block mb-4 text-blue-900 lg:mb-7 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"
                                            class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fillRule="evenodd"
                                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg>
                                    </a>
                                    <h2 class="mb-4 text-2xl font-bold text-gray-700 lg:mb-7 md:text-5xl">
                                        Admin Login account</h2>
                                    <p class="text-gray-500">Please Enter Your credentials here</p>
                                    <form onSubmit={formSubmitHandler} class="mt-4 lg:mt-7 ">
                                        <div class="">
                                            <input type="string"
                                                class="w-full px-4 py-3 mt-2 bg-white rounded-lg lg:py-5 -gray-800"
                                                name="userName" placeholder="Enter your email"
                                                onChange={onChangeHandle}
                                            />
                                        </div>
                                        <div class="mt-4 lg:mt-7">
                                            <div>
                                                <div class="relative flex items-center">
                                                    <input type="password"
                                                        class="w-full px-4 py-3 bg-white rounded-lg lg:py-5 -gray-800 "
                                                        name="password" placeholder="Enter password"
                                                        onChange={onChangeHandle}
                                                    />
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        class="absolute right-0 mr-3" fill="currentColor"
                                                        class="bi bi-eye-slash" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                                        <path
                                                            d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                                        <path
                                                            d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                                    </svg> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap items-center justify-between mt-4 lg:mt-7">
                                            <label for="" class="flex">
                                                {/* <input type="checkbox" class="mt-1 mr-4" /> */}
                                                <span class="text-sm text-red-600 ">It is punishable crime if you're not admin</span>
                                            </label>
                                            <a href=" 1"
                                                class="mt-2 text-sm font-semibold text-blue-500 lg:mt-0  hover:underline">
                                                forgot password? </a>
                                        </div>
                                        <button
                                            class="w-full py-3 text-lg font-bold text-gray-300 uppercase bg-blue-700 rounded-md lg:mt-7 mt-7 px-11 md:mt-7 hover:bg-blue-900 "
                                            type="submit">LOGIN</button>
                                        {/* <p class="mt-4 text-xs text-gray-700 lg:mt-7 lg:text-base">
                                            Need an account?
                                            <a href="1" class="font-semibold text-blue-400 hover:text-blue-600">
                                                Create an account</a>
                                        </p> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}

export default SuperAdminLogin




