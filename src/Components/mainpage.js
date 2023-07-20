import React from 'react'
import Login from './Loginform.js'
import MainpageData from './ContentHome.js'
import Createaccount from './Createaccount.js'
import ButtonContent from './ButtonContent.js'
import hompagecss from '../../src/ComponentsCSS/homepage.css'
import Studynotes from "./studynotes.js"
import Studycss from '../../src/ComponentsCSS/studymaterial.css'

function Mainpage() {
  return (
    <div className='HomePageData'>
      <Studynotes Heading="Study Material"/>
    
      <ButtonContent/>
    </div>
  )
}

export default Mainpage
