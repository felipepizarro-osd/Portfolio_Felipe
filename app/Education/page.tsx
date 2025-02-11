import React from 'react'
import Navbar from '../Home/components/navbar'
import Timeline from './components/TimeLine'
import TimeLineExp from './components/TimeLineExp'
import Content from './components/Content'
import EducationFiles from './components/EducationFiles'
function page() {
  return (
    <main>
        <div>
            <Navbar />
            <Timeline />
            <EducationFiles />
            <Content />
            <TimeLineExp />
        </div>
    </main>
  )
}

export default page