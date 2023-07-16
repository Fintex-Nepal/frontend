import React from 'react'

const Test = () => {
  return (
    <>
      <label class="relative inline-flex items-center cursor-pointer">
        <input onChange={(e)=>console.log(e.target.checked)} type="checkbox" value="checked" class="sr-only peer" />
        <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-700"></div>
        <span class="ml-3 text-sm font-medium text-gray-900 ">Toggle me</span>
      </label>
    </>
  )
}

export default Test