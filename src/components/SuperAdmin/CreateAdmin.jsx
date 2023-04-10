import React from 'react'

const CreateAdmin = () => {
    return (
        <>
            <section class="py-16 bg-stone-100 font-poppins dark:bg-gray-800">
                <div
                    class="max-w-4xl px-4 py-4 mx-auto bg-white border shadow-sm dark:border-gray-900 dark:bg-gray-900 lg:py-4 md:px-6">
                    <div class="mb-10 ">
                        <h2 class="pb-2 mb-2 text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">
                            Basic Info
                        </h2>
                        <p class="text-sm dark:text-gray-400">
                            Lorem ipsum dor amet ispicusus isopiros amet ispis lorem
                        </p>
                    </div>
                    <form >
                        <div class="mb-6">
                            <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">User Name</label>
                            <input type="text"
                                class="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
                                placeholder="User Name...." required
                                name='userName'
                            />
                        </div>
                        <div class="mb-6">
                            <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Password</label>
                            <input type='password' placeholder="*******" required
                                name='password'
                                class="block w-full px-4 py-3 mb-3 leading-tight placeholder-gray-400 bg-gray-100 border rounded ark:border-gray-800 dark:bg-gray-800 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 " />
                        </div>
                        <div class="mb-6">
                            <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Confirm Password</label>
                            <input type='password' placeholder="*******" required
                                name='password'
                                class="block w-full px-4 py-3 mb-3 leading-tight placeholder-gray-400 bg-gray-100 border rounded ark:border-gray-800 dark:bg-gray-800 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 " />
                        </div>
                        <div class="mb-6">
                            <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Company Name</label>
                            <input type='password' placeholder="Company Name...." required
                                name='companyName'
                                class="block w-full px-4 py-3 mb-3 leading-tight placeholder-gray-400 bg-gray-100 border rounded ark:border-gray-800 dark:bg-gray-800 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 " />
                        </div>
                        <div class="mb-6">
                            <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Branch</label>
                            <input type='password' placeholder="Branch..." required
                                name='branch'
                                class="block w-full px-4 py-3 mb-3 leading-tight placeholder-gray-400 bg-gray-100 border rounded ark:border-gray-800 dark:bg-gray-800 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 " />
                        </div>

                        <button type='submit' class="px-4 py-2 text-base text-gray-100 bg-blue-600 rounded hover:bg-blue-500">Send</button>

                    </form>
                </div >
            </section >
        </>
    )
}

export default CreateAdmin