import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Reports from '../../components/Reports/Reports';
import Stats from '../../components/Stats/Stats';
import Settings from '../../components/Settings/Settings';
import Chat from '../../components/Chat/Chat';
import './CoachPage.css'
import { GoalContext } from '../../context/GoalContext';
import ApiGoalsService from '../../services/goals-service';

class CoachPage extends React.Component {
    state = {

    }
    componentDidMount() {
        const { goalId }= this.props.match.params
        ApiGoalsService.getGoalById(goalId)
            .then(res => {
                console.log(res)
                this.context.setGoal(res[0])
            })
            .catch(res => this.context.setError({ error: res.error }))
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

CoachPage.contextType = GoalContext

export default CoachPage

