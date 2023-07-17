import React from 'react'
import hompagecss from '../../src/ComponentsCSS/homepage.css'

function loginform() {
  return (
   <div id='divofloginform'>
  <form className='loginForm'>
    <div>

    <h3>Login</h3>
    <input type='text' placeholder='UserName or Email'></input>
    <input type='text' placeholder=' Password '></input>
    <button id='resetbutton'>Reset</button>
    <button id='signinbutton'>Signin</button>
    <a href="#"> Create an account </a>
    </div>

  </form>
</div>

  )
}

export default loginform
