import React from 'react'
import { useState ,useEffect} from 'react'
import ConfirmModal from '../../utils/ConfirmModal'
const PasswordResetForm = () => {
    const [userData,setUserData]=useState({
        currentPassword:'',
        newpassword:'',
        confirmnewpassword:'',
    })
   const [showConfirmModal,setShowConfirmModal]=useState(false)
   const [modalResponse,setModalResponse]=useState(false)
    const onChangeHandler=(event)=>{
        const {name,value}=event.target;
       setUserData(prevState=>({
        ...prevState,
        [name]:value,
       }))
    }
   useEffect(()=>{
      console.log(modalResponse,'modalResponsemodalResponsemodalResponsemodalResponse');
      if(modalResponse)
      {
        console.log(userData);
      }
   },[modalResponse])
    const submitHandler=(e)=>{
        e.preventDefault();
        setShowConfirmModal(true)
       if(modalResponse)
       {
        console.log("Iam in");
        console.log('====================================');
        console.log(userData);
        console.log('====================================');
       }

    }
    return (
        <>
            {showConfirmModal &&<ConfirmModal setShowConfirmModal={setShowConfirmModal} setModalResponse={setModalResponse} modalResponse={modalResponse}/>}
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                        Reset Password
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                        write something here
                    </p>

                    <form
                        onSubmit={submitHandler}
                        className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                    >
                        <p className="text-center text-lg font-medium">your credentials</p>

                        <div>
                            <label htmlFor="currentPassword" className="sr-only">Current Password</label>

                            <div className="relative">
                                <input
                                    type='string'
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Current Password"
                                    onChange={onChangeHandler}
                                    name='currentPassword'
                                />

                                <span
                                    className="absolute inset-y-0 right-0 grid place-content-center px-4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="newpassword" className="sr-only">New Password</label>

                            <div className="relative">
                                <input
                                    type='string'
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="newpassword"
                                    onChange={onChangeHandler}
                                    name='newpassword'
                                />

                                <span
                                    className="absolute inset-y-0 right-0 grid place-content-center px-4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirmnewpassword" className="sr-only">Confirm New Password</label>

                            <div className="relative">
                                <input
                                    type="string"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Confirm Password"
                                    onChange={onChangeHandler}
                                    name='confirmnewpassword'
                                />

                                <span
                                    className="absolute inset-y-0 right-0 grid place-content-center px-4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        >
                           Change password
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default PasswordResetForm