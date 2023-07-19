import React from 'react'
import myCoursecss from './../ComponentsCSS/homepage.css'
import Header from './Header'
import Footer from './Footer'
import Maincontent from './Maincontent'

const InstuteTeaching = () => {
  return (
    <>
    <Header/>
    <div className='mainMycoursecss'>
    <Maincontent buttonText="Institute"/>
    <Footer/>  
    </div>
    </>
  )
}

export default InstuteTeaching

