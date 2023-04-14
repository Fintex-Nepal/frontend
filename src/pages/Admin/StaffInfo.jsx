import React from 'react'
import EmployeeCard from '../../utils/EmployeeCard'

const StaffInfo = () => {
    return (
        <>
            <section class="flex items-center mt-12 lg:h-screen font-poppins dark:bg-gray-900 ">
                <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                        <EmployeeCard />
                        <EmployeeCard />
                        <EmployeeCard />
                        <EmployeeCard />

                    </div>
                </div>
            </section>
        </>
    )
}

export default StaffInfo