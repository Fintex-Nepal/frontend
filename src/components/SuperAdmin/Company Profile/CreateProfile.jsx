import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { createCompanyProfile } from '../../../utils/Url';
import Loader from '../../../utils/Helper/Loader'

const CreateProfile = () => {
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null); // State to store the uploaded file
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Separate onChangeHandler for file input
  const onFileChangeHandler = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setShowLoader(true);

    // Create a new instance of FormData
    const formDataToSend = new FormData();

    // Append the form fields to the FormData object
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    // Append the uploaded file to the FormData object
    formDataToSend.append('CompanyLogo', file);

    axios
      .post(createCompanyProfile, formDataToSend, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('sAdminToken'),
          'Content-Type': 'multipart/form-data', // Set the content type for FormData
        },
      })
      .then((res) => {
        toast.success(res?.data?.message, {
          position: 'top-right',
        });
        setShowLoader(false);
      })
      .catch((err) => {
        setShowLoader(false);
        const errorData = err.response?.data?.errors;
        if (errorData) {
          Object.values(errorData).forEach((er) => {
            toast.warning(er[0], {
              position: 'top-right',
            });
          });
        } else {
          toast.error(err?.message, {
            position: 'top-right',
          });
        }
      });
  };
    return (
        <>
            {showLoader && <Loader />}
            <button onClick={() => navigate(-1)} type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700">Back</button>
            <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
                <h2 class="text-lg font-semibold text-gray-700 capitalize">Create Company Profile</h2>
                <form onSubmit={onSubmitHandler}>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-gray-700 " >Company Name</label>
                            <input onChange={onChangeHandler} name='companyName' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
                        </div>

                        <div>
                            <label class="text-gray-700 ">कम्पनीको नाम</label>
                            <input onChange={onChangeHandler} name='companyNameNepali' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
                        </div>

                        <div>
                            <label class="text-gray-700 " >Company Address</label>
                            <input onChange={onChangeHandler} name='companyAddress' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
                        </div>

                        <div>
                            <label class="text-gray-700 ">कम्पनीको ठेगाना</label>
                            <input onChange={onChangeHandler} name='companyAddressNepali' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
                        </div>
                        <div>
                            <label class="text-gray-700 ">Pan Number</label>
                            <input onChange={onChangeHandler} name='panNo' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
                        </div>
                        <div>
                            <label class="text-gray-700 ">Established Date</label>
                            <input type='date' onChange={onChangeHandler} name='establishedDate' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
                        </div>
                        <div>
                            <label class="text-gray-700 ">Phone Number</label>
                            <input onChange={onChangeHandler} name='phoneNo' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
                        </div>
                        <div>
                            <label class="text-gray-700 ">Company Email</label>
                            <input onChange={onChangeHandler} name='companyEmailAddress' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
                        </div>
                        <div>
                            <label class="text-gray-700 ">Form Date</label>
                            <input type='date' onChange={onChangeHandler} name='fromDate' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
                        </div>
                        <div>
                            <label class="text-gray-700 ">Form Date</label>
                            <input type='file' onChange={onFileChangeHandler} name='CompanyLogo' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
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

export default CreateProfile