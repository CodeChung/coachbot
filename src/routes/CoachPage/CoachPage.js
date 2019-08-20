import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Reports from '../../components/Reports/Reports';
import Stats from '../../components/Stats/Stats';
import Settings from '../../components/Settings/Settings';
import Chat from '../../components/Chat/Chat';
import './CoachPage.css'

class CoachPage extends React.Component {
    componentDidMount() {
        // TODO: hook to api with goal id
        const goalId = this.props.match.params
        console.log(goalId)
    }

    render() {
        const path = this.props.match.path.replace(':goalId', this.props.match.params.goalId)
        
        return (
            <section className='coach-page'>
                <nav className='coach-nav'>
                    <Link to='/'
                        onClick={this.props.showNav}>{'<-'}</Link>
                    <Link to={`${path}/`}>Chat</Link>
                    {/* <Link to={`${path}/reports`}>Reports</Link> */}
                    <Link to={`${path}/stats`}>Stats</Link>
                    <Link to={`${path}/settings`}>Settings</Link>
                </nav>
                <div className='coach-view'>
                    <Switch>
                        {/* <Route path={`${path}/reports`} component={Reports}/> */}
                        <Route path={`${path}/stats`}  component={Stats}/>
                        <Route path={`${path}/settings`} component={Settings}/>
                        <Route component={Chat}/>
                    </Switch>
                </div>
            </section>
        )
    }
}

export default CoachPage

