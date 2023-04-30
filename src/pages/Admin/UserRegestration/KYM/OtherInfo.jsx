import React from 'react'

const OtherInfo = () => {
  return (
    <section class="mt-7 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
      <h2 class="text-lg font-semibold text-gray-700 capitalize">Other Information</h2>
      <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 " for="username">Username</label>
            <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>

          <div>
            <label class="text-gray-700 " for="emailAddress">Email Address</label>
            <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>

          <div>
            <label class="text-gray-700 " for="password">Password</label>
            <input id="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>

          <div>
            <label class="text-gray-700 " for="passwordConfirmation">Password Confirmation</label>
            <input id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
        </div>

        <div class="flex justify-end mt-6">
          <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
      </form>
    </section>
  )
}

export default OtherInfo