import React, { Component } from 'react'

class GoalPage extends Component {
    state = {
        goals: [{

        }],
        error: false
    }
    componentDidMount() {
    // TODO: fetch goal items here and 
    }

    renderGoals() {
        const { goals } = this.state
        return goals.map(goal =>
            <div
                key={goal.id}
                goal={goal}
            />
        )
    }

    render() {
    const { error } = this.state
    return (
        <section list className='goal-list'>
            {error
                ? <p className='red'>There was an error, try again</p>
                : this.renderArticles()}
        </section>
    )
    }
}

export default GoalPage;