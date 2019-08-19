import React from 'react';
import User from './views/User/User';
import NonUser from './views/NonUser/NonUser';
import './App.css';

class App extends React.Component {
  state = {
    user: false
  }
  login() {
    this.setState({ user: true })
  }
  logout() {
    this.setState({ user: false })
  }
  render() {
    const currentView = this.state.user ? <User logout={() => this.logout()}/> : <NonUser login={() => this.login()}/>
    return (
      <div className="App">
        {currentView}
      </div>
    );
  }
}

export default App;
