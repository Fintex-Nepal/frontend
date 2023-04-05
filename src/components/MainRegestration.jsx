import React, { useState } from 'react';
const MainRegestration = () => {
    const [form1Data, setForm1Data] = useState({});
    const [form2Data, setForm2Data] = useState({});
    const [activeForm, setActiveForm] = useState(1);
    const handleForm1Submit = (event) => {
        event.preventDefault();
        // handle form 1 submission logic
    }

    const handleForm2Submit = (event) => {
        event.preventDefault();
        // handle form 2 submission logic
    }
    console.log(activeForm === 2);
    return (
        <>
            <div>
                <div class="flex space-x-4">
                    {/* <button onClick={() => setActiveForm(1)}>Group Setup</button>
                    <button onClick={() => setActiveForm(2)}>Main Ledger Setup</button> */}

                    <button class={` hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${activeForm === 1 ? 'bg-blue-700' : 'bg-blue-400'} `} onClick={() => setActiveForm(1)}>Group Setup</button>
                    <button class={` hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${activeForm === 2 ? 'bg-blue-700' : 'bg-blue-400'} `} onClick={() => setActiveForm(2)}>Main Ledger Setup</button>
                    {/* {`bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${activeForm === 2 ? 'active' : ''}`} */}
                </div>

                {activeForm === 1 &&
                    <form>
                        <div class="space-y-12">
                            <div class="border-b border-gray-900/10 pb-12">
                                {/* <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2> */}
                                <div class=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div class="sm:col-span-3">
                                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Account Type</label>
                                        <div class="mt-2">
                                            <select id="accountType" name="accountType" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                            <option value="" selected disabled>Select Account</option>
                                                <option>Assets</option>
                                                <option>l</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                        <div class="mt-2">
                                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-4">
                                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                        <div class="mt-2">
                                            <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                        <div class="mt-2">
                                            <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                                        <div class="mt-2">
                                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2 sm:col-start-1">
                                        <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                                        <div class="mt-2">
                                            <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                                        <div class="mt-2">
                                            <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                                        <div class="mt-2">
                                            <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border-b border-gray-900/10 pb-12">
                                <h2 class="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
                                <p class="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

                                <div class="mt-10 space-y-10">
                                    <fieldset>
                                        <legend class="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
                                        <div class="mt-6 space-y-6">
                                            <div class="relative flex gap-x-3">
                                                <div class="flex h-6 items-center">
                                                    <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                </div>
                                                <div class="text-sm leading-6">
                                                    <label for="comments" class="font-medium text-gray-900">Comments</label>
                                                    <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                                </div>
                                            </div>
                                            <div class="relative flex gap-x-3">
                                                <div class="flex h-6 items-center">
                                                    <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                </div>
                                                <div class="text-sm leading-6">
                                                    <label for="candidates" class="font-medium text-gray-900">Candidates</label>
                                                    <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                                                </div>
                                            </div>
                                            <div class="relative flex gap-x-3">
                                                <div class="flex h-6 items-center">
                                                    <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                </div>
                                                <div class="text-sm leading-6">
                                                    <label for="offers" class="font-medium text-gray-900">Offers</label>
                                                    <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <legend class="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
                                        <p class="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
                                        <div class="mt-6 space-y-6">
                                            <div class="flex items-center gap-x-3">
                                                <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Everything</label>
                                            </div>
                                            <div class="flex items-center gap-x-3">
                                                <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Same as email</label>
                                            </div>
                                            <div class="flex items-center gap-x-3">
                                                <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">No push notifications</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                            <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                        </div>
                    </form>

                }

                {activeForm === 2 &&
                    <form class="w-full max-w-lg">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Password
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                                <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                    City
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                            </div>
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                    State
                                </label>
                                <div class="relative">
                                    <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option>New Mexico</option>
                                        <option>Missouri</option>
                                        <option>Texas</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                    Zip
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                            </div>
                        </div>
                    </form>
                }
            </div>
        </>
    )
}

export default MainRegestration