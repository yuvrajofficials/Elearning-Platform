import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Mycourseout from '../Components/Mycourseout'
import MyCourseContent from '.././ComponentsCSS/homepage.css'
import Createaccount from '../Components/Createaccount'
import Loginform from '../Components/Loginform'
import CourseList from '../Components/CourseList'

const MyCourse = () => {
  return (
    <div>
      <Header/>
      <CourseList/>
      <Footer/>
    </div>
  )
}

export default MyCourse
