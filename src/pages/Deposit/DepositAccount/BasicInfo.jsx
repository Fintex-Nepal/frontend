import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { getAllDepositSchemeUrl, getAllEmployeesByBranch, getallClientsUrl } from '../../../utils/Url'
import axios from 'axios'
import { AccountStatusEnum, AccountTypeEnum, PeriodTypeEnum, RelationTypeEnum } from '../../../utils/Helper/Enums';

const BasicInfo = ({ onChangeHandler, allNonClosedDepositAccount }) => {
  const [allDepositScheme, setAllDepositScheme] = useState([]);
  const [allClients, setAllClients] = useState([])

  const [allBranchEmployee, setAllBranchEmployee] = useState()
  useEffect(() => {
    axios
      .get(getAllEmployeesByBranch, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
        },
      })
      .then((res) => setAllBranchEmployee(res.data))
      .catch((err) => {

        const errorData = err.response?.data?.errors;
        if (errorData) {
          Object.values(errorData).forEach((er) => {
            toast.warning(er[0], {
              position: 'top-right',
            });
          });
        } else {
          toast.error(err?.message, {
            position: 'top-right',
          });
        }
      });

  }, [])

  useEffect(() => {
    axios
      .get(getAllDepositSchemeUrl, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
        },
      })
      .then((res) => setAllDepositScheme(res.data))
      .catch((err) => {

        const errorData = err.response?.data?.errors;
        if (errorData) {
          Object.values(errorData).forEach((er) => {
            toast.warning(er[0], {
              position: 'top-right',
            });
          });
        } else {
          toast.error(err?.message, {
            position: 'top-right',
          });
        }
      });

    axios
      .get(getallClientsUrl, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
        },
      })
      .then((res) => setAllClients(res.data))
      .catch((err) => {

        const errorData = err.response?.data?.errors;
        if (errorData) {
          Object.values(errorData).forEach((er) => {
            toast.warning(er[0], {
              position: 'top-right',
            });
          });
        } else {
          toast.error(err?.message, {
            position: 'top-right',
          });
        }
      });

  }, []);

  return (
    <>
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md s
      name=''
      hadow-md dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Basic Info</h2>
        <form>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
            <div>
              <label class="text-gray-700" >Deposit Scheme</label>
              <select onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='depositSchemeId'
              >
                <option selected disabled>Select</option>
                {allDepositScheme?.map(scheme => (
                  <option value={scheme.id} >{scheme?.schemeName}</option>
                ))}
              </select>
            </div>

            <div>
              <label class="text-gray-700" >Client </label>
              <select onChange={onChangeHandler} type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='clientId'
              >
                <option selected disabled>Select</option>
                {allClients?.map(client => (
                  <option value={client?.id} >{`${client?.clientFirstName} -- ${client?.clientId}`}</option>
                ))}
              </select>
            </div>
            <div>
              <label class="text-gray-700" >Account Type</label>
              <select onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='accountType'
              >
                <option selected disabled>Select</option>
                {AccountTypeEnum?.map(account => (
                  <option value={account?.Id} >{account?.Name}</option>
                ))}
              </select>
            </div>
            <div>
              <label class="text-gray-700" >Period Type</label>
              <select onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='periodType'
              >
                <option selected disabled>Select</option>
                {PeriodTypeEnum?.map(periodType => (
                  <option value={periodType?.Id} >{periodType?.Name}</option>
                ))}
              </select>
            </div>
            <div>
              <label class="text-gray-700" >Period </label>
              <input onChange={onChangeHandler} type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='period'
              />
            </div>
            <div>
              <label class="text-gray-700" >Opeing Date</label>
              <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='NepaliOpeningDate'
              />
            </div>
            <div>
              <label class="text-gray-700" >Joint Client Id </label>
              <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='jointClientIds'
              />
            </div>
            <div>
              <label class="text-gray-700" >Intrest Rate </label>
              <input onChange={onChangeHandler} type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='interestRate'
              />
            </div>
            <div>
              <label class="text-gray-700" >Nominee Name </label>
              <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='nomineeName'
              />
            </div>
            <div>
              <label class="text-gray-700" >Nominee Relation</label>
              <select onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='relation'
              >
                <option selected disabled>Select</option>
                {RelationTypeEnum?.map(relation => (
                  <option value={relation?.ID} >{relation?.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label class="text-gray-700" >Intrest Posting Account</label>
              <select onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='interestPostingAccountId'
              >
                <option selected disabled>Select</option>
                {allNonClosedDepositAccount?.map(data => (
                  <option value={data?.depositAccount?.id} >{data?.depositAccount?.accountNumber}</option>
                ))}
              </select>
            </div>
            <div>
              <label class="text-gray-700" >Mature Intrest Posting Account</label>
              <select onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='matureInterestPostingAccountId'
              >
                <option selected disabled>Select</option>
                {allNonClosedDepositAccount?.map(data => (
                  <option value={data?.depositAccount?.id} >{data?.depositAccount?.accountNumber}</option>
                ))}
              </select>
            </div>
            <div>
              <label class="text-gray-700" >STATUS</label>
              <select name='status' onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md ">
                <option selected disabled>Select</option>
                {AccountStatusEnum?.map(accountStatus => (
                  <option value={accountStatus.ID}>{accountStatus.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label class="text-gray-700" >Description</label>
              <input onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md "
                name='description'
              />
            </div>
            <div>
              <label class="text-gray-700" >Reffered By</label>
              <select name='referredByEmployeeId' onChange={onChangeHandler} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md ">
                <option selected disabled>Select</option>
                {allBranchEmployee?.map(employee => (
                  <option value={employee?.id}>{employee?.name}</option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </section>
      <ToastContainer />
    </>
  )
}

export default BasicInfo