import React from 'react'
import NewDiscForm from '../../components/NewDiscForm/NewDiscForm'
import BagDiscAccordion from '../../components/BagDiscAccordion/BagDiscAccordion'
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

  handleSubmit = (event, value) => { 
    event.preventDefault()
    this.context.clearError()
    const valueAsNumber = Number(value)
    DiscApiService.postUserDisc(valueAsNumber)
      .then(this.context.setNewDisc)
      .catch(this.context.setError)
  }

  makeDiscOptions = discs => {
    return discs.map(disc => 
      <option value={disc.id} key={disc.id}>{disc.brand} {disc.name}</option>
    )
  }

  makeDiscAccordions = userDiscs => {
    return userDiscs.map((disc, i) => 
      <BagDiscAccordion {...disc} index={i} key={disc.id}/>
    )
  }

  render() {
    const { discs = [], userBag = [], error } = this.context
    const discOptions = this.makeDiscOptions(discs)
    const discAccordions = this.makeDiscAccordions(userBag)
    return (
      <section className='BagPage'>
        <h2>My Bag</h2>
        {error && <p className='red'>{error.message}</p>}
        <NewDiscForm 
          onSubmitNewDisc={this.handleSubmit}
        >
          {discOptions}
        </NewDiscForm>
        <div className='BagPage__accordion_group'>
          {userBag.length === 0 ? <p>Get started by adding some discs</p> : discAccordions}
        </div>
      </section>
    )
  }
}
