import config from '../config'
import TokenService from './token-service';

const ChatService = {
    getNewUserMessage(goalId) {
        return fetch(`${config.API_ENDPOINT}/coach/new/${goalId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    }
}

export default ChatService