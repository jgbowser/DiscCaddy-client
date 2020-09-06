import React from 'react'
import DiscCaddyContext from '../../context/DiscCaddyContext'
import DiscApiService from '../../services/disc-api-service'
import './BagPage.css'


export default class BagPage extends React.Component {
  
  static contextType = DiscCaddyContext

  componentDidMount() {
    this.context.clearError()
    DiscApiService.getUserBag()
      .then(res => this.context.setUserBag(res))
    // DiscApiService.getAllDiscs()
    //   .then(res => this.context.setDiscs(res))
    //   .catch(this.context.setError)
    //   .then(console.log(this.context.discs))
  }

  

  makeDiscOptions = discs => {
    return discs.map(disc => 
    <option value={disc.id} key={disc.id}>{disc.brand} {disc.name}</option>
    )
  }

  render() {
    const { discs = [], userBag = [] } = this.context
    const discOptions = this.makeDiscOptions(discs)
    return (
      <section className='BagPage'>
        <h2>My Bag</h2>
        <form className='BagPage__add_disc_form'>
          <label htmlFor='BagPage__disc_select'>Add a disc to your bag</label>
          <select id='BagPage__disc_select'>
            <option disabled>Select a disc</option>
            {discOptions}
          </select>
        </form>

      </section>
    )
  }
}