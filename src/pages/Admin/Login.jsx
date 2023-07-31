import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { fintexLoginUrl } from '../../utils/Url';
import { STATUS } from '../../Redux/Regestration/SubLedgerSlice'
import Loader from '../../utils/Helper/Loader'
import loginImg from '../../assets/loginpageImg.jpg'
import { toast,ToastContainer } from 'react-toastify';
import './style.css'
const Login = () => {
    const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useState(STATUS.IDLE)
    const [loginData, setLoginData] = useState({
        stayLogin: true,
    });
    const signUpFormChangeHandler = (event) => {
        const { name, value } = event.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }
    const formSubmitHandler = (e) => {
        e.preventDefault()
        setLoginStatus(STATUS.LOADING)
        axios.post(fintexLoginUrl, loginData)
            .then((res => {
                localStorage.setItem('adminToken', res.data.token)
                setLoginStatus(STATUS.IDLE)
                navigate('/dashboard')
            }))
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
    const redValue = 255;
    const greenValue = 255;
    const blueValue = 255;
    const alphaValue = 0.5;

const colorStyle = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
    return (
        <>
            {loginStatus === STATUS.LOADING && <Loader />}
            <section class="bg-no-repeat bg-cover bg-[url('https://av.sc.com/corp-en/content/images/Serving_your_banking_couple_using_mobile_banking.jpg')]">
                <div class="flex items-center justify-center h-screen mx-auto max-w-7xl">
                    <div class="flex-1">
                        <div class="flex flex-wrap ">
                            <div class="relative items-center justify-center hidden w-full lg:flex lg:w-1/2 ">
                                <div class="absolute inset-0 z-10 bg-gray-900 opacity-40"></div>
                                <img class="absolute inset-0 z-0 object-cover w-full h-full ml-auto"
                                    src={loginImg} alt='loginImage' />
                            </div>
                            <div class="w-full py-6  shadow-md lg:py-7 lg:w-1/2 " style={{ backgroundColor: colorStyle }}>
                                <div class="max-w-md mx-auto">
                                    <div class="px-4 my-7 ">
                                        <div class="mb-7">
                                            <span
                                                class="flex items-center justify-center w-20 h-20 mx-auto text-gray-900 bg-green-600 rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                    fill="currentColor" class="text-gray-200 bi bi-person-circle"
                                                    viewBox="0 0 16 16">
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                                                    <path fillRule="evenodd"
                                                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                        <h2 class="mb-3 text-2xl font-bold text-center text-gray-800 ">
                                            Login your Account</h2>
                                        <p class="text-base text-center text-gray-500 mb-7 ">
                                            Please fill your credentials</p>
                                        <form onSubmit={formSubmitHandler}>
                                            <div class="mb-4">
                                                <input type="text"
                                                    name='userName'
                                                    class="w-full py-4 rounded-lg px-7  "
                                                    placeholder="User Id" required
                                                    onChange={signUpFormChangeHandler}
                                                />
                                            </div>
                                            <div class="relative flex items-center mb-4">
                                                <input type="password"
                                                    class="w-full py-4 rounded-lg px-7  "
                                                    name='password'
                                                    placeholder=" password" required
                                                    onChange={signUpFormChangeHandler}
                                                />
                                            </div>
                                            
                                            <div class="mb-4 text-right ">
                                                <a href="1"
                                                    class="text-sm font-semibold text-blue-500   hover:underline">
                                                    forgot password?</a>
                                            </div>

                                            <button
                                                class="w-full py-4 mb-4 font-semibold text-gray-200 bg-green-600 rounded-lg px-7 hover:text-blue-200 "
                                                type="submit">LOGIN</button>

                                        </form>
                                    </div>
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

export default Login