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
    setGoal: () => {},
    logged: () => {},
    updateChatClient: () => {},
    updateChatServer: () => {},
})

class GoalProvider extends React.Component {
    state = {
        goal: nullGoal,
        chats:[],
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
    logged = () => {
        // we're updating last_logged so first goal conversation doesn't occur again
        const { goal } = this.state
        goal.last_logged = true

        this.setState({ goal })
    }

    updateChatClient = (msg) => {
        const { chats } = this.state

        chats.push(msg)
        this.setState({ chats })
    }

    updateChatServer = (msg) => {
        const { chats } = this.state

        chats.push(msg)
        this.setState({ chats })
    }

    render() {
        const value = {
            goal: this.state.goal,
            chats: [],
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setGoal: this.setGoal,
            logged: this.logged,
            updateChatClient: this.updateChatClient,
            updateChatServer: this.updateChatServer,
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