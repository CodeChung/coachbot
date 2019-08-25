import config from '../config'
import TokenService from './token-service';

const ChatService = {
    getNewUserMessage(goalId, msg='new goal') {
        return fetch(`${config.API_ENDPOINT}/coach/${goalId}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                msg
            })
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    
}

export default ChatService