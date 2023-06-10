import React from 'react'
import { toast, ToastContainer } from 'react-toastify';

const Test = () => {
    const notify = () => {
    
        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_CENTER
        });

        
    };
    return (
        <>
            <button onClick={notify}>Notify</button>;
            <ToastContainer />
        </>
    )
}

export default Test