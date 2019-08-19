import React, { Component } from 'react'

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='reg-name'>
          <label htmlFor='registration-name'>
            Name
          </label>
          <input
            name='name'
            type='text'
            required
            id='registration-name'>
          </input>
        </div>
        <div className='reg-username'>
          <label htmlFor='registration-username'>
            Username
          </label>
          <input
            name='username'
            type='text'
            required
            id='registration-username'>
          </input>
        </div>
        <div className='reg-password'>
          <label htmlFor='registration-password'>
            Password
          </label>
          <input
            name='password'
            type='password'
            required
            id='registration-password'>
          </input>
        </div>
        <button type='submit'>
          Register
        </button>
      </form>
    )
  }
}

export default RegistrationForm;