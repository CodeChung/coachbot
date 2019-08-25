import React from 'react';
import './Chat.css';
import { GoalContext } from '../../context/GoalContext';

class Chat extends React.Component {
    state = {
        msg: '',
        messages: []
    }
    changeMessage(msg) {
        this.setState({msg})
    }
    addMessage(event) {
        event.preventDefault()
        let { msg } = this.state
        const { goalId } = this.props
        
        this.context.updateChatClient(msg, goalId)

        msg = ''
        this.setState({
            msg,
        })
    }
    render() {
        const { goalId } = this.props
        const messages = this.context.chats[`chat_${goalId}`].map((message, index) => {
            if (message.user === 1) {
                return <div className='user-1 message' key={index}>{message.msg}</div>
            } else {
                return <div className='user-2 message' key={index}>{message.msg}</div>
            }
        })
        return (
            <div className='chat'>
                <div className='messages'>
                    {messages}
                </div>
                <form onSubmit={(e) => this.addMessage(e)}>
                    <input 
                        onChange={(e) => this.changeMessage(e.target.value)}
                        value={this.state.msg}/>
                    <button type='submit'>send</button>
                </form>
            </div>
        )
    }
}

Chat.contextType = GoalContext

export default Chat