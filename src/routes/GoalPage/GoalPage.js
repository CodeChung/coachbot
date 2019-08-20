import React, { Component } from 'react'
import './GoalPage.css'
import GoalListItem from '../../components/GoalListItem/GoalListItem'
import GoalForm from '../../components/GoalForm/GoalForm';

class GoalPage extends Component {
    state = {
        // TODO: actually it'll make more sense if i only fetch metadata at this level and request individual goal info when clicked 
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
        },
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
                hideNav={this.props.hideNav}
                key={goal.id}
                goal={goal}
            />
        )
    }
    displayGoalForm() {
        const modalClass = 
            this.state.modalClass === 'modal modal-active' 
            ? 'modal' 
            : 'modal modal-active'

        this.setState({modalClass})
    }
    addGoal(goal) {
        // TODO: convert to goal POST to api (request body should return updated goals list)
        const goals = this.state.goals
        const newGoal = {
            id: goals.length + 1,
            last_logged: 'New Goal',
            schedule: goal.schedule,
            title: goal.title,
            subgoals: [],
            motivation: [],
        }

        goals.push(newGoal)
        this.setState({goals})
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
                    <GoalForm addGoal={(goal) => this.addGoal(goal)}/>
                </div>
            </div>
        </section>
    )
    }
}

export default GoalPage;