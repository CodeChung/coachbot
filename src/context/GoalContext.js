import React from 'react'
import ChatService from '../services/chat-service'

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
    error: null,
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
        goal.hello = 'hello'

        this.setState({ goal })
    }

    updateChatClient = (msg) => {
        const { chats } = this.state
        const message = {
            msg,
            user: 2
        }
        chats.push(message)
        this.setState({ chats })

        // After updating chat context, pass new msg from client to server
        const { goal } = this.state
        ChatService.getNewUserMessage(goal.id, msg)
            .then(res => {
                this.updateChatServer(res.msg)
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    updateChatServer = (msg) => {
        const { chats } = this.state
        const message = {
            msg,
            user: 1
        }
        chats.push(message)
        this.setState({ chats })
    }

    render() {
        const value = {
            goal: this.state.goal,
            chats: this.state.chats,
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