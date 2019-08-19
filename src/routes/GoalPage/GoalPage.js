import React, { Component } from 'react'
import './GoalPage.css'
import GoalListItem from '../../components/GoalListItem/GoalListItem'

class GoalPage extends Component {
    state = {
        goals: [{
            id: 1,
            last_logged: new Date().toDateString(),
            title: 'Karate',
            schedule: 'M/W/F',
            subgoals: [],
            motivation: [],
        },
        {
            id: 2,
            last_logged: new Date().toDateString(),
            title: 'Save Money',
            schedule: 'M/Tu/W/Th/F',
            subgoals: [],
            motivation: [],
        },
        {
            id: 3,
            last_logged: new Date().toDateString(),
            title: 'Learn Chess',
            schedule: 'Sa/Su',
            subgoals: [],
            motivation: [],
        }
        ],
        modalClass: 'modal',
        error: false
    }
    componentDidMount() {
    // TODO: fetch goal items here and setstate
    }

    renderGoals() {
        const { goals } = this.state
        return goals.map(goal =>
            <GoalListItem
                key={goal.id}
                goal={goal}
            />
        )
    }
    displayGoalForm() {
        const modalClass = this.state.modalClass === 'modal modal-active' ? 'modal' : 'modal modal-active'
        console.log('clickaroo')
        this.setState({modalClass})
    }
    render() {
    const { error } = this.state
    return (
        <section className='goal-list'>
            {error
                ? <p className='red'>There was an error, try again</p>
                : this.renderGoals()}
            <div 
                onClick={() => this.displayGoalForm()}
                className='goal-list-item add-goal'>
                + Add Goal
            </div>
            <div className={this.state.modalClass}>
                <div className='modal-content'>
                    <span className="close" onClick={() => this.displayGoalForm()}>&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
        </section>
    )
    }
}

export default GoalPage;