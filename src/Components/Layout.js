import React from 'react'
import HeaderC from './Header'
import FooterC from './Footer'
import PropTypes from 'prop-types'
import Login from '../Components/Loginform'
const Layout = (props) => {
  return (
    <div>
     
      <main>
        (props.children)
        <Login/>
      </main>
      <FooterC />
    </div>
  )
}

export default Layout
