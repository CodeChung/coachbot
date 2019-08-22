import React, { Component } from 'react'
import './GoalPage.css'
import GoalListItem from '../../components/GoalListItem/GoalListItem'
import GoalForm from '../../components/GoalForm/GoalForm';
import ApiGoalsService from '../../services/goals-service';

class GoalPage extends Component {
    state = {
        // TODO: actually it'll make more sense if i only fetch metadata at this level and request individual goal info when clicked 
        goals: [],
        modalClass: 'modal',
        error: false
    }
    componentDidMount() {
        ApiGoalsService.getGoals()
            .then(res => {
                if (res.error) {
                    this.setState({ error: res.error })
                } else {
                    const goals = res.map(goal => {
                        // format meta schedule
                        const days = {
                            'Mon': 1,
                            'Tue': 2,
                            'Wed': 3,
                            'Thu': 4,
                            'Fri': 5,
                            'Sat': 6,
                            'Sun': 7
                        }
                        const schedule = Object.keys(goal.schedule)
                            .filter(day => goal.schedule[day])
                            .sort((a, b) => days[a] - days[b])
                            .join('/')
                        goal.schedule = schedule
                        
                        return goal
                    })
                    
                    this.setState({goals})
                }
            })
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
        ApiGoalsService.postGoal(goal)
            .then(res => console.log(res))
        this.displayGoalForm()
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