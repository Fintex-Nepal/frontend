import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBranchData } from '../../../Redux/companyprofile/BranchSlice'
const AllBranch = () => {
    const dispatch = useDispatch()
    const branches = useSelector((state) => state.branches.branches)
    useEffect(() => {
        dispatch(fetchBranchData())
    }, [dispatch])
    return (
        <>
            <Link to="/sadmindashboard/createbranch">
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700">Create Branch</button>
            </Link>
            <div>
                <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3'>
                    {branches?.map(branch => (
                        <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <div class="p-6">
                                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    {branch?.branchName}
                                </h5>

                                <table class="text-xs my-3">
                                    <tbody>

                                        <tr>
                                            <td class="px-2 py-2 text-gray-500 font-semibold">Branch Code</td>
                                            <td class="px-2 pl-20 py-2">{branch?.branchCode}</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-2 text-gray-500 font-semibold">Status</td>
                                            <td class="px-2 pl-20 py-2">{branch?.isActive ? "Active" : 'In Active'}</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-2 text-gray-500 font-semibold">Created On</td>
                                            <td class="px-2 pl-20 py-2">{new Date(branch?.createdOn).toLocaleDateString()}</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-2 text-gray-500 font-semibold">Created By</td>
                                            <td class="px-2 pl-20 py-2">{branch?.createdBy}</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-2 text-gray-500 font-semibold">Modified On</td>
                                            <td class="px-2 pl-20 py-2">{new Date(branch?.modifiedOn).toLocaleDateString()}</td>
                                        </tr>


                                    </tbody>
                                </table>

                            </div>
                            <div class="p-6 pt-0">
                                <button
                                    class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-light="true"
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllBranch