import React from 'react'
import DropDown from './../ComponentsCSS/homepage.css'
import props from 'react'
import { Link } from 'react-router-dom'
const DropDownProfile = (props) => {
  return (
    <div>
<div class="dropdown">
  <button class="btn btn-secondary  DropDownCss dropdownmenu" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {props.category}{ props.category2}
  </button>
  <ul class="dropdown-menu dropdownmenu2 ">
    <li><Link class="dropdown-item" to="/">{props.Item1}</Link></li>
    <li><Link class="dropdown-item" to="/">{props.Item2}</Link></li>
    <li><Link class="dropdown-item" to="/">{props.Item3}</Link></li>
  </ul>
</div>
    </div>
  )
}

export default DropDownProfile
