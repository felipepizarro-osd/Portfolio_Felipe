import React from 'react'

function TimeLine() {
  return (
    <div class="bg-white mt-16 px-4 mb-10 ">
        <h2 class="text-4xl mt-0  text-center mb-20 font-semibold tracking-tight text-gray-900 ">
        Education
        </h2>
        <ol class="items-center sm:flex max-w-4xl mx-auto py-6">
            <li class="relative mb-6 sm:mb-0 ">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-white-100 rounded-full ring-0 ring-white bg-white-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <img src="/liceologobg.png" alt="Icono" class="w-6 h-6" />
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pe-2">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-800">Liceo Politécnico de Ovalle</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">First License in Electronics, graduated with honors.</time>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2014-2015</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Mid-level Electronics technician, specialized in digital control systems, power electronics, and industrial processes. Awarded scholarships from Siemens for extracurricular projects in collaboration with the institution.</p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0 ">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pe-2">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-800">Computer World  </h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Computer World: Courses in Computing, Programming, and Accounting</time>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2016-2018</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Attended a local institute to study as a computer operator. Due to my performance during the course, I was hired as a teacher of basic to intermediate computing and programming, covering topics such as Microsoft Office platforms, operating systems and programing concepts.</p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0 ">
                <div class="flex items-center ">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <img src="/ucnlogobg.png" alt="Icono" class="w-6 h-6" />
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-1 sm:pe-2 ">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-800">Universidad Católica del Norte </h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Bachelor of Engineering in Computer Science and Informatics, graduated with distinction.</time>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2018 to June 2024</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400 py-1">Civil Engineer in Computer Science and Informatics, specialized in cybersecurity (Zero Trust and Purple Team pentesting). Active member of the robotics club and the university’s Andean Parliament, focusing on energy resources and technology in public policy</p>
                </div>
            </li>

    </ol>
    </div>
  )
}

export default TimeLine