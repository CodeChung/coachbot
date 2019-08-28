import config from '../config';
import TokenService from './token-service';

const LogsService = {
    getWeeklyRatings(goalId) {
        return fetch(`${config.API_ENDPOINT}/logs/weekly/${goalId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default LogsService