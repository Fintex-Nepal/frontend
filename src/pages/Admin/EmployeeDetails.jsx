import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const EmployeeDetails = () => {
    const [userData, setUserData] = useState();
    const {id}=useParams();
    useEffect(() => {
        axios.get(`http://localhost:8080/financecompany/getemployee/username?username=${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
            }
        })
            .then((res) => setUserData(res.data))
            .then(err => console.log(err))
    }, [id])
;
    return (
        <>
            <section class="max-w-7xl p-6 mx-auto bg-white rounded-md shadow-md ">
                <h2 class="text-lg font-semibold text-gray-700 capitalize ">Account settings</h2>
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

                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">User Name</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.userName}
                                readOnly
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Company Name</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.companyName}
                                readOnly
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Branch Name</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.branchName}
                                readOnly
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Date Of Joining</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.dateOfJoining}
                                readOnly
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Degnation</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.designation}
                                readOnly
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Gender</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.gender}
                                readOnly
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Is Pf Allowed</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                value={userData?.pfAllowed}
                                readOnly
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Salary Posting Account</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            value={userData?.salaryAmount}
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Provident Posting Account</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" 
                            value={userData?.providentPostingAccount}
                            readOnly
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Tax</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" 
                            value={userData?.tax}
                            readOnly
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Pan Number</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" 
                            value={userData?.panNumber}
                            readOnly
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Grade</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" 
                            value={userData?.grade}
                            readOnly
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Facilities</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" 
                            value={userData?.facilities}
                            readOnly
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Other Facilities</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" 
                            value={userData?.otherFacilities}
                            readOnly
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">createdBy</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            value={userData?.createdBy}
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

export default EmployeeDetails