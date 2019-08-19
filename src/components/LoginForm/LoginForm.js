import React, { Component } from 'react'

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.props.onLoginSuccess}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <input
            required
            name='user_name'
            id='LoginForm__user_name'/>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <input
            required
            name='password'
            type='password'
            id='LoginForm__password'/>
        </div>
        <button type='submit'>
          Login
        </button>
      </form>
    )
  }
}

export default LoginForm;
