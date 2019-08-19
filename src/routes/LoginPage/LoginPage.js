import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }
  state = {
    login: false
  }
  handleLoginSuccess = (event) => {
    event.preventDefault()
    // const { location, history } = this.props
    // const destination = (location.state || {}).from || '/'

    // history.push(destination)
    this.props.login()
    this.setState({login: true})
  }

  render() {
    return this.state.login ?
      <Redirect to='/'/>
      :
      <section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
  }
}
