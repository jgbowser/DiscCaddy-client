import React from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import './RegistrationPage.css'

export default class RegistrationPage extends React.Component {
  constructor(props) {
    super(props)
  }

  handleRegistrationSuccess = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <section className='RegistrationPage'>
        <h3>Register for DiscCaddy</h3>
        <RegistrationForm 
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    )
  }
}