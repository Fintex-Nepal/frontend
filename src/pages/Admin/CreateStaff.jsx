import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { createEmployeeUrl } from '../../utils/Url';
import { fetchBranchData } from '../../Redux/companyprofile/BranchSlice';
import { genderTypeEnum } from '../../utils/Helper/Enums';
import Loader from '../../utils/Helper/Loader'

const CreateStaff = () => {

    const [formData, setFormData] = useState({});
    const [showLoader,setShowLoader]=useState(false)
    const branches = useSelector((state) => state.branches.branches)
    const dispatch = useDispatch();
    if (branches.length <= 0) {
        dispatch(fetchBranchData())
    }

    const fromChangeHandler = (e) => {
        const { name, value } = e.target;

        // If the name is 'pfAllowed', convert the selected value to a boolean
        const newValue =
            name === 'pfAllowed' ? value === 'true' :
                name === 'genderCode' || name === 'salaryAmount' || name === 'tax' ? parseInt(value) : value;


        // Update the form data with the new value
        setFormData(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        setShowLoader(true);
        axios
          .post(createEmployeeUrl, formData,{
            headers:{
                'Authorization':'Bearer '+localStorage.getItem('adminToken')
            }
          })
          .then((res) => {
            toast.success(res?.data?.message,{
                position:'top-right'
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
      };
      
    return (
        <>
           {showLoader && <Loader/>}
            <section class="max-w-7xl p-6 mx-auto bg-white rounded-md shadow-md ">
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
                            <label class="text-gray-700 " >Phone Number</label>
                            <input type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                name='phoneNumber'
                                required
                                onChange={fromChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " >Branch Code</label>
                            <select onChange={fromChangeHandler} name='branchCode' required class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                                <option selected disabled>Select</option>
                                {branches?.map(branch => (
                                    <option value={branch.branchCode}>{branch.branchCode}</option>
                                ))}
                            </select>
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
                            <select name='genderCode' onChange={fromChangeHandler}
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                                <option selected disabled>Select</option>
                                {genderTypeEnum?.map(gender => (
                                    <option value={gender.Id}>{gender.Name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label class="text-gray-700 " >PF Allowed</label>
                            <select onChange={fromChangeHandler} name='pfAllowed' type='text' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                                <option disabled selected>Select</option>
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
                    </div>
                    <div class="flex justify-end mt-6">
                        <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>
            <ToastContainer />
        </>
    )
}

export default CreateStaff