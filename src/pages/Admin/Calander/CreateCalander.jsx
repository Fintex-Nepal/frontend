import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { createCalander } from '../../../utils/Url';
import Loader from '../../../utils/Helper/Loader'
const CreateCalander = () => {
  const [calander, setCalander] = useState([{ year: '', month: '', monthName: '', numberOfDay: '', runningDay: '', isActive: false },
  ]);
  const [showLoader, setShowLoader] = useState(false)

  const handleChange = (e, rowIndex) => {
    const { name, value, type, checked } = e.target;
    const parsedValue =
      name === 'year' || name === 'month' || name === 'numberOfDay' || name === 'runningDay'
        ? parseInt(value, 10)
        : type === 'checkbox'
          ? checked
          : value;

    setCalander((prevCalander) => {
      const updatedCalander = prevCalander.map((row, index) =>
        index === rowIndex ? { ...row, [name]: parsedValue } : row
      );
      return updatedCalander;
    });
  };


  const handleAddRow = () => {
    setCalander((prevCalander) => [...prevCalander, {}]);
  };
  const handleRemoveRow = (indexToRemove) => {
    setCalander((prevCalander) => prevCalander.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowLoader(true);
    axios
      .post(createCalander, calander, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
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
      <button
        type="button"
        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:text-blue-600"
        onClick={handleAddRow}
      >
        Add Row
      </button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <form onSubmit={handleSubmit} >
          <div className="max-h-[75vh] overflow-y-scroll">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Year
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Month
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Month Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Days
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Working Days
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {calander.map((row, index) => (
                  <>

                    <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <input
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Year"
                          required
                          name="year"

                          onChange={(e) => handleChange(e, index)}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Month"
                          required
                          name="month"

                          onChange={(e) => handleChange(e, index)}
                        />
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <input
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Month Name"
                          required
                          name="monthName"

                          onChange={(e) => handleChange(e, index)}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Month"
                          required
                          name="numberOfDay"

                          onChange={(e) => handleChange(e, index)}
                        />
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <input
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Year"
                          required
                          name="runningDay"

                          onChange={(e) => handleChange(e, index)}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className='flex'>
                          <button onClick={() => handleRemoveRow(index)} className='flex-initial w-14'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>

                          </button>
                          <input
                            className='flex-initial'
                            type="checkbox"
                            name="isActive"
                            onChange={(e) => handleChange(e, index)}
                          />
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
          {calander?.length === 12 &&
            <button type="submit" class="float-right mr-11 py-2.5 px-5  mt-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:text-blue-600">Create</button>
          }
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default CreateCalander;
