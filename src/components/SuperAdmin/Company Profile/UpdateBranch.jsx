import axios from 'axios';
import React, { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { updateBranchUrl } from '../../../utils/Url';
import { STATUS } from '../../../Redux/Regestration/SubLedgerSlice';
import Loader from '../../../utils/Helper/Loader';
const UpdateBranch = () => {
  const { id } = useParams();
  const [updateBranchStatus, setUpdateBranchStatus] = useState(STATUS.IDLE)
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    id,
  })
  const formChangeHandler = (event) => {
    const { name, value } = event.target;
    const updatedValue = name === 'isActive' ? value === 'true' : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: updatedValue
    }))
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setUpdateBranchStatus(STATUS.LOADING);
    axios.post(updateBranchUrl, formData, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('sadminToken')
      }
    })
      .then((res) => {
      
        toast.success(res?.data?.message, {
          position: toast.POSITION.TOP_RIGHT
        });
      })
      .catch((err) => {
        setUpdateBranchStatus(STATUS.ERROR)
        // const errors = err?.response?.data?.errors
        console.log('====================================');
        console.log(err);
        console.log('====================================');
      })

  }
  return (
    <>
      {updateBranchStatus === STATUS.LOADING && <Loader />}
      <button onClick={() => navigate(-1)} class="text-base  rounded-r-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition">
        <div class="flex leading-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-5 h-5">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Back</div>
      </button>
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Update Branch</h2>
        <form onSubmit={formSubmitHandler}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">ID</label>
              <input selected value={id} onChange={formChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md  " disabled
                name='id'
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Branch Name</label>
              <input onChange={formChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='branchName'
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="password">Status</label>
              <select onChange={formChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" name='isActive'>
                <option selected disabled>Select</option>
                <option value={true}>Active</option>
                <option value={false}>In Active</option>
              </select>
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

export default UpdateBranch