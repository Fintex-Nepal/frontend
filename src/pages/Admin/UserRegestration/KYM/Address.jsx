import React, { useState, useRef, useEffect } from 'react'
import { districtsEnum,stateEnum } from '../../../../utils/Helper/Enums'

const Address = ({ onChangeHandler }) => {
    const [hasOverflow, setHasOverflow] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (el.scrollHeight > el.clientHeight) {
            setHasOverflow(true);
        }
    }, []);
    const maxHeight = hasOverflow ? 'max-h-[60vh]' : '';
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-max:h-[60vh] gap-5 mt-8'>
            <div className={`h-[60vh] overflow-y-auto ${maxHeight}`} ref={ref}>
                <section class="mt-7 max-w-7xl p-6 mx-auto bg-white rounded-md shadow-md ">
                    <h2 class="text-lg font-bold text-gray-700 capitalize text-center">Address</h2>
                    <form>
                        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label class="text-gray-700 " >Permanent VDC / Muncipality *</label>
                                <input onChange={onChangeHandler} name='PermanentVdcMunicipality' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "

                                />
                            </div>
                            <div>
                                <label class="text-gray-700 " >गा.वि.स./ना.पा*</label>
                                <input onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                                    name='PermanentVdcMunicipalityNepali'
                                />
                            </div>
                            <div>
                                <label class="text-gray-700 " >Permanent Tole / Village *</label>
                                <input onChange={onChangeHandler} name='PermanentToleVillage' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "

                                />
                            </div>
                            <div>
                                <label class="text-gray-700 " >स्थायी टोलको नाम*</label>
                                <input onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                                    name='PermanentToleVillageNepali'
                                />
                            </div>
                            <div>
                                <label class="text-gray-700 " >Permanent Ward No. </label>
                                <input onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                                    name='PermanentWardNumber'
                                />
                            </div>
                            <div>
                                <label class="text-gray-700 " >स्थायी वडा न.*</label>
                                <input onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                                    name='PermanentWardNumberNepali'
                                />
                            </div>
                            <div>
                                <label class="text-gray-700 " >Permanent District</label>
                                <select onChange={onChangeHandler} name='PermanentDistrict' class="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md h-10">
                                    <option disabled selected>Select</option>
                                    {districtsEnum?.map(district => (
                                        <option value={district.Code}>{district.Title}</option>
                                    ))}
                                </select>
                            </div>
                            {/* <div>
                                <label class="text-gray-700 " >District Code</label>
                                <select onChange={onChangeHandler} name='PermanentDistrictCode' class="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md h-10">
                                    <option disabled selected>Select</option>
                                    {districtsInNepal?.map(itm => (
                                        <option>{itm}</option>
                                    ))}
                                </select>
                            </div> */}
                            <div>
                                <label class="text-gray-700 " >स्थायी जिल्लाको नाम</label>
                                <select onChange={onChangeHandler} class="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md h-10"
                                    name='PermanentDistrictNepali'
                                >
                                    <option disabled selected>Select</option>
                                    {districtsEnum?.map(district => (
                                        <option value={district.Code}>{district.Title}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label class="text-gray-700 " >Permanent State</label>
                                <select onChange={onChangeHandler} name='PermanentState' class="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md h-10">
                                    <option disabled selected>Select</option>
                                    {stateEnum?.map(state => (
                                        <option value={state.Code}>{state.Title}</option>
                                    ))}
                                </select>
                            </div>
                            {/* <div>
                                <label class="text-gray-700 " >State Code</label>
                                <select onChange={onChangeHandler} name='PermanentStateCode' class="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md h-10">
                                    <option disabled selected>Select</option>
                                    {stateEnum?.map(state => (
                                        <option value={state.Code}>{state.Title}</option>
                                    ))}
                                </select>
                            </div> */}
                        </div>


                        <section class="mt-7 max-w-7xl p-6 mx-auto bg-white rounded-md shadow-md ">
                            <h2 class="text-lg font-bold text-gray-700 capitalize text-left">Temporary Address</h2>
                            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label class="text-gray-700 " >Temporary VDC / Muncipality *</label>
                                    <input onChange={onChangeHandler} name='PermanentVdcMunicipality' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "

                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700 " >अस्थायी गा.वि.स./ना.पा*</label>
                                    <input onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                                        name='PermanentVdcMunicipalityNepali'
                                    />
                                </div>

                                <div>
                                    <label class="text-gray-700 " >Temporary Tole / Village *</label>
                                    <input onChange={onChangeHandler} name='PermanentToleVillage' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "

                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700 " >अस्थायी टोलको नाम*</label>
                                    <input onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                                        name='PermanentToleVillageNepali'
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700 " >Temporary Ward No. </label>
                                    <input onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                                        name='PermanentWardNumber'
                                    />
                                </div>
                                <div>
                                    <label class="text-gray-700 " >स्थायी वडा न.*</label>
                                    <input onChange={onChangeHandler} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                                        name='PermanentWardNumberNepali'
                                    />
                                </div>


                                {/* <div>
                                    <label class="text-gray-700 " >Temporary District</label>
                                    <select onChange={onChangeHandler} name='PermanentDistrict' class="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md h-10">
                                        <option disabled selected>Select</option>
                                        {districtsEnum?.map(district => (
                                        <option value={district.Code}>{district.Title}</option>
                                    ))}
                                    </select>
                                </div> */}
                                <div>
                                    <label class="text-gray-700 " >Temporary District </label>
                                    <select onChange={onChangeHandler} name='PermanentDistrictCode' class="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md h-10">
                                        <option disabled selected>Select</option>
                                        {districtsEnum?.map(district => (
                                        <option value={district.Code}>{district.Title}</option>
                                    ))}
                                    </select>
                                </div>

                                <div>
                                    <label class="text-gray-700 " >अस्थायी जिल्लाको नाम</label>
                                    <select onChange={onChangeHandler} class="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md h-10"
                                        name='PermanentDistrictNepali'
                                    >
                                        <option disabled selected>Select</option>
                                        {districtsEnum?.map(district => (
                                        <option value={district.Code}>{district.Title}</option>
                                    ))}
                                    </select>
                                </div>
                                <div>
                                    <label class="text-gray-700 " >Temporary State</label>
                                    <select onChange={onChangeHandler} name='PermanentState' class="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md h-10">
                                        <option disabled selected>Select</option>
                                        {stateEnum?.map(state => (
                                        <option value={state.Code}>{state.Title}</option>
                                    ))}
                                    </select>
                                </div>
                                {/* <div>
                                    <label class="text-gray-700 " >State Code</label>
                                    <select onChange={onChangeHandler} name='PermanentStateCode' class="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md h-10">
                                        <option disabled selected>Select</option>
                                        {stateEnum?.map(state => (
                                        <option value={state.Code}>{state.Title}</option>
                                    ))}
                                    </select>
                                </div> */}
                            </div>
                        </section>
                    </form>
                </section >
            </div>
            {/* Table */}
            <div className={`h-[60vh] overflow-y-auto ${maxHeight}`} ref={ref}>

                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div class="flex items-center justify-between pb-4">
                        <label for="table-search" class="sr-only">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for items" />
                        </div>
                    </div>
                    <table class="w-full text-sm text-left text-gray-500 ">
                        <thead class="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50  ">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b  hover:bg-gray-50">

                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Microsoft Surface Pro
                                </th>
                                <td class="px-6 py-4">
                                    White
                                </td>
                                <td class="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td class="px-6 py-4">
                                    $1999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="1" class="font-medium text-blue-600 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr class="bg-white hover:bg-gray-50">

                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Apple iMac 27"
                                </th>
                                <td class="px-6 py-4">
                                    Silver
                                </td>
                                <td class="px-6 py-4">
                                    PC Desktop
                                </td>
                                <td class="px-6 py-4">
                                    $3999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="1" class="font-medium text-blue-600 hover:underline">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Address