import React ,{useState}from 'react'
import jwt_decode from 'jwt-decode';
import axios from 'axios'
import { createEmployeeLoginUrl } from '../../utils/Url'
import SuccessModal from '../../utils/SuccessModal'

const CreateStaffLogin = () => {
    const decoded=jwt_decode(localStorage.getItem("adminToken"))
    const [staffLogin, setStaffLogin] = useState({
        createdBy:decoded.given_name
    });
    const [showSuccessModal, setshowSuccessModal] = useState(false)

    const modalText = {
        heading: "Employee Register Successfully",
        bodyText: 'This credentials can be used by employee to access'
    }
     
    const roleMap = {
        "Marketing": 0,
        "Assistant": 1,
        "Senior Assistant": 2,
    };
    const fromChangeHandler = (event) => {
        const { name, value } = event.target;
        if (name === "role") {
            const roleValue = roleMap[value];
            setStaffLogin(prevState => ({
                ...prevState,
                [name]: roleValue
            }));
        }
        else {
            setStaffLogin(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    }

    const formSubmitHandler = (e) => {
        e.preventDefault(); 
        axios.post(createEmployeeLoginUrl, staffLogin, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
            }
        })
            .then((res) => {
                if (res.data.status) {
                   setshowSuccessModal(true)
                }
                else {
                    console.log(res.data.message)
                }
            })
            .catch(err => alert(err.response.data.message))
    }
    return (
        <>
            {showSuccessModal && <SuccessModal heading={modalText?.heading} bodyText={modalText?.bodyText} setshowSuccessModal={setshowSuccessModal} showSuccessModal={showSuccessModal} />}
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
                                <option>Marketing</option>
                                <option>Assistant</option>
                                <option>Senior Assistant</option>
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
                        <div>
                            <label class="text-gray-700 " >Created By</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                name='createdBy'
                                value={decoded?.given_name}
                                readOnly
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

export default CreateStaffLogin