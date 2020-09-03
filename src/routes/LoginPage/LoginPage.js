import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import './LoginPage.css'

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
    }
  }

  handleLoginSuccess = () => {
    this.props.history.push('/home')
  }
  
  handleDemoSubmit = () => {
    AuthApiService.postDemoLogin()
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        this.handleLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    return(
      <section className='LoginPage'>
        <h3>Login to DiscCaddy</h3>
        <LoginForm 
          onLoginSuccess={this.handleLoginSuccess}
        />
        <h3>Don't have an account?</h3>
        <Link className='LoginPage__register_link' to='/register'>
          Sign up for DiscCaddy
        </Link>
        <p>Explore the app as a demo user</p>
        <button onClick={this.handleDemoSubmit}>Try it out</button>
      </section>
      )
  }
}