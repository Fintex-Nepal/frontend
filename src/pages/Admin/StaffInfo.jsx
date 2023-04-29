
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { getAllEmployeeUrl } from '../../utils/Url'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StaffInfo = () => {
    const [allEmployee, setAllEmployee] = useState([]);
    const [onSearch, setonSearch] = useState();

    useEffect(() => {
        axios.get(getAllEmployeeUrl, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
            },
        })
            .then((res => {
                setAllEmployee(res.data);
                setonSearch(res.data)
            }))
            .catch(err => alert(err))
    }, [])
    const onSearchHandler = (e) => {
        setonSearch(
            allEmployee.filter((item) => item?.name.includes(e.target.value))
        );
    };


    const downloadExcel = () => {
        // Define the worksheet data
        const ws = XLSX.utils.json_to_sheet(allEmployee);

        // Define the workbook and add the worksheet to it
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Employee Data');

        // Define the filename and file type
        const fileName = 'employee_data.xlsx';
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

        // Convert the workbook to a buffer and save the file
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: fileType });
        saveAs(blob, fileName);
    };




    return (
        <>
            <div class="flex justify-between">
                <div class="left-div">
                    <button onClick={downloadExcel}
                        type="button"
                        class="px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-md text-white outline-none  shadow-lg transform active:scale-x-75 transition-transform mx-5 flex"
                    >
                        <svg class="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>

                        <span class="ml-2">Download</span>
                    </button>
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
                        <input onChange={onSearchHandler}
                            className="relative text-sm leading-none text-gray-600 bg-white  rounded lg:max-w-[452px] w-full px-10 py-4 outline-none"
                            type="text"
                            // name
                            id
                            placeholder="Search"
                        />
                    </div></div>
            </div>

            <div class=" text-black bg-white px-4 py-2 rounded w-full">
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8 overflow-auto" style={{ height: '40rem' }}>
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

                                        {allEmployee?.length && onSearch?.map((itm, index) => (
                                            <tr class="border-b ">
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 ">
                                                    {index + 1}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 font-medium ">
                                                    {itm?.name}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 ">
                                                    {itm?.designation}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 ">
                                                    {itm?.companyName}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 ">
                                                    {itm?.branchName}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 ">
                                                    {itm?.email}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 ">
                                                    {itm?.phoneNumber}
                                                </td>

                                                <td  role='button'
                                                    class="whitespace-nowrap border-r px-6 py-4 ">
                                                    <Link to={`/dashboard/employeedetails/${itm.userName}`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    </Link>
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