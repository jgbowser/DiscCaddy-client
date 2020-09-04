import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import './RegistrationForm.css'

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: '',
      repeat_password: ''
    }
  }

  handleSubmitNewUser = event => {
    event.preventDefault()
    this.setState({ error: null })

    const passwordsMatch = this.validateRepeatPassword()

    if(!passwordsMatch) {
      this.setState({ error: { message: 'Passwords don\'t match' }})
    } else {
      AuthApiService.postNewUser({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        repeat_password: this.state.repeat_password
      })
      .then(res =>{
        this.setState({
          first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        repeat_password: ''
        })
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
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

  validateRepeatPassword = () => {
    const { password, repeat_password } = this.state
    if(password !== repeat_password) {
      return false
    } else {
      return true
    }
  }

  render() {
    const { 
      error,
      first_name,
      last_name,
      email,
      username,
      password,
      repeat_password 
    } = this.state

    return (

      /* Consider refactoring the labels and inputs into components */
      <form 
        className='RegistrationForm__form'
        onSubmit={this.handleSubmitNewUser}
      >
       
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
         
        <button type='submit'>Create your account</button>
      </form>
    )
  }
}