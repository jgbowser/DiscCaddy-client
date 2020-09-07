import React from 'react'
import NewDiscForm from '../../components/NewDiscForm/NewDiscForm'
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
    const valueAsNumber = Number(value)
    DiscApiService.postUserDisc(valueAsNumber)
      .then(this.context.setNewDisc)
      
    
  }

  makeDiscOptions = discs => {
    return discs.map(disc => 
      <option value={disc.id} key={disc.id}>{disc.brand} {disc.name}</option>
    )
  }

  render() {
    const { discs = [], userBag = [], error } = this.context
    const discOptions = this.makeDiscOptions(discs)
    return (
      <section className='BagPage'>
        <h2>My Bag</h2>
        {error && <p className='red'>{error.message}</p>}
        <NewDiscForm 
          onSubmitNewDisc={this.handleSubmit}
        >
          {discOptions}
        </NewDiscForm>

      </section>
    )
  }
}
