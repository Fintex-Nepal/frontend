import React, { useState } from 'react'
import axios from 'axios';
import SuccessModal from '../../utils/SuccessModal';

const CreateStaff = () => {


    const [formData, setFormData] = useState({});
    const [showSuccessModal, setshowSuccessModal] = useState(false)

    const modalText = {
        heading: "Employee Account Successfully Created",
        bodyText: 'The entered username and password can be used by Employee'
    }

    const fromChangeHandler = (e) => {
        const { name, value } = e.target;
        // If the name is 'pfAllowed', convert the selected value to a boolean
        const newValue = name === 'pfAllowed' ? value === 'true' : value;
      
        // Update the form data with the new value
        setFormData(prevState => ({
          ...prevState,
          [name]: newValue
        }));
      }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/financecompany/create-employee', formData, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
            },
        })
            .then((res => {
                setshowSuccessModal(true)
            }))
            .catch(err => console.log(err))

    }
    return (
        <>
            {showSuccessModal && <SuccessModal heading={modalText?.heading} bodyText={modalText?.bodyText} setshowSuccessModal={setshowSuccessModal} showSuccessModal={showSuccessModal} />}
            <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
                <h2 class="text-lg font-semibold text-gray-700 capitalize ">Create Employee</h2>
                <form onSubmit={formSubmitHandler}>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                        <div>
                            <label class="text-gray-700 " for="username">Name</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='name'
                                required
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Email Address</label>
                            <input type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='email'
                                required
                                onChange={fromChangeHandler}
                            />
                        </div>

                        <div>
                            <label class="text-gray-700 " >User Name</label>
                            <input type="string" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='userName'
                                required
                                onChange={fromChangeHandler}
                            />
                        </div>

                        <div>
                            <label class="text-gray-700 " >Company Name</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='companyName'
                                required
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Branch Name</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='branchName'
                                required
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Phone Number</label>
                            <input type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='phoneNumber'
                                required
                                maxLength={10}
                                minLength={10}
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Designation</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='designation'
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Date Of Joining</label>
                            <input type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='dateOfJoining'
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Gender</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='gender'
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >PF Allowed</label>
                            <select onChange={fromChangeHandler} name='pfAllowed' type='text' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-gray-700 " >Salary Posting Account</label>
                            <input type='text' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='salaryPostingAccount'
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Provident Posting Account</label>
                            <input type='text' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='providentPostingAccount'
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Salary Amount</label>
                            <input type='number' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='salaryAmount'
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Tax</label>
                            <input type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='tax'
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Facilities</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='facilities'
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Grade</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='grade'
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Pan Number</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='panNumber'
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Other Facilities</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='otherFacilities'
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Created BY</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='createdBy'
                                onChange={fromChangeHandler}
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

export default CreateStaff