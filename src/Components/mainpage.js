import React from 'react'
import Login from './loginform.js'
import MainpageData from './ContentHome.js'
import Createaccount from './createaccount.js'
import ButtonContent from './buttonContent.js'
function mainpage() {
  return (
    <div className='HomePageData'>
      <MainpageData/>
    
      <ButtonContent/>
    </div>
  )
}

export default mainpage
