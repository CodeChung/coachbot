import React from 'react';
import LineChart from '../LineChart/LineChart';
import './Stats.css';


class Stat extends React.Component {
    state = {
        type: 'weekly'
    }
    componentDidMount() {

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

export default Stat