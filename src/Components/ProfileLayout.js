import React from 'react'
import hompagecss from '../../src/ComponentsCSS/homepage.css'
import DropDownProfile from './DropDownProfile'
const ProfileLayout = () => {
  return (
    <div className='mainMycoursecss'>
         <form id='Mainclassidcourse' className='MainMycourse '>
      <div className='row' >

        <div className='col-md-4'>
          <i class="bi bi-person "></i><svg xmlns="http://www.w3.org/2000/svg" width="166" height="166" fill="currentColor" class="bi bi-person profilePic" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
        </div> 
        <div className='col-md-6'>
          <div className='profile-head'>
            <h5></h5>
            <h3>Name : Yuvraj P.Sankilwar</h3>
            <h4>Skills : Web Developer </h4>
            <h4>  Software Developer </h4>
            <h4> React Developer </h4>
            <h4> Qualifications : B.Tech Graduate  </h4>
          </div>
        </div>
 
      </div>
    </form>
    <DropDownProfile Item1="Past History" Item2="" Item3="" category="History"/>
    <DropDownProfile Item3="" Item1="Your Classroom Progress" Item2="Quiz Score" category="Progress"/>
    <DropDownProfile Item1="Ask Doubts" Item2="FAQ" Item3="" category="Doubts"/>
    <DropDownProfile Item1="Log out" Item2="Log In" Item3="Create Account" category="Login Related "/>
 
    </div>
    
  )
}

export default ProfileLayout
