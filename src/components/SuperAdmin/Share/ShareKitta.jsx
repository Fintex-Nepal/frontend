import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { sharePriceUrl } from '../../../utils/Url';
import Loader from '../../../utils/Helper/Loader';
const ShareKitta = () => {
    const [sharedata, setShareData] = useState()
    const [showLoader,setShowLoader]=useState();



    const onChanegHandler = (e) => {
        const { name, value } = e.target;

        let parsedValue = value;
        if (name === 'priceOfOneKitta') {
            parsedValue = parseInt(value);
        }

        setShareData((prevState) => ({
            ...prevState,
            [name]: parsedValue,
        }));
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setShowLoader(true)
        axios.post(sharePriceUrl, sharedata, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('sAdminToken')
            }
        })
            .then((res) => {
                setShowLoader(false)
                if (res.data.status) {
                    toast.success(res?.data?.message, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
                else {
                    console.log(res.data.message)
                }
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
                    toast.error(err?.message, {
                        position: 'top-right'
                    });
                }
            });
    }
    return (
        <>
           {showLoader && <Loader/>}
            <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Share Setting</h2>
                <form onSubmit={onSubmitHandler}>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="username">Share Amount per kitta</label>
                            <input onChange={onChanegHandler} name='priceOfOneKitta' type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
                        </div>
                    </div>
                    <div class="flex justify-end mt-6">
                        <button type='submit' class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>
            <ToastContainer/>
        </>
    )
}

export default ShareKitta