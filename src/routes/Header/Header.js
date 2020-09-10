import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends React.Component {

  renderLogOutText = () => {
    return (
      <div className='Header__user_controls' onClick={TokenService.clearAuthToken}>
        <Link to='/home' className='Header__controls_text'>Log Out</Link>
        <FontAwesomeIcon icon={faUserCircle} className='Header__user_icon' />
      </div>
      
    )
  }

  renderSignInText = () => {
    return (
      <div className='Header__user_controls'>
        <Link className='Header__controls_text' to='/login'>Sign In</Link>
        <FontAwesomeIcon icon={faUserCircle} className='Header__user_icon' />
      </div>
    )
  }
  render() {
    return (
      <div className='Header'>
        <h1><Link className='Header__link' to='/home'>DiscCaddy</Link></h1>
          {TokenService.hasAuthToken()
            ? this.renderLogOutText()
            : this.renderSignInText()
          }
      </div>
    )
  }
}