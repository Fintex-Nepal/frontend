import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { fintexLoginUrl } from '../../utils/Url';
import { STATUS } from '../../Redux/Regestration/SubLedgerSlice'
import Loader from '../../utils/Helper/Loader'
import loginImg from '../../assets/loginpageImg.jpg'
import './style.css'
const Login = () => {
    const naviate = useNavigate();
    const [loginStatus, setLoginStatus] = useState(STATUS.IDLE)
    const [loginData, setLoginData] = useState({
        userName: '',
        password: '',
        confirmPassword: '',
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
                naviate('/dashboard')
            }))
            .catch(err => {
                setLoginStatus(STATUS.ERROR)
                alert(err.response.statusText)
            })
    }
    
        return (
            <>
               {loginStatus===STATUS.LOADING && <Loader/>}
                {/* <Navbar /> */}
                <section class=" font-poppins">
                    <div class="flex items-center justify-center h-screen mx-auto max-w-7xl">
                        <div class="flex-1">
                            <div class="flex flex-wrap ">
                                <div class="relative items-center justify-center hidden w-full lg:flex lg:w-1/2 ">
                                    <div class="absolute inset-0 z-10 bg-gray-900 opacity-40"></div>
                                    <img class="absolute inset-0 z-0 object-cover w-full h-full ml-auto"
                                        src={loginImg} alt='loginImage' />
                                    {/* <div class="top-0 z-10 max-w-xl mx-auto mb-12 text-center ">
                                        <h2 class="mb-4 text-4xl font-bold text-gray-100  ">
                                            Welcome to our community and join with us</h2>
                                        <div class="max-w-lg mx-auto mb-6">
                                            <p class="pt-6 font-medium text-gray-300 ">
                                                lorem ipsum dor amet sidcuscd andih wkoidus iusoyions hejitywa qopasation dummy text
                                                ipsum
                                            </p>
                                        </div>
                                        <a href="1"
                                            class="inline-block px-6 py-2 font-medium bg-green-600 text-gray-50 ">
                                            Join now</a>
                                    </div> */}
                                </div>
                                <div class="w-full py-6 bg-gray-100 shadow-md lg:py-7 lg:w-1/2 ">
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
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        class="absolute right-0 mt-2 mr-3 i " fill="currentColor"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                                        <path
                                                            d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                                        <path
                                                            d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                                    </svg> */}
                                                </div>
                                                <div class="relative flex items-center mb-4">
                                                    <input type="text"
                                                        name='confirmPassword'
                                                        class="w-full py-4 rounded-lg px-7  "
                                                        placeholder="Repeat password" required
                                                        onChange={signUpFormChangeHandler}
                                                    />
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        class="absolute right-0 items-center mr-3 "
                                                        fill="currentColor" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                                        <path
                                                            d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                                        <path
                                                            d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                                    </svg> */}
                                                </div>
                                                <div class="mb-4 text-right ">
                                                    <a href="1"
                                                        class="text-sm font-semibold text-blue-500   hover:underline">
                                                        forgot password?</a>
                                                </div>

                                                <button
                                                    class="w-full py-4 mb-4 font-semibold text-gray-200 bg-green-600 rounded-lg px-7 hover:text-blue-200 "
                                                    type="submit">LOGIN</button>
                                                {/* <p class="text-sm text-gray-700 "> Need an account?
                                                    <a href="1"
                                                        class="text-sm font-semibold text-blue-500 hover:text-blue-600">
                                                        Create an account</a>
                                                </p> */}
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/* <Footer /> */}
            </>
        )
   
}

export default Login