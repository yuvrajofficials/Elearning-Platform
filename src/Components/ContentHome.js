import React from 'react'
import ImageofContent from './../Images/Logo.png'
import hompagecss from '../../src/ComponentsCSS/homepage.css'
import Studynotes from "./../Components/studynotes"

function ContentHome() {
  return (
    <div>
       <Studynotes/>
      {/* <img src={ImageofContent} class="imgthumbnail" alt="..."></img> */}
    </div>
  )
}

export default ContentHome
