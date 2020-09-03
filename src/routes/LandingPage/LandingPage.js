import React from 'react'
import { Link } from 'react-router-dom'

export default class LandingPage extends React.Component {

  //Create a conditional render to check for AuthToken and redirect to /home if found

  render() {
    return (
      <section className='LandingPage'>
        <h2>Welcome to DiscCaddy</h2>
        <p>DiscCaddy is your virtual companion on the course</p>
        <p>
          With DiscCaddy you can create scorecards, view scorecards from previous rounds,
          and add the discs you own to your DiscCaddy bag to get recommendations about which of your discs is best suited for your current shot.
        </p>
        <p>Sign in or Sign up to get started!</p>
        <Link className='LandingPage__link' to='/login'>Sign in/Sign up</Link>
      </section>
    )
  }

}