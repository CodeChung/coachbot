import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Reports from '../../components/Reports/Reports';
import Stats from '../../components/Stats/Stats';
import Settings from '../../components/Settings/Settings';
import Chat from '../../components/Chat/Chat';

class CoachPage extends React.Component {
    componentDidMount() {
        // TODO: hook to api with goal id
        const goalId = this.props.match.params
        console.log(goalId)
    }

    render() {
        return (
            <section className='coach-page'>
                <Switch>
                    <Route path='/reports' component={Reports}/>
                    <Route path='/stats' component={Stats}/>
                    <Route path='/settings' component={Settings}/>
                    <Route component={Chat}/>
                </Switch>
                <nav className='coach-nav'>
                    <Link to='/coach'>Coach</Link>
                    <Link to='/reports'>Reports</Link>
                    <Link to='/stats'>Stats</Link>
                    <Link to='/settings'>Settings</Link>
                </nav>
            </section>
        )
    }
}

export default CoachPage

