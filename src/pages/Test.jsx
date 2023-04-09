import React from 'react'
import { useState } from 'react'
const Login = () => {
   
    const [loginData, setLoginData] = useState({
        userId: '',
        password: '',
        confirmPassword: '',
    });

    const isPasswordValid = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return regex.test(password);
    }

    const signUpFormChangeHandler = (event) => {
        const { name, value } = event.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log('====================================');
        console.log(loginData);
        console.log('====================================');
       
    }
    return (
        <>

            <form onSubmit={formSubmitHandler}>
                <div class="mb-4">
                    <input type="text"
                        name='userId'
                        class="w-full py-4 rounded-lg px-7 dark:text-gray-300 dark:bg-gray-800"
                        placeholder="User Id" required
                        onChange={signUpFormChangeHandler}
                    />
                </div>
                <div class="relative flex items-center mb-4">
                    <input type="password"
                        class="w-full py-4 rounded-lg px-7 dark:text-gray-300 dark:bg-gray-800"
                        name='password'
                        placeholder=" password" required
                        onChange={signUpFormChangeHandler}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        class="absolute right-0 mt-2 mr-3 i dark:text-gray-50" fill="currentColor"
                        viewBox="0 0 16 16">
                        <path
                            d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                        <path
                            d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                        <path
                            d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                    </svg>
                </div>
                <div class="relative flex items-center mb-4">
                    <input type="password"
                        name='confirmPassword'
                        class="w-full py-4 rounded-lg px-7 dark:text-gray-300 dark:bg-gray-800"
                        placeholder="Repeat password" required
                        onChange={signUpFormChangeHandler}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        class="absolute right-0 items-center mr-3 dark:text-gray-50"
                        fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                        <path
                            d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                        <path
                            d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                    </svg>
                </div>
                <div class="mb-4 text-right ">
                    <a href="1"
                        class="text-sm font-semibold text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 hover:underline">
                        forgot password?</a>
                </div>

                <button
                    class="w-full py-4 mb-4 font-semibold text-gray-200 bg-green-600 rounded-lg px-7 dark:text-gray-300 dark:bg-green-600 hover:text-blue-200 "
                    type="submit">LOGIN</button>
                {/* <p class="text-sm text-gray-700 dark:text-gray-400"> Need an account?
                                                <a href="1"
                                                    class="text-sm font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
                                                    Create an account</a>
                                            </p> */}
            </form>

        </>
    )
}

export default Login