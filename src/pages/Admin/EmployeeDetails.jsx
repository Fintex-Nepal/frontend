import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { editUserProfile, getEmployeeById } from '../../utils/Url';
import { toast, ToastContainer } from 'react-toastify';
import { genderTypeEnum } from '../../utils/Helper/Enums';
import Loader from '../../utils/Helper/Loader';


const EmployeeDetails = () => {
    const [userData, setUserData] = useState();
    const [isEditable, setIsEditable] = useState(false)
    const [dataUpdate, setDataUpdated] = useState([])
    const [showLoader,setShowLoader]=useState(false)


    const { id } = useParams();
    useEffect(() => {
        axios.get(`${getEmployeeById}${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
            }
        })
            .then((res) => setUserData(res.data))
            .then(err => console.log(err))
    }, [id, dataUpdate]);

    const editFormHandler = (e) => {
        e.preventDefault();
        
        setIsEditable(!isEditable)
        if (isEditable) {
            setShowLoader(true)
            axios.put(editUserProfile, userData, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
                }
            })
                .then((res) => {
                    if (res.data.status) {
                        toast.success(res?.data?.message,{
                            position:'top-right'
                        })
                        setShowLoader(false);
                        setDataUpdated(res.data)
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
                        toast.error(err?.message,{
                            position:'top-right'
                        });
                    }
                });
        }
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        const newValue = name === 'pfAllowed' ? value === 'true' : name === 'gender' ? parseInt(value) : value;
        setUserData(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    };
    return (
        <>
            {showLoader && <Loader/>}
            <section class="max-w-7xl p-6 mx-auto bg-white rounded-md shadow-md ">
                <h2 class="text-lg font-semibold text-gray-700 capitalize ">User Details</h2>
                <form>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-4">
                        <div>
                            <label class="text-gray-700 " for="username">Id</label>
                            <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.id}
                                readOnly
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="username">Name</label>
                            <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.name}
                                readOnly
                            />
                        </div>

                        <div>
                            <label class="text-gray-700 " for="emailAddress">Email Address</label>
                            <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.email}
                                readOnly
                            />
                        </div>

                        <div>
                            <label class="text-gray-700 " for="password">Phone Number</label>
                            <input id="password" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.phoneNumber}
                                readOnly
                            />
                        </div>

                        {/* <div>
                            <label class="text-gray-700 " for="passwordConfirmation">User Name</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.userName}
                                readOnly
                            />
                        </div> */}
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Company Name</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.companyName}
                                readOnly
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Branch Code</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.branchCode}
                                readOnly
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Date Of Joining</label>
                            <input type={isEditable ? "date" : "text"}
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={isEditable ? userData?.dateOfJoining : userData?.dateOfJoining?.substring(0, 10)}
                                readOnly={!isEditable}
                                name='dateOfJoining'
                                onChange={onChangeHandler}
                            />
                        </div>


                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Degnation</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.designation}
                                readOnly={!isEditable}
                                name='designation'
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Gender</label>
                            {isEditable ?
                                <select name='genderCode' onChange={onChangeHandler}
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"

                                >
                                    <option selected disabled>Select</option>
                                    {genderTypeEnum?.map(gender => (
                                        <option value={gender.Id}>{gender.Name}</option>
                                    ))}
                                </select> : (
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                        value={userData?.gender}
                                        readOnly
                                    />
                                )}


                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Is Pf Allowed</label>
                            {isEditable ? (
                                <select onChange={onChangeHandler} name='pfAllowed' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                                    <option value={null} disabled selected>Select</option>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                            ) :
                                <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                    value={userData?.pfAllowed ? 'Yes' : 'No'}
                                    readOnly
                                />}

                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Salary Posting Account</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.salaryAmount}
                                readOnly={!isEditable}
                                onChange={onChangeHandler}
                                name='salaryAmount'
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Provident Posting Account</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.providentPostingAccount}
                                readOnly={!isEditable}
                                onChange={onChangeHandler}
                                name='providentPostingAccount'
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Tax</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.tax}
                                readOnly={!isEditable}
                                onChange={onChangeHandler}
                                name='tax'
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Pan Number</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.panNumber}
                                readOnly={!isEditable}
                                onChange={onChangeHandler}
                                name='panNumber'
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Grade</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.grade}
                                readOnly={!isEditable}
                                onChange={onChangeHandler}
                                name='grade'
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Facilities</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.facilities}
                                readOnly={!isEditable}
                                onChange={onChangeHandler}
                                name='facilities'
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Other Facilities</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.otherFacilities}
                                readOnly={!isEditable}
                                onChange={onChangeHandler}
                                name='otherFacilities'
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">createdBy</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.createdBy}
                                // onChange={onChangeHandler}
                                name='createdBy'
                                readOnly
                            />
                        </div>
                    </div>

                    <div class="flex justify-end mt-6">
                        <button onClick={editFormHandler} class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">{isEditable ? 'Save' : 'Edit'}</button>
                    </div>
                </form>
            </section>
            <ToastContainer/>
        </>
    )
}

export default EmployeeDetails