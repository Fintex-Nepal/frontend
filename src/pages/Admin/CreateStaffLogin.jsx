import React from 'react'
import { useState } from 'react'
import jwt_decode from 'jwt-decode';
const CreateStaffLogin = () => {
    const [staffLogin, setStaffLogin] = useState({});
    const decoded = jwt_decode(localStorage.getItem('adminToken'))
    console.log(decoded);
    const fromChangeHandler = (event) => {
        const { name, value } = event.target;
        setStaffLogin(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        console.log(staffLogin);
    }
    return (
        <>
            <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

                <form>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="username">Username</label>
                            <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                            <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"

                            />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="password">Password</label>
                            <input id="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"

                            />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                            <input id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"

                            />
                        </div>
                    </div>

                    <div class="flex justify-end mt-6">
                        <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default CreateStaffLogin