import React from 'react';
import LineChart from '../LineChart/LineChart';
import { GoalContext } from '../../context/GoalContext';
import './Stats.css';
import LogsService from '../../services/logs-service';
import Spinner from '../Spinner/Spinner';


class Stat extends React.Component {
    state = {
        type: 'weekly',
        error: '',
        data: [],
        loaded: false
    }
    componentDidMount() {
        const { type } = this.state
        this.changeGraphType(type)

        this.setState({ loaded: true })
    }
    changeGraphType(type) {
        const { goalId } = this.props
        console.log(type)
        if (type === 'weekly') {
            LogsService.getWeeklyRatings(goalId)
                .then(res => {
                    this.setState({ data: res.data })
                })
                .catch(res => {
                    this.setState({ error: res.error })
                })
        } else if (type === 'daily') {
            LogsService.getDailyRatings(goalId)
                .then(res => {
                    this.setState({ data: res.data })
                })
                .catch(res => {
                    this.setState({ error: res.error })
                })
        }

    }
    render() {
        const { data } = this.state
        if (!this.state.loaded) {
            return <Spinner />
        } else {
            return (
                <div className='stats-page'>
                    <h2>Stats</h2>
                    <select onChange={(e) => this.changeGraphType(e.target.value)}>
                        <option value='weekly'>Weekly</option>
                        <option value='daily'>Daily</option>
                    </select>
                    {this.state.error || <LineChart ratings={data}/>}
                    <p>Longest Streak: 20 days</p>
                    <p>Total hours: 300 hrs</p>
                    <p>33 hrs to goal completion</p>
                </div>
            )
        }
    }
}

Stat.contextType = GoalContext

export default Stat