import React from 'react'
import footercss from '../../src/ComponentsCSS/Footer.css'

const Footer = () => {
  return (
   <div>
  <div classname="card text-center">
    <div classname="card-header">
      Featured
    </div>
    <div classname="card-body">
      <h5 classname="card-title">Special title treatment</h5>
      <p classname="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" classname="btn btn-primary">Go somewhere</a>
    </div>
    <div classname="card-footer text-body-secondary">
      2 days ago
    </div>
  </div>
</div>

  )
}

export default Footer
