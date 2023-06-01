import React, { useState, useRef, useEffect } from 'react'
import { districtsInNepal } from '../../../../utils/Districts';

const BasicInfo = () => {
  const [hasOverflow, setHasOverflow] = useState(false);
  const [clientInfo, setClientInfo] = useState({});
  const [clientContact, setClientContact] = useState({})
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (el.scrollHeight > el.clientHeight) {
      setHasOverflow(true);
    }
  }, []);
  const maxHeight = hasOverflow ? 'max-h-[60vh]' : '';

  const onChangeClientInfo = (event) => {
    const { name, value } = event.target;
    setClientInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const onChnageClientContact = (event) => {
    const { name, value } = event.target;

    setClientContact(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-max:h-[60vh] gap-5 mt-8'>
      <div className={`h-[60vh] overflow-y-auto ${maxHeight}`} ref={ref}>
        <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md   border-b-2">
          <h2 class="text-lg font-semibold text-gray-700 capitalize ">Basic Information</h2>
          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label class="text-gray-700 " >First Name*</label>
                <input onChange={onChangeClientInfo} name='firstName' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Middle Name </label>
                <input onChange={onChangeClientInfo} name='middleName' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " >Last Name</label>
                <input onChange={onChangeClientInfo} name='lastName' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">

              <div>
                <label class="text-gray-700 " >नाम थर </label>
                <input onChange={onChangeClientInfo} name='nepaliName' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                  required
                />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label class="text-gray-700 " >Gender </label>
                <input onChange={onChangeClientInfo} name='gender' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " >Cast</label>
                <input onChange={onChangeClientInfo} name='cast' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
              </div>

              <div>
                <label class="text-gray-700 " >Date of Birth</label>
                <input onChange={onChangeClientInfo} name='dateOfBirth' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
              </div>
            </div>


            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label class="text-gray-700 " >Nationality</label>
                <input onChange={onChangeClientInfo} name='nationality' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Occupation</label>
                <input onChange={onChangeClientInfo} name='occupation' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Education Status</label>
                <input onChange={onChangeClientInfo} name='educationStatus' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Citizenship Number</label>
                <input onChange={onChangeClientInfo} name='citizenshipNumber' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Issue District</label>
                <select onChange={onChangeClientInfo} name='issueDistrict' required class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  ">
                  <option selected disabled>Select</option>
                  {districtsInNepal?.map(district => (
                    <option>{district}</option>
                  ))}
                </select>
              </div>
              <div>
                <label class="text-gray-700 " >Issued Date</label>
                <input onChange={onChangeClientInfo} type='date' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>


              <div>
                <label class="text-gray-700 " >Marital Status</label>
                <input onChange={onChangeClientInfo} name='maritalStatus' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>

              <div>
                <label class="text-gray-700 " >Nationality Id Status</label>
                <input onChange={onChangeClientInfo} name='nationalityIdStatus' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>

              <div>
                <label class="text-gray-700 " >Voiting ID</label>
                <input onChange={onChangeClientInfo} name='votingId' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Other Info</label>
                <input onChange={onChangeClientInfo} name='otherInfo' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Other Info 2</label>
                <input onChange={onChangeClientInfo} name='otherInfo2' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Income Source</label>
                <input onChange={onChangeClientInfo} name='incomeSource' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " >खाता खोल्ने उद्देश्य</label>
                <input onChange={onChangeClientInfo} name='accountPurposeNepali' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >अन्य लघुवित्तको सदस्य</label>
                <input onChange={onChangeClientInfo} name='ifMemberOfOtherParty' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
            </div>

            {/* Contact Section */}


            <h2 class="text-lg font-bold  text-gray-700 capitalize text-left mt-4">Contact Details</h2>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label class="text-gray-700 " >Mobile No. </label>
                <input onChange={onChnageClientContact} name='mobileNumber1' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " >Mobile No. </label>
                <input onChange={onChnageClientContact} name='mobileNumber2' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " >Telephone No.</label>
                <input onChange={onChnageClientContact} name='telephoneNumber1' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Telephone No.</label>
                <input onChange={onChnageClientContact} name='telephoneNumber2' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Email</label>
                <input onChange={onChnageClientContact} name='email' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Website</label>
                <input onChange={onChnageClientContact} name='website' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
          </form>
        </section>
      </div>
      {/* Table */}
      <div className={`h-[60vh] overflow-y-auto ${maxHeight}`} ref={ref}>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div class="flex items-center justify-between pb-4">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
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

export default BasicInfo