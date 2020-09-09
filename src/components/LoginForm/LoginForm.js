import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import './LoginForm.css'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: null
    }
  }

  handleSubmitJwtAuth = event => {
    event.preventDefault()
    this.setState({ error: null })
    const { username, password } = this.state

    AuthApiService.postLogin({
      username,
      password
    })
    .then(res => {
      this.setState({username: '', password: ''})
      TokenService.saveAuthToken(res.authToken)
      this.props.onLoginSuccess()
    })
    .catch(res => {
      this.setState({ error: res.error })
    })
  }

  handleUserNameChange = event => {
    this.setState({ username: event.target.value })
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value })
  }

  render() {
    const { error } = this.state
    return (
      <form 
        className='LoginForm__form'
        onSubmit={this.handleSubmitJwtAuth}
      >

        <div role='alert'>
          {error && <p className='red'>{error.message}</p>}
        </div>

        <label htmlFor='LoginForm__username'>
          User name 
        </label>
        <input 
          type='text' 
          name='username' 
          id='LoginForm__username'
          value={this.state.username}
          onChange={this.handleUserNameChange} 
          required
        />

        <label htmlFor='LoginForm__password'>
          Password 
        </label>
        <input 
          type='password' 
          name='password' 
          id='LoginForm__password'
          value={this.state.password}
          onChange={this.handlePasswordChange}
          required />

        <button type='submit' >Login</button>
      </form>
    )
  }
}