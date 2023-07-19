import React from 'react'
import hompagecss from '../../src/ComponentsCSS/homepage.css'
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';
const Createaccount = () => {
  return (
    <>

    <Header  />
    <div className='mainMycoursecss' >
      <div id='divofloginform'  >
     <form className='loginForm loginFormheight'>
       <div>
   
       <h3>Create Account</h3>
       <label>Name :</label>
       <input type='text' placeholder='Name '></input>
       <label>Email :</label>
       <input type='email' placeholder='Email '></input>
       <label>Phone No. :</label>
       <input type='number' placeholder='Phone'></input>
       <label>Create Passeword :</label>
       <input type='password' placeholder=' Create Password '></input>
       <label>Confirm Password :</label>
       <input type='text' placeholder=' Confirm Password '></input>
       <button id='resetbutton'>Reset</button>
       <button id='signinbutton'>Signin</button>
       <Link to="/createaccount"> Create an account </Link>
       </div>
   
     </form>
   </div>
   </div>
   <Footer/>
    </>
  )
}

export default Createaccount
