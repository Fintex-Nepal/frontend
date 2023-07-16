import React, { useState } from 'react'
import jwt_decode from 'jwt-decode';
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import { createEmployeeLoginUrl } from '../../utils/Url'
import { roleEnum } from '../../utils/Helper/Enums';
import Loader from '../../utils/Helper/Loader';


const CreateStaffLogin = () => {
    const decoded = jwt_decode(localStorage.getItem("adminToken"))
    const [showLoader, setShowLoader] = useState(false)
    const [staffLogin, setStaffLogin] = useState({
        createdBy: decoded.given_name
    });


    
    const fromChangeHandler = (event) => {
        const { name, value } = event.target;
        const newValue= name === 'isActive' ? value === 'true' :
        name==="role" || name==="depositLimit"|| name==="loanLimit"?parseInt(value):value;

        setStaffLogin(prevState => ({
            ...prevState,
            [name]: newValue
        }));

    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        setShowLoader(true)
        axios.post(createEmployeeLoginUrl, staffLogin, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
            }
        })
            .then((res) => {
                toast.success(res?.data?.message, {
                    position: 'top-right'
                })
                setShowLoader(false);
            })
            .catch((err) => {
                setShowLoader(false);
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
            {showLoader && <Loader />}
            <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
                <h2 class="text-lg font-semibold text-gray-700 capitalize ">Create Employee Login</h2>

                <form onSubmit={formSubmitHandler}>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                        <div>
                            <label class="text-gray-700 " >User Name</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                name='userName'
                                onChange={fromChangeHandler}
                            />
                        </div>

                        <div>
                            <label class="text-gray-700 " >Email Address</label>
                            <input type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                name='email'
                                onChange={fromChangeHandler}
                            />
                        </div>

                        <div>
                            <label class="text-gray-700 " >Password</label>
                            <input type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                name='password'
                                onChange={fromChangeHandler}
                            />
                        </div>

                        <div>
                            <label class="text-gray-700 " >Password Confirmation</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                name='confirmPassword'
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Role</label>
                            <select onChange={fromChangeHandler} name='role' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                                <option selected disabled>Select</option>
                                {roleEnum?.map(role=>(
                                    <option value={role.Id}>{role.Name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label class="text-gray-700 " >Deposit Limit</label>
                            <input type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                name='depositLimit'
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Loan Limit</label>
                            <input type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                name='loanLimit'
                                onChange={fromChangeHandler}
                            />
                        </div>
                    </div>
                    <div class="flex justify-end mt-6">
                        <button type='submit' class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>
            <ToastContainer />
        </>
    )
}

export default CreateStaffLogin