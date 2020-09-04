import React from 'react'
import './RegistrationForm.css'

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      repeatPasswordError: null,
      buttonDisabled: true,
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: '',
      repeat_password: ''
    }
  }

  handleFirstNameChange = event => {
    this.setState({ first_name: event.target.value })
  }

  handleLastNameChange = event => {
    this.setState({ last_name: event.target.value })
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value })
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value })
  }

  handleRepeatPasswordChange = event => {
    this.setState({ repeat_password: event.target.value })
  }

  render() {
    const { 
      error,
      repeatPasswordError,
      first_name,
      last_name,
      email,
      username,
      password,
      repeat_password 
    } = this.state

    return (

      /* Consider refactoring the labels and inputs into components */
      <form className='RegistrationForm__form'>
       
        <div role='alert'>
          {error && <p className='red'>{error.message}</p>}
        </div>

        <label htmlFor='RegistrationForm__first_name'>
          What's your first name?
        </label>
        <input 
          type='text' 
          name='first_name' 
          id='RegistrationForm__first_name'
          value={first_name}
          onChange={this.handleFirstNameChange}
          required 
        />

        <label htmlFor='RegistrationForm__last_name'>
          What's your last name?
        </label>
        <input 
          type='text' 
          name='last_name' 
          id='RegistrationForm__last_name'
          value={last_name}
          onChange={this.handleLastNameChange}
          required 
        />

        <label htmlFor='RegistrationForm__email'>
          What's your Email?
        </label>
        <input 
          type='email' 
          name='email' 
          id='RegistrationForm__email'
          value={email}
          onChange={this.handleEmailChange}
          required 
        />

        <label htmlFor='RegistrationForm__username'>
          Choose a user name
        </label>
        <input 
          type='text' 
          name='first_name' 
          id='RegistrationForm__username'
          value={username}
          onChange={this.handleUsernameChange}
          required 
        />

        <label htmlFor='RegistrationForm__password'>
          Create a password
        </label>
        <input 
          type='password' 
          name='password' 
          id='RegistrationForm__password'
          value={password}
          onChange={this.handlePasswordChange}
          required 
        />

        <label htmlFor='RegistrationForm__repeat_password'>
          Re-enter your password
        </label>
        <input 
          type='password' 
          name='repeat_password' 
          id='RegistrationForm__repeat_password'
          value={repeat_password}
          onChange={this.handleRepeatPasswordChange}
          required 
        />
        {repeatPasswordError && <p className='red'>{repeatPasswordError}</p>}
         
        <button type='submit'>Create your account</button>
      </form>
    )
  }
}