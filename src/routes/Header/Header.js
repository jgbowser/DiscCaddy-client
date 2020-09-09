import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className='Header'>
        <h1><Link className='Header__link' to='/home'>DiscCaddy</Link></h1>
        {/* will probably have to wrap this in a div for onClick */}
        <FontAwesomeIcon icon={faUserCircle} className='Header__user_icon' />
      </div>
    )
  }
}