import React from 'react'

const BasicInfo = () => {
  return (
    <section class="mt-7 max-w-7xl p-6 mx-auto bg-white rounded-md shadow-md ">
      <h2 class="text-lg font-bold text-gray-700 capitalize text-center">Basic Information</h2>

      <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-5">
          <div>
            <label class="text-gray-700 " for="username">Mamber Number *</label>
            <input name='memberNumber' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
              required
            />
          </div>
          <div>
            <label class="text-gray-700 " for="emailAddress">Account Type *</label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>

          <div>
            <label class="text-gray-700 " for="password">Regestration Data *</label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>

          <div>
            <label class="text-gray-700 " for="passwordConfirmation">Mamber Type *</label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
          <div>
            <label class="text-gray-700 " for="passwordConfirmation">Pan Number *</label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
        </div>
        <div class="grid mt-4  grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <label class="text-gray-700 " for="passwordConfirmation">First Name *</label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
          <div>
            <label class="text-gray-700 " for="passwordConfirmation">Middle name </label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
          <div>
            <label class="text-gray-700 " for="passwordConfirmation">Last Number *</label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
        </div>

        <div class="grid mt-4 grid-col-1 sm:grid-cols-2 gap-6">
          <div>
            <label class="text-gray-700 " for="passwordConfirmation">Sadeshya Name </label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
          <div>
            <label class="text-gray-700 " for="passwordConfirmation">Jaati Number </label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-6 mt-4'>
          <div>
            <label class="text-gray-700 " for="passwordConfirmation">Share Type </label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
          <div>
            <label class="text-gray-700 " for="passwordConfirmation">Gender </label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
          <div>
            <label class="text-gray-700 " for="passwordConfirmation">Date Of Birth </label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
          <div>
            <label class="text-gray-700 " for="passwordConfirmation">Occupation </label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-6 mt-4'>
          <div>
            <label class="text-gray-700 " for="passwordConfirmation">Citizenship No. </label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
          <div>
            <label class="text-gray-700 " for="passwordConfirmation">Issue District</label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
          <div>
            <label class="text-gray-700 " for="passwordConfirmation">Issue Date</label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
          <div>
            <label class="text-gray-700 " for="passwordConfirmation">Nationality</label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 mt-2 gap-6">
          <div>
            <label class="text-gray-700 " for="passwordConfirmation">Relation</label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
          <div>
            <label class="text-gray-700 " for="passwordConfirmation">Yo filed ma k rakhne?</label>
            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
          </div>
        </div>


        <section class="mt-7 max-w-7xl p-6 mx-auto bg-white rounded-md border-2 border-gray-300 ">
          <h2 class="text-lg font-bold text-gray-700 capitalize text-left">Contact Details</h2>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-4 ">
            <div>
              <label class="text-gray-700 " for="passwordConfirmation">Mobile No*</label>
              <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
            </div>
            <div>
              <label class="text-gray-700 " for="passwordConfirmation">Mobile No.</label>
              <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
            </div>
            <div>
              <label class="text-gray-700 " for="passwordConfirmation">Telephone No.*</label>
              <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
            </div>
            <div>
              <label class="text-gray-700 " for="passwordConfirmation">Telephone No</label>
              <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div>
              <label class="text-gray-700 " for="passwordConfirmation">Father Name</label>
              <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
            </div>
            <div>
              <label class="text-gray-700 " for="passwordConfirmation">बुवाको नाम</label>
              <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div>
              <label class="text-gray-700 " for="passwordConfirmation">Grand Father Name</label>
              <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
            </div>
            <div>
              <label class="text-gray-700 " for="passwordConfirmation">बाजेको नाम </label>
              <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
            </div>
          </div>
        </section>
        <div class="flex justify-end mt-6">
          <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
      </form>
    </section >
  )
}

export default BasicInfo