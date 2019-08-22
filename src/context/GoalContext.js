import React from 'react'

const nullGoal = {
    id: null,
    title: '',
    last_logged: null,
    motivations: [],
    duration: null,
    user_id: null,
}

const GoalContext = React.createContext({
    goal: nullGoal,
    setError: () => {},
    clearError: () => {},
    deleteGoal: () => {},
    setGoal: () => {}
})

class GoalProvider extends React.Component {
    state = {
        goal: nullGoal,
        error: null,
    }
    // arrow functions for binding, oh yeah
    setError = (error) => {
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setGoal = (goal) => {
        this.setState({ goal })
    }

    render() {
        const value = {
            goal: this.state.goal,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setGoal: this.setGoal,
        }
        return (
            <GoalContext.Provider value={value}>
                {this.props.children}
            </GoalContext.Provider>
        )
    }
}

export {
    nullGoal,
    GoalContext,
    GoalProvider
}