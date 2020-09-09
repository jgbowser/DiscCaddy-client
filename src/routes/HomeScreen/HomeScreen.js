import React from 'react'
import { Link } from 'react-router-dom'
import './HomeScreen.css'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <section className='HomeScreen'>
        <div className='HomeScreen__scorecards'>
          <Link className='HomeScreen__link' to='/scorecards'>Scorecards</Link>
        </div>
        <div className='HomeScreen__my_bag'>
          <Link className='HomeScreen__link' to='/my-bag'>My Bag</Link>
        </div>
      </section>
    )
  }
}