import React from 'react';
import SettingsForm from '../SettingsForm/SettingsForm';

class Settings extends React.Component {
    state = {
        modalClass: 'modal',
    }
    displayDeleteForm() {
        const modalClass = 
            this.state.modalClass === 'modal modal-active' 
            ? 'modal' 
            : 'modal modal-active'

        this.setState({modalClass})
    }
    render() {
        return (
            <div>
                <h2>Settings</h2>
                <SettingsForm />
                <button></button>
                <div className={this.state.modalClass}>
                    <div className='modal-content'>
                        <span className="close" onClick={() => this.displayGoalForm()}>&times;</span>
                        <GoalForm addGoal={(goal) => this.addGoal(goal)}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings