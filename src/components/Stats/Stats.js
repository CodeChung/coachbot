import React from 'react';
import LineChart from '../LineChart/LineChart';
import { GoalContext } from '../../context/GoalContext';
import './Stats.css';
import LogsService from '../../services/logs-service';


class Stat extends React.Component {
    state = {
        type: 'weekly',
        error: '',
        data: []
    }
    componentDidMount() {
        const { type } = this.state
        const { goalId } = this.props

        if (type === 'weekly') {
            LogsService.getWeeklyRatings(goalId)
                .then(res => {
                    if (res.error) {
                        this.setState({ error: res.error })
                    } else {
                        this.setState({ data: res.data })
                    }
                })
        }
    }
    changeGraphType(event) {
        const type = event.target.value
        this.setState({ type })
    }
    render() {
        return (
            <div className='stats-page'>
                <h2>Stats</h2>
                <select onChange={(e) => this.changeGraphType(e)}>
                    <option value='weekly'>Weekly</option>
                    <option value='monthly'>Monthly</option>
                </select>
                <LineChart/>
                <p>Longest Streak: 20 days</p>
                <p>Total hours: 300 hrs</p>
                <p>33 hrs to goal completion</p>
            </div>
        )
    }
}

Stat.contextType = GoalContext

export default Stat