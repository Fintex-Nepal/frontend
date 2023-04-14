import React from 'react'
import EmployeeCard from '../../utils/EmployeeCard'

const StaffInfo = () => {
    const employeeData=[
        {
           name:'Samir Alam',
           designation:'CEO',
           place:'Birgunj',
           email:'samiramrullah@gmail.com',
        },
        {
            name:'Ashish',
            designation:'CEO',
            place:'Chitwan',
            email:'ashihish@gmail.com',
         },
         {
            name:'Sahil',
            designation:'CEO',
            place:'Birgunj',
            email:'sahil@gmail.com',
         },
         {
            name:'Sajid',
            designation:'CEO',
            place:'Birgunj',
            email:'sajid@gmail.com',
         }
    ]
    return (
        <>
            <section class="flex items-center md:mt-12 lg:h-screen font-poppins dark:bg-gray-900 ">
                <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                        {employeeData?.map((itm=>(
                            <EmployeeCard name={itm.name} designation={itm.designation} place={itm.place} email={itm.email}/>
                        )))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default StaffInfo