import React from 'react';
import './Chat.css';

class Chat extends React.Component {
    // TODO: pass messages through user context so messages persist between component change
    state = {
        messages: [],
        msg: 'chat will be implemented here'
    }
    changeMessage(msg) {
        this.setState({msg})
    }
    addMessage(event) {
        event.preventDefault()
        let { messages, msg } = this.state

        messages.push(msg)
        msg = ''
        this.setState({
            msg,
            messages
        })
    }
    render() {
        const messages = this.state.messages.map(msg => <div>{msg}</div>)
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

export default Chat