import React from 'react'
import { districtsInNepal } from '../../../../utils/Districts'
import { districtsInNepalNepali } from '../../../../utils/Districts'
import { statesInNepal } from '../../../../utils/Districts'

const Address = () => {
    return (
        <section class="mt-7 max-w-7xl p-6 mx-auto bg-white rounded-md shadow-md ">
            <h2 class="text-lg font-bold text-gray-700 capitalize text-center">Basic Information</h2>
            <form>

                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label class="text-gray-700 " for="username">VDC / Muncipality *</label>
                        <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                            required
                        />
                    </div>
                    <div>
                        <label class="text-gray-700 " for="emailAddress">गा.वि.स./ना.पा*</label>
                        <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
                    </div>

                </div>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-4">
                    <div>
                        <label class="text-gray-700 " for="username">Tole / Village *</label>
                        <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                            required
                        />
                    </div>
                    <div>
                        <label class="text-gray-700 " for="emailAddress">टोलको नाम*</label>
                        <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
                    </div>
                    <div>
                        <label class="text-gray-700 " for="passwordConfirmation">Ward No. *</label>
                        <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
                    </div>
                    <div>
                        <label class="text-gray-700 " for="passwordConfirmation">वडा न.*</label>
                        <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
                    </div>
                </div>
                <div class="grid mt-4 grid-cols-1 gap-6 sm:grid-cols-4">


                    <div>
                        <label class="text-gray-700 " for="passwordConfirmation">District</label>
                        <select class="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md h-10">
                            <option disabled selected>Select</option>
                            {districtsInNepal?.map(itm => (
                                <option>{itm}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label class="text-gray-700 " for="passwordConfirmation">जिल्लाको नाम *</label>
                        <select class="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md h-10">
                            <option disabled selected>Select</option>
                            {districtsInNepalNepali?.map(itm => (
                                <option>{itm}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label class="text-gray-700 " for="passwordConfirmation">State</label>
                        <select class="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md h-10">
                            <option disabled selected>Select</option>
                            {statesInNepal?.map(itm => (
                                <option>{itm}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <section class="mt-7 max-w-7xl p-6 mx-auto bg-white rounded-md shadow-md ">
                    <h2 class="text-lg font-bold text-gray-700 capitalize text-left">Web Address</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Email</label>
                            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Website</label>
                            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
                        </div>
                    </div>
                </section>
                <section class="mt-7 max-w-7xl p-6 mx-auto bg-white rounded-md shadow-md ">
                    <h2 class="text-lg font-bold text-gray-700 capitalize text-left">Temporary Address</h2>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-gray-700 " for="username">VDC / Muncipality *</label>
                            <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                                required
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="emailAddress">गा.वि.स./ना.पा*</label>
                            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
                        </div>

                    </div>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-4">
                        <div>
                            <label class="text-gray-700 " for="username">Tole / Village *</label>
                            <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                                required
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="emailAddress">टोलको नाम*</label>
                            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">Ward No. *</label>
                            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">वडा न.*</label>
                            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
                        </div>
                    </div>
                    <div class="grid mt-4 grid-cols-1 gap-6 sm:grid-cols-4">


                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">District</label>
                            <select class="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md h-10">
                                <option disabled selected>Select</option>
                                {districtsInNepal?.map(itm => (
                                    <option>{itm}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">जिल्लाको नाम *</label>
                            <select class="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md h-10">
                                <option disabled selected>Select</option>
                                {districtsInNepalNepali?.map(itm => (
                                    <option>{itm}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label class="text-gray-700 " for="passwordConfirmation">State</label>
                            <select class="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md h-10">
                                <option disabled selected>Select</option>
                                {statesInNepal?.map(itm => (
                                    <option>{itm}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div class="flex justify-end mt-6">
                        <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </section>
            </form>
        </section >
    )
}

export default Address