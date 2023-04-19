import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './style.css'
const CreateAdmin = () => {
    const [formData, setFormData] = useState({
        isActive: true
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        var newValue = name === "role" ? Number(value) : value;
       
        setFormData(prevState => ({
            ...prevState,
            [name]: newValue
        }))
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log('Bearer ' + localStorage.getItem('sAdminToken'));
        axios.post('http://localhost:8080/SuperAdmin/create-admin', formData, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('sAdminToken') 
            }
        })
            .then((res) => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <>
            <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

                <form onSubmit={formSubmitHandler}>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="username">Name</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                required
                                name='name'
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                            <input type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                required
                                name='email'
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="emailAddress">User Name</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                name='userName'
                                required
                                onChange={onChangeHandler}
                            />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="password">Password</label>
                            <input type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                name='password'
                                required
                                onChange={onChangeHandler}
                            />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                            <input type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                required
                                name='confirmPassword'
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Company Name</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                name='companyName'
                                required
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Branch Name</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                required
                                name='branchName'
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Role</label>
                            <input type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                required
                                name='role'
                                min={0}
                                step={1}
                                max={3}
                                onChange={onChangeHandler}

                            />
                        </div>
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Phone Number</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                required
                                name='phoneNumber'
                                onChange={onChangeHandler}
                            />
                        </div>
                        {/* <div>
                            <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Is Active?</label>
                            <input type='checkbox' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                required
                                name='isActive'
                                onChange={onChangeHandler}
                            />
                        </div> */}
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Created By</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                required
                                name='createdBy'
                                onChange={onChangeHandler}
                            />
                        </div>
                    </div>

                    <div class="flex justify-end mt-6">
                        <button type='submit' class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default CreateAdmin