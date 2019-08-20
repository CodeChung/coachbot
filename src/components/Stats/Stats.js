import React from 'react';
import LineChart from '../LineChart/LineChart';
import './Stats.css';


class Stat extends React.Component {
    render() {
        return (
            <div className='stats-page'>
                <h2>Stats</h2>
                <LineChart/>
                <p>Longest Streak: 20 days</p>
                <p>Total hours: 300 hrs</p>
                <p>33 hrs to goal completion</p>
            </div>
        )
    }
}

export default Stat