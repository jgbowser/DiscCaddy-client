import React from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import './RegistrationPage.css'

export default class RegistrationPage extends React.Component {

  handleRegistrationSuccess = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <section className='RegistrationPage'>
        <h2>Register for DiscCaddy</h2>
        <RegistrationForm 
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    )
  }
}