import React from 'react'
import { courses } from '../Data'
import '../css/Course.css'
import Course from './Course'

function Courses() {
  return (
    <div className="course-main">
        {courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
  )
}

export default Courses