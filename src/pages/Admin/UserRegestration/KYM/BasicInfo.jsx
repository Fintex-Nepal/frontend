import React, { useState, useRef, useEffect } from 'react'
import { genderTypeEnum, casteEnum ,shareTypeEnum,ClientTypeEnum, clientUnitEnum, clientGroupEnum,districtsEnum, maritalStatusEnum} from '../../../../utils/Helper/Enums';

const BasicInfo = ({onChangeHandler}) => {
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

        <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md   border-b-2">
          <h2 class="text-lg font-semibold text-gray-700 capitalize ">Client Details</h2>
          <form >
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " >Client Type</label>
                <select onChange={onChangeHandler} name='ClientType' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " >
                  <option selected disabled>Select</option>
                  {ClientTypeEnum?.map(clientType=>(
                    <option value={clientType.Id} >{clientType.Name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label class="text-gray-700 " >Share Type</label>
                <select onChange={onChangeHandler} name='ShareType' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " >
                 <option disabled selected>Select</option>
                 {shareTypeEnum?.map(shareType=>(
                  <option value={shareType.Id}>{shareType.Name}</option>
                 ))}
                </select>
              </div>
              <div>
                <label class="text-gray-700 " >Client Group ID</label>
                <select onChange={onChangeHandler} name='ClientGroupId' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " >
                 <option disabled selected>Select</option>
                 {clientGroupEnum?.map(clientGroup=>(
                  <option value={clientGroup.id}>{clientGroup.code}</option>
                 ))}
                </select>
               
              </div>
              <div>
                <label class="text-gray-700 " >Client Unit ID</label>
                <select onChange={onChangeHandler} name='ClientUnitId' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " >
                  <option selected disabled>Select</option>
                  {clientUnitEnum?.map(clientid=>(
                    <option value={clientid.id}>{clientid.code}</option>
                  ))}
                </select>
               
              </div>
            </div>
            <h2 class="mt-6 text-lg font-semibold text-gray-700 capitalize ">Basic Information</h2>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
             
              <div>
                <label class="text-gray-700 " >First Name*</label>
                <input onChange={onChangeHandler} name='ClientFirstName' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Middle Name </label>
                <input onChange={onChangeHandler} name='ClientMiddleName' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " >Last Name *</label>
                <input onChange={onChangeHandler} name='ClientLastName' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">

              <div>
                <label class="text-gray-700 " >नाम थर </label>
                <input onChange={onChangeHandler} name='ClientNepaliName' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                  required
                />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " >Gender</label>
                <select onChange={onChangeHandler} name='ClientGenderCode' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" >
                  <option selected disabled>Select</option>
                  {genderTypeEnum?.map(gender => (
                    <option value={gender.Id}>{gender.Name}</option>
                  ))}
                </select>
              </div>
              {/* <div>
                <label class="text-gray-700 " >Cast</label>
                <input onChange={onChangeHandler} name='ClientCast' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
              </div> */}

              <div>
                <label class="text-gray-700 " >Cast</label>
                <select onChange={onChangeHandler} name='ClientCastCode ' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" >
                  <option disabled selected>Select</option>
                  {casteEnum?.map(caste => (
                    <option value={caste.Id}>{caste.Name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label class="text-gray-700 " >Date of Birth</label>
                <input type='date' onChange={onChangeHandler} name='ClientDateOfBirth' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
              </div>
              <div>
                <label class="text-gray-700 " >Nationality</label>
                <input onChange={onChangeHandler} name='ClientNationality' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Occupation</label>
                <input onChange={onChangeHandler} name='ClientOccupation' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Education Status</label>
                <input onChange={onChangeHandler} name='ClientEducationStatus' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Citizenship Number</label>
                <input onChange={onChangeHandler} name='ClientCitizenshipNumber' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Issue District</label>
                <select onChange={onChangeHandler} name='ClientCitizenShipIssueDistrict' required class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  ">
                  <option selected disabled>Select</option>
                  {districtsEnum?.map(district => (
                    <option value={district.Code}>{district.Title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label class="text-gray-700 " >Issued Date</label>
                <input onChange={onChangeHandler} type='date' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "

                  name='ClientCitizenShipIssueDate '
                />
              </div>
              <div>
                <label class="text-gray-700 " >Pan Number</label>
                <input onChange={onChangeHandler} name='ClientPanNumber' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Marital Status</label>
                <select onChange={onChangeHandler} name='ClientMartialStatusCode' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " >
                  <option disabled selected>Select</option>
                  {maritalStatusEnum?.map(maritalStatus=>(
                    <option value={maritalStatus.Code}>{maritalStatus.Title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label class="text-gray-700 " >Nationality Id Status</label>
                <input onChange={onChangeHandler} name='ClientNationalityIdStatus' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Voiting ID</label>
                <input onChange={onChangeHandler} name='ClientVotingId' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Other Info</label>
                <input onChange={onChangeHandler} name='ClientOtherInfo' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Other Info 2</label>
                <input onChange={onChangeHandler} name='ClientOtherInfo2' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Income Source</label>
                <input onChange={onChangeHandler} name='ClientIncomeSource' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >खाता खोल्ने उद्देश्य</label>
                <input onChange={onChangeHandler} name='ClientAccountPurposeNepali' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >अन्य लघुवित्तको सदस्य</label>
                <input onChange={onChangeHandler} name='ClientIfMemberOfOtherParty' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>

            </div>

            {/* Contact Section */}


            <h2 class="text-lg font-bold  text-gray-700 capitalize text-left mt-4">Contact Details</h2>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label class="text-gray-700 " >Mobile No. </label>
                <input onChange={onChangeHandler} name='ClientMobileNumber1' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " >Mobile No. </label>
                <input onChange={onChangeHandler} name='ClientMobileNumber2' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  "
                  required
                />
              </div>
              <div>
                <label class="text-gray-700 " >Telephone No.</label>
                <input onChange={onChangeHandler} name='ClientTelephoneNumber1' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Telephone No.</label>
                <input onChange={onChangeHandler} name='ClientTelephoneNumber2' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Email</label>
                <input onChange={onChangeHandler} name='ClientEmail' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
              <div>
                <label class="text-gray-700 " >Website</label>
                <input onChange={onChangeHandler} name='ClientWebsite' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " />
              </div>
            </div>
            {/* <div class="flex justify-end mt-6">
              <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div> */}
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

export default BasicInfo