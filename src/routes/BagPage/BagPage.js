import React from 'react'
import DiscCaddyContext from '../../context/DiscCaddyContext'
import DiscApiService from '../../services/disc-api-service'
import './BagPage.css'


export default class BagPage extends React.Component {
  
  static contextType = DiscCaddyContext

  async componentDidMount() {
    this.context.clearError()
    try {
      const userBag = await DiscApiService.getUserBag()
      await this.context.setUserBag(userBag)
      const allDiscs = await DiscApiService.getAllDiscs()
      await this.context.setDiscs(allDiscs)
    } catch(error) {
        this.context.setError(error)
    }
    
  }

  makeDiscOptions = discs => {
    return discs.map(disc => 
    <option value={disc.id} key={disc.id}>{disc.brand} {disc.name}</option>
    )
  }

  makeUserDiscs = userDiscs => {
    return userDiscs.map(disc => <p>{disc.name}</p>)
  }

  render() {
    const { discs = [], userBag = [] } = this.context
    const discOptions = this.makeDiscOptions(discs)
    const userBagDiscs = this.makeUserDiscs(userBag)
    return (
      <section className='BagPage'>
        <h2>My Bag</h2>
        <form className='BagPage__add_disc_form'>
          <label htmlFor='BagPage__disc_select'>Add a disc to your bag</label>
          <select id='BagPage__disc_select'>
            <option selected disabled>Select a disc</option>
            {discOptions}
          </select>
        </form>
        {userBagDiscs}

      </section>
    )
  }
}