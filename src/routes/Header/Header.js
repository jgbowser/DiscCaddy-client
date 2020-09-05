import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {
  render() {
    return (
      <div className='Header'>
        <h1>DiscCaddy</h1>
        {/* will probably have to wrap this in a div for onClick */}
        <FontAwesomeIcon icon={faUserCircle} className='Header__user_icon' />
      </div>
    )
  }
}