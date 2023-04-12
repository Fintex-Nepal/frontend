import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const CreateClientUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        password: '',
        confirmPassword: '',
        companyName: '',
        branchName: '',
        email:'',
        role:'',
        createdBy:'',
        isActive:true,
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('https://d8e5-103-89-157-247.ngrok-free.app/superadmin/create-admin',formData)
        .then((res)=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    return (
        <>
            <section class=" bg-stone-100 font-poppins dark:bg-gray-800">
                <div
                    class="max-w-4xl px-4   mx-auto bg-white border shadow-sm dark:border-gray-900 dark:bg-gray-900 ">
                    <div class="mb-10 ">
                        <h2 class="pb-2 mb-2 text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">
                            Create Client
                        </h2>
                        <p class="text-sm dark:text-gray-400">
                            This userid and password will be used by <b>Fintex</b> client
                        </p>
                    </div>
                    <form onSubmit={formSubmitHandler}>
                        <div class="mb-6">
                            <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Name</label>
                            <input type="text"
                                class="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
                                placeholder="Name...." required
                                name='name'
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div class="mb-6">
                            <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Email</label>
                            <input type="email"
                                class="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
                                placeholder="Email...." required
                                name='email'
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div class="mb-6">
                            <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">User Name</label>
                            <input type="text"
                                class="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
                                placeholder="User Name...." required
                                name='userName'
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div class="mb-6">
                            <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Password</label>
                            <input type='password' placeholder="*******" required
                                name='password'
                                class="block w-full px-4 py-3 mb-3 leading-tight placeholder-gray-400 bg-gray-100 border rounded ark:border-gray-800 dark:bg-gray-800 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 "
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div class="mb-6">
                            <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Confirm Password</label>
                            <input type='password' placeholder="*******" required
                                name='confirmPassword'
                                class="block w-full px-4 py-3 mb-3 leading-tight placeholder-gray-400 bg-gray-100 border rounded ark:border-gray-800 dark:bg-gray-800 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 "
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div class="mb-6">
                            <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Company Name</label>
                            <input type='string' placeholder="Company Name...." required
                                name='companyName'
                                class="block w-full px-4 py-3 mb-3 leading-tight placeholder-gray-400 bg-gray-100 border rounded ark:border-gray-800 dark:bg-gray-800 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 "
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div class="mb-6">
                            <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Branch Name</label>
                            <input type='string' placeholder="Branch..." required
                                name='branchName'
                                class="block w-full px-4 py-3 mb-3 leading-tight placeholder-gray-400 bg-gray-100 border rounded ark:border-gray-800 dark:bg-gray-800 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 "
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div class="mb-6">
                            <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Role</label>
                            <input type='string' placeholder="Branch..." required
                                name='role'
                                class="block w-full px-4 py-3 mb-3 leading-tight placeholder-gray-400 bg-gray-100 border rounded ark:border-gray-800 dark:bg-gray-800 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 "
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div class="mb-6">
                            <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Created By</label>
                            <input type='string' placeholder="Branch..." required
                                name='createdBy'
                                class="block w-full px-4 py-3 mb-3 leading-tight placeholder-gray-400 bg-gray-100 border rounded ark:border-gray-800 dark:bg-gray-800 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 "
                                onChange={onChangeHandler}
                            />
                        </div>

                        <button type='submit' class="px-4 py-2 text-base text-gray-100 bg-blue-600 rounded hover:bg-blue-500">Create</button>

                    </form>
                </div >
            </section >
        </>
    )
}

export default CreateClientUser