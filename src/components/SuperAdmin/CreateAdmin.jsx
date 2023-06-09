import React, { useState } from 'react'
import axios from 'axios';
import { createAdminUrl } from '../../utils/Url'
import SuccessModal from '../../utils/SuccessModal';
import jwt_decode from 'jwt-decode'
const CreateAdmin = () => {
    const decoded = jwt_decode(localStorage.getItem('sAdminToken'))
    const [formData, setFormData] = useState({
        "createdBy": decoded.given_name,
        "role": 3,
    });
    const [showSuccessModal, setshowSuccessModal] = useState(false)
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        name === 'role'
            ? setFormData({ ...formData, role: 1 })
            : setFormData(prevState => ({
                ...prevState,
                [name]: name === 'isActive' ? value === "true" : value
            }));
    };

    const modalText = {
        heading: "Admin Account Successfully Created",
        bodyText: 'The entered username and password can be used by client admin'
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(createAdminUrl, formData, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('sAdminToken')
            }
        })
            .then((res) => {
               if(res.data.status)
               {
                   setshowSuccessModal(true)
               }
               else
               {
                alert(res.data.message)
               }
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            {showSuccessModal && <SuccessModal heading={modalText?.heading} bodyText={modalText?.bodyText} setshowSuccessModal={setshowSuccessModal} showSuccessModal={showSuccessModal} />}
            <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
                <h2 class="text-lg font-semibold text-gray-700 capitalize ">Create Admin</h2>
                <form onSubmit={formSubmitHandler}>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-gray-700">Name</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                required
                                name='name'
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700" for="emailAddress">Email Address</label>
                            <input type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                required
                                name='email'
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700" for="emailAddress">User Name</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                name='userName'
                                required
                                onChange={onChangeHandler}
                            />
                        </div>

                        <div>
                            <label class="text-gray-700" for="password">Password</label>
                            <input type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                name='password'
                                required
                                onChange={onChangeHandler}
                            />
                        </div>

                        <div>
                            <label class="text-gray-700" for="passwordConfirmation">Password Confirmation</label>
                            <input type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                required
                                name='confirmPassword'
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700" for="passwordConfirmation">Company Name</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                name='companyName'
                                required
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700" for="passwordConfirmation">Branch Name</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                required
                                name='branchName'
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700" for="passwordConfirmation">Role</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                required
                                disabled
                                value={'Officer'}
                                name='role'
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700" for="passwordConfirmation">Phone Number</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                required
                                name='phoneNumber'
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700" for="status">Status</label>
                            <select name="isActive" onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                                <option value="select Status" disabled selected>Select Status</option>
                                <option value="true">Active</option>
                                <option value="false">In Active</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-gray-700" for="passwordConfirmation">Created by</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                required
                                readOnly
                                value={decoded?.given_name}
                                name='createdBy'

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