import React from 'react'

function TimeLine() {
  return (
    <div className="bg-white mt-16 px-4 mb-10 ">
        <h2 className="text-4xl mt-20  text-center mb-1 font-semibold tracking-tight text-gray-900 ">
        Education
        </h2>
        <ol className="lg:inline-grid lg:grid-cols-3 lg:grid-rows-1 gap-0 sm-flex py-24 mx-auto px-26 md-flex " >
            <li className="relative mb-6 sm:mb-10 left-0">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8 ">
                    <h3 className="text-lg font-semibold text-black">Liceo Politécnico de Ovalle</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">First License in Electronics, graduated with honors.</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Mid-level Electronics technician, specialized in digital control systems, power electronics, and industrial processes. Awarded scholarships from Siemens for extracurricular projects in collaboration with the institution.</p>
                </div>
            </li>
            <li className="relative mb-6 sm:mb-10 left-1">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                    <h3 className="text-lg font-semibold text-black">Computer World</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Computer World: Courses in Computing, Programming, and Accounting</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Attended a local institute to study as a computer operator. Due to my performance during the course, I was hired as a teacher of basic to intermediate computing and programming, covering topics such as Microsoft Office platforms, operating systems and programing concepts.</p>
                </div>
            </li>
            <li className="relative mb-6 sm:mb-10 left-2">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                    <h3 className="text-lg font-semibold text-black">Universidad Católica del Norte</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Bachelor of Engineering in Computer Science and Informatics, graduated with distinction.</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Civil Engineer in Computer Science and Informatics, specialized in cybersecurity (Zero Trust and Purple Team pentesting). Active member of the robotics club and the university&apos;s Andean Parliament, focusing on energy resources and technology in public policy</p>
                </div>
            </li>
        </ol>
    </div>
  )
}

export default TimeLine