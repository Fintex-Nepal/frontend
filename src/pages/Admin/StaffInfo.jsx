
import { getAllEmployeeUrl } from '../../utils/Url'
import axios  from 'axios'
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const StaffInfo = () => {
    const employeeData = [
        {
            name: 'Samir Alam',
            designation: 'CEO',
            place: 'Birgunj',
            email: 'samiramrullah@gmail.com',
            phoneNo: 9823231004,
        },
        {
            name: 'Ashish',
            designation: 'CEO',
            place: 'Chitwan',
            email: 'ashihish@gmail.com',
            phoneNo: 9823231005,
        },

        {
            name: 'Sajid',
            designation: 'CEO',
            place: 'Birgunj',
            email: 'sajid@gmail.com',
            phoneNo: 9823231006,
        }
    ]


    const [allEmployee,setAllEmployee]=useState([]);

    useEffect(() => {
        axios.get(getAllEmployeeUrl,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
            },
        })
            .then((res => {
                setAllEmployee(res.data);
            }))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <div class="flex justify-between">
                <div class="left-div">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Employee</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            // value={age}
                            // onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>ID</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div class="right-div">
                    <div className="relative rounded bg-red-400">
                        <svg
                            className="absolute z-20 cursor-pointer top-[18px] left-4"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.2716 13.1684L11.3313 10.2281C12.0391 9.28574 12.4213 8.13865 12.42 6.96C12.42 3.94938 9.97063 1.5 6.96 1.5C3.94938 1.5 1.5 3.94938 1.5 6.96C1.5 9.97063 3.94938 12.42 6.96 12.42C8.13865 12.4213 9.28574 12.0391 10.2281 11.3313L13.1684 14.2716C13.3173 14.4046 13.5114 14.4756 13.711 14.47C13.9105 14.4645 14.1004 14.3827 14.2415 14.2415C14.3827 14.1004 14.4645 13.9105 14.47 13.711C14.4756 13.5114 14.4046 13.3173 14.2716 13.1684ZM3.06 6.96C3.06 6.18865 3.28873 5.43463 3.71727 4.79328C4.14581 4.15192 4.7549 3.65205 5.46754 3.35687C6.18017 3.06169 6.96433 2.98446 7.72085 3.13494C8.47738 3.28542 9.17229 3.65686 9.71772 4.20228C10.2631 4.74771 10.6346 5.44262 10.7851 6.19915C10.9355 6.95567 10.8583 7.73983 10.5631 8.45247C10.268 9.1651 9.76808 9.77419 9.12673 10.2027C8.48537 10.6313 7.73135 10.86 6.96 10.86C5.92604 10.8588 4.93478 10.4475 4.20365 9.71635C3.47253 8.98522 3.06124 7.99396 3.06 6.96Z"
                                fill="#4B5563"
                            />
                        </svg>
                        <input
                            className="relative text-sm leading-none text-gray-600 bg-white  rounded lg:max-w-[452px] w-full px-10 py-4 outline-none"
                            type="text"
                            name
                            id
                            placeholder="Search"
                        />
                    </div></div>
            </div>

            <div class=" text-black bg-white px-4 py-2 rounded w-full">
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8 overflow-auto" style={{height:'40rem'}}> 
                            <div class="overflow-hidden">

                                <table
                                    class="min-w-full border text-center text-sm font-light ">
                                    <thead class="border-b font-medium ">
                                        <tr>
                                            <th
                                                scope="col"
                                                class="border-r px-6 py-4 ">
                                                S.No.
                                            </th>
                                            <th
                                                scope="col"
                                                class="border-r px-6 py-4 ">
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                class="border-r px-6 py-4 ">
                                                Designation
                                            </th>
                                            <th
                                                scope="col"
                                                class="border-r px-6 py-4 ">
                                                Company
                                            </th>
                                            <th
                                                scope="col"
                                                class="border-r px-6 py-4 ">
                                                Branch
                                            </th>
                                            <th
                                                scope="col"
                                                class="border-r px-6 py-4 ">
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                class="border-r px-6 py-4 ">
                                                Phone No.
                                            </th>
                                            <th
                                                scope="col"
                                                class="border-r px-6 py-4 ">
                                                Action
                                            </th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {allEmployee?.map((itm, index) => (
                                            <tr class="border-b ">
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 ">
                                                    {index + 1}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 font-medium ">
                                                    {itm?.employeeData.name}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 ">
                                                    {itm?.employeeData.designation}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 ">
                                                    {itm?.employeeData.companyName}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 ">
                                                    {itm?.employeeData.branchName}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 ">
                                                    {itm?.employeeData.email}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 ">
                                                    {itm?.employeeData.phoneNumber}
                                                </td>

                                                <td role='button'
                                                    class="whitespace-nowrap border-r px-6 py-4 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>

                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StaffInfo