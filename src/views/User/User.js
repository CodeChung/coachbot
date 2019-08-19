import React from 'react';
import { Redirect, Switch, Link, Route } from 'react-router-dom';
import GoalPage from '../../routes/GoalPage/GoalPage';
import CoachPage from '../../routes/CoachPage/CoachPage';
import MissingPage from '../../routes/MissingPage/MissingPage';

class User extends React.Component {
    render() {
        return (
            <section className='user'>
                <nav>
                    <Link to='/'>Coach</Link>
                    <Link to='/login' onClick={() => this.props.logout()}>Logout</Link>
                </nav>
                <main>
                    <Switch>
                        <Route exact path='/' component={GoalPage}/>
                        <Route path='/login' render={() => <Redirect to='/'/>}/>
                        <Route path='/goal/:goalId' component={CoachPage}/>
                        <Route component={MissingPage}/>
                    </Switch>
                </main>
            </section>
        )
    }
}

export default User;