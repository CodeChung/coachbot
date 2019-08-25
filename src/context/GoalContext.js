import React from 'react'
import ChatService from '../services/chat-service'

const nullGoal = {
    id: null,
    title: '',
    motivations: [],
    duration: null,
    user_id: null,
}

const nullGoals = {
    goal_0: nullGoal
}

const nullChats = {
}

const GoalContext = React.createContext({
    goals: nullGoals,
    chats: nullChats,
    error: null,
    setError: () => {},
    clearError: () => {},
    deleteGoal: () => {},
    setGoal: () => {},
    updateChatClient: () => {},
    updateChatServer: () => {},
})

class GoalProvider extends React.Component {
    state = {
        goals: nullGoals,
        chats: nullChats,
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
        const id = goal.id
        const { goals } = this.state
        goals[`goal_${id}`] = goal
        this.setState({ goals })
    }

    setupChat = (goalId) => {

    }

    updateChatClient = (msg, goalId) => {
        const { chats } = this.state

        const message = {
            msg,
            user: 2
        }
        chats[`chat_${goalId}`].push(message)
        this.setState({ chats })

        // After updating chat context, pass new msg from client to server
        ChatService.postMessage(goalId, msg)
            .then(res => {
                console.log('RES', res)
                this.updateChatServer(res.msg, goalId)
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    updateChatServer = (msg, goalId) => {
        const { chats } = this.state
        const message = {
            msg,
            user: 1
        }

        if (!chats[`chat_${goalId}`]) {
            chats[`chat_${goalId}`] = []
        }
        chats[`chat_${goalId}`].push(message)
        this.setState({ chats })
    }

    render() {
        const value = {
            goals: this.state.goals,
            chats: this.state.chats,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setGoal: this.setGoal,
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